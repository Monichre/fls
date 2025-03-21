'use client'

import {useRef, useEffect} from 'react'
import Image from 'next/image'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function SignatureDesignSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content
      gsap.from('.signature-content', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id='signature-design'
      className='relative bg-yellow-400 overflow-hidden'
    >
      <div className='container mx-auto px-4 md:px-6 py-20 md:py-32'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* Content */}
          <div ref={contentRef} className='md:w-1/2 z-10'>
            <h2 className='signature-content text-4xl md:text-6xl font-bold text-white mb-4'>
              Signature
              <br />
              Curved Base Design
            </h2>
            <p className='signature-content text-lg md:text-xl text-zinc-900/80 max-w-xl'>
              Experience the sleek and ergonomic design of our signature curved
              base lighters. Engineered for comfort and style, our unique design
              fits perfectly in your hand and stands out in any setting.
            </p>
          </div>

          {/* Image */}
          <div className='w-full md:w-1/2 relative h-[500px] md:h-[700px] flex items-center justify-center'>
            <Image
              src='/dual-lighters.png'
              alt='FLS Signature Lighter Design'
              fill
              className='object-contain object-center scale-125 md:scale-100'
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
