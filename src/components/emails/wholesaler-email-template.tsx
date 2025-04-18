import * as React from 'react'

interface WholesalerEmailTemplateProps {
  name: string
  companyName: string
  businessEmail: string
  businessType: string
}

export const WholesalerEmailTemplate = ({
  name,
  companyName,
  businessEmail,
  businessType,
}: WholesalerEmailTemplateProps) => {
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
        FLS Early Access Program
      </h1>
      <p style={{fontSize: '16px', lineHeight: '1.5', marginBottom: '20px'}}>
        Hello {name},
      </p>
      <p style={{fontSize: '16px', lineHeight: '1.5', marginBottom: '20px'}}>
        We'd like to extend a warm welcome to you and{' '}
        <strong>{companyName}</strong>! Thank you for your interest in our early
        access program.
      </p>
      <p style={{fontSize: '16px', lineHeight: '1.5', marginBottom: '20px'}}>
        As a {businessType}, you'll be among the first to access our platform
        and new product offerings. Our team will reach out to you shortly at{' '}
        <strong>{businessEmail}</strong> to discuss how we can help maximize
        your business needs in the {businessType} industry.
      </p>
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
      >
        <p style={{fontSize: '16px', lineHeight: '1.5', margin: 0}}>
          <strong>Next Steps:</strong> Our business development team will
          contact you within the next 48 hours to schedule an introduction call.
        </p>
      </div>
      <p style={{fontSize: '16px', lineHeight: '1.5', marginBottom: '20px'}}>
        Thank you for choosing FLS USA!
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
