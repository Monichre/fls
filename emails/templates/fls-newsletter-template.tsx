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
import type React from 'react'
import {EmailHeader} from '../ui/email-header'
import {EmailFooter} from '../ui/email-footer'

interface NewsletterTemplateProps {
  subscriberName?: string
  month?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

const NewsletterTemplate: React.FC<NewsletterTemplateProps> = ({
  subscriberName = '{{SubscriberName}}',
  month = '{{Month}}',
}) => {
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
      <Preview>
        {month} Newsletter - New FLS Products & Exclusive Retailer Offers!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <EmailHeader />

          {/* Hero Section */}
          <Section style={heroSection}>
            <Heading style={heroHeading}>
              {month.toUpperCase()} NEWSLETTER
            </Heading>
            <Text style={heroSubheading}>
              Your Monthly Update on FLS Lighters & Exclusive Retailer Benefits
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={contentSection}>
            <Text style={greeting}>Hi {subscriberName},</Text>

            <Text style={paragraph}>
              Welcome to our {month} newsletter! This month, we're excited to
              share new product launches, retailer success stories, and
              exclusive wholesale opportunities designed to boost your sales.
            </Text>

            {/* Featured Products Section */}
            <Section style={featuredSection}>
              <Heading as='h2' style={sectionHeading}>
                NEW ARRIVALS & BESTSELLERS
              </Heading>

              <Row style={productRow}>
                <Column style={productColumn}>
                  <div style={productCard}>
                    <Img
                      src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dual-lighters-bPm9GyxoCNfSrJB2RbcWPBbsEo2h2e.png'
                      alt='Limited Edition F3 Collection'
                      width='200'
                      height='150'
                      style={productImage}
                    />
                    <Text style={productTitle}>
                      Limited Edition F3 Collection
                    </Text>
                    <Text style={productDescription}>
                      Exclusive metallic finishes available only this {month}
                    </Text>
                    <Button
                      style={productButton}
                      href='https://flsusa.shop/limited-edition'
                    >
                      View Collection
                    </Button>
                  </div>
                </Column>

                <Column style={productColumn}>
                  <div style={productCard}>
                    <Img
                      src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/box.jpg-GJCj3oZ6bibV5rnaqP81Z34lhl1r3B.jpeg'
                      alt='Wholesale Bundle Deals'
                      width='200'
                      height='150'
                      style={productImage}
                    />
                    <Text style={productTitle}>Wholesale Bundle Special</Text>
                    <Text style={productDescription}>
                      Save 25% when you order 10+ display boxes
                    </Text>
                    <Button
                      style={productButton}
                      href='https://flsusa.shop/wholesale-bundles'
                    >
                      Shop Bundles
                    </Button>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Exclusive Offer Section */}
            <Section style={offerSection}>
              <div style={offerBox}>
                <Text style={offerTitle}>🔥 RETAILER EXCLUSIVE</Text>
                <Text style={offerText}>
                  Use code{' '}
                  <strong style={offerCode}>
                    RETAIL{month.toUpperCase()}15
                  </strong>{' '}
                  for 15% off wholesale orders
                </Text>
                <Text style={offerExpiry}>Valid until the end of {month}</Text>
              </div>
            </Section>

            {/* Success Stories Section */}
            <Section style={successSection}>
              <Heading as='h2' style={sectionHeading}>
                RETAILER SUCCESS SPOTLIGHT
              </Heading>

              <div style={testimonialBox}>
                <Text style={testimonialText}>
                  "FLS lighters have become our top-selling impulse item. The
                  display stands are eye-catching, and customers love the
                  wind-resistant feature. We've seen a 35% increase in lighter
                  sales since switching to FLS."
                </Text>
                <Text style={testimonialAuthor}>
                  — David Chen, Pacific Coast Convenience Stores
                </Text>
              </div>
            </Section>

            {/* Resources Section */}
            <Section style={resourcesSection}>
              <Heading as='h2' style={sectionHeading}>
                RESOURCES & UPDATES
              </Heading>
              <ul style={resourcesList}>
                <li style={resourceItem}>
                  <Link
                    href='https://flsusa.shop/blog/display-tips'
                    style={resourceLink}
                  >
                    5 Display Tips to Maximize FLS Lighter Sales
                  </Link>
                </li>
                <li style={resourceItem}>
                  <Link
                    href='https://flsusa.shop/catalog/new'
                    style={resourceLink}
                  >
                    Download Our Latest Product Catalog
                  </Link>
                </li>
                <li style={resourceItem}>
                  <Link
                    href='https://flsusa.shop/training'
                    style={resourceLink}
                  >
                    Free Staff Training: Selling Premium Lighters
                  </Link>
                </li>
              </ul>
            </Section>

            <Text style={paragraph}>
              Thank you for being a valued FLS partner. Your success is our
              success, and we're committed to providing you with the best
              products and support in the industry.
            </Text>

            <Text style={signature}>
              Best regards,
              <br />
              The FLS USA Team
              <br />
              <span style={signatureContact}>
                sales@gocounterculture.com | 979-488-9207
              </span>
            </Text>
          </Section>

