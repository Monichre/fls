'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
import {
  Menu,
  X,
  Mail,
  Phone,
  ChevronDown,
  Video,
  MessageSquare,
} from 'lucide-react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import {useScrollToSection} from '@/hooks/useScrollToSection'
import {navItems} from '@/lib/nav-links'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Navbar() {
  const {isScrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection} =
    useScrollToSection()

  const openEmailClient = (provider: string) => {
    const email = 'sales@gocounterculture.com'
    const subject = 'Inquiry from Website'

    switch (provider) {
      case 'gmail':
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`,
          '_blank'
        )
        break
      case 'outlook':
        window.open(
          `https://outlook.office.com/mail/deeplink/compose?to=${email}&subject=${subject}`,
          '_blank'
        )
        break
      case 'yahoo':
        window.open(
          `https://compose.mail.yahoo.com/?to=${email}&subject=${subject}`,
          '_blank'
        )
        break
      default:
        window.location.href = `mailto:${email}?subject=${subject}`
    }
  }

  const openCallingApp = (app: string) => {
    // Format phone number (remove hyphens for some services)
    const phoneNumber = '9794889207'
    const formattedPhone = `+1${phoneNumber}` // Add country code for international format

    switch (app) {
      case 'phone':
        window.location.href = `tel:${phoneNumber}`
        break
      case 'whatsapp':
        window.open(
          `https://wa.me/${formattedPhone.replace(/[+\s-]/g, '')}`,
          '_blank'
        )
        break
      case 'skype':
        window.location.href = `skype:${formattedPhone}?call`
        break
      case 'facetime':
        // Note: This only works on Apple devices
        window.location.href = `facetime://${formattedPhone}`
        break
      case 'telegram':
        window.open(`https://t.me/${phoneNumber}`, '_blank')
        break
      case 'googlevoice':
        window.open(
          `https://voice.google.com/calls?recipient=${phoneNumber}`,
          '_blank'
        )
        break
      case 'sms':
        window.location.href = `sms:${phoneNumber}`
        break
      default:
        window.location.href = `tel:${phoneNumber}`
    }
  }

  return (
    <>
      <motion.header
        className='fixed top-[20px] left-0 right-0 z-50 transition-colors duration-300 bg-transparent'
        // initial={{ y: -100 }}
        // animate={{ y: 0 }}
        // transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className='w-full px-12 relative'>
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
                  className='text-sm font-medium text-white hover:text-white transition-colors px-4 py-2'
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

          {/* Contact Sub Nav */}
          <div className='hidden md:flex justify-end space-x-2 mt-2'>
            <motion.div
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.3}}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    // size='sm'
                    className='bg-yellow-400 text-black border-zinc-700 hover:bg-black/90 hover:text-white backdrop-blur-sm rounded-full px-4 py-4'
                  >
                    <Mail className='h-4 w-4 mr-2' />
                    sales@gocounterculture.com
                    <ChevronDown className='h-4 w-4 ml-2' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-[240px]'>
                  <DropdownMenuItem onClick={() => openEmailClient('default')}>
                    Default Email App
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => openEmailClient('gmail')}>
                    Gmail
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => openEmailClient('outlook')}>
                    Outlook
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => openEmailClient('yahoo')}>
                    Yahoo Mail
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3, duration: 0.3}}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    // size='sm'
                    className='bg-yellow-400 text-black border-zinc-700 hover:bg-black/90 hover:text-white backdrop-blur-sm rounded-full px-4 py-4'
                  >
                    <Phone className='h-4 w-4 mr-2' />
                    979-488-9207
                    <ChevronDown className='h-4 w-4 ml-2' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-[180px]'>
                  <DropdownMenuItem onClick={() => openCallingApp('phone')}>
                    Phone Call
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={() => openCallingApp('googlevoice')}
                  >
                    Google Voice
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => openCallingApp('sms')}>
                    Send SMS
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
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
                  <AnimatePresence>
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -20}}
                        transition={{
                          delay: mobileMenuOpen ? index * 0.1 : 0,
                          duration: 0.2,
                        }}
                      >
                        <Link
                          href={item.href}
                          className='text-xl font-medium text-white/80 hover:text-white transition-colors'
                          onClick={(e) => {
                            setMobileMenuOpen(false)
                            scrollToSection(e, item.href)
                          }}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </nav>

                {/* Mobile Contact Buttons */}
                <div className='flex flex-col space-y-3 mt-12'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='outline'
                        className='bg-yellow-400 text-black border-zinc-700 hover:bg-black/70 hover:text-white backdrop-blur-sm'
                      >
                        <Mail className='h-4 w-4 mr-2' />
                        Email Us
                        <ChevronDown className='h-4 w-4 ml-2' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end' className='w-[200px]'>
                      <DropdownMenuItem
                        onClick={() => openEmailClient('default')}
                      >
                        Default Email App
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => openEmailClient('gmail')}
                      >
                        Gmail
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => openEmailClient('outlook')}
                      >
                        Outlook
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => openEmailClient('yahoo')}
                      >
                        Yahoo Mail
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='outline'
                        className='bg-yellow-400 text-black border-zinc-700 hover:bg-black/70 hover:text-white backdrop-blur-sm'
                      >
                        <Phone className='h-4 w-4 mr-2' />
                        Contact Us
                        <ChevronDown className='h-4 w-4 ml-2' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end' className='w-[180px]'>
                      <DropdownMenuItem onClick={() => openCallingApp('phone')}>
                        <Phone className='h-4 w-4 mr-2' />
                        Phone Call
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => openCallingApp('whatsapp')}
                      >
                        <MessageSquare className='h-4 w-4 mr-2' />
                        WhatsApp
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => openCallingApp('skype')}>
                        <Video className='h-4 w-4 mr-2' />
                        Skype
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => openCallingApp('facetime')}
                      >
                        <Video className='h-4 w-4 mr-2' />
                        FaceTime
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => openCallingApp('telegram')}
                      >
                        <MessageSquare className='h-4 w-4 mr-2' />
                        Telegram
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => openCallingApp('googlevoice')}
                      >
                        <Phone className='h-4 w-4 mr-2' />
                        Google Voice
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => openCallingApp('sms')}>
                        <MessageSquare className='h-4 w-4 mr-2' />
                        Send SMS
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
