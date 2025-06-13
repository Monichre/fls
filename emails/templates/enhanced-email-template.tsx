import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Tailwind,
  Font,
} from '@react-email/components'
import {EmailFonts, FONT_FAMILIES} from '../styles'
import type React from 'react'

import {EmailHeader} from '../ui/email-header'
import {EmailFooter} from '../ui/email-footer'

interface EnhancedEmailTemplateProps {
  recipientName: string
  senderName?: string
  callToAction?: string
  templateType?: 'welcome' | 'product' | 'newsletter' | 'signature'
  companyName?: string
  websiteUrl?: string
  phoneNumber?: string
  email?: string
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
}

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '30px',
  marginBottom: '20px',
  color: '#111827',
  textAlign: 'center' as const,
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#374151',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const ctaButton = {
  backgroundColor: '#f7cb00',
  borderRadius: '5px',
  color: '#000000',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 0',
  margin: '20px auto',
  width: '250px',
  fontFamily: FONT_FAMILIES.proximaNova,
}

export const EnhancedEmailTemplate: React.FC<
  Readonly<EnhancedEmailTemplateProps>
> = ({
  recipientName,
  senderName = 'The FLS Team',
  callToAction = 'Learn More & Place an Order',
  templateType = 'general',
  companyName = 'FLS USA',
  websiteUrl = 'https://flsusa.shop',
  phoneNumber = '979-488-9207',
  email = 'sales@flsusa.shop',
}) => {
  // Get content by section for the specific template type
  const getContentBySection = (section: string) => {
    try {
      const content = allEmailContents?.find?.(
        (item) =>
          item.section === section &&
          (item.templateType === templateType ||
            item.templateType === 'general')
      )
      return content?.body?.html || ''
    } catch (error) {
      console.warn('Content not available:', section)
      return ''
    }
  }

  const companyInfo = getContentBySection('company-info')
  const features = getContentBySection('features')
  const valueProposition = getContentBySection('value-proposition')
  const footerContent = getContentBySection('footer')

  return (
    <Tailwind>
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
        <Preview>Welcome to {companyName}!</Preview>
        <Body style={main}>
          <Container style={container}>
            <EmailHeader
              logoUrl='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logo-FlkeAzCczUoYzWRjHD4I3GPl9zoPMu.png'
              companyName={companyName}
              tagline='SPARK THE EXCITEMENT'
            />

            <Section style={{padding: '30px'}}>
              <Heading style={heading}>
                Welcome to {companyName}, {recipientName}!
              </Heading>

              <Text style={paragraph}>Dear {recipientName},</Text>

              <Text style={paragraph}>
                Greetings from {senderName}! We're excited to introduce you to
                our premium lighter collection.
              </Text>

              {companyInfo && (
                <Section style={{margin: '30px 0'}}>
                  <div dangerouslySetInnerHTML={{__html: companyInfo}} />
                </Section>
              )}

              {valueProposition && (
                <Section style={{margin: '30px 0'}}>
                  <div dangerouslySetInnerHTML={{__html: valueProposition}} />
                </Section>
              )}

              {features && (
                <Section style={{margin: '30px 0'}}>
                  <div dangerouslySetInnerHTML={{__html: features}} />
                </Section>
              )}

              <Section style={{textAlign: 'center', marginTop: '30px'}}>
                <Link style={ctaButton} href={websiteUrl}>
                  {callToAction}
                </Link>
              </Section>
            </Section>

            <EmailFooter
              companyName={companyName}
              phoneNumber={phoneNumber}
              email={email}
              websiteUrl={websiteUrl}
              address='123 Spark Street, Houston, TX 77001'
              year={new Date().getFullYear().toString()}
            />
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}

export default EnhancedEmailTemplate