          {/* Social Section */}
          <Section style={socialSection}>
            <Text style={socialTitle}>CONNECT WITH US</Text>
            <Row>
              <Column style={socialColumn}>
                <Link href='https://facebook.com/FLSUSA' style={socialLink}>
                  Facebook
                </Link>
              </Column>
              <Column style={socialColumn}>
                <Text style={socialDivider}>•</Text>
              </Column>
              <Column style={socialColumn}>
                <Link href='https://instagram.com/FLSUSA' style={socialLink}>
                  Instagram
                </Link>
              </Column>
              <Column style={socialColumn}>
                <Text style={socialDivider}>•</Text>
              </Column>
              <Column style={socialColumn}>
                <Link href='https://flsusa.shop' style={socialLink}>
                  Website
                </Link>
              </Column>
            </Row>
          </Section>

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  )
}

export default NewsletterTemplate

// Styles aligned with FLS brand guidelines
const main: React.CSSProperties = {
  backgroundColor: '#222222',
  fontFamily:
    'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const container: React.CSSProperties = {
  margin: '0 auto',
  padding: '0',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
}

const heroSection: React.CSSProperties = {
  backgroundColor: '#1A1A1A',
  padding: '32px',
  textAlign: 'center',
  borderBottom: '4px solid #FFCC00',
}

const heroHeading: React.CSSProperties = {
  color: '#FFCC00',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0',
  letterSpacing: '2px',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const heroSubheading: React.CSSProperties = {
  color: '#FFFFFF',
  fontSize: '16px',
  margin: '8px 0 0',
  opacity: 0.9,
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const contentSection: React.CSSProperties = {
  padding: '32px',
  backgroundColor: '#ffffff',
}

const greeting: React.CSSProperties = {
  color: '#222222',
  fontSize: '18px',
  fontWeight: '500',
  margin: '0 0 16px',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const paragraph: React.CSSProperties = {
  color: '#555555',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const sectionHeading: React.CSSProperties = {
  color: '#222222',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '32px 0 20px',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  borderBottom: '2px solid #FFCC00',
  paddingBottom: '8px',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const featuredSection: React.CSSProperties = {
  margin: '32px 0',
}

const productRow: React.CSSProperties = {
  margin: '0 -10px',
}

const productColumn: React.CSSProperties = {
  width: '50%',
  padding: '0 10px',
  verticalAlign: 'top',
}

const productCard: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  border: '1px solid #e5e5e5',
}

const productImage: React.CSSProperties = {
  width: '100%',
  maxWidth: '200px',
  height: 'auto',
  margin: '0 auto 16px',
  borderRadius: '4px',
  border: '1px solid #FFCC00',
}

const productTitle: React.CSSProperties = {
  color: '#222222',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 8px',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const productDescription: React.CSSProperties = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 16px',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const productButton: React.CSSProperties = {
  backgroundColor: '#FFCC00',
  color: '#222222',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  padding: '10px 20px',
  borderRadius: '25px',
  textTransform: 'uppercase',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const offerSection: React.CSSProperties = {
  margin: '32px 0',
}

const offerBox: React.CSSProperties = {
  backgroundColor: '#222222',
  border: '2px solid #FFCC00',
  borderRadius: '8px',
  padding: '24px',
  textAlign: 'center',
}

const offerTitle: React.CSSProperties = {
  color: '#FFCC00',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 8px',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const offerText: React.CSSProperties = {
  color: '#FFFFFF',
  fontSize: '16px',
  margin: '0 0 8px',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const offerCode: React.CSSProperties = {
  color: '#FFCC00',
  fontSize: '18px',
  letterSpacing: '1px',
}

const offerExpiry: React.CSSProperties = {
  color: '#888888',
  fontSize: '14px',
  margin: '0',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const successSection: React.CSSProperties = {
  margin: '32px 0',
}

const testimonialBox: React.CSSProperties = {
  backgroundColor: '#f5f5f5',
  borderLeft: '4px solid #FFCC00',
  padding: '20px',
  borderRadius: '4px',
}

const testimonialText: React.CSSProperties = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '24px',
  fontStyle: 'italic',
  margin: '0 0 12px',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const testimonialAuthor: React.CSSProperties = {
  color: '#666666',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const resourcesSection: React.CSSProperties = {
  margin: '32px 0',
}

const resourcesList: React.CSSProperties = {
  margin: '0',
  padding: '0 0 0 20px',
}

const resourceItem: React.CSSProperties = {
  color: '#555555',
  fontSize: '16px',
  lineHeight: '28px',
  margin: '8px 0',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const resourceLink: React.CSSProperties = {
  color: '#FFCC00',
  textDecoration: 'underline',
  fontWeight: '500',
}

const signature: React.CSSProperties = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '32px 0 0',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const signatureContact: React.CSSProperties = {
  color: '#666666',
  fontSize: '14px',
}

const socialSection: React.CSSProperties = {
  backgroundColor: '#f5f5f5',
  padding: '24px 32px',
  textAlign: 'center',
  borderTop: '1px solid #e5e5e5',
}

const socialTitle: React.CSSProperties = {
  color: '#222222',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 16px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const socialColumn: React.CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
}

const socialLink: React.CSSProperties = {
  color: '#666666',
  fontSize: '14px',
  textDecoration: 'none',
  fontWeight: '500',
  fontFamily: 'Poppins, "Proxima Nova", sans-serif',
}

const socialDivider: React.CSSProperties = {
  color: '#FFCC00',
  fontSize: '14px',
  margin: '0 10px',
}
