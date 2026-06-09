import { Heart } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Register Donor', href: '#register' },
    { label: 'Search Donors', href: '#search' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blood Compatibility', href: '#' },
    { label: 'Donation Guidelines', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#journal' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-swiss-black text-swiss-white relative">
      <div className="swiss-noise absolute inset-0" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* CTA Banner */}
        <div className="border-b-2 border-white/20 px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
                Ready To Save
                <br />
                <span className="text-swiss-accent">A Life?</span>
              </h2>
              <p className="mt-4 text-lg opacity-60 max-w-md">
                Join thousands of donors making a difference. Register today and
                become part of India's largest blood donor network.
              </p>
            </div>
            <div className="lg:col-span-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-3 w-full px-8 py-6 bg-swiss-accent text-swiss-white text-sm font-bold uppercase tracking-widest hover:bg-swiss-white hover:text-swiss-black transition-colors duration-200"
              >
                <Heart size={18} strokeWidth={2.5} />
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="border-b-2 border-white/20 px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-black uppercase tracking-widest mb-6">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm opacity-60 hover:opacity-100 hover:text-swiss-accent transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-swiss-accent" />
              <span className="text-lg font-black uppercase tracking-tighter">
                Arteria
              </span>
            </div>

            {/* Copyright */}
            <p className="text-xs uppercase tracking-widest opacity-40">
              &copy; 2026 Arteria. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 border border-white/20 hover:border-swiss-accent hover:text-swiss-accent transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a
                href="#"
                className="p-2 border border-white/20 hover:border-swiss-accent hover:text-swiss-accent transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
