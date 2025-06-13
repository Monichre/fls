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
  Font,
} from '@react-email/components'
import {EmailFonts, FONT_FAMILIES} from './styles'
import type React from 'react'
import {EmailFooter} from './ui/email-footer'

interface SignatureSeriesLaunchProps {
  customerName?: string
  productName?: string
  mainHeadline?: string
  introParagraph1?: string
  introParagraph2?: string
  heroImageUrl?: string
  feature1?: string
  feature2?: string
  feature3?: string
  feature4?: string
  feature5?: string
  targetAudience1?: string
  targetAudience2?: string
  targetAudience3?: string
  limitedQuantity?: string
  urgencyMessage?: string
  shopUrl?: string
  secureUrl?: string // For "Secure Yours Now" button
  companyName?: string
  phoneNumber?: string
  email?: string
  websiteUrl?: string // Added for footer consistency
}

const main = {
  backgroundColor: '#0a0a0a', // Even darker, premium black
  color: '#f0f0f0',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '620px', // Slightly wider for a premium feel
  maxWidth: '100%',
}

const headerSection = {
  padding: '20px',
  textAlign: 'center' as const,
  borderBottom: '1px solid #333333',
}

const logo = {
  width: '80px', // Larger logo for premium branding
  height: '80px',
  margin: '0 auto',
}

const productNameHeader = {
  fontSize: '20px',
  color: '#D4AF37', // Gold color for product name
  fontWeight: 'normal',
  letterSpacing: '1px',
  margin: '10px 0 0 0',
}

const mainHeadlineStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#FFFFFF',
  textAlign: 'center' as const,
  margin: '30px 20px 10px 20px',
  lineHeight: '1.2',
}

const introParagraphStyle = {
  fontSize: '14px', // Slightly larger for readability
  lineHeight: '28px',
  color: '#cccccc',
  padding: '0 30px',
  textAlign: 'center' as const,
  marginBottom: '20px',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const heroImageStyle = {
  width: '100%',
  maxWidth: '',
  borderRadius: '4px',
  margin: '20px auto',
  height: '300px',
  objectFit: 'contain',
  display: 'block',
  border: '2px solid #D4AF37', // Gold border
}

const featuresSection = {
  backgroundColor: '#1a1a1a', // Dark section background
  padding: '30px',
  margin: '30px 0',
  borderRadius: '8px',
}

const featuresHeading = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#D4AF37',
  textAlign: 'center' as const,
  marginBottom: '25px',
}

const featureItem = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#e0e0e0',
  marginBottom: '15px',
  paddingLeft: '25px',
  position: 'relative' as const,
  fontFamily: FONT_FAMILIES.proximaNova,
}

const featureIcon = {
  color: '#D4AF37',
  position: 'absolute' as const,
  left: '0',
  top: '4px', // Adjust for alignment
}

const targetAudienceSection = {
  padding: '20px',
  margin: '30px 0',
}

const targetAudienceHeading = {
  fontSize: '22px',
  fontWeight: '600',
  color: '#FFFFFF',
  textAlign: 'center' as const,
  marginBottom: '20px',
}

const ctaSection = {
  textAlign: 'center' as const,
  padding: '30px 20px',
  backgroundColor: '#151515',
  borderRadius: '8px',
  margin: '30px 0',
}

const ctaButton = {
  backgroundColor: '#D4AF37', // Gold
  borderRadius: '5px',
  color: '#000000',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  padding: '15px 30px',
  display: 'inline-block',
  margin: '10px 0',
  border: '1px solid #B8860B', // Darker gold border
  fontFamily: FONT_FAMILIES.proximaNova,
}

const urgencyText = {
  fontSize: '15px',
  color: '#f7cb00', // Use brand yellow for urgency
  fontStyle: 'italic',
  marginTop: '20px',
  fontFamily: FONT_FAMILIES.proximaNova,
}

export const SignatureSeriesLaunchTemplate: React.FC<
  Readonly<SignatureSeriesLaunchProps>
