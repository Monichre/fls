import * as React from 'react'

interface NewsletterEmailTemplateProps {
  name: string
}

export const NewsletterEmailTemplate = ({
  name,
}: NewsletterEmailTemplateProps) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        color: '#333',
      }}
    >
      <h1 style={{color: '#F7CB00', fontSize: '24px', marginBottom: '20px'}}>
        FLS Newsletter
      </h1>
      <p style={{fontSize: '16px', lineHeight: '1.5', marginBottom: '20px'}}>
        Hello {name}!
      </p>
      <p style={{fontSize: '16px', lineHeight: '1.5', marginBottom: '20px'}}>
        Welcome to the FLS Newsletter. You're now part of our community and will
        receive updates on our latest products, industry news, and exclusive
        offers.
      </p>
      <p style={{fontSize: '16px', lineHeight: '1.5', marginBottom: '20px'}}>
        Thank you for subscribing!
      </p>
      <div
        style={{
          marginTop: '30px',
          padding: '15px',
          borderTop: '1px solid #eee',
        }}
      >
        <p style={{fontSize: '14px', color: '#666'}}>
          &copy; {new Date().getFullYear()} FLS USA. All rights reserved.
        </p>
      </div>
    </div>
  )
}
