'use client'

import {forwardRef, useRef, useState} from 'react'
import Image from 'next/image'
import {motion, type MotionValue} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {Divider} from '@/components/ui'

export interface CTALink {
  id: string
  title: string
  link: string
}

export interface HeroBannerProps {
  title: string
  subtitle?: string
  backgroundImage: {
    url: string
    width?: number
    height?: number
    description?: string
  }
  content?: string
  ctaLinks?: CTALink[]
  textColor?: string
  backgroundColor?: string
  logoImage?: string
  y?: number | MotionValue<number>
  opacity?: number | MotionValue<number>
}

export const HeroBanner = forwardRef<HTMLDivElement, HeroBannerProps>(
  (
    {
      title,
      subtitle,
      backgroundImage,
      ctaLinks = [],
      content,
      textColor = '#FFFFFF',
      backgroundColor = '#000000',
      logoImage = '/logo-letters.png',
      y = 0,
      opacity = 1,
      ...props
    },
    ref
  ) => {
    return (
      <section
        id='hero-banner'
        ref={ref}
        className='relative !h-[944px] flex items-center overflow-hidden'
        style={{
          height: '944px',
          backgroundColor,
        }}
        {...props}
      >
        {/* Hero Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={backgroundImage.url}
            alt={backgroundImage.description || title}
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
          style={{
            y: y as MotionValue<number> | number,
            opacity: opacity as MotionValue<number> | number,
          }}
          className='container mx-auto px-4 lg:px-6 z-20 flex md:flex-col lg:flex-row items-center justify-center overflow-visible'
        >
          <div className='sm:w-full sm:h-auto lg:w-1/2 mb-10 lg:mb-0'>
            {logoImage && (
              <Image width={217} height={85} src={logoImage} alt='Logo' />
            )}
            <h1
              className='hero-text text-4xl lg:text-6xl font-bold my-2'
              style={{
                letterSpacing: '-1px',
                color: textColor,
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <h2
                className='text-xl lg:text-2xl mb-6'
                style={{color: textColor}}
              >
                {subtitle}
              </h2>
            )}

            {content && (
              <p className='mb-6' style={{color: textColor}}>
                {content}
              </p>
            )}

            {ctaLinks.length > 0 && (
              <div className='hero-buttons flex flex-wrap gap-4'>
                {ctaLinks.map((cta, index) => (
                  <Button
                    key={cta.id || index}
                    className={`${
                      index === 0
                        ? 'bg-yellow'
                        : 'bg-white text-black hover:bg-white/10'
                    } rounded-full button transition-all duration-300`}
                    size='lg'
                    asChild
                  >
                    <a href={cta.link}>{cta.title}</a>
                  </Button>
                ))}
              </div>
            )}
          </div>

          <div className='lg:w-1/2 h-[600px] lg:h-[600px] relative overflow-visible'>
            {/* This space can be used for a 3D model or additional images if specified in Contentful */}
          </div>
        </motion.div>

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

HeroBanner.displayName = 'HeroBanner'
