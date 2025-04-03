'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import {motion, AnimatePresence} from 'motion/react'
import {Menu, X} from 'lucide-react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'

const navItems = [
  {label: 'Home', href: '#hero'},
  {label: 'Explore', href: '#dual-section'},
  {label: 'Signature Design', href: '#signature-design'},
  {label: 'Lighter Collection', href: '#lighter-collection'},
  {label: 'Features', href: '#features'},
  {label: 'Contact', href: '#footer'},
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()

    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }

    // Get the target element
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      // Add offset for fixed header (adjust the value based on your header height)
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <AnimatePresence>
      <motion.header
        className='fixed top-[20px] left-0 right-0 z-50 transition-colors duration-300 bg-transparent'
        // initial={{ y: -100 }}
        // animate={{ y: 0 }}
        // transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex items-center justify-between h-16 md:h-20'>
            {/* Logo */}
            <Link
              href='/#home'
              className='flex items-center h-[75px] w-[75px] rounded-lg'
              onClick={(e) => scrollToSection(e, '#home')}
            >
              <Image src='/logo.png' alt='FLS Logo' width={55} height={55} />
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-4 bg-black px-6 py-2 rounded-full'>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className='text-sm font-medium text-white/80 hover:text-white transition-colors px-4 py-2'
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden text-white'
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Open menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}

        {mobileMenuOpen && (
          <motion.div
            className='fixed inset-0 bg-zinc-900 z-50 md:hidden'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
          >
            <div className='flex flex-col h-full p-6'>
              <div className='flex justify-between items-center mb-8'>
                <Link
                  href='/#home'
                  className='flex items-center'
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    scrollToSection(e, '#home')
                  }}
                >
                  <div className='bg-yellow-400 text-black font-bold text-xl p-2 rounded'>
                    FLS
                  </div>
                </Link>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-white'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className='h-6 w-6' />
                  <span className='sr-only'>Close menu</span>
                </Button>
              </div>

              <nav className='flex flex-col space-y-6 mt-8'>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: index * 0.1}}
                  >
                    <Link
                      href={item.href}
                      className='text-xl font-medium text-white/80 hover:text-white transition-colors'
                      onClick={(e) => scrollToSection(e, item.href)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </motion.header>
    </AnimatePresence>
  )
}
