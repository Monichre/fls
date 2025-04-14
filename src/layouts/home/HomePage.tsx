'use client'

import {useRef, lazy, Suspense} from 'react'
import {useScroll, useTransform} from 'framer-motion'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

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

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(useGSAP)
}

interface HomePageProps {
  data?: Record<string, unknown>
}

export const HomePage = ({data}: HomePageProps) => {
  // Fix the ref types to properly handle DOM elements
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Use our responsive hook instead of mobile context
  const {
    isMobile,

    isLandscape,

    prefersReducedMotion,
  } = useResponsive()

  // Check if we have data from contentful
  // const hasContentfulData = data?.homePage

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

  // Only handle basic animations for the hero section in the HomePage component
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
        '.hero-buttons',
        {
          y: isMobile ? 5 : 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.6 : 0.8,
          stagger: staggerTime,
          delay: isMobile ? 0.3 : 0.8,
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
            delay: isMobile ? 0.5 : 0.8,
            duration: isMobile ? 0.6 : 0.8,
            ease: 'power3.out',
          })
        },
        start: isMobile ? 'top 90%' : 'top 85%', // Show earlier on mobile
      })

      // Clear ScrollTrigger on unmount to prevent memory leaks
      return () => {
        for (const trigger of ScrollTrigger.getAll()) {
          trigger.kill()
        }
      }
    },
    {scope: containerRef, dependencies: [isMobile, prefersReducedMotion]}
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
        // {...{isMobile, isLandscape, prefersReducedMotion}}
        // contentfulData={
        //   hasContentfulData ? data.homePage.heroBanner : undefined
        // }
      />

      <Suspense fallback={<LoadingFallback />}>
        {/* Pass required props for parallax to each component */}
        <DualSection
          prefersReducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
        <SignatureDesignSection
          prefersReducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
        <LighterCollection
          prefersReducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
        <FeaturesSection
          prefersReducedMotion={prefersReducedMotion}
          isMobile={isMobile}
        />
      </Suspense>
    </div>
  )
}
