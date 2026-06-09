import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Emergency Physician, AIIMS Delhi',
    text: "Arteria has transformed how we handle blood emergencies. The proximity-based matching means we find compatible donors in minutes, not hours. It's become an indispensable tool in our emergency department.",
  },
  {
    name: 'Rajesh Kumar',
    role: 'Regular Donor, Mumbai',
    text: "I've been using Arteria for two years now. The eligibility tracking keeps me informed about when I can donate next, and the distance sorting makes it easy to help people in my neighborhood.",
  },
  {
    name: 'Ananya Patel',
    role: 'Blood Bank Coordinator, Ahmedabad',
    text: 'The verification system ensures we only work with active, eligible donors. The blood group tree structure is brilliant — it handles complex compatibility matching with elegant simplicity.',
  },
  {
    name: 'Vikram Singh',
    role: 'Donor, Jaipur',
    text: "Registered once, and I've already been matched with three people in need. The system is incredibly fast, and I love that it tracks my donation history. Truly life-saving technology.",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="testimonials"
      className="border-b-2 border-swiss-black relative"
    >
      <div className="swiss-dots absolute inset-0" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="border-b-2 border-swiss-black px-6 lg:px-12 py-8">
          <div className="flex items-center gap-3">
            <span className="text-swiss-accent font-black text-sm uppercase tracking-widest">
              04.
            </span>
            <div className="w-12 h-0.5 bg-swiss-accent" />
            <span className="text-xs uppercase tracking-widest font-medium">
              Voices
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mt-6">
            What People
            <br />
            <span className="text-swiss-accent">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                'group relative p-8 lg:p-12 border-b-2 lg:border-r-2 border-swiss-black last:border-b-0 transition-all duration-200 cursor-default',
                'hover:border-swiss-accent',
                'hover:-translate-y-0.5',
                index === activeIndex
                  ? 'bg-swiss-muted'
                  : 'bg-swiss-white'
              )}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote
                  size={32}
                  strokeWidth={2}
                  className="text-swiss-accent"
                />
              </div>

              {/* Text */}
              <p className="text-lg leading-relaxed font-medium mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-swiss-black flex items-center justify-center text-swiss-white font-black text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wide text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs uppercase tracking-widest opacity-60">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Red accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-swiss-accent group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
