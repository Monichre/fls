'use client'

import {useRef} from 'react'
import type {RefObject} from 'react'
import Image from 'next/image'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Button} from '@/components/ui/button'
import {ChevronRight, ChevronLeft, Star} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import {useParallax} from '@/hooks/useParallax'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Display box data
const displayBoxes = [
  {
    id: 0,
    name: 'FLS Premium Counter Display',
    description:
      'Maximize your sales with our premium counter display. Holds 24 lighters with an eye-catching design that draws customer attention.',
    image: '/display-boxes/IMG-20250318-WA0026.jpg',
    color: 'bg-blue-500/20',
    price: '$49.99',
    feature: 'Holds 24 Units',
    inStock: true,
  },
  {
    id: 1,
    name: 'FLS Floor Display Stand',
    description:
      'Our floor display stand is perfect for high-traffic areas. Holds 48 lighters with customizable signage and a small footprint.',
    image: '/display-boxes/IMG-20250318-WA0011.jpg',
    color: 'bg-green-500/20',
    price: '$89.99',
    feature: 'Holds 48 Units',
    inStock: true,
  },
  {
    id: 2,
    name: 'FLS Compact Display Box',
    description:
      'Space-saving display solution for smaller retail environments. Holds 12 lighters with clear product visibility.',
    image: '/display-boxes/IMG-20250318-WA0023.jpg',
    color: 'bg-purple-500/20',
    price: '$29.99',
    feature: 'Space-Saving',
    inStock: true,
  },
  {
    id: 3,
    name: 'FLS Deluxe Counter Display',
    description:
      'Deluxe version of our popular counter display with premium finish. Showcases 36 lighters in an attractive arrangement that enhances impulse purchases.',
    image: '/display-boxes/IMG-20250318-WA0026 (1).jpg',
    color: 'bg-red-500/20',
    price: '$59.99',
    feature: 'Premium Design',
    inStock: true,
  },
  {
    id: 4,
    name: 'FLS Rotating Display Stand',
    description:
      'Innovative rotating display that allows customers to view all lighter designs. Perfect for retail environments with limited counter space.',
    image: '/display-boxes/IMG-20250318-WA0025.jpg',
    color: 'bg-amber-500/20',
    price: '$69.99',
    feature: '360° Rotation',
    inStock: true,
  },
  {
    id: 5,
    name: 'FLS Mini Counter Display',
    description:
      'Compact counter display perfect for checkout areas. Holds 12 bestselling lighter designs in a minimal footprint.',
    image: '/display-boxes/IMG-20250318-WA0024.jpg',
    color: 'bg-cyan-500/20',
    price: '$24.99',
    feature: 'Checkout Friendly',
    inStock: true,
  },
  {
    id: 6,
    name: 'FLS Custom Branding Display',
    description:
      'Customizable display option with your store branding. Includes space for custom signage and holds 24 lighters in a premium presentation.',
    image: '/display-boxes/IMG-20250318-WA0012.jpg',
    color: 'bg-indigo-500/20',
    price: '$54.99',
    feature: 'Customizable',
    inStock: false,
  },
]

interface DisplayBoxSectionProps {
  prefersReducedMotion?: boolean
  isMobile?: boolean
}

export function DisplayBoxSection({
  prefersReducedMotion = false,
  isMobile = false,
}: DisplayBoxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    // startIndex: 0,
  })

  // Scroll to next/previous slide
  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  // Apply parallax effect to the carousel items
  useParallax(carouselRef as RefObject<HTMLElement>, {
    prefersReducedMotion,
    isMobile,
    debug: false,
    target: '.embla__slide',
    stagger: true,
    scale: true,
    yDistance: isMobile ? 25 : 50,
    scrub: 0.7,
  })

  // Apply parallax to content
  useParallax(contentRef as RefObject<HTMLElement>, {
    prefersReducedMotion,
    isMobile,
    target: '.display-content',
    yDistance: isMobile ? -15 : -30,
    opacity: true,
    scrub: 0.5,
  })

  return (
    <section
      ref={sectionRef}
      id='display-boxes'
      className='relative bg-zinc-900 py-20 md:py-32 overflow-hidden'
    >
      <div className='container mx-auto px-4 md:px-6'>
        {/* Content */}
        <div ref={contentRef} className='max-w-3xl mb-12 md:mb-20'>
          <h2 className='display-content text-4xl md:text-6xl font-bold text-yellow-400 mb-6'>
            Display Boxes
          </h2>
          <p className='display-content text-lg md:text-xl text-zinc-300 mb-6'>
            Maximize your sales with our premium display solutions. Our display
            boxes are designed to showcase FLS lighters effectively, driving
            impulse purchases and increasing visibility in any retail
            environment.
          </p>
          <p className='display-content text-lg md:text-xl text-zinc-300 mb-8'>
            Available in various sizes and configurations to meet your specific
            needs, from compact counter displays to full floor stands.
          </p>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className='relative px-4 md:px-12 mb-12'>
          <div className='embla overflow-hidden' ref={emblaRef}>
            <div className='embla__container flex'>
              {displayBoxes.map((box) => (
                <div
                  key={box.id}
                  className='embla__slide flex-[0_0_280px] md:flex-[0_0_400px] px-4'
                >
                  <div
                    className={`relative group rounded-2xl p-8 h-[500px] md:h-[600px] ${box.color} backdrop-blur-xl transition-all duration-300 hover:scale-105`}
                  >
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl' />

                    {/* Feature badge */}
                    {box.feature && (
                      <div className='absolute top-6 right-6 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium z-10'>
                        {box.feature}
                      </div>
                    )}

                    {/* Limited stock badge */}
                    {!box.inStock && (
                      <div className='absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10'>
                        Limited Stock
                      </div>
                    )}

                    <Image
                      src={box.image || '/placeholder.svg'}
                      alt={`FLS ${box.name} - Retail Display Solution`}
                      fill
                      className='object-contain p-4 display-item'
                      quality={100}
                      priority
                    />

                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white bg-black/60 backdrop-blur-sm rounded-b-2xl'>
                      <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-xl font-bold'>{box.name}</h3>
                        <span className='text-yellow-400 font-bold'>
                          {box.price}
                        </span>
                      </div>
                      <p className='text-sm text-white/80 mb-4'>
                        {box.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            type='button'
            onClick={scrollPrev}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 rounded-full p-3 text-black hover:bg-yellow-500 transition-colors z-10'
            aria-label='Previous slide'
          >
            <ChevronLeft className='w-6 h-6' />
          </button>
          <button
            type='button'
            onClick={scrollNext}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 rounded-full p-3 text-black hover:bg-yellow-500 transition-colors z-10'
            aria-label='Next slide'
          >
            <ChevronRight className='w-6 h-6' />
          </button>
        </div>

        {/* Trust signal and CTA */}
        <div className='text-center'>
          <div className='flex justify-center items-center gap-1 mb-4'>
            {['star1', 'star2', 'star3', 'star4', 'star5'].map((starId) => (
              <Star
                key={starId}
                className='h-4 w-4 text-yellow-400 fill-yellow-400'
              />
            ))}
            <span className='ml-2 text-white'>
              Perfect for retailers and distributors
            </span>
          </div>
          <Button
            size='lg'
            className='bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-8 py-6'
            asChild
          >
            <a href='/catalogue.pdf' target='_blank' rel='noopener noreferrer'>
              See Catalogue <ChevronRight className='ml-2 h-4 w-4' />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
