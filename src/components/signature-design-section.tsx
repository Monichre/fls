'use client'

import {useRef} from 'react'
import Image from 'next/image'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useParallax} from '@/hooks/useParallax'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SignatureDesignSectionProps {
  prefersReducedMotion?: boolean
  isMobile?: boolean
}

export function SignatureDesignSection({
  prefersReducedMotion = false,
  isMobile = false,
}: SignatureDesignSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // Apply parallax effect to the image
  useParallax(imageRef, {
    prefersReducedMotion,
    isMobile,
    debug: false, // Set to false in production
    yDistance: isMobile ? 30 : 60,
    scale: true,
    scrub: 0.6,
  })

  // Apply parallax to content with a different effect
  useParallax(contentRef, {
    prefersReducedMotion,
    isMobile,
    target: '.signature-content',
    yDistance: isMobile ? -20 : -40, // Move in opposite direction
    opacity: true,
    stagger: true,
    scrub: 0.4,
  })

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
          <div
            ref={imageRef}
            className='w-full md:w-1/2 relative h-[500px] md:h-[700px] flex items-center justify-center'
          >
            <Image
              src='/dual-lighters.png'
              alt='FLS Signature Lighter Design'
              fill
              className='object-contain object-center scale-125 md:scale-100 signature-design-image'
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
