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
import {EmailFonts, FONT_FAMILIES} from '../styles'
import type React from 'react'
import {EmailHeader} from '../ui/email-header'
import {EmailFooter} from '../ui/email-footer'

interface FlsEmailTemplateProps {
  firstName?: string
  senderName?: string
  callToAction?: string
  companyName?: string
  phoneNumber?: string
  email?: string
  websiteUrl?: string
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
  fontFamily: FONT_FAMILIES.poppinsBlack,
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

const featureSection = {
  margin: '30px 0',
}

const featureText = {
  fontSize: '14px',
  lineHeight: '20px',
  paddingLeft: '10px',
  color: '#374151',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const badgeStyle = {
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: '5px',
  backgroundColor: '#FFFDE7', // Light yellow
  color: '#f59e0b',
  fontSize: '12px',
  fontWeight: 'bold',
  fontFamily: FONT_FAMILIES.proximaNova,
  marginRight: '10px',
  marginBottom: '10px',
}

const imageStyle = {
  borderRadius: '8px',
  margin: '20px 0',
  maxWidth: '100%',
}

const productGrid = {
  margin: '20px 0',
}

const productColumn = {
  padding: '0 10px',
  width: '33.33%',
  textAlign: 'center' as const,
}

const productImage = {
  maxWidth: '100%',
  borderRadius: '8px',
  marginBottom: '10px',
}

const productName = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '5px',
  color: '#111827',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const productDescription = {
  fontSize: '12px',
  color: '#6b7280',
  fontFamily: FONT_FAMILIES.proximaNova,
}

export const FlsEmailTemplate: React.FC<Readonly<FlsEmailTemplateProps>> = ({
  firstName = 'Valued Partner',
  senderName = 'The FLS Team',
  companyName = 'FLS USA',
  callToAction,
  phoneNumber = '979-488-9207',
  email = 'sales@gocounterculture.com',
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
    <Preview>Ignite Your Sales with FLS Windproof Lighters!</Preview>
    <Body style={main}>
      <Container style={container}>
        <EmailHeader
          logoUrl='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logo-FlkeAzCczUoYzWRjHD4I3GPl9zoPMu.png'
          companyName={companyName}
          tagline='SPARK THE EXCITEMENT'
        />

        <Section style={{padding: '30px'}}>
          <Heading style={heading}>
            Boost Your Profits with {companyName} Lighters!
          </Heading>
          <Text style={paragraph}>Dear {firstName},</Text>
          <Text style={paragraph}>
            I hope this email finds you well. My name is {senderName}, and I'm
            reaching out from {companyName} to introduce an exciting opportunity
            for your business. We specialize in high-quality, vibrant,
            wind-resistant, and long-lasting lighters.
          </Text>

          <Img
            src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0011-5NMgw6YixwjZAHHlXoJbV8JOn5KU5Y.jpg'
            width='540'
            height='300'
            alt='FLS Lighters Display Stand'
            style={imageStyle}
          />

          <Text style={paragraph}>
            Our lighters are designed to catch the eye and provide reliable
            performance, making them a favorite among consumers and a profitable
            addition for retailers.
          </Text>

          <Section style={featureSection}>
            <Row>
              <Column style={{width: '50%'}}>
                <Text>
                  <span style={badgeStyle}>DURABLE</span>
                </Text>
                <Text style={featureText}>Built for longevity.</Text>
              </Column>
              <Column style={{width: '50%'}}>
                <Text>
                  <span style={badgeStyle}>WINDPROOF</span>
                </Text>
                <Text style={featureText}>Reliable in all conditions.</Text>
              </Column>
            </Row>
            <Row style={{marginTop: '10px'}}>
              <Column style={{width: '50%'}}>
                <Text>
                  <span style={badgeStyle}>VIBRANT DESIGNS</span>
                </Text>
                <Text style={featureText}>Eye-catching and collectible.</Text>
              </Column>
              <Column style={{width: '50%'}}>
                <Text>
                  <span style={badgeStyle}>HIGH RATED (4.8/5)</span>
                </Text>
                <Text style={featureText}>Loved by customers.</Text>
              </Column>
            </Row>
          </Section>

          <Text style={paragraph}>
            We've seen retailers like yours significantly increase impulse buys
            and customer satisfaction by stocking FLS lighters.
          </Text>

          <Section style={productGrid}>
            <Heading
              as='h3'
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#111827',
                textAlign: 'left' as const,
                marginBottom: '15px',
                fontFamily: FONT_FAMILIES.poppinsBlack,
              }}
            >
              Featured Designs:
            </Heading>
            <Row>
              <Column style={productColumn}>
                <Img
                  src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0008-t9lh7Qrptxru5PLDR6kqYYz87qtajN.jpg'
                  alt='FLS Black and Red Lighter'
                  style={productImage}
                />
                <Text style={productName}>Crimson Blaze</Text>
                <Text style={productDescription}>Bold and fiery design.</Text>
              </Column>
              <Column style={productColumn}>
                <Img
                  src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0005-uIVw141m70Du8QxVFAswpUJUP42pJh.jpg'
                  alt='FLS Blue and Purple Lighter'
                  style={productImage}
                />
                <Text style={productName}>Azure Fusion</Text>
                <Text style={productDescription}>Cool and captivating.</Text>
              </Column>
              <Column style={productColumn}>
                <Img
                  src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0007-x6rAISi5vfeiRRD4QGbqCBF3OCAkhY.jpg'
                  alt='FLS Gold Lighter'
                  style={productImage}
                />
                <Text style={productName}>Golden Spark</Text>
                <Text style={productDescription}>Elegant and striking.</Text>
              </Column>
            </Row>
          </Section>

          <Text style={paragraph}>
            {callToAction ||
              'Would you be open to a brief 15-minute call next week to explore how FLS can ignite your sales?'}
          </Text>

          <Section style={{textAlign: 'center', marginTop: '30px'}}>
            <Link style={ctaButton} href={websiteUrl}>
              Learn More & Place an Order
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
)

export default FlsEmailTemplate
