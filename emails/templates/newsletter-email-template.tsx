import * as React from 'react'
import {Tailwind, Html, Head, Font} from '@react-email/components'
import {EmailFonts, FONT_FAMILIES} from '../styles'
import {
  EMAIL_FONTS,
  EMAIL_COLORS,
  EMAIL_STYLES,
  EMAIL_TYPOGRAPHY,
  EMAIL_SPACING,
} from '../styles/email-theme'

interface NewsletterEmailTemplateProps {
  name: string
}

export const NewsletterEmailTemplate = ({
  name,
}: NewsletterEmailTemplateProps) => {
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
            fontFamily: EMAIL_FONTS.body,
            maxWidth: '600px',
            margin: '0 auto',
            padding: EMAIL_SPACING.lg,
            color: EMAIL_COLORS.foreground,
            backgroundColor: EMAIL_COLORS.background,
          }}
        >
          <h1
            style={{
              color: EMAIL_COLORS.brandYellow,
              fontSize: EMAIL_TYPOGRAPHY.fontSize['2xl'],
              fontFamily: EMAIL_FONTS.heading,
              fontWeight: EMAIL_TYPOGRAPHY.fontWeight.bold,
              marginBottom: EMAIL_SPACING.lg,
            }}
          >
            FLS Newsletter
          </h1>
          <p
            style={{
              fontSize: EMAIL_TYPOGRAPHY.fontSize.base,
              lineHeight: EMAIL_TYPOGRAPHY.lineHeight.normal,
              marginBottom: EMAIL_SPACING.lg,
              fontFamily: EMAIL_FONTS.body,
            }}
          >
            Hello {name}!
          </p>
          <p
            style={{
              fontSize: EMAIL_TYPOGRAPHY.fontSize.base,
              lineHeight: EMAIL_TYPOGRAPHY.lineHeight.normal,
              marginBottom: EMAIL_SPACING.lg,
              fontFamily: EMAIL_FONTS.body,
            }}
          >
            Welcome to the FLS Newsletter. You're now part of our community and
            will receive updates on our latest products, industry news, and
            exclusive offers.
          </p>
          <p
            style={{
              fontSize: EMAIL_TYPOGRAPHY.fontSize.base,
              lineHeight: EMAIL_TYPOGRAPHY.lineHeight.normal,
              marginBottom: EMAIL_SPACING.lg,
              fontFamily: EMAIL_FONTS.body,
            }}
          >
            Thank you for subscribing!
          </p>
          <div
            style={{
              marginTop: EMAIL_SPACING.xl,
              padding: EMAIL_SPACING.md,
              borderTop: `1px solid ${EMAIL_COLORS.border}`,
            }}
          >
            <p
              style={{
                fontSize: EMAIL_TYPOGRAPHY.fontSize.sm,
                color: EMAIL_COLORS.mutedForeground,
                fontFamily: EMAIL_FONTS.body,
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
