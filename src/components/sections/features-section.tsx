'use client'

import {useRef, useEffect} from 'react'
import Image from 'next/image'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useParallax} from '@/hooks/useParallax'
import {Button} from '@/components/ui/button'
import {ShoppingCart} from 'lucide-react'
import {useScrollToSection} from '@/hooks/useScrollToSection'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Feature points data with enhanced benefit-driven descriptions
const features = [
  {
    id: 'high-capacity',
    title: 'High-Capacity Lighter',
    description: 'Up to 1200 Ignitions - never run out when you need it most',
    position: 'top-[40%] right-0 md:right-24 lg:right-32',
    linePosition: '-translate-x-20 md:-translate-x-24',
    mobileOrder: 1,
    targetPosition: 'top-[33%] right-[45%]', // Position the dot marker
  },
  {
    id: 'wind-resistant',
    title: 'Wind-Resistant Technology',
    description: 'Reliable flame even in challenging outdoor conditions',
    position: 'top-[20%] left-0 md:left-24 lg:left-32',
    linePosition: 'translate-x-20 md:translate-x-24',
    mobileOrder: 2,
    targetPosition: 'top-[15%] left-[45%]', // Position the dot marker
  },
  {
    id: 'sculptured-body',
    title: 'Sculptured Ergonomic Body',
    description: 'Comfortable to hold with secure grip that prevents slipping',
    position: 'top-[55%] right-0 md:right-16 lg:right-28',
    linePosition: '-translate-x-20 md:-translate-x-24',
    mobileOrder: 3,
    targetPosition: 'top-[50%] right-[48%]', // Position the dot marker
  },
  {
    id: 'curved-base',
    title: 'Distinctive Curved Base',
    description: 'Stands securely on any surface for convenient hands-free use',
    position: 'top-[75%] left-0 md:left-20 lg:left-28',
    linePosition: 'translate-x-20 md:translate-x-24',
    mobileOrder: 4,
    targetPosition: 'top-[78%] left-[48%]', // Position the dot marker
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
  const {scrollTo} = useScrollToSection()

  // Apply parallax effect to the background images for depth
  // useParallax(image1Ref as any, {
  //   prefersReducedMotion,
  //   isMobile,
  //   debug: false,
  //   background: true,
  //   scrub: 1,
  // })

  // Apply parallax to the feature points with staggered animation
  useParallax(featurePointsRef as any, {
    prefersReducedMotion,
    isMobile,
    target: '.feature-point',
    stagger: true,
    yDistance: isMobile ? 15 : 40,
    opacity: true,
    rotation: !isMobile, // Remove rotation on mobile for performance
    scrub: isMobile ? 0.5 : 0.8,
  })

  // Apply parallax to header content
  useParallax(contentRef as any, {
    prefersReducedMotion,
    isMobile,
    target: '.features-header',
    yDistance: isMobile ? -10 : -30,
    opacity: true,
    scale: !isMobile, // Disable scale on mobile for performance
    scrub: 0.5,
  })

  // Image crossfade effect
  // useEffect(() => {
  //   if (typeof window === 'undefined' || prefersReducedMotion) return

  //   const image1 = image1Ref.current
  //   const image2 = image2Ref.current

  //   if (!image1 || !image2) return

  //   // Setup initial state
  //   gsap.set(image2, {opacity: 0})

  //   // Create scroll-based crossfade animation
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: true,
  //     },
  //   })

  //   timeline
  //     .to(image1, {opacity: 0, duration: 1}, 0)
  //     .to(image2, {opacity: 1, duration: 1}, 0)

  //   return () => {
  //     // Clean up
  //     timeline.kill()
  //   }
  // }, [prefersReducedMotion])

  return (
    <section
      id='features'
      ref={sectionRef}
      className='relative bg-zinc-900 py-12 md:py-32 overflow-hidden min-h-[800px] md:h-screen lg:h-auto flex flex-col items-center justify-center'
    >
      {/* Background image */}
      <div className='absolute inset-0'>
        {/* Crossfade background images */}
        <div ref={image1Ref} className='absolute inset-0 z-0 features-bg'>
          <Image
            src='/banner-white.avif'
            alt='FLS Lighter Features - Premium Wind-Resistant Lighter Technology'
            fill
            className='object-cover object-center'
            priority
            quality={90}
            sizes='100vw'
          />
        </div>
        <div ref={image2Ref} className='absolute inset-0 z-0 features-bg'>
          <Image
            src='/banner-black.avif'
            alt='FLS Lighter Features - High-Capacity Long-Lasting Lighter'
            fill
            className='object-cover object-center'
            priority
            quality={90}
            sizes='100vw'
          />
        </div>

        {/* Center lighter image (visible on desktop) */}
        {/* <div className='absolute hidden md:block w-full h-full'>
          <div className='relative w-full h-full max-w-md mx-auto'>
            <Image
              src='/lighter-black-and-yellow.avif'
              alt='FLS Premium Lighter'
              fill
              className='object-cover object-center'
              priority
              quality={100}
              sizes='(min-width: 768px) 100vw, 0'
            />
          </div>
        </div> */}
      </div>

      <div
        ref={contentRef}
        className='container mx-auto px-4 md:px-6 relative z-10'
      >
        {/* Header content */}
        <div className='max-w-3xl mx-auto text-center mb-8 md:mb-16 bg-black/60 p-4 md:p-6 rounded-xl backdrop-blur-sm'>
          <h2 className='features-header text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6'>
            Exceptional Features for{' '}
            <span className='text-yellow-400'>Unmatched Performance</span>
          </h2>
          <p className='features-header text-base md:text-xl text-white mb-3 md:mb-4'>
            Discover the outstanding features of FLS Lighters, designed
            specifically to provide you with reliability and comfort in any
            situation. Each feature was engineered with your needs in mind.
          </p>
          <p className='features-header text-base md:text-xl text-white'>
            From wind-resistant technology that works in challenging conditions
            to the ergonomic design that fits perfectly in your hand, every
            aspect of an FLS Lighter delivers performance you can depend on.
          </p>
        </div>

        {/* Mobile feature list (stacked) */}
        <div className='md:hidden space-y-4 mb-8'>
          {features
            .slice()
            .sort((a, b) => a.mobileOrder - b.mobileOrder)
            .map((feature) => (
              <div
                key={`mobile-${feature.id}`}
                className='feature-point bg-black/60 p-4 rounded-lg backdrop-blur-sm border-l-4 border-yellow-400'
              >
                <h3 className='text-white font-bold mb-1 text-lg'>
                  {feature.title}
                </h3>
                <p className='text-yellow-400 text-sm'>{feature.description}</p>
              </div>
            ))}
        </div>

        {/* Desktop feature showcase with absolute positioning */}
        <div
          ref={featurePointsRef}
          className='relative hidden md:block h-[500px] md:h-[800px]'
        >
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
                  className={`absolute top-1/2 ${feature.linePosition} w-16 md:w-32 h-px bg-yellow-400/80 transform -translate-y-1/2`}
                />

                {/* Target dot position (visible on desktop) */}
                <div
                  className={`hidden md:block absolute ${feature.targetPosition} w-3 h-3 bg-yellow-400 rounded-full -z-10`}
                />

                <div className='relative backdrop-blur-sm bg-black/60 p-3 rounded'>
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

        {/* CTA Section */}
        <div className='text-center bg-black/60 p-4 md:p-6 rounded-xl max-w-xl mx-auto backdrop-blur-sm'>
          <p className='text-white mb-4 md:mb-6 text-base'>
            Experience the perfect blend of innovation and reliability with FLS
            lighters. Join thousands of satisfied customers who trust FLS for
            all their lighting needs.
          </p>
          <Button
            onClick={() => scrollTo('#lighter-collection')}
            size='lg'
            className='bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full px-6 md:px-8 w-full md:w-auto'
          >
            Shop FLS Lighters <ShoppingCart className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </section>
  )
}
