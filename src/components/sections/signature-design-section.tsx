'use client'

import {useRef} from 'react'
import Image from 'next/image'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useParallax} from '@/hooks/useParallax'
import {Button} from '@/components/ui/button'
import {ArrowRight} from 'lucide-react'
import {useScrollToSection} from '@/hooks/useScrollToSection'

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
  const {scrollTo} = useScrollToSection()

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
  // useParallax(contentRef, {
  //   prefersReducedMotion,
  //   isMobile,
  //   target: '.signature-content',
  //   yDistance: isMobile ? -20 : -40, // Move in opposite direction
  //   opacity: true,
  //   stagger: true,
  //   scrub: 0.4,
  // })

  return (
    <section
      ref={sectionRef}
      id='signature-design'
      className='relative bg-yellow-400 overflow-hidden py-20 md:py-32'
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* Content */}
          <div ref={contentRef} className='md:w-1/2 z-10'>
            <h2 className='signature-content text-4xl md:text-6xl font-bold text-white mb-4'>
              Signature Curved Base
              <span className='text-zinc-900 block mt-2'>
                for Ultimate Comfort
              </span>
            </h2>
            <p className='signature-content text-lg md:text-xl text-zinc-900/80 max-w-xl mb-6'>
              Experience the sleek and ergonomic design of our signature curved
              base lighters. Engineered specifically for your comfort, our
              unique design fits perfectly in your hand and provides a secure
              grip that won't slip.
            </p>
            <p className='signature-content text-lg md:text-xl text-zinc-900/80 max-w-xl mb-8'>
              The curved base isn't just about looks - it's designed to improve
              functionality by maintaining stability on any surface and ensuring
              the perfect flame angle every time you use it.
            </p>
            <div className='flex flex-wrap signature-content'>
              <Button
                onClick={() => scrollTo('#lighter-collection')}
                size='lg'
                className='bg-white text-black hover:bg-black hover:text-white rounded-full px-8'
              >
                Shop Now <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className='w-full md:w-1/2 relative h-[500px] md:h-[700px] flex items-center justify-center'
          >
            <Image
              src='/dual-lighters.png'
              alt='FLS Signature Curved Base Lighter - Ergonomic Design for Comfort'
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