> = ({
  customerName = 'Discerning Collector',
  productName = 'FLS Signature Series',
  mainHeadline = 'Experience Unrivaled Craftsmanship: The FLS Signature Series Has Arrived.',
  introParagraph1 = `Dear ${customerName}, we are thrilled to unveil the culmination of passion, precision, and performance – the ${productName}. This exclusive collection represents the pinnacle of our design philosophy, crafted for those who appreciate the finer things in life.`,
  introParagraph2 = `After ${'months'} of meticulous development and testing over ${'1500'} ignitions per lighter, we've created a lighter that's not just a tool, but a statement.`,
  heroImageUrl = 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/dual-lighters-DDbYuPzwTH53bubLp1hGXt4Hjmr7OC.png',
  feature1 = 'Performs reliably in extreme conditions: wind, rain, or shine.',
  feature2 = 'Durable, weighted feel with a sophisticated, hand-polished finish.',
  feature3 = 'Our most comfortable and ergonomic grip yet, designed for effortless use.',
  feature4 = 'Exclusive, limited-edition designs not available in our standard collection.',
  feature5 = 'Premium materials and enhanced internal mechanics for superior longevity.',
  targetAudience1 = 'Individuals seeking unparalleled reliability in challenging environments.',
  targetAudience2 = 'Connoisseurs who appreciate precision craftsmanship and limited edition pieces.',
  targetAudience3 = 'Those looking for a premium, functional gift that combines style and utility.',
  limitedQuantity = 'extremely limited quantities',
  urgencyMessage = `Don't miss your chance to own a piece of FLS history. With ${limitedQuantity} available, we anticipate this exclusive release will be highly sought after.`,
  shopUrl = 'https://flsusa.shop/signature-series',
  secureUrl = 'https://flsusa.shop/signature-series/secure-purchase',
  companyName = 'FLS USA',
  phoneNumber = '979-488-9207',
  email = 'concierge@flsusa.shop',
  websiteUrl = 'https://flsusa.shop',
}) => (
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
    <Preview>Introducing the Exclusive {productName}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Img
            src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logo-letters-gSmozzNAMp3Sh6gCRfEUplC5jsLPbt.png'
            alt={`${companyName} Logo`}
            style={logo}
          />
          <Text style={productNameHeader}>{productName.toUpperCase()}</Text>
        </Section>

        <Heading style={mainHeadlineStyle}>{mainHeadline}</Heading>
        <Text style={introParagraphStyle}>{introParagraph1}</Text>
        <Text style={introParagraphStyle}>{introParagraph2}</Text>

        <Img
          src={heroImageUrl}
          alt={`${productName} Hero Image`}
          style={heroImageStyle}
        />

        <Section style={featuresSection}>
          <Heading style={featuresHeading}>Exquisite Features</Heading>
          <Text style={featureItem}>
            <span style={featureIcon}>★</span> {feature1}
          </Text>
          <Text style={featureItem}>
            <span style={featureIcon}>★</span> {feature2}
          </Text>
          <Text style={featureItem}>
            <span style={featureIcon}>★</span> {feature3}
          </Text>
          <Text style={featureItem}>
            <span style={featureIcon}>★</span> {feature4}
          </Text>
          <Text style={featureItem}>
            <span style={featureIcon}>★</span> {feature5}
          </Text>
        </Section>

        <Section style={targetAudienceSection}>
          <Heading style={targetAudienceHeading}>Crafted For:</Heading>
          <Row>
            <Column
              style={{
                width: '33%',
                padding: '0 10px',
                textAlign: 'center' as const,
              }}
            >
              <Img
                src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0004-3A7V8j8jPDyu2PZXpTmN93grcedHmX.jpg'
                alt='Adventurer'
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '0 auto 10px auto',
                }}
              />
              <Text
                style={{...introParagraphStyle, fontSize: '14px', padding: 0}}
              >
                {targetAudience1}
              </Text>
            </Column>
            <Column
              style={{
                width: '33%',
                padding: '0 10px',
                textAlign: 'center' as const,
              }}
            >
              <Img
                src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0005-uIVw141m70Du8QxVFAswpUJUP42pJh.jpg'
                alt='Connoisseur'
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '0 auto 10px auto',
                }}
              />
              <Text
                style={{...introParagraphStyle, fontSize: '14px', padding: 0}}
              >
                {targetAudience2}
              </Text>
            </Column>
            <Column
              style={{
                width: '33%',
                padding: '0 10px',
                textAlign: 'center' as const,
              }}
            >
              <Img
                src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0006-1hwPEQIZvxt7bZ1RLLjeha6cZcqCSS.jpg'
                alt='Gifter'
                style={{
                  width: '50px',
                  height: '50px',
                  margin: '0 auto 10px auto',
                }}
              />
              <Text
                style={{...introParagraphStyle, fontSize: '14px', padding: 0}}
              >
                {targetAudience3}
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={ctaSection}>
          <Heading style={{...featuresHeading, marginBottom: '10px'}}>
            Secure Yours Today
          </Heading>
          <Text
            style={{
              ...introParagraphStyle,
              padding: '0 20px',
              marginBottom: '20px',
            }}
          >
            The {productName} is more than a lighter; it's an heirloom.
          </Text>
          <Link href={secureUrl} style={ctaButton}>
            RESERVE YOUR SIGNATURE LIGHTER
          </Link>
          <Text style={urgencyText}>{urgencyMessage}</Text>
          <Text
            style={{
              ...introParagraphStyle,
              fontSize: '14px',
              marginTop: '20px',
              padding: '0 20px',
            }}
          >
            Or,{' '}
            <Link href={shopUrl} style={{color: '#D4AF37'}}>
              explore the full collection details
            </Link>
            .
          </Text>
        </Section>

        <EmailFooter
          companyName={companyName}
          phoneNumber={phoneNumber}
          email={email}
          websiteUrl={websiteUrl}
          address='FLS Signature Atelier, Houston, TX'
          year={new Date().getFullYear().toString()}
          footerBackgroundColor='#0a0a0a'
          footerTextColor='#aaaaaa'
          footerLinkColor='#D4AF37'
        />
      </Container>
    </Body>
  </Html>
)

export default SignatureSeriesLaunchTemplate
