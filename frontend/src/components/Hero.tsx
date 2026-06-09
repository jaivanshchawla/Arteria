import { ArrowRight, Heart } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen border-b-2 border-swiss-black pt-20 lg:pt-0 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 swiss-grid-pattern" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 swiss-noise" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          {/* Left: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:py-24">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-swiss-accent font-black text-sm uppercase tracking-widest">
                01.
              </span>
              <div className="w-12 h-0.5 bg-swiss-accent" />
              <span className="text-xs uppercase tracking-widest font-medium">
                Blood Donor Network
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
              Save
              <br />
              <span className="text-swiss-accent">Lives</span>
              <br />
              With
              <br />
              Blood
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl font-medium max-w-md leading-relaxed mb-10">
              Connect with verified blood donors near you. Our intelligent matching
              system finds the right blood group in your area — fast, reliable, and
              completely free.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="group inline-flex items-center justify-center gap-3 px-8 h-16 sm:py-5 bg-swiss-black text-swiss-white text-sm font-bold uppercase tracking-widest hover:bg-swiss-accent transition-colors duration-200"
              >
                <Heart size={18} strokeWidth={2.5} />
                Register as Donor
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#search"
                className="inline-flex items-center justify-center gap-3 px-8 h-16 sm:py-5 border-2 border-swiss-black text-swiss-black text-sm font-bold uppercase tracking-widest hover:bg-swiss-black hover:text-swiss-white transition-colors duration-200"
              >
                Search Donors
              </a>
            </div>
          </div>

          {/* Right: Geometric Composition */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            {/* Large Circle */}
            <div className="absolute w-[340px] h-[340px] border-4 border-swiss-black rounded-full" />

            {/* Red Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-swiss-accent rounded-full" />

            {/* Diagonal Lines Pattern Square */}
            <div className="absolute top-8 right-8 w-32 h-32 swiss-diagonal border-2 border-swiss-black" />

            {/* Dot Pattern Square */}
            <div className="absolute bottom-12 left-8 w-40 h-40 swiss-dots border-2 border-swiss-black" />

            {/* Cross */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-1 h-20 bg-swiss-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="h-1 w-20 bg-swiss-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Small accent square */}
            <div className="absolute bottom-20 right-16 w-6 h-6 bg-swiss-black" />
            <div className="absolute top-24 left-16 w-4 h-4 bg-swiss-black" />
          </div>
        </div>
      </div>
    </section>
  )
}
