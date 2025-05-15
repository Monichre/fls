import type {Metadata} from 'next'
import {Poppins, Roboto, Roboto_Mono} from 'next/font/google'
import './globals.css'
// Import our CSS utilities
import '@/styles/mobile-optimizations.css'
import '@/styles/responsive-utils.css'

import {Footer} from '@/components/footer'
import {Navbar} from '@/components/navbar'
import {AppProviders} from '@/contexts/app-providers'
import {GoogleAnalytics} from '@next/third-parties/google'
import {Analytics} from '@vercel/analytics/react'

import localFont from 'next/font/local'

// Load local Poppins Black font
const poppinsBlack = localFont({
  src: [
    {
      path: './_fonts/poppins-black/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './_fonts/poppins-black/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './_fonts/poppins-black/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './_fonts/poppins-black/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './_fonts/poppins-black/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './_fonts/poppins-black/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './_fonts/poppins-black/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-poppins-black',
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
})

// Local font for Proxima Nova
const proximaNova = localFont({
  src: [
    {
      path: './_fonts/proxima-reg.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-proxima-nova',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FLS USA',
  description:
    'The parent company of FLS USA is CounterCulture. As founders, Ibrahim Najajra, Bradly Fadly and Samuel Habib have a passion for all things C-store that is matched only by their love of America. It’s their pioneering and innovative spirit that has driven their success as value product retailers and wholesalers. They understand, better than anyone, that C-store checkout areas are mini-ecosystems of their own. And through wise purchasing along with smart curating, they know exactly how to make each one of those places a success for all.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppProviders>
      <html lang='en'>
        <meta name='apple-mobile-web-app-title' content='FLS USA' />
        <body
          className={`${roboto.variable} ${poppins.variable} ${poppinsBlack.variable} ${proximaNova.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Footer />

          {/* GoogleAnalytics */}
          <GoogleAnalytics gaId={process.env.GOOGLE_TAG_ID as string} />
          <Analytics />
        </body>
      </html>
    </AppProviders>
  )
}
