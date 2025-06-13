import {Tailwind} from '@react-email/components'
import Image from 'next/image'
import type React from 'react'

interface EmailHeaderProps {
  logoUrl?: string
  companyName?: string
  tagline?: string
  headerBackgroundColor?: string
  taglineColor?: string
}

export const EmailHeader: React.FC<EmailHeaderProps> = ({
  companyName = 'FLS USA',
  tagline = 'SPARK THE EXCITEMENT',
  headerBackgroundColor = '#222222',
  taglineColor = '#FFFFFF',
}) => {
  return (
    <div
      style={{
        backgroundColor: headerBackgroundColor,
        padding: '16px 24px',
      }}
      className=''
    >
      <img
        src={
          'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logo-FlkeAzCczUoYzWRjHD4I3GPl9zoPMu.png'
        }
        alt={`${companyName} Logo`}
        className='mx-auto  w-16 h-16 self-center'
        width={64}
        height={64}
        style={{
          margin: '0 auto',
          width: '64px',
          height: '64px',
          display: 'block',
        }}
      />
      <div className='w-full flex flex-row items-center justify-center align-middle items-center'>
        <div className='w-full flex flex-row items-center justify-center align-middle items-center'></div>
      </div>
    </div>
  )
}
