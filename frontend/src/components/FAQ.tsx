import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How does the blood group matching work?',
    answer:
      'Arteria uses a tree-based data structure that organizes donors by blood group hierarchy. When you search, we traverse this tree to find compatible donors based on the standard blood compatibility rules, then sort by geographic proximity using the Haversine formula.',
  },
  {
    question: 'How do I become a blood donor?',
    answer:
      'Register through our platform with your name, age, blood group, and location. Once registered, you become part of our active donor network. Our system will notify you when someone in your area needs your blood type.',
  },
  {
    question: 'What are the eligibility requirements?',
    answer:
      'Donors must be between 18-65 years old, in good health, and must have waited at least 90 days since their last donation. There is a lifetime limit of 5 donations tracked by our system.',
  },
  {
    question: 'Is Arteria free to use?',
    answer:
      'Yes, Arteria is completely free for both donors and those seeking blood. Our mission is to make blood donation accessible to everyone, regardless of their financial situation.',
  },
  {
    question: 'How is my data protected?',
    answer:
      'We take privacy seriously. Donor information is shared only when a match is found and both parties consent. We do not sell or share personal data with third parties.',
  },
]

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        'border-b-2 border-swiss-black last:border-b-0 transition-colors duration-200',
        isOpen ? 'bg-swiss-accent text-swiss-white' : 'bg-swiss-white text-swiss-black'
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 lg:p-10 text-left gap-6"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-start gap-6">
          <span
            className={cn(
              'text-xs font-black uppercase tracking-widest mt-1 transition-colors duration-200',
              isOpen ? 'text-swiss-white/50' : 'text-swiss-accent'
            )}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 id={`faq-question-${index}`} className="text-xl lg:text-2xl font-black uppercase tracking-tight">
            {faq.question}
          </h3>
        </div>
        <div
          className={cn(
            'flex-shrink-0 transition-transform duration-200',
            isOpen && 'rotate-90'
          )}
        >
          <Plus
            size={24}
            strokeWidth={3}
            className={cn(
              'transition-colors duration-200',
              isOpen ? 'text-swiss-white' : 'text-swiss-black'
            )}
          />
        </div>
      </button>
      {isOpen && (
        <div
          id={`faq-answer-${index}`}
          role="region"
          aria-labelledby={`faq-question-${index}`}
          className="px-8 lg:px-10 pb-8 lg:pb-10 pl-16 lg:pl-24"
        >
          <p
            className={cn(
              'text-sm leading-relaxed max-w-2xl',
              isOpen ? 'opacity-90' : 'opacity-70'
            )}
          >
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="border-b-2 border-swiss-black relative">
      <div className="swiss-noise absolute inset-0" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="border-b-2 border-swiss-black px-6 lg:px-12 py-8">
          <div className="flex items-center gap-3">
            <span className="text-swiss-accent font-black text-sm uppercase tracking-widest">
              05.
            </span>
            <div className="w-12 h-0.5 bg-swiss-accent" />
            <span className="text-xs uppercase tracking-widest font-medium">
              Questions
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter mt-6">
            Frequently
            <br />
            <span className="text-swiss-accent">Asked</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
