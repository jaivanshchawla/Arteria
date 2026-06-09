import { ArrowRight, Clock } from 'lucide-react'

const articles = [
  {
    date: 'Jun 2026',
    category: 'Research',
    title: 'The Science Behind Blood Compatibility',
    excerpt:
      'Understanding how blood groups interact — from the ABO system to Rh factors — and why the right match matters.',
    readTime: '5 min read',
  },
  {
    date: 'May 2026',
    category: 'Community',
    title: 'Donor Stories: Heroes Among Us',
    excerpt:
      'Meet the donors who have saved lives through Arteria. Their stories of courage and compassion inspire us all.',
    readTime: '8 min read',
  },
  {
    date: 'Apr 2026',
    category: 'Technology',
    title: 'Building the Blood Group Tree',
    excerpt:
      'A deep dive into the data structure that powers our matching algorithm — from tree traversal to distance calculation.',
    readTime: '12 min read',
  },
]

export function Journal() {
  return (
    <section id="journal" className="border-b-2 border-swiss-black relative">
      <div className="swiss-grid-pattern absolute inset-0" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="border-b-2 border-swiss-black px-6 lg:px-12 py-8">
          <div className="flex items-center gap-3">
            <span className="text-swiss-accent font-black text-sm uppercase tracking-widest">
              06.
            </span>
            <div className="w-12 h-0.5 bg-swiss-accent" />
            <span className="text-xs uppercase tracking-widest font-medium">
              Insights
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mt-6">
            The
            <br />
            <span className="text-swiss-accent">Journal</span>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={article.title}
              className="group relative border-b-2 lg:border-b-0 lg:border-r-2 border-swiss-black last:border-r-0"
            >
              {/* Image Placeholder with Pattern */}
              <div className="relative h-48 lg:h-64 bg-swiss-muted border-b-2 border-swiss-black overflow-hidden">
                <div className="absolute inset-0 swiss-dots" />
                {/* Geometric composition per card */}
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-swiss-black/20 rounded-full" />
                    <div className="absolute w-20 h-20 bg-swiss-accent/20" />
                    <div className="absolute w-8 h-8 bg-swiss-black/30 rotate-45" />
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-4 border-swiss-black/20 rotate-45" />
                    <div className="absolute w-16 h-16 bg-swiss-accent/20 rounded-full" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-swiss-black/10" />
                    <div className="absolute w-20 h-1 bg-swiss-accent/30 rotate-45" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-swiss-accent">
                    {article.category}
                  </span>
                  <span className="text-xs uppercase tracking-widest opacity-50">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-swiss-accent transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm leading-relaxed opacity-70 mb-6">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-50">
                    <Clock size={14} />
                    {article.readTime}
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-200">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
