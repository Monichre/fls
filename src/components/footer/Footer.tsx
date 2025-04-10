'use client'
import Link from 'next/link'
import {Facebook, Instagram, Twitter, Youtube} from 'lucide-react'
import {NewsletterSignup} from '@/components/newsletter-signup'
import {useResponsive} from '@/hooks'

export function Footer() {
  const {isMobile} = useResponsive({defaultBreakpoint: 'md'})

  console.log('🚀 ~ Footer ~ isMobile:', isMobile)

  return (
    <footer className='bg-zinc-900 border-t border-zinc-800' id='footer'>
      <div className='container mx-auto px-4 md:px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {isMobile ? null : (
            <div>
              <div className='bg-yellow-400 text-black font-bold text-xl p-2 rounded inline-block mb-4'>
                FLS
              </div>
              <p className='text-zinc-400 max-w-xs'>
                Premium quality lighters designed for reliability and style.
                Fire up your adventures with FLS.
              </p>
            </div>
          )}
          {isMobile && (
            <>
              <h3 className='text-lg font-semibold mb-0 md:mb-4 text-white'>
                Connect With Us
              </h3>
              <div className='my-2'>
                <NewsletterSignup />
              </div>
            </>
          )}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className='text-zinc-400 hover:text-white transition-colors'
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Support</h3>
            <ul className='space-y-2'>
              {['FAQ', 'Shipping', 'Returns', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className='text-zinc-400 hover:text-white transition-colors'
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {isMobile ? null : (
              <>
                <h3 className='text-lg font-semibold mb-4 text-white'>
                  Connect With Us
                </h3>
                <div className='my-2 footer-newsletter-signup'>
                  <NewsletterSignup />
                </div>
              </>
            )}
            <div className='flex space-x-4'>
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
            <div>
              <div className='bg-yellow-400 text-black font-bold text-xl p-2 rounded inline-block mb-4'>
                FLS
              </div>
              <p className='text-zinc-400 max-w-xs'>
                Premium quality lighters designed for reliability and style.
                Fire up your adventures with FLS.
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
