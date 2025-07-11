import mysql.connector
from mysql.connector import Error
from datetime import datetime, timedelta
import math

# MySQL connection details
DB_CONFIG = {
    'host': 'localhost',
    # 'user': 'your username',
    # 'password': 'Your password to SQL',
    # 'database': 'your database name'
}

# Blood group tree node
class BloodGroupNode:
    def __init__(self, group):
        self.group = group
        self.children = {}
        self.donors = []

    def add_child(self, group):
        if group not in self.children:
            self.children[group] = BloodGroupNode(group)
        return self.children[group]

    def add_donor(self, donor):
        self.donors.append(donor)

# Build the blood group tree
def build_blood_group_tree(donors):
    root = BloodGroupNode('root')
    # Structure: root -> O / (A, B, AB) -> +/-
    for donor in donors:
        bg = donor['blood_group']
        if bg.startswith('O'):
            o_node = root.add_child('O')
            sign_node = o_node.add_child(bg)
            sign_node.add_donor(donor)
        elif bg.startswith('A') and bg != 'AB+':
            a_node = root.add_child('A')
            sign_node = a_node.add_child(bg)
            sign_node.add_donor(donor)
        elif bg.startswith('B') and bg != 'AB+':
            b_node = root.add_child('B')
            sign_node = b_node.add_child(bg)
            sign_node.add_donor(donor)
        elif bg.startswith('AB'):
            ab_node = root.add_child('AB')
            sign_node = ab_node.add_child(bg)
            sign_node.add_donor(donor)
    return root

