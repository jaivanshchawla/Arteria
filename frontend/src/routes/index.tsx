import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Journal } from '@/components/Journal'
import { Footer } from '@/components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Journal />
      </main>
      <Footer />
    </>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
