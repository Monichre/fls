'use client'

import {useRef} from 'react'
import Image from 'next/image'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Button} from '@/components/ui/button'
import {ChevronRight, ChevronLeft, ShoppingCart, Star} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import {useParallax} from '@/hooks/useParallax'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// More detailed lighter data with benefits
const lighters = [
  {
    id: 0,
    name: 'Inferno Red',
    description:
      'Bold and powerful, with striking red accents. Features our signature wind-resistant technology for reliable flame in any condition.',
    image: '/lighter-black-and-red.avif',
    color: 'bg-red-500/20',
    price: '$14.99',
    feature: 'Wind-Resistant',
    inStock: true,
  },
  {
    id: 1,
    name: 'Solar Flare Yellow',
    description:
      'Vibrant yellow design with high visibility. The ergonomic curved base fits perfectly in your hand for comfortable, secure grip.',
    image: '/lighter-black-and-yellow.avif',
    color: 'bg-yellow-500/20',
    price: '$14.99',
    feature: 'Ergonomic Grip',
    inStock: true,
  },
  {
    id: 2,
    name: 'Electric Blue',
    description:
      'Energetic blue with our premium high-capacity fuel chamber. Get up to 1200 ignitions from a single lighter - reliability you can count on.',
    image: '/lighter-black-and-blue.avif',
    color: 'bg-blue-500/20',
    price: '$14.99',
    feature: '1200 Ignitions',
    inStock: true,
  },
  {
    id: 3,
    name: 'Classic Black',
    description:
      'Sleek all-black design with subtle texture. Perfect for everyday use with our signature curved base and reliable wind-resistant flame technology.',
    image: '/interface_large.png',
    color: 'bg-blue-500/20',
    price: '$13.99',
    feature: 'Everyday Reliable',
    inStock: true,
  },
  {
    id: 4,
    name: 'Royal Purple',
    description:
      'Luxurious purple gradient with premium finish. Limited edition design combines sophistication with our trusted FLS technology.',
    image: '/dashboard_medium.png',
    color: 'bg-purple-500/20',
    price: '$16.99',
    feature: 'Limited Edition',
    inStock: false,
  },
]

interface LighterCollectionProps {
  prefersReducedMotion?: boolean
  isMobile?: boolean
}

export function LighterCollection({
  prefersReducedMotion = false,
  isMobile = false,
}: LighterCollectionProps) {
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
  useParallax(carouselRef, {
    prefersReducedMotion,
    isMobile,
    debug: false, // Set to false in production
    target: '.embla__slide',
    stagger: true,
    scale: true,
    yDistance: isMobile ? 25 : 50,
    scrub: 0.7,
  })

  // Apply parallax to content
  useParallax(contentRef, {
    prefersReducedMotion,
    isMobile,
    target: '.collection-content',
    yDistance: isMobile ? -15 : -30, // Move in opposite direction
    opacity: true,
    scrub: 0.5,
  })

  return (
    <section
      ref={sectionRef}
      id='lighter-collection'
      className='relative bg-zinc-900 py-20 md:py-32 overflow-hidden'
    >
      <div className='container mx-auto px-4 md:px-6'>
        {/* Content */}
        <div ref={contentRef} className='max-w-3xl mb-12 md:mb-20'>
          <h2 className='collection-content text-4xl md:text-6xl font-bold text-yellow-400 mb-6'>
            Premium FLS Lighters Collection
          </h2>
          <p className='collection-content text-lg md:text-xl text-zinc-300 mb-6'>
            FLS brings you a vibrant range of high-performance lighters that
            combine reliable wind-resistant technology with ergonomic comfort.
            Each lighter is crafted to fit perfectly in your hand while
            delivering up to 1200 ignitions of dependable flame.
          </p>
          <p className='collection-content text-lg md:text-xl text-zinc-300 mb-8'>
            Whether you're camping in the wilderness, grilling in your backyard,
            or need a reliable lighter for everyday use, our collection offers
            the perfect balance of style, functionality, and durability.
          </p>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className='relative px-4 md:px-12 mb-12'>
          <div className='embla overflow-hidden' ref={emblaRef}>
            <div className='embla__container flex'>
              {lighters.map((lighter) => (
                <div
                  key={lighter.id}
                  className='embla__slide flex-[0_0_280px] md:flex-[0_0_400px] px-4'
                >
                  <div
                    className={`relative group rounded-2xl p-8 h-[500px] md:h-[600px] ${lighter.color} backdrop-blur-xl transition-all duration-300 hover:scale-105`}
                  >
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl' />

                    {/* Feature badge */}
                    {lighter.feature && (
                      <div className='absolute top-6 right-6 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium z-10'>
                        {lighter.feature}
                      </div>
                    )}

                    {/* Limited stock badge */}
                    {!lighter.inStock && (
                      <div className='absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10'>
                        Limited Stock
                      </div>
                    )}

                    <Image
                      src={lighter.image || '/placeholder.svg'}
                      alt={`FLS ${lighter.name} Lighter - Wind Resistant Performance Lighter`}
                      fill
                      className='object-contain p-4 lighter-item'
                      quality={100}
                      priority
                    />

                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white bg-black/60 backdrop-blur-sm rounded-b-2xl'>
                      <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-xl font-bold'>{lighter.name}</h3>
                        <span className='text-yellow-400 font-bold'>
                          {lighter.price}
                        </span>
                      </div>
                      <p className='text-sm text-white/80 mb-4'>
                        {lighter.description}
                      </p>
                      {/* <Button className='w-full bg-yellow-400 hover:bg-yellow-500 text-black rounded-full'>
                        Add to Cart <ShoppingCart className='ml-2 h-4 w-4' />
                      </Button> */}
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
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className='h-4 w-4 text-yellow-400 fill-yellow-400'
              />
            ))}
            <span className='ml-2 text-white'>
              Trusted by thousands of customers
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
