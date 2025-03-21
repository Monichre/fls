'use client'

import {ProductCollection} from './ProductCollection'
import {About} from './About'
import {WholeSale} from './WholeSale'

import {useRef, lazy, Suspense} from 'react'
import {useScroll, useTransform} from 'framer-motion'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Navbar} from '@/components/navbar'

import {Hero} from '@/components/hero'
import {useResponsive, cn} from '@/hooks'

import {useGSAP} from '@gsap/react'

// Implement lazy loading for heavy components
const DualSection = lazy(() =>
  import('@/components/dual-section/DualSection').then((mod) => ({
    default: mod.DualSection,
  }))
)

const SignatureDesignSection = lazy(() =>
  import('@/components/signature-design-section').then((mod) => ({
    default: mod.SignatureDesignSection,
  }))
)

const LighterCollection = lazy(() =>
  import('@/components/lighter-collection').then((mod) => ({
    default: mod.LighterCollection,
  }))
)

const FeaturesSection = lazy(() =>
  import('@/components/features-section').then((mod) => ({
    default: mod.FeaturesSection,
  }))
)

gsap.registerPlugin(useGSAP)

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const HomePage = () => {
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  // Use our responsive hook instead of mobile context
  const {
    isMobile,
    isTablet,
    isDesktop,
    isLandscape,
    breakpoint,
    prefersReducedMotion,
  } = useResponsive()

  // Parallax effect - adjust based on device capabilities
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Customize parallax effect based on device
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ['0%', prefersReducedMotion ? '10%' : '20%'] : ['0%', '50%']
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, isMobile ? 0.6 : 0.8],
    [1, 0]
  )

  // Optimize animation settings based on device
  useGSAP(
    () => {
      // Skip animations for users who prefer reduced motion
      if (prefersReducedMotion) return

      // Configure animations based on device type
      const duration = isMobile ? 0.7 : 1
      const staggerTime = isMobile ? 0.15 : 0.2

      // Animate hero text
      gsap.from('.hero-text', {
        y: isMobile ? 50 : 100,
        opacity: 0,
        duration,
        stagger: staggerTime,
        ease: 'power3.out',
      })

      // Animate buttons
      gsap.fromTo(
        '.hero-buttons .button',
        {
          y: isMobile ? 5 : 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.6 : 0.8,
          stagger: staggerTime,
          delay: isMobile ? 0.3 : 0.5,
          ease: 'power3.out',
        }
      )

      // Scroll animations with reduced complexity for mobile
      ScrollTrigger.batch('.fade-in', {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            stagger: isMobile ? 0.1 : 0.15,
            duration: isMobile ? 0.6 : 0.8,
            ease: 'power3.out',
          })
        },
        start: isMobile ? 'top 90%' : 'top 85%', // Show earlier on mobile
      })

      // Clear ScrollTrigger on unmount to prevent memory leaks
      return () => {
        // Use for...of instead of forEach for better performance
        for (const trigger of ScrollTrigger.getAll()) {
          trigger.kill()
        }
      }
    },
    {scope: containerRef, dependencies: [isMobile, prefersReducedMotion]} // Re-run when dependencies change
  )

  // Loading component for suspense fallback using Tailwind classes
  const LoadingFallback = () => (
    <div className='w-full py-12 md:py-24 flex justify-center items-center'>
      <div className='animate-pulse h-24 w-24 md:h-32 md:w-32 rounded-full bg-zinc-800' />
    </div>
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        'min-h-screen bg-zinc-900 text-white overflow-hidden',
        isMobile && 'touch-manipulation', // Optimize touch events on mobile
        isLandscape && isMobile && 'landscape-view'
      )}
    >
      {/* Hero component with responsive props */}
      <Hero
        y={y}
        opacity={opacity}
        ref={heroRef}
        {...{isMobile, isLandscape, prefersReducedMotion}}
      />

      <Suspense fallback={<LoadingFallback />}>
        {/* Use Tailwind mobile-first approach instead of conditional classes */}
        {/* <div className='px-4 md:px-0 space-y-8 md:space-y-12 lg:space-y-24'> */}
        <DualSection />
        <SignatureDesignSection />
        <LighterCollection />
        <FeaturesSection />
        {/* </div> */}
      </Suspense>
    </div>
  )
}