# Haversine formula to calculate distance between two lat/lon points
def haversine(lat1, lon1, lat2, lon2):
    R = 6371  # Earth radius in km
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)
    a = math.sin(dphi/2)**2 + math.cos(phi1)*math.cos(phi2)*math.sin(dlambda/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c

# Connect to MySQL
def get_connection():
    return mysql.connector.connect(**DB_CONFIG)

# Register a new donor
def register_donor():
    print("\n--- Register Donor ---")
    name = input("Name: ")
    age = int(input("Age: "))
    gender = input("Gender (M/F/O): ")
    location = input("City: ")
    state = input("State: ")
    blood_group = input("Blood Group (O+/O-/A+/A-/B+/B-/AB+/AB-): ")
    latitude = float(input("Latitude: "))
    longitude = float(input("Longitude: "))

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO donors (name, age, gender, location, state, blood_group, total_donations, last_donation, is_active, latitude, longitude)
            VALUES (%s, %s, %s, %s, %s, %s, 0, NULL, 1, %s, %s)
        """, (name, age, gender, location, state, blood_group, latitude, longitude))
        conn.commit()
        print("Donor registered successfully!")
    except Error as e:
        print("Error:", e)
    finally:
        if conn.is_connected():
            conn.close()

# Record a donation
def record_donation():
    print("\n--- Record Donation ---")
    donor_id = int(input("Donor ID: "))
    donation_date = input("Donation Date (YYYY-MM-DD): ")
    location = input("Donation Location: ")

    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM donors WHERE donor_id=%s", (donor_id,))
        donor = cursor.fetchone()
        if not donor:
            print("Donor not found.")
            return

        # Check eligibility
        if donor['total_donations'] >= 5:
            print("Donor has already donated 5 times (lifetime limit).")
            return
        if donor['last_donation']:
            last = donor['last_donation']
            last_date = last if isinstance(last, datetime) else datetime.strptime(str(last), '%Y-%m-%d')
            if (datetime.strptime(donation_date, '%Y-%m-%d') - last_date).days < 90:
                print("Donor is not eligible yet (must wait 3 months between donations).")
                return

        # Insert donation
        cursor.execute("INSERT INTO donations (donor_id, donation_date, location) VALUES (%s, %s, %s)", (donor_id, donation_date, location))
        # Update donor
        total = donor['total_donations'] + 1
        is_active = 0 if total >= 5 else 0  # Set inactive after donation (reactivate after 3 months)
        cursor.execute("UPDATE donors SET total_donations=%s, last_donation=%s, is_active=%s WHERE donor_id=%s",
                       (total, donation_date, is_active, donor_id))
        # Add to history
        cursor.execute("INSERT INTO donor_history (donor_id, name, status, record_date) VALUES (%s, %s, %s, %s)",
                       (donor_id, donor['name'], 'inactive' if is_active == 0 else 'active', donation_date))
        conn.commit()
        print("Donation recorded and donor status updated.")
    except Error as e:
        print("Error:", e)
    finally:
        if conn.is_connected():
            conn.close()

# Reactivate eligible donors
def reactivate_donors():
    print("\n--- Reactivating Eligible Donors ---")
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM donors WHERE is_active=0 AND total_donations < 5")
        donors = cursor.fetchall()
        today = datetime.today()
        count = 0
        for donor in donors:
            if donor['last_donation']:
                last = donor['last_donation']
                last_date = last if isinstance(last, datetime) else datetime.strptime(str(last), '%Y-%m-%d')
                if (today - last_date).days >= 90:
                    cursor.execute("UPDATE donors SET is_active=1 WHERE donor_id=%s", (donor['donor_id'],))
                    cursor.execute("INSERT INTO donor_history (donor_id, name, status, record_date) VALUES (%s, %s, %s, %s)",
                                   (donor['donor_id'], donor['name'], 'active', today.strftime('%Y-%m-%d')))
                    count += 1
        conn.commit()
        print(f"{count} donors reactivated.")
    except Error as e:
        print("Error:", e)
    finally:
        if conn.is_connected():
            conn.close()

# Fetch all active donors
def fetch_active_donors():
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM donors WHERE is_active=1")
        donors = cursor.fetchall()
        return donors
    except Error as e:
        print("Error:", e)
        return []
    finally:
        if conn.is_connected():
            conn.close()

# Search donors by blood group and location
def search_donors():
    print("\n--- Search Donors ---")
    user_location = input("Your city: ")
    user_state = input("Your state: ")
    user_lat = float(input("Your latitude: "))
    user_lon = float(input("Your longitude: "))
    blood_group = input("Required blood group (O+/O-/A+/A-/B+/B-/AB+/AB-): ")

    # Fetch all active donors
    donors = fetch_active_donors()
    # Build blood group tree
    tree = build_blood_group_tree(donors)

    # Traverse tree to get matching donors
    matching_donors = []
    def traverse(node):
        if node.group == blood_group:
            matching_donors.extend(node.donors)
        for child in node.children.values():
            traverse(child)
    traverse(tree)

    # If no donors found, print message
    if not matching_donors:
        print("No donors with the required blood group.")
        return

    # Calculate distance for each donor
    for donor in matching_donors:
        donor['distance'] = haversine(user_lat, user_lon, donor['latitude'], donor['longitude'])

    # Sort by distance
    matching_donors.sort(key=lambda d: d['distance'])

    # Paginate results
    idx = 0
    page_size = 10
    while idx < len(matching_donors):
        print(f"\nShowing donors {idx+1} to {min(idx+page_size, len(matching_donors))} of {len(matching_donors)}:")
        for i in range(idx, min(idx+page_size, len(matching_donors))):
            d = matching_donors[i]
            print(f"ID: {d['donor_id']}, Name: {d['name']}, City: {d['location']}, State: {d['state']}, Blood Group: {d['blood_group']}, Distance: {d['distance']:.2f} km")
        next_action = input("Enter 'more' to see 50 more, donor ID to view details, or 'exit': ").strip()
        if next_action.lower() == 'more':
            page_size = 50
            idx += page_size
        elif next_action.isdigit():
            donor_id = int(next_action)
            show_donor_details(donor_id)
            break
        elif next_action.lower() == 'exit':
            break
        else:
            print("Invalid input.")
            break

# Show donor details by ID
def show_donor_details(donor_id):
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM donors WHERE donor_id=%s", (donor_id,))
        donor = cursor.fetchone()
        if not donor:
            print("Donor not found.")
            return
        print("\n--- Donor Details ---")
        for key, value in donor.items():
            print(f"{key}: {value}")
    except Error as e:
        print("Error:", e)
    finally:
        if conn.is_connected():
            conn.close()

# Main menu
def main():
    while True:
        print("\n--- Blood Donor Finder ---")
        print("1. Register donor")
        print("2. Record donation")
        print("3. Reactivate eligible donors")
        print("4. Search for donors")
        print("5. Show donor details by ID")
        print("6. Exit")
        choice = input("Choose an option: ").strip()
        if choice == '1':
            register_donor()
        elif choice == '2':
            record_donation()
        elif choice == '3':
            reactivate_donors()
        elif choice == '4':
            search_donors()
        elif choice == '5':
            donor_id = int(input("Enter donor ID: "))
            show_donor_details(donor_id)
        elif choice == '6':
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Try again.")

if __name__ == "__main__":
    main()
