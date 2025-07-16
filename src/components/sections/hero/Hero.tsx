'use client'

import {forwardRef, useRef, useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import {motion, type MotionValue} from 'framer-motion'

import {Environment, Float, CameraControls} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import {Button} from '@/components/ui/button'

import {useScrollToSection} from '@/hooks/useScrollToSection'

import {SignUpForm} from '@/components/sign-up/signup-form'
import {Divider} from '@/components/ui'
import {useResponsive} from '@/hooks'
import {HeroVideoDialog} from '@/components/sections/dual-section/video-modal'

// Define types for the LighterModel
interface LighterModelProps {
  y?: number
  [key: string]: unknown
}

// Custom 3D lighter model using Three.js primitives

// Define types for Scene
interface SceneProps {
  y?: number
  defaultZoom?: number
  minZoom?: number
  maxZoom?: number
}

// Scene component with camera controls

// Define the HeroProps interface with proper types
interface HeroProps {
  y: number | MotionValue<number>
  opacity: number | MotionValue<number>
  valueProposition?: string
  primaryCTA?: string
  secondaryCTA?: string
  isMobile?: boolean
  isLandscape?: boolean
  prefersReducedMotion?: boolean
}

export const Hero = forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      y,
      opacity,
      valueProposition = 'High-Performance Lighters for Adventure, Home & Everywhere in Between',
      primaryCTA = 'Shop FLS Lighters',
      secondaryCTA = 'Watch Demo',
      ...props
    },
    ref
  ) => {
    const [zoom, setZoom] = useState(6)
    const cameraControlsRef = useRef<CameraControls>(null)
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    // Video toggle function
    const toggleVideo = () => {
      setIsVideoOpen(!isVideoOpen)
    }

    // Zoom in/out functions
    const zoomIn = () => {
      setZoom(Math.max(zoom - 1, 3))
      if (cameraControlsRef.current) {
        cameraControlsRef.current.dolly(1, true)
      }
    }

    const zoomOut = () => {
      setZoom(Math.min(zoom + 1, 10))
      if (cameraControlsRef.current) {
        cameraControlsRef.current.dolly(-1, true)
      }
    }

    const resetView = () => {
      setZoom(6)
      if (cameraControlsRef.current) {
        cameraControlsRef.current.reset(true)
      }
    }

    const {isScrolled, mobileMenuOpen, scrollTo, scrollToSection} =
      useScrollToSection()

    const handleClick = (href: string) => {
      // const targetId = href.split('#')[1]
      scrollTo(href)
    }
    // email

    const {isMobile} = useResponsive()

    return (
      <section
        id='hero'
        ref={ref}
        className='relative !h-[944px] w-full flex flex-col items-center'
        style={{height: '944px'}}
      >
        {/* Hero Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/hero.avif'
            alt='FLS Lighter - Premium Windproof Lighter'
            fill
            priority
            quality={100}
            className='object-cover object-center'
          />
          {/* Gradient overlay for better text readability */}
          <div className='absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-900 z-1 overlay' />
        </div>

        {/* Content */}
        <motion.div
          layoutId='hero-content'
          // style={{y, opacity}}
          className='mx-auto h-full flex flex-col justify-center align-center items-center mx-auto px-4 lg:px-6 z-20 md:flex-row items-center align-center'
        >
          <div className='sm:w-full sm:h-auto md:w-1/2  mb-10 lg:mb-0 mx-auto px-12'>
            <Image
              width={isMobile ? 150 : 190}
              height={isMobile ? 40 : 65}
              src='/logo-letters.png'
              alt='FLS USA Logo - Premium Lighters'
              className='mb-10 mx-auto md:mx-0'
            />
            <h1
              className='hero-text text-center md:text-left text-4xl lg:text-6xl font-bold text-white mb-4 mx-auto'
              style={{letterSpacing: '-1px'}}
            >
              SPARK THE <br /> EXCITEMENT
            </h1>

            {/* Value proposition subheading */}
            <p className='hero-text text-center md:text-left text-lg md:text-xl text-yellow-400 mb-6'>
              {valueProposition}
            </p>

            <div className='hero-buttons flex flex-wrap gap-4 mt-2 justify-center md:justify-start'>
              <Button
                className='bg-yellow-400 hover:bg-yellow-500 text-black rounded-full button transition-all duration-300'
                size='lg'
                onClick={() => handleClick('#lighter-collection')}
              >
                {primaryCTA}
              </Button>
              {isMobile ? null : (
                <Button
                  className='bg-white text-black hover:bg-white/10 hover:text-white rounded-full button transition-all duration-300'
                  size='lg'
                  onClick={toggleVideo}
                  variant='outline'
                >
                  {secondaryCTA}
                </Button>
              )}
            </div>
          </div>

          <div className='relative z-50 overflow-visible flex items-center justify-center content-center sm:w-full sm:h-auto md:w-1/2 md:ml-auto'>
            {/* Semi-transparent backdrop for 3D model */}

            <div className='relative z-10 z-50'>
              <div className='max-w-3xl text-center md:translate-y-10 md:mt-24'>
                <h2
                  className='hero-text text-center text-4xl lg:text-6xl font-bold mb-2 uppercase font-poppins-black max-w-3xl mx-auto'
                  style={{letterSpacing: '-1px', color: '#fff'}}
                >
                  Wholesalers <span className='text-[#F7CB00]'> & </span>{' '}
                  Distributors
                </h2>
                <p className='text-white max-w-md mx-auto text-center text-4xl md:text-6xl !text-[24px] mt-8 text-[#F7CB00] bottom-content-item'>
                  Get exclusive pricing and early access to new products
                </p>
              </div>

              {/* <div className='max-w-[300px] md:max-h-[500px] md:max-w-md mx-auto md:mx-0 '> */}
              <SignUpForm />
              {/* </div> */}
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        <HeroVideoDialog
          animationStyle='top-in-bottom-out'
          isVideoOpen={isVideoOpen}
          toggleVideoOpen={toggleVideo}
          videoSrc='/fls-video.mp4'
          thumbnailSrc='/thumbnail.png'
          thumbnailAlt='Hero Video'
          className='w-full'
        />

        {/* Bottom border */}
        <Divider
          backgroundImage='/bottom-decal.svg'
          color='#F7CB00'
          height={50}
          className='z-10'
        />
      </section>
    )
  }
)

Hero.displayName = 'Hero'
