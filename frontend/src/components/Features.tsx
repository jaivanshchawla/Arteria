import { ArrowRight, MapPin, Shield, Zap, Users, Search, Activity } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const features = [
  {
    number: '01.',
    icon: Search,
    title: 'Smart Matching',
    description:
      'Our blood group tree algorithm instantly matches donors by blood type compatibility and geographic proximity using Haversine distance calculation.',
  },
  {
    number: '02.',
    icon: MapPin,
    title: 'Location-Based',
    description:
      'Find donors near you with precision. Our system calculates exact distances between you and active donors, sorted from nearest to farthest.',
  },
  {
    number: '03.',
    icon: Shield,
    title: 'Verified Donors',
    description:
      'Every donor is verified through our eligibility system. We track donation history, enforce 90-day intervals, and maintain lifetime donation limits.',
  },
  {
    number: '04.',
    icon: Zap,
    title: 'Instant Access',
    description:
      'No waiting. No middlemen. Connect directly with donors in your area. Our system provides real-time donor availability and contact information.',
  },
  {
    number: '05.',
    icon: Users,
    title: 'Community Driven',
    description:
      'Built by the community, for the community. Our donor network grows every day with people who believe in the power of giving.',
  },
  {
    number: '06.',
    title: 'Health Tracking',
    icon: Activity,
    description:
      'Track your donation history, eligibility status, and impact. Our system maintains comprehensive records for every donor in the network.',
  },
]

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[0]
}) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = feature.icon

  return (
    <div
      className={cn(
        'group relative border-2 border-swiss-black p-8 lg:p-10 transition-colors duration-200 cursor-default',
        isHovered ? 'bg-swiss-accent text-swiss-white' : 'bg-swiss-white text-swiss-black'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Number */}
      <span className="text-xs font-black uppercase tracking-widest opacity-50">
        {feature.number}
      </span>

      {/* Icon */}
      <div
        className={cn(
          'mt-6 mb-6 w-12 h-12 border-2 flex items-center justify-center transition-colors duration-200',
          isHovered
            ? 'border-swiss-white bg-swiss-white/10'
            : 'border-swiss-black bg-swiss-muted'
        )}
      >
        <Icon
          size={24}
          strokeWidth={2}
          className={cn(
            'transition-transform duration-200',
            isHovered && 'scale-110'
          )}
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-black uppercase tracking-tight mb-4">
        {feature.title}
      </h3>
      <p
        className={cn(
          'text-sm leading-relaxed mb-6',
          isHovered ? 'opacity-90' : 'opacity-70'
        )}
      >
        {feature.description}
      </p>

      {/* Arrow */}
      <div
        className={cn(
          'transition-all duration-200',
          isHovered ? 'translate-x-2' : '-rotate-45'
        )}
      >
        <ArrowRight
          size={20}
          strokeWidth={2.5}
          className={cn(
            isHovered ? 'text-swiss-white' : 'text-swiss-black'
          )}
        />
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="border-b-2 border-swiss-black relative">
      <div className="swiss-grid-pattern absolute inset-0" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="border-b-2 border-swiss-black px-6 lg:px-12 py-8">
          <div className="flex items-center gap-3">
            <span className="text-swiss-accent font-black text-sm uppercase tracking-widest">
              02.
            </span>
            <div className="w-12 h-0.5 bg-swiss-accent" />
            <span className="text-xs uppercase tracking-widest font-medium">
              Why Arteria
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mt-6">
            Built For
            <br />
            <span className="text-swiss-accent">Everyone</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
