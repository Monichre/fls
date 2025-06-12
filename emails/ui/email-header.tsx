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
      className='flex flex-col items-center justify-center align-middle items-center'
    >
      <img
        src={
          'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logo-FlkeAzCczUoYzWRjHD4I3GPl9zoPMu.png'
        }
        alt={`${companyName} Logo`}
        className='mx-auto w-16 h-16 block'
        width={64}
        height={64}
      />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{marginLeft: '12px', color: taglineColor}}>
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                display: 'block',
                lineHeight: '1.2',
                fontFamily: 'var(--font-poppins-black)',
              }}
            >
              {tagline.split(' ').slice(0, -1).join(' ')}
            </span>
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                display: 'block',
                lineHeight: '1.2',
                fontFamily: 'var(--font-poppins-black)',
              }}
            >
              {tagline.split(' ').slice(-1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
