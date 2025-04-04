'use client'

import {useRef, useEffect} from 'react'
import Image from 'next/image'
import {motion, useScroll, useTransform} from 'framer-motion'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Button} from '@/components/ui/button'
import {ArrowRight, Flame} from 'lucide-react'
import {useGSAP} from '@gsap/react'
import {Divider} from '@/components/ui/divider'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(useGSAP)
}

export function DualSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const topContentRef = useRef<HTMLDivElement>(null)
  const bottomContentRef = useRef<HTMLDivElement>(null)

  // Parallax effect
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  // GSAP animations with useGSAP hook
  useGSAP(
    () => {
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

  return (
    <section
      ref={sectionRef}
      className='relative overflow-hidden'
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
      <div className='relative h-[600px] md:h-[800px]'>
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
          className='relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center'
        >
          <div className='max-w-2xl'>
            {/* <div className='inline-block bg-yellow-400 text-black px-4 py-1 rounded-full mb-6 top-content-item'>
              <span className='font-medium'>Premium Quality</span>
            </div> */}
            <h2 className='text-4xl md:text-6xl text-white mb-6 top-content-item leading-tight'>
              Introducing <br />
              CounterCulture
            </h2>
            <p className='text-2xl md:text-xl text-white/80 mb-8 top-content-item'>
              The parent company of FLS USA is CounterCulture. As founders,
              Ibrahim Najara, Bradly Fadly and Samuel Habib have a passion for
              all things C-store that is matched only by their love of America.
              It’s their pioneering and innovative spirit that has driven their
              success as value product retailers and wholesalers. They
              understand, better than anyone, that C-store checkout areas are
              mini-ecosystems of their own. And through wise purchasing along
              with smart curating, they know exactly how to make each one of
              those places a success for all.
              {/* CounterCulture is the parent company of FLS USA. Ibrahim Najara,
              Bradly Fadly, and Samuel Habib, the visionaries behind FLS-USA,
              blend a fierce passion for C-stores with unwavering American
              pride. Their bold innovation drives its success in value goods for
              retailers and wholesalers. Masters of C-store checkout
              micro-worlds, they spark triumph through savvy sourcing and
              curation. */}
            </p>
            <div className='flex flex-wrap gap-4 top-content-item'>
              <Button
                size='lg'
                className='bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-12 py-8'
              >
                Learn More <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>

        {/* Diagonal divider */}
        <div
          className='absolute bottom-0 left-0 right-0 h-20 bg-zinc-900 z-20'
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
              className='object-scale-down object-left'
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
            <h2 className='text-4xl md:text-6xl text-white mb-6 bottom-content-item'>
              Reliable in <span className='text-yellow-400'>Any Condition</span>
            </h2>
            <p className='text-lg md:text-xl text-white/80 mb-8 bottom-content-item'>
              From mountain peaks to beach bonfires, our wind-resistant
              technology ensures your FLS lighter performs flawlessly in
              challenging environments.
            </p>
            <div className='flex flex-wrap gap-4 md:justify-end bottom-content-item'>
              <Button
                size='lg'
                variant='outline'
                className='bg-white border-white text-black hover:bg-white/10 rounded-full'
              >
                Watch Demo
              </Button>
              <Button
                size='lg'
                className='bg-yellow-300 hover:bg-yellow-500 text-black rounded-full'
              >
                Shop Now <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
