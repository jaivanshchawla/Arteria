import { UserPlus, Search, Phone, Heart } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Register',
    subtitle: 'As a Donor',
    description:
      'Sign up with your blood group, location, and contact details. Our system registers you instantly.',
    icon: UserPlus,
    accent: false,
  },
  {
    number: '02',
    title: 'Search',
    subtitle: 'Find Donors',
    description:
      'Enter your blood group and location. Our tree-based algorithm finds compatible donors sorted by distance.',
    icon: Search,
    accent: false,
  },
  {
    number: '03',
    title: 'Connect',
    subtitle: 'Reach Out',
    description:
      'View donor profiles, contact details, and donation history. Reach out directly and coordinate.',
    icon: Phone,
    accent: false,
  },
  {
    number: '04',
    title: 'Save',
    subtitle: 'A Life',
    description:
      'Donate blood and save a life. Your donation is recorded, and your eligibility status is automatically updated.',
    icon: Heart,
    accent: true,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-swiss-black text-swiss-white border-b-2 border-swiss-black relative"
    >
      <div className="swiss-diagonal absolute inset-0 opacity-10" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="border-b-2 border-white/20 px-6 lg:px-12 py-8">
          <div className="flex items-center gap-3">
            <span className="text-swiss-accent font-black text-sm uppercase tracking-widest">
              03.
            </span>
            <div className="w-12 h-0.5 bg-swiss-accent" />
            <span className="text-xs uppercase tracking-widest font-medium opacity-70">
              Method
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mt-6">
            How It
            <br />
            <span className="text-swiss-accent">Works</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group border-b-2 lg:border-b-0 lg:border-r-2 border-white/20 last:border-r-0"
            >
              {/* Step Content */}
              <div className="p-8 lg:p-10">
                {/* Number */}
                <span className="text-swiss-accent text-6xl lg:text-8xl font-black tracking-tighter opacity-30">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="my-6 w-14 h-14 border-2 border-white/30 flex items-center justify-center group-hover:border-swiss-accent group-hover:bg-swiss-accent transition-all duration-200">
                  <step.icon
                    size={28}
                    strokeWidth={2}
                    className="group-hover:text-swiss-white transition-colors duration-200"
                  />
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">
                  {step.title}
                </h3>
                <span className="text-sm uppercase tracking-widest font-medium opacity-50">
                  {step.subtitle}
                </span>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed opacity-60 max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Connection Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-1 w-2 h-2 bg-swiss-accent -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
