import * as React from 'react'
import {Tailwind, Html, Head, Font} from '@react-email/components'
import {FONT_FAMILIES} from '../styles/fonts'

interface WholesalerEmailTemplateProps {
  name: string
  companyName: string
  businessEmail: string
  businessType: string
  phoneNumber?: string | null
}

const WholesalerEmailTemplate = ({
  name,
  companyName,
  businessEmail,

  phoneNumber,
}: WholesalerEmailTemplateProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily='Poppins'
          fallbackFontFamily='Arial'
          webFont={{
            url: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle='normal'
        />
        <Font
          fontFamily='Poppins'
          fallbackFontFamily='Arial'
          webFont={{
            url: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2',
            format: 'woff2',
          }}
          fontWeight={700}
          fontStyle='normal'
        />
      </Head>
      <Tailwind>
        <div
          style={{
            fontFamily: FONT_FAMILIES.proximaNova,
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            color: '#374151',
            backgroundColor: '#ffffff',
          }}
        >
          <h1
            style={{
              color: '#f7cb00',
              fontSize: '24px',

              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            FLS Early Access Program
          </h1>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              marginBottom: '20px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            Hello {name},
          </p>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              marginBottom: '20px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            We'd like to extend a warm welcome to you and{' '}
            <strong>{companyName}</strong>! Thank you for your interest in our
            early access program.
          </p>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              marginBottom: '20px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            As a valued distributor/wholesaler you'll be among the first to
            access our platform and new product offerings. Our team will reach
            out to you shortly at <strong>{businessEmail}</strong>
            {phoneNumber ? ` or ${phoneNumber}` : ''} to discuss how we can help
            maximize your business needs.
          </p>
          <div
            style={{
              backgroundColor: '#f8f9fa',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}
          >
            <p
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                margin: 0,
                fontFamily: FONT_FAMILIES.proximaNova,
              }}
            >
              <strong>Next Steps:</strong> Our business development team will
              contact you within the next 48 hours to schedule an introduction
              call.
            </p>
          </div>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              marginBottom: '20px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            Thank you for choosing FLS USA!
          </p>
          <div
            style={{
              marginTop: '30px',
              padding: '15px',
              borderTop: '1px solid #e5e7eb',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                fontFamily: FONT_FAMILIES.proximaNova,
              }}
            >
              &copy; {new Date().getFullYear()} FLS USA. All rights reserved.
            </p>
          </div>
        </div>
      </Tailwind>
    </Html>
  )
}

export default WholesalerEmailTemplate
