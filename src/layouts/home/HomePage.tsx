'use client'

import {useRef, Suspense} from 'react'
import dynamic from 'next/dynamic'
import {useScroll, useTransform} from 'framer-motion'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import {useResponsive, cn} from '@/hooks'

// Dynamic imports for better code splitting and performance
const Hero = dynamic(
  () =>
    import('@/components/sections/hero').then((mod) => ({
      default: mod.Hero,
    })),
  {loading: () => <HeroSkeleton />}
)

const TestimonialSection = dynamic(
  () =>
    import('@/components/sections/testimonial-section').then((mod) => ({
      default: mod.TestimonialSection,
    })),
  {loading: () => <TestimonialSkeleton />}
)

const TrustBadges = dynamic(
  () =>
    import('@/components/ui/trust-badges').then((mod) => ({
      default: mod.TrustBadges,
    })),
  {loading: () => <TrustBadgesSkeleton />}
)

// New component for Digital Catalogue CTA
const DigitalCatalogueCTA = dynamic(
  () =>
    import('@/components/sections/digital-catalogue-cta').then((mod) => ({
      default: mod.DigitalCatalogueCTA,
    })),
  {loading: () => <div className='w-full py-6 bg-zinc-900' />}
)

// Implement lazy loading for heavy components

// Replace React lazy with Next.js dynamic imports
const DualSection = dynamic(
  () =>
    import('@/components/sections/dual-section/DualSection').then((mod) => ({
      default: mod.DualSection,
    })),
  {loading: () => <SectionSkeleton />}
)

const SignatureDesignSection = dynamic(
  () =>
    import('@/components/sections/signature-design-section').then((mod) => ({
      default: mod.SignatureDesignSection,
    })),
  {loading: () => <SectionSkeleton />}
)

const LighterCollection = dynamic(
  () =>
    import('@/components/sections/lighter-collection').then((mod) => ({
      default: mod.LighterCollection,
    })),
  {loading: () => <CollectionSkeleton />}
)

const DisplayBoxSection = dynamic(
  () =>
    import('@/components/sections/display-box-section').then((mod) => ({
      default: mod.DisplayBoxSection,
    })),
  {loading: () => <CollectionSkeleton />}
)

const FeaturesSection = dynamic(
  () =>
    import('@/components/sections/features-section').then((mod) => ({
      default: mod.FeaturesSection,
    })),
  {loading: () => <SectionSkeleton />}
)

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

interface HomePageProps {
  data?: Record<string, unknown>
}

// At the top of the file, define section-specific skeleton components
const HeroSkeleton = () => (
  <div className='w-full h-screen flex flex-col justify-center px-6 space-y-6'>
    <div className='w-3/4 h-10 bg-zinc-800 animate-pulse rounded-md mb-4' />
    <div className='w-5/6 h-8 bg-zinc-800 animate-pulse rounded-md' />
    <div className='w-4/6 h-8 bg-zinc-800 animate-pulse rounded-md' />
    <div className='flex space-x-4 mt-8'>
      <div className='w-32 h-12 bg-zinc-800 animate-pulse rounded-md' />
      <div className='w-32 h-12 bg-zinc-800 animate-pulse rounded-md' />
    </div>
  </div>
)

const TrustBadgesSkeleton = () => (
  <div className='w-full py-8 px-6'>
    <div className='flex justify-center space-x-8 overflow-hidden'>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className='w-16 h-16 bg-zinc-800 animate-pulse rounded-full'
        />
      ))}
    </div>
  </div>
)

const SectionSkeleton = () => (
  <div className='w-full py-16 px-6'>
    <div className='w-2/3 h-8 bg-zinc-800 animate-pulse rounded-md mb-8' />
    <div className='flex flex-col md:flex-row w-full gap-6'>
      <div className='w-full md:w-1/2 h-64 bg-zinc-800 animate-pulse rounded-lg' />
      <div className='w-full md:w-1/2 flex flex-col space-y-4'>
        <div className='w-5/6 h-6 bg-zinc-800 animate-pulse rounded-md' />
        <div className='w-full h-20 bg-zinc-800 animate-pulse rounded-md' />
        <div className='w-4/6 h-10 bg-zinc-800 animate-pulse rounded-md' />
      </div>
    </div>
  </div>
)

const CollectionSkeleton = () => (
  <div className='w-full py-16 px-6'>
    <div className='w-2/3 h-8 bg-zinc-800 animate-pulse rounded-md mb-8' />
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {[...Array(3)].map((_, i) => (
        <div key={i} className='h-80 bg-zinc-800 animate-pulse rounded-lg' />
      ))}
    </div>
  </div>
)

const TestimonialSkeleton = () => (
  <div className='w-full py-16 px-6'>
    <div className='w-2/3 h-8 bg-zinc-800 animate-pulse rounded-md mb-8 mx-auto' />
    <div className='max-w-2xl mx-auto bg-zinc-800/30 p-6 rounded-lg'>
      <div className='w-full h-24 bg-zinc-800 animate-pulse rounded-md mb-4' />
      <div className='flex items-center'>
        <div className='w-12 h-12 bg-zinc-800 animate-pulse rounded-full mr-4' />
        <div className='w-32 h-6 bg-zinc-800 animate-pulse rounded-md' />
      </div>
    </div>
  </div>
)

export const HomePage = ({data}: HomePageProps) => {
  // Fix the ref types to properly handle DOM elements
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Use our responsive hook instead of mobile context
  const {isMobile, isLandscape, prefersReducedMotion} = useResponsive()

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

  // SEO data
  const seoTitle =
    'FLS Lighters – Windproof, High-Performance Lighters | FLS USA'
  const seoDescription =
    'FLS Lighters offers wind-resistant, ergonomic lighters designed for adventure. 1200+ ignitions, stylish designs, and reliable flames in any condition. Shop now for quality lighters that spark excitement.'

  return (
    <>
      {/* Add SEO meta tags */}
      <head>
        <title>{seoTitle}</title>
        <meta name='description' content={seoDescription} />
        <meta property='og:title' content={seoTitle} />
        <meta property='og:description' content={seoDescription} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={seoTitle} />
        <meta name='twitter:description' content={seoDescription} />
      </head>

      <div
        ref={containerRef}
        className={cn(
          'min-h-screen bg-zinc-900 text-white overflow-hidden',
          isMobile && 'touch-manipulation', // Optimize touch events on mobile
          isLandscape && isMobile && 'landscape-view'
        )}
      >
        <Suspense fallback={<HeroSkeleton />}>
          {/* Hero component with responsive props and value proposition */}
          <Hero
            y={y}
            opacity={opacity}
            ref={heroRef}
            isMobile={isMobile}
            isLandscape={isLandscape}
            prefersReducedMotion={prefersReducedMotion}
            valueProposition='Windproof, High-Performance Lighters for Adventure, Home & Everywhere in Between'
            primaryCTA='Shop FLS Lighters'
            secondaryCTA='Watch Demo'
          />
        </Suspense>
        {/* Trust badges - new component for social proof */}
        <TrustBadges />

        <Suspense fallback={<div>Loading...</div>}>
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
          <DisplayBoxSection
            prefersReducedMotion={prefersReducedMotion}
            isMobile={isMobile}
          />
          <FeaturesSection
            prefersReducedMotion={prefersReducedMotion}
            isMobile={isMobile}
          />
          {/* New testimonials section */}
          <TestimonialSection
            prefersReducedMotion={prefersReducedMotion}
            isMobile={isMobile}
          />
        </Suspense>
      </div>
    </>
  )
}
