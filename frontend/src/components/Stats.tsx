import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  { number: '10K+', label: 'Active Donors' },
  { number: '50K+', label: 'Lives Saved' },
  { number: '100+', label: 'Cities Covered' },
  { number: '99%', label: 'Match Accuracy' },
]

function AnimatedStat({
  target,
  label,
}: {
  target: string
  label: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        'relative p-6 lg:p-8 border-2 border-swiss-black transition-colors duration-200 cursor-default',
        isHovered ? 'bg-swiss-accent text-swiss-white' : 'bg-swiss-white text-swiss-black'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div>
          <div
            className={cn(
              'text-4xl lg:text-5xl font-black tracking-tighter transition-transform duration-200',
              isHovered && 'scale-105'
            )}
          >
            {target}
          </div>
          <div className="text-xs uppercase tracking-widest font-medium mt-2 opacity-70">
            {label}
          </div>
        </div>
        <div
          className={cn(
            'transition-transform duration-200',
            isHovered && 'rotate-90 text-swiss-accent'
          )}
        >
          <Plus size={20} strokeWidth={3} />
        </div>
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="bg-swiss-muted border-b-2 border-swiss-black relative">
      <div className="swiss-dots absolute inset-0" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} target={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
