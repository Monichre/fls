import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Font,
} from '@react-email/components'
import {EmailFonts, FONT_FAMILIES} from './styles'

interface EmailTemplateProps {
  firstName?: string
  senderName?: string
}

const baseUrl = 'https://flsusa.shop'

// Brand colors from the website
const colors = {
  primary: '#FFCC00', // FLS yellow
  background: '#1A1A1A', // Dark background
  text: '#FFFFFF', // White text
  textDark: '#1A1A1A', // Dark text
  border: '#FFCC00', // Yellow border
}

const BaseStyledTemplate = ({
  firstName = '{{FirstName}}',
  senderName = '{{SenderName}}',
}: EmailTemplateProps) => {
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
      <Preview>Ignite Your Sales with Windproof FLS Lighters</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={header}>
            <img
              src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WebP%20Image-LydqaoOurvIWA8TTlG8txeUCDNCpvE.webp'
              width='80'
              height='80'
              alt='FLS USA'
              style={logo}
              className='w-20 h-20 object-contain mx-auto block'
            />
          </Section>

          {/* Hero Section */}
          <Section style={heroSection}>
            <Heading style={heroHeading}>SPARK THE EXCITEMENT</Heading>
            <h2 style={heroSubheading}>
              Windproof, High-Performance Lighters for Adventure, Home &
              Everywhere in Between
            </h2>
          </Section>

          {/* Main Content */}
          <Section style={contentSection}>
            <Text style={paragraph}>
              Every great sale starts with a spark – and our FLS windproof
              lighters can provide it. FLS USA offers high-performance lighters
              designed to spark excitement at your checkout. These premium
              lighters are wind-resistant, long-lasting (up to 1,200 ignitions
              each), and feature an ergonomic curved base that fits perfectly in
              hand.
            </Text>

            {/* Product Showcase Section */}
            <Section style={productShowcaseSection}>
              <Heading as='h2' style={productShowcaseHeading}>
                PREMIUM PRODUCTS THAT SELL
              </Heading>

              {/* Premium Lighters with Testimonial */}
              <Row style={{marginBottom: '30px'}}>
                <Column style={{width: '50%', paddingRight: '10px'}}>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/dual-lighters-DDbYuPzwTH53bubLp1hGXt4Hjmr7OC.png'
                    width='250'
                    height='200'
                    alt='FLS Premium Windproof Lighters'
                    style={productImage}
                  />
                  <Text style={productCaption}>
                    Our signature black FLS lighters feature premium
                    wind-resistant technology
                  </Text>
                </Column>
                <Column style={{width: '50%', paddingLeft: '10px'}}>
                  <div style={testimonialBox}>
                    <Text style={testimonialText}>
                      "Since adding FLS lighters to our checkout displays, we've
                      seen a 22% increase in impulse purchases. Customers love
                      the quality and designs."
                    </Text>
                    <Text style={testimonialAuthor}>
                      — Mike Johnson, Quick Stop Convenience
                    </Text>
                  </div>
                </Column>
              </Row>

              {/* Variety Display Box with Testimonial */}
              <Row>
                <Column style={{width: '50%', paddingRight: '10px'}}>
                  <div style={testimonialBox}>
                    <Text style={testimonialText}>
                      "FLS lighters have the highest margin of any impulse item
                      at our register. The display looks great and customers
                      frequently comment on the unique designs."
                    </Text>
                    <Text style={testimonialAuthor}>
                      — Sarah Williams, Corner Market Chain
                    </Text>
                  </div>
                </Column>
                <Column style={{width: '50%', paddingLeft: '10px'}}>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/98219c_f92f26ad811c4afebe0551f8bdc9644c~mv2.png'
                    width='250'
                    height='250'
                    alt='FLS Lighter Display Box with Variety of Designs'
                    style={productImage}
                  />
                  <Text style={productCaption}>
                    Eye-catching display boxes drive impulse purchases
                  </Text>
                </Column>
              </Row>

              <Text style={productHighlight}>
                <strong>✓ Up to 1,200 ignitions per lighter</strong>{' '}
                &nbsp;&nbsp;
                <strong>✓ Wind-resistant technology</strong> &nbsp;&nbsp;
                <strong>✓ Vibrant designs</strong>
              </Text>
            </Section>

            <Text style={paragraph}>
              Why do retailers love FLS? Our vibrant designs and reliable flames
              catch customers' eyes, leading to impulse buys and repeat sales.
              With a 4.8/5 customer rating and thousands sold, FLS lighters are
              a proven hit that can boost your store's revenue and customer
              satisfaction.
            </Text>

            <Text style={paragraph}>
              As fellow convenience store enthusiasts, our founders built FLS to
              help retailers like you succeed. We offer exclusive wholesale
              pricing and early access to new products to our partners.
            </Text>

            <Text style={paragraph}>
              I'd love to discuss how FLS lighters can light up your sales. Are
              you available for a quick call to learn more?
            </Text>

            <Text style={signature}>
              Best regards,
              <br />
              FLS USA
            </Text>
          </Section>

          {/* CTA Button */}
          <Section style={ctaSection}>
            <Button style={ctaButton} href={`${baseUrl}/schedule`}>
              Schedule a 15-minute call with our team
            </Button>
          </Section>

          {/* Features Section */}
          <Section style={featuresSection}>
            <Row>
              <Column style={featureColumn}>
                {/* Satisfaction Guaranteed Icon */}
                <div
                  style={{margin: '0 auto 10px', width: '24px', height: '24px'}}
                  dangerouslySetInnerHTML={{
                    __html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>`,
                  }}
                />
                <Text style={featureText}>Satisfaction Guaranteed</Text>
              </Column>
              <Column style={featureColumn}>
                {/* Customer Rating Icon */}
                <div
                  style={{
                    margin: '0 auto 10px',
                    width: '120px',
                    height: '24px',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<div style="display: flex; justify-content: center;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFCC00" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFCC00" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFCC00" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFCC00" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFCC00" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>`,
                  }}
                />
                <Text style={featureText}>4.8/5 Customer Rating</Text>
              </Column>
              <Column style={featureColumn}>
                {/* Wind-Resistant Technology Icon */}
                <div
                  style={{margin: '0 auto 10px', width: '24px', height: '24px'}}
                  dangerouslySetInnerHTML={{
                    __html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>`,
                  }}
                />
                <Text style={featureText}>Wind-Resistant Technology</Text>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} FLS USA. All rights reserved.
            </Text>
            <Text style={footerLinks}>
              <Link href={`${baseUrl}`} style={footerLink}>
                Website
              </Link>{' '}
              •
              <Link href={`${baseUrl}/contact`} style={footerLink}>
                Contact
              </Link>{' '}
              •
              <Link href={`${baseUrl}/catalogue`} style={footerLink}>
                Catalogue
              </Link>
            </Text>
            <Text style={footerAddress}>
              FLS USA • sales@gocounterculture.com • 979-488-9207
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default BaseStyledTemplate

// Styles
const main = {
  backgroundColor: colors.background,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  color: colors.text,
}

const container = {
  margin: '0 auto',
  padding: '20px 0',
  width: '100%',
  maxWidth: '600px',
}

const header = {
  padding: '30px 20px',
  textAlign: 'center' as const,
  borderBottom: `2px solid ${colors.border}`,
}

const logo = {
  margin: '0 auto',
  padding: '16px',
}

const heroSection = {
  padding: '30px 20px',
  textAlign: 'center' as const,
  backgroundColor: colors.background,
  borderBottom: `1px solid ${colors.border}`,
}

const heroHeading = {
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0',
  color: colors.primary,
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
}

const heroSubheading = {
  fontSize: '16px',
  margin: '10px 0 0',
  color: colors.primary,
}

const contentSection = {
  padding: '30px 20px',
  backgroundColor: colors.background,
}

const greeting = {
  fontSize: '18px',
  margin: '30px 0 20px',
  color: colors.text,
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
  color: colors.text,
}

// Product Showcase Styles
const productShowcaseSection = {
  margin: '30px 0',
  padding: '20px',
  backgroundColor: '#222222',
  borderRadius: '8px',
  border: `1px solid ${colors.primary}`,
}

const productShowcaseHeading = {
  fontSize: '22px',
  fontWeight: 'bold',
  margin: '0 0 20px',
  color: colors.primary,
  textAlign: 'center' as const,
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
}

const productImage = {
  width: '100%',
  maxWidth: '250px',
  height: 'auto',
  margin: '0 auto',
  display: 'block',
  borderRadius: '4px',
  border: `1px solid ${colors.primary}`,
}

const productCaption = {
  fontSize: '14px',
  lineHeight: '20px',
  margin: '10px 0 20px',
  color: colors.text,
  textAlign: 'center' as const,
  fontStyle: 'italic',
}

const productHighlight = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '20px 0 10px',
  color: colors.text,
  textAlign: 'center' as const,
  backgroundColor: '#2A2A2A',
  padding: '15px',
  borderRadius: '4px',
}

const testimonialBox = {
  backgroundColor: '#2A2A2A',
  borderLeft: `4px solid ${colors.primary}`,
  padding: '15px',
  borderRadius: '4px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center' as const,
}

const testimonialText = {
  fontSize: '15px',
  lineHeight: '22px',
  fontStyle: 'italic',
  color: colors.text,
  margin: '0 0 10px',
}

const testimonialAuthor = {
  fontSize: '14px',
  color: colors.primary,
  fontWeight: 'bold',
  margin: '0',
}

const signature = {
  fontSize: '16px',
  margin: '30px 0 30px',
  color: colors.text,
}

const ctaSection = {
  padding: '10px 20px 30px',
  textAlign: 'center' as const,
}

const ctaButton = {
  backgroundColor: colors.primary,
  color: colors.textDark,
  padding: '12px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '4px',
  textDecoration: 'none',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
}

const featuresSection = {
  padding: '20px',
  backgroundColor: colors.background,
  borderTop: `2px solid ${colors.primary}`,
  borderBottom: `2px solid ${colors.primary}`,
  margin: '20px 0',
}

const featureColumn = {
  textAlign: 'center' as const,
  padding: '10px',
}

const featureIcon = {
  margin: '0 auto 10px',
}

const featureText = {
  fontSize: '14px',
  margin: '0',
  color: colors.text,
}

const footer = {
  padding: '20px',
  textAlign: 'center' as const,
  backgroundColor: colors.background,
  borderTop: `1px solid ${colors.border}`,
}

const footerText = {
  fontSize: '14px',
  margin: '0 0 10px',
  color: colors.text,
}

const footerLinks = {
  fontSize: '14px',
  margin: '0 0 10px',
  color: colors.text,
}

const footerLink = {
  color: colors.primary,
  textDecoration: 'none',
  margin: '0 5px',
}

const footerAddress = {
  fontSize: '14px',
  margin: '10px 0 0',
  color: colors.text,
}
