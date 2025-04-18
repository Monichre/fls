'use client'

import {useRef, useState} from 'react'
import Image from 'next/image'
import {motion, useScroll, useTransform, AnimatePresence} from 'framer-motion'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Button} from '@/components/ui/button'
import {ArrowRight, Flame} from 'lucide-react'
import {useGSAP} from '@gsap/react'
import {Divider} from '@/components/ui/divider'
import {useScrollToSection} from '@/hooks/useScrollToSection'
import {HeroVideoDialog} from '@/components/sections/dual-section/video-modal'
import {AnimatedLogo} from '@/components/animated-logo/AnimatedLogo'
import {AnimatedLogoAdvanced} from '@/components/animated-logo/AnimatedLogoAdvanced'
import {BoxReveal} from '@/components/magicui/box-reveal'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(useGSAP)
}

interface DualSectionProps {
  prefersReducedMotion?: boolean
  isMobile?: boolean
}

export function DualSection({
  prefersReducedMotion = false,
  isMobile = false,
}: DualSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const topContentRef = useRef<HTMLDivElement>(null)
  const bottomContentRef = useRef<HTMLDivElement>(null)

  // Framer Motion parallax effect (original implementation)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  // GSAP animations with useGSAP hook for entrance animations
  useGSAP(
    () => {
      if (prefersReducedMotion) return

      // Top content animation
      gsap.from('.top-content-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: topContentRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      })

      // Bottom content animation
      gsap.from('.bottom-content-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: bottomContentRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      })
    },
    {scope: sectionRef}
  )
  const {scrollTo} = useScrollToSection()

  const handleClick = (href: string) => {
    scrollTo(href)
  }
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen)
  }

  return (
    <section
      ref={sectionRef}
      className='relative overflow-hidden pt-20 md:pt-0'
      id='dual-section'
    >
      <Divider
        backgroundImage='/bottom-decal.svg'
        color='#F7CB00'
        height={50}
        className='z-10'
        position='top'
      />
      {/* Top part with uploaded image background */}
      <div className='relative h-auto md:h-[600px] lg:h-[800px]'>
        {/* Background Image - Replace with your uploaded image */}
        <div className='absolute inset-0 z-0'>
          <motion.div style={{y: y1}} className='h-[120%] w-full'>
            <Image
              src='/factory-large.avif'
              alt='FLS Experience'
              fill
              className='object-cover object-center'
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className='absolute inset-0 bg-zinc-900/60 z-10' />
          </motion.div>
        </div>

        {/* Content */}
        <div
          ref={topContentRef}
          className='relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center md:flex-row md:justify-around md:pt-14 items-center'
        >
          <div className='max-w-2xl mt-4'>
            <h2
              className='text-4xl md:text-left md:text-6xl font-bold text-white mb-6 top-content-item leading-tight 
              '
              style={{letterSpacing: '-1px'}}
            >
              Introducing <br />{' '}
              <span className='text-yellow-400 !font-light italic'>
                CounterCulture
              </span>
            </h2>
            <p
              className=' md:text-base text-white mb-8 top-content-item dual-section-content'
              style={{fontSize: '18px'}}
            >
              The parent company of FLS USA is CounterCulture. As founders,
              Ibrahim Najajra, Bradly Fadly and Samuel Habib have a passion for
              all things C-store that is matched only by their love of America.
              It's their pioneering and innovative spirit that has driven their
              success as value product retailers and wholesalers. They
              understand, better than anyone, that C-store checkout areas are
              mini-ecosystems of their own. And through wise purchasing along
              with smart curating, they know exactly how to make each one of
              those places a success for all.
            </p>
            <div className='flex flex-wrap gap-4 top-content-item'>
              <Button
                size='sm'
                className='bg-yellow-400 hover:bg-yellow-500 px-16 py-6 text-black rounded-full'
                onClick={() => handleClick('#features')}
              >
                Learn More <ArrowRight className='ml-1 h-4 w-4' />
              </Button>
            </div>
          </div>
          <div className='flex flex-col items-center justify-start py-12 fade-in-up top-content-item'>
            {/* Animated Logo Container */}
            <AnimatePresence>
              <motion.div
                initial={
                  prefersReducedMotion
                    ? {}
                    : {opacity: 0, scale: 0.8, rotate: -5}
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  filter: [
                    'drop-shadow(0 0 0px rgba(247, 203, 0, 0))',
                    'drop-shadow(0 0 20px rgba(247, 203, 0, 0.7))',
                    'drop-shadow(0 0 2px rgba(247, 203, 0, 0.3))',
                  ],
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  filter: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: 'reverse',
                    duration: 2.5,
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  filter: 'drop-shadow(0 0 15px rgba(247, 203, 0, 0.9))',
                }}
                className='relative'
              >
                <motion.div
                  className='absolute inset-0 bg-yellow-400/20'
                  initial={{opacity: 0}}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: 'reverse',
                  }}
                  style={{
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                  }}
                />
                <Image
                  src='/cc-white-logo.png'
                  alt='Counter Culture Logo'
                  width={400}
                  height={250}
                  className='object-contain w-auto h-auto dual-section-content z-10 relative'
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Diagonal divider */}
        <div
          className='absolute bottom-0 left-0 right-0 h-20 bg-zinc-900 z-1'
          style={{clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)'}}
        />
      </div>

      {/* Bottom part with lighter photo PNG background */}
      <div className='relative h-[600px] md:h-[800px] bg-zinc-900'>
        {/* Background Image - Updated with new lighter image */}
        <div className='absolute inset-0 z-0 overflow-hidden'>
          <motion.div style={{y: y2}} className='h-[120%] w-full'>
            <div className='absolute inset-0 bg-gradient-to-b from-zinc-900 to-transparent z-10' />
            <Image
              src='/lighter-transparent.png'
              alt='FLS Lighter Flame'
              fill
              className='object-scale-down object-left dual-section-content'
              priority
              quality={100}
              style={{objectFit: 'cover'}}
            />
            <div className='absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent z-10' />
          </motion.div>
        </div>

        {/* Content - Updated positioning for better alignment with new image */}
        <div
          ref={bottomContentRef}
          className='relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-start md:items-end'
        >
          <div className='max-w-2xl md:text-right'>
            <div className='inline-flex items-center bg-zinc-800 text-yellow-400 px-4 py-1 rounded-full mb-6 bottom-content-item'>
              <Flame className='mr-2 h-4 w-4' />
              <span className='font-medium'>Wind Resistant</span>
            </div>
            <h2
              className='text-4xl md:text-6xl font-bold text-white mb-6 bottom-content-item leading-tight'
              style={{letterSpacing: '-1px'}}
            >
              Reliable in <span className='text-yellow-400'>Any Condition</span>
            </h2>
            <p className='text-md md:text-lg md:text-xl text-white/80 mb-8 bottom-content-item'>
              From mountain peaks to beach bonfires, our wind-resistant
              technology ensures your FLS lighter performs flawlessly in
              challenging environments.
            </p>
            <div className='flex flex-wrap gap-4 md:justify-end bottom-content-item'>
              <Button
                size='lg'
                onClick={toggleVideo}
                variant='outline'
                className='bg-white border-white text-black hover:bg-white/10 rounded-full'
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <HeroVideoDialog
          animationStyle='top-in-bottom-out'
          isVideoOpen={isVideoOpen}
          toggleVideoOpen={toggleVideo}
          videoSrc='/fls-video.mp4'
          thumbnailSrc='/thumbnail.png'
          thumbnailAlt='Hero Video'
          className='w-full'
        />
      </div>
    </section>
  )
}
