```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <WaitlistForm />
      <Footer />
    </main>
  )
}
```
