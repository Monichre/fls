'use client'
import Link from 'next/link'
import {Facebook, Instagram, MailIcon, Twitter, Youtube} from 'lucide-react'
import {NewsletterSignup} from '@/components/newsletter-signup'
import {useResponsive} from '@/hooks'
import {Logo} from '@/components/header'
import Image from 'next/image'
import {navItems} from '@/lib/nav-links'
import {SignUpForm} from '@/components/sign-up/signup-form'
export function Footer() {
  const {isMobile} = useResponsive({defaultBreakpoint: 'md'})

  console.log('🚀 ~ Footer ~ isMobile:', isMobile)

  return (
    <footer className='bg-zinc-900 border-t border-zinc-800' id='footer'>
      <div className='container mx-auto px-4 md:px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {isMobile ? null : (
            <div>
              <Image src='/logo.png' alt='FLS Logo' width={55} height={55} />
              <p className='text-zinc-400 max-w-xs mt-4'>
                1040 S RAYMOND AVE S. E FULLERTON, CA 92831
              </p>
            </div>
          )}
          {isMobile && (
            <div className='footer-newsletter-signup-2'>
              <h3 className='text-lg font-semibold mb-0 md:mb-4 text-white'>
                Connect With Us
              </h3>
              <div className='my-2'>
                <SignUpForm />
              </div>
            </div>
          )}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {navItems.map((item) => {
                if (item.label.toLowerCase() === 'contact') return null
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className='text-zinc-400 hover:text-white transition-colors'
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Support</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='mailto:SALES@gocounterculture.com'
                  className='text-zinc-400 hover:text-white transition-colors'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            {isMobile ? null : (
              <>
                <h3 className='text-lg font-semibold mb-4 text-white'>
                  Connect With Us
                </h3>
                <div className='my-2 footer-newsletter-signup'>
                  <SignUpForm />
                </div>
              </>
            )}
            <div className='flex space-x-4 mt-8'>
              {[
                {icon: Facebook, label: 'Facebook'},
                {icon: Instagram, label: 'Instagram'},
                {icon: Twitter, label: 'Twitter'},
                {icon: Youtube, label: 'YouTube'},
              ].map((social) => (
                <Link
                  key={social.label}
                  href='#'
                  className='text-zinc-400 hover:text-white transition-colors'
                  aria-label={social.label}
                >
                  <social.icon className='h-5 w-5' />
                </Link>
              ))}
            </div>
          </div>
          {isMobile && (
            <div className='flex flex-row items-center justify-center gap-2 md:flex-col'>
              <Image src='/logo.png' alt='FLS Logo' width={55} height={55} />
              <p className='text-white max-w-xs'>
                1040 S RAYMOND AVE S. E FULLERTON, CA 92831
              </p>
            </div>
          )}
        </div>

        <div className='border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-zinc-400 text-sm'>
            © {new Date().getFullYear()} FLS. All rights reserved.
          </p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link
              href='/terms'
              className='text-zinc-400 hover:text-white text-sm transition-colors'
            >
              Terms of Service
            </Link>
            <Link
              href='/privacy'
              className='text-zinc-400 hover:text-white text-sm transition-colors'
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
