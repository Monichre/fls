'use client'

import {useRef} from 'react'
import Image from 'next/image'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useParallax} from '@/hooks/useParallax'
import {Button} from '@/components/ui/button'
import {Star, ArrowRight} from 'lucide-react'
import {useScrollToSection} from '@/hooks/useScrollToSection'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Michael T.',
    role: 'Camping Enthusiast',
    content:
      "The FLS lighter is the best I've ever owned, it even worked on a windy fishing trip! The curved design makes it comfortable to hold and the flame is strong and reliable.",
    rating: 5,
    image: '/assets/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Sarah K.',
    role: 'Store Owner',
    content:
      "As a store owner, I've seen many lighter brands come and go. FLS lighters are not only stylish but they actually deliver on their promises - my customers love them.",
    rating: 5,
    image: '/assets/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'James R.',
    role: 'Outdoor Guide',
    content:
      'I lead wilderness trips and depend on reliable equipment. These lighters have never failed me, even in harsh conditions. The 1200 ignition capacity is a game-changer.',
    rating: 4,
    image: '/assets/testimonial-3.jpg',
  },
]

interface TestimonialSectionProps {
  prefersReducedMotion?: boolean
  isMobile?: boolean
}

/**
 * TestimonialSection Component
 *
 * Displays customer testimonials to build trust and social proof,
 * as recommended in the site review to improve conversions.
 */
export const TestimonialSection = ({
  prefersReducedMotion = false,
  isMobile = false,
}: TestimonialSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const {scrollTo} = useScrollToSection()

  // Apply parallax effect to the section content
  useParallax(contentRef, {
    prefersReducedMotion,
    isMobile,
    debug: false,
    target: '.testimonial-content',
    yDistance: isMobile ? -15 : -30,
    opacity: true,
    scrub: 0.5,
  })

  // Apply parallax to the testimonial cards with staggered animation
  useParallax(testimonialsRef, {
    prefersReducedMotion,
    isMobile,
    target: '.testimonial-card',
    stagger: true,
    yDistance: isMobile ? 20 : 40,
    opacity: true,
    scrub: 0.7,
  })

  return (
    <section
      ref={sectionRef}
      id='testimonials'
      className='relative bg-zinc-800 py-20 md:py-32 overflow-hidden'
    >
      <div className='container mx-auto px-4 md:px-6'>
        {/* Section header */}
        <div ref={contentRef} className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='testimonial-content text-4xl md:text-5xl font-bold text-white mb-6'>
            What Our Customers{' '}
            <span className='text-yellow-400'>Are Saying</span>
          </h2>
          <p className='testimonial-content text-lg md:text-xl text-zinc-300'>
            Don't just take our word for it. Hear from people who rely on FLS
            lighters every day for their adventures, businesses, and everyday
            needs.
          </p>
        </div>

        {/* Testimonial cards */}
        <div
          ref={testimonialsRef}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14'
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card bg-zinc-900/80 backdrop-blur rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Testimonial header with avatar and info */}
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 rounded-full bg-zinc-700 overflow-hidden mr-4'>
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} avatar`}
                      width={48}
                      height={48}
                      className='object-cover w-full h-full'
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center bg-yellow-400 text-black font-bold text-lg'>
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className='font-bold text-white'>{testimonial.name}</h3>
                  <p className='text-sm text-zinc-400'>{testimonial.role}</p>
                </div>
              </div>

              {/* Star rating */}
              <div className='flex mb-3'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-zinc-600'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className='text-zinc-300 italic mb-4'>
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className='text-center'>
          <Button
            onClick={() => scrollTo('#lighter-collection')}
            size='lg'
            className='bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-8'
          >
            Shop FLS Lighters <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </section>
  )
}
