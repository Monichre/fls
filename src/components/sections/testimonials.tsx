'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useParallax } from '@/hooks/useParallax'
import { User } from 'lucide-react'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "I've been wholesaling for 20 years and these lighters are moving faster than anything I've seen!",
    name: "Mike S.",
    title: "Wholesaler (20 yrs)",
    avatar: null, // Use placeholder
  },
  {
    id: 2,
    quote: "The display boxes are eye-catching and really help drive impulse purchases at checkout.",
    name: "Sarah T.",
    title: "Retail Manager",
    avatar: null, // Use placeholder
  },
  {
    id: 3,
    quote: "FLS lighters have become our best-selling impulse item. Customers love the designs.",
    name: "David R.",
    title: "Store Owner",
    avatar: null, // Use placeholder
  },
]

interface TestimonialsProps {
  prefersReducedMotion?: boolean
  isMobile?: boolean
}

export function Testimonials({
  prefersReducedMotion = false,
  isMobile = false,
}: TestimonialsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  // Apply parallax to header content
  useParallax(contentRef, {
    prefersReducedMotion,
    isMobile,
    target: '.testimonials-header',
    yDistance: isMobile ? -15 : -30,
    opacity: true,
    scale: true,
    scrub: 0.5,
  })

  // Apply parallax to testimonials with staggered animation
  useParallax(testimonialsRef, {
    prefersReducedMotion,
    isMobile,
    target: '.testimonial-card',
    stagger: true,
    yDistance: isMobile ? 20 : 40,
    opacity: true,
    scrub: 0.8,
  })

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative bg-zinc-800 py-16 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header content */}
        <div ref={contentRef} className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="testimonials-header text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            What Our Partners Say
          </h2>
          <p className="testimonials-header text-lg md:text-xl text-zinc-300">
            Hear from wholesalers and retailers who have experienced success with FLS products.
          </p>
        </div>

        {/* Testimonials grid */}
        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="testimonial-card bg-zinc-900 rounded-lg p-6 shadow-lg border border-zinc-700"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg 
                  className="w-10 h-10 text-yellow-500 opacity-50 mb-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white text-lg italic">{testimonial.quote}</p>
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  {testimonial.avatar ? (
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-black" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-yellow-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

