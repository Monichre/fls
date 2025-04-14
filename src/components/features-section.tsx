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

// Feature points data
const features = [
  {
    id: 'high-capacity',
    title: 'High-Capacity Lighter',
    description: '1200 Ignitions',
    position: 'top-1/4 right-0 md:right-10',
    linePosition: '-translate-x-16',
  },
  {
    id: 'sculptured-body',
    title: 'Sculptured Body',
    description: '',
    position: 'top-1/2 left-0 md:left-10',
    linePosition: 'translate-x-16',
  },
  {
    id: 'curved-base',
    title: 'Distinctive Curved Base',
    description: '',
    position: 'bottom-1/4 right-0 md:right-10',
    linePosition: '-translate-x-16',
  },
]

interface FeaturesSectionProps {
  prefersReducedMotion?: boolean
  isMobile?: boolean
}

export function FeaturesSection({
  prefersReducedMotion = false,
  isMobile = false,
}: FeaturesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const image1Ref = useRef<HTMLDivElement>(null)
  const image2Ref = useRef<HTMLDivElement>(null)
  const featurePointsRef = useRef<HTMLDivElement>(null)

  // Apply parallax effect to the background images for depth
  useParallax(image1Ref, {
    prefersReducedMotion,
    isMobile,
    debug: false, // Set to false in production
    background: true, // Use background-position based animation
    scrub: 1,
  })

  // Apply parallax to the feature points with staggered animation
  useParallax(featurePointsRef, {
    prefersReducedMotion,
    isMobile,
    target: '.feature-point',
    stagger: true,
    yDistance: isMobile ? 20 : 40,
    opacity: true,
    rotation: true, // Add subtle rotation effect
    scrub: 0.8,
  })

  // Apply parallax to header content
  useParallax(contentRef, {
    prefersReducedMotion,
    isMobile,
    target: '.features-header',
    yDistance: isMobile ? -15 : -30,
    opacity: true,
    scale: true,
    scrub: 0.5,
  })

  return (
    <section
      id='features'
      ref={sectionRef}
      className='relative bg-zinc-900 py-16 md:py-32 overflow-hidden md:h-max-[800px] md:h-screen lg:h-max-[1280px] lg:h-auto flex flex-col items-center justify-center'
    >
      {/* Background image */}
      <div className='absolute inset-0'>
        {/* Crossfade background images */}
        <div ref={image1Ref} className='absolute inset-0 z-0 features-bg'>
          <Image
            src='/banner-white.avif'
            alt='FLS Lighter Features Background'
            fill
            className='object-cover'
            priority
            quality={100}
          />
        </div>
        <div ref={image2Ref} className='absolute inset-0 z-0 features-bg'>
          <Image
            src='/banner-black.avif'
            alt='FLS Lighter Features Background Alternate'
            fill
            className='object-cover'
            priority
            quality={100}
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className='container mx-auto p-4 md:px-6 relative z-10'
      >
        {/* Header content */}
        <div className='max-w-3xl mx-auto text-center mb-20 bg-black/50 p-4 rounded-xl pb-8'>
          <h2 className='features-header text-4xl md:text-6xl font-bold text-white mb-6'>
            Features
          </h2>
          <p className='features-header text-lg md:text-xl text-white'>
            Discover the outstanding features of the FLS Lighter, a perfect
            blend of innovation, design, and reliability. From its sleek and
            ergonomic design to its advanced fixed flame technology, each aspect
            of the FLS Lighter is crafted to exceed expectations.
          </p>
        </div>

        {/* Main feature showcase */}
        <div ref={featurePointsRef} className='relative h-[600px] md:h-[800px]'>
          {/* Feature points */}
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`feature-point absolute feature-card ${
                feature.position
              } transform ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}
            >
              <div className='relative'>
                <div
                  className={`absolute top-1/2 ${feature.linePosition} w-32 h-px bg-yellow-400/80 transform -translate-y-1/2`}
                />
                <div className='relative backdrop-blur-sm bg-black/30 p-2 rounded'>
                  <h3 className='text-white font-bold mb-1'>{feature.title}</h3>
                  {feature.description && (
                    <p className='text-yellow-400 text-sm'>
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
