import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Card from '@/components/Card'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <section className='gallery'>
          <Card/>
        </section>
      </main>
    </>
  )
}
