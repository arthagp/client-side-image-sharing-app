'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Modal from '@/components/Modal'
import { useState } from 'react'

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
