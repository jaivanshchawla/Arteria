import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Journal', href: '#journal' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b-2 border-swiss-black transition-colors duration-200',
        isScrolled ? 'bg-swiss-muted' : 'bg-swiss-white'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-swiss-accent" />
            <span className="text-xl lg:text-2xl font-black tracking-tighter uppercase">
              Arteria
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-sm font-medium uppercase tracking-widest text-swiss-black hover:text-swiss-black"
                data-text={link.label}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#register"
              className="px-6 py-3 bg-swiss-black text-swiss-white text-sm font-bold uppercase tracking-widest hover:bg-swiss-accent transition-colors duration-200"
            >
              Register Donor
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 border-2 border-swiss-black"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-swiss-black py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm font-bold uppercase tracking-widest border-b border-swiss-gray last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              className="block mt-4 px-6 py-4 bg-swiss-black text-swiss-white text-sm font-bold uppercase tracking-widest text-center hover:bg-swiss-accent transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Register Donor
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
