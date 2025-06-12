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

interface WelcomeEmailNewTemplateProps {
  customerName?: string
  companyName?: string
  shopUrl?: string
  demoUrl?: string
  instagramUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  founderNames?: string
  phoneNumber?: string
  email?: string
  websiteUrl?: string // Added for footer consistency
  unsubscribeUrl?: string
  privacyUrl?: string
  termsUrl?: string
  year?: string
}

const main = {
  backgroundColor: '#2A2A2A', // Dark gray background
  color: '#E0E0E0', // Light text
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
}

const heading = {
  fontSize: '32px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#FFD700', // FLS Yellow
  margin: '30px 0',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#C0C0C0', // Lighter gray for readability
  padding: '0 20px',
}

const sectionHighlighted = {
  backgroundColor: '#383838', // Slightly lighter dark section
  padding: '20px',
  margin: '20px 0',
  borderRadius: '8px',
}

const buttonStyle = {
  backgroundColor: '#FFD700', // FLS Yellow
  borderRadius: '6px',
  color: '#1A1A1A', // Dark text on yellow button
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '10px 5px',
}

const featureSection = {
  textAlign: 'center' as const,
  padding: '20px 0',
}

const featureIcon = {
  width: '48px',
  height: '48px',
  margin: '0 auto 10px auto',
}

const featureTitle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#FFFFFF', // White for feature titles
  marginBottom: '5px',
}

const socialIcon = {
  width: '32px',
  height: '32px',
  margin: '0 8px',
}

export const WelcomeEmailNewTemplate: React.FC<
  Readonly<WelcomeEmailNewTemplateProps>
> = ({
  customerName = 'Valued Retailer',
  companyName = 'FLS USA',
  shopUrl = 'https://flsusa.shop/wholesale',
  demoUrl = 'https://flsusa.shop/virtual-demo',
  instagramUrl = 'https://instagram.com/flsusa',
  facebookUrl = 'https://facebook.com/flsusa',
  twitterUrl = 'https://twitter.com/flsusa',
  founderNames = 'Ibrahim, Bradly & Samuel',
  phoneNumber = '979-488-9207',
  email = 'support@flsusa.shop',
  websiteUrl = 'https://flsusa.shop',
  unsubscribeUrl = 'https://flsusa.shop/unsubscribe',
  privacyUrl = 'https://flsusa.shop/privacy',
  termsUrl = 'https://flsusa.shop/terms',
  year = new Date().getFullYear().toString(),
}) => (
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
      <Preview>Welcome to the FLS USA Family, {customerName}!</Preview>
      <Body style={main}>
        <Container style={container}>
          <EmailHeader
            logoUrl='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logos/fls-logo-yellow-black-bg.png'
            companyName={companyName}
            tagline='SPARKING SUCCESS TOGETHER'
            headerBackgroundColor='#1A1A1A'
            taglineColor='#FFD700'
          />

          <Section style={{padding: '20px'}}>
            <Heading style={heading}>Welcome Aboard, {customerName}!</Heading>
            <Text style={paragraph}>
              On behalf of the entire team at {companyName}, including our
              founders {founderNames}, we're thrilled to welcome you to our
              network of esteemed retailers! We're passionate about creating
              high-quality, innovative lighters that your customers will love.
            </Text>
            <Text style={paragraph}>
              We're committed to your success and look forward to a prosperous
              partnership.
            </Text>
          </Section>

          <Section style={sectionHighlighted}>
            <Heading
              as='h2'
              style={{...heading, fontSize: '24px', margin: '0 0 20px 0'}}
            >
              Getting Started with FLS
            </Heading>
            <Row style={{textAlign: 'center' as const}}>
              <Column>
                <Link href={shopUrl} style={buttonStyle}>
                  Browse Wholesale Catalog
                </Link>
              </Column>
              <Column>
                <Link
                  href={demoUrl}
                  style={{
                    ...buttonStyle,
                    backgroundColor: '#555555',
                    color: '#FFFFFF',
                  }}
                >
                  Request a Product Demo
                </Link>
              </Column>
            </Row>
            <Text
              style={{
                ...paragraph,
                textAlign: 'center' as const,
                marginTop: '20px',
              }}
            >
              Explore our latest collections and take advantage of exclusive
              retailer pricing.
            </Text>
          </Section>

          <Section style={featureSection}>
            <Heading
              as='h2'
              style={{...heading, fontSize: '24px', margin: '0 0 20px 0'}}
            >
              Why Partner with FLS?
            </Heading>
            <Row>
              <Column style={{width: '33%', padding: '0 10px'}}>
                <Img
                  src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/icons/innovation.png'
                  alt='Innovation Icon'
                  style={featureIcon}
                />
                <Text style={featureTitle}>Innovative Designs</Text>
                <Text style={paragraph}>
                  Constantly evolving product lines.
                </Text>
              </Column>
              <Column style={{width: '33%', padding: '0 10px'}}>
                <Img
                  src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/icons/support.png'
                  alt='Support Icon'
                  style={featureIcon}
                />
                <Text style={featureTitle}>Dedicated Support</Text>
                <Text style={paragraph}>Here to help you succeed.</Text>
              </Column>
              <Column style={{width: '33%', padding: '0 10px'}}>
                <Img
                  src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/icons/quality.png'
                  alt='Quality Icon'
                  style={featureIcon}
                />
                <Text style={featureTitle}>Premium Quality</Text>
                <Text style={paragraph}>Reliable and durable products.</Text>
              </Column>
            </Row>
          </Section>

          <Section style={{textAlign: 'center' as const, padding: '20px'}}>
            <Img
              src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/lifestyle/fls-adventure-flame.png'
              alt='FLS Lighter demonstrating windproof flame outdoors'
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '8px',
                margin: '0 auto 20px auto',
              }}
            />
            <Text style={paragraph}>
              Our lighters are built for performance and style, ensuring
              customer satisfaction.
            </Text>
          </Section>

          <Section style={{textAlign: 'center' as const, padding: '20px 0'}}>
            <Heading
              as='h3'
              style={{...heading, fontSize: '20px', margin: '0 0 15px 0'}}
            >
              Connect With Us
            </Heading>
            <Link href={instagramUrl}>
              <Img
                src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/social/instagram-icon-yellow.png'
                alt='Instagram'
                style={socialIcon}
              />
            </Link>
            <Link href={facebookUrl}>
              <Img
                src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/social/facebook-icon-yellow.png'
                alt='Facebook'
                style={socialIcon}
              />
            </Link>
            <Link href={twitterUrl}>
              <Img
                src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/social/twitter-icon-yellow.png'
                alt='Twitter'
                style={socialIcon}
              />
            </Link>
          </Section>

          <EmailFooter
            companyName={companyName}
            phoneNumber={phoneNumber}
            email={email}
            websiteUrl={websiteUrl}
            address='123 Spark Street, Houston, TX 77001'
            year={year}
            unsubscribeUrl={unsubscribeUrl}
            privacyUrl={privacyUrl}
            termsUrl={termsUrl}
            footerBackgroundColor='#1A1A1A'
            footerTextColor='#BDBDBD'
            footerLinkColor='#FFD700'
          />
        </Container>
      </Body>
    </Html>
  </Tailwind>
)

export default WelcomeEmailNewTemplate
