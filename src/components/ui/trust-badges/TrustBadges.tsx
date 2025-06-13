'use client'

import {cn} from '@/hooks'
import Image from 'next/image'
import {Shield, Award, Star} from 'lucide-react'

interface TrustBadgesProps {
  className?: string
}

/**
 * TrustBadges Component
 *
 * Displays trust signals and social proof to increase user confidence
 * and improve conversion rates as suggested in the site review.
 */
export const TrustBadges = ({className}: TrustBadgesProps) => {
  return (
    <div
      className={cn(
        'bg-zinc-800/50 py-3 px-4 backdrop-blur-sm relative z-10',
        className
      )}
    >
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6'>
          {/* Guarantee Badge */}
          <div className='flex items-center gap-2'>
            <Shield className='h-5 w-5 text-yellow-400' />
            <span className='text-sm font-medium text-white'>
              Satisfaction Guaranteed
            </span>
          </div>

          {/* Rating Badge */}
          <div className='flex items-center gap-2'>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='h-4 w-4 text-yellow-400 fill-yellow-400'
                />
              ))}
            </div>
            <span className='text-sm font-medium text-white'>
              4.8/5 Customer Rating
            </span>
          </div>

          {/* Wind-Resistant Badge */}
          <div className='flex items-center gap-2'>
            <Award className='h-5 w-5 text-yellow-400' />
            <span className='text-sm font-medium text-white'>
              Wind-Resistant Technology
            </span>
          </div>

          {/* Shipping Badge */}
          <div className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-yellow-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-sm font-medium text-white'>
              Free Shipping on Orders $50+
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
