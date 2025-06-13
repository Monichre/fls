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
import {Flame, HandHeart, Layers, ShieldCheck, Zap, Info} from 'lucide-react'

interface F3ProductShowcaseTemplateProps {
  recipientName?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'
const flsYellow = '#FFCC00'
const darkBg = '#1A1A1A'
const lightText = '#FFFFFF'
const darkText = '#222222'
const midGray = '#4A4A4A'

export const F3ProductShowcaseTemplate: React.FC<
  F3ProductShowcaseTemplateProps
> = ({recipientName = 'Valued Retailer'}) => {
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
        Discover the FLS F3 Lighter Collection - Style, Performance, Profit!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <EmailHeader />

          <Section style={heroSection}>
            <Img
              src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/dual-lighters-DDbYuPzwTH53bubLp1hGXt4Hjmr7OC.png'
              alt='FLS F3 Lighters Collection'
              width='100%'
              style={heroImage}
            />
            <Heading style={heroHeading}>
              UNLEASH THE F3 LIGHTER COLLECTION
            </Heading>
            <Text style={heroText}>
              Vibrant Designs, Reliable Performance. Your Next Bestseller
              Awaits.
            </Text>
          </Section>

          <Section style={contentSection}>
            <Text style={greeting}>Dear {recipientName},</Text>
            <Text style={paragraph}>
              Elevate your offerings with the FLS F3 Lighter Collection – where
              cutting-edge design meets unparalleled functionality. Our F3
              lighters are crafted to impress and perform, ensuring customer
              satisfaction and repeat business.
            </Text>

            <Heading as='h2' style={subHeading}>
              Key Features That Ignite Sales:
            </Heading>
            <Section style={featuresGrid}>
              <Row style={{marginBottom: '16px'}}>
                <Column style={featureColumn}>
                  <Flame size={24} color={flsYellow} style={featureIcon} />
                  <Text style={featureText}>Reliable Fixed Flame</Text>
                </Column>
                <Column style={featureColumn}>
                  <HandHeart size={24} color={flsYellow} style={featureIcon} />
                  <Text style={featureText}>Comfortable Sculptured Body</Text>
                </Column>
              </Row>
              <Row style={{marginBottom: '16px'}}>
                <Column style={featureColumn}>
                  <Layers size={24} color={flsYellow} style={featureIcon} />
                  <Text style={featureText}>Durable Textured Grip</Text>
                </Column>
                <Column style={featureColumn}>
                  <ShieldCheck
                    size={24}
                    color={flsYellow}
                    style={featureIcon}
                  />
                  <Text style={featureText}>ISO 9994 Certified</Text>
                </Column>
              </Row>
              <Row>
                <Column style={featureColumn}>
                  <Zap size={24} color={flsYellow} style={featureIcon} />
                  <Text style={featureText}>Gas Refillable</Text>
                </Column>
                <Column style={featureColumn}>
                  <Info size={24} color={flsYellow} style={featureIcon} />
                  <Text style={featureText}>
                    Dimensions: 82.4 x 23.4 x 13.4mm
                  </Text>
                </Column>
              </Row>
            </Section>

            <Heading as='h2' style={subHeading}>
              A Design for Every Customer:
            </Heading>
            <Section style={productGrid}>
              <Row style={{marginBottom: '20px'}}>
                <Column style={productColumnStyle}>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/dual-lighters-DDbYuPzwTH53bubLp1hGXt4Hjmr7OC.png'
                    alt='F3 Lighter Black'
                    style={productImageStyle}
                  />
                  <Text style={productNameStyle}>Classic Black</Text>
                </Column>
                <Column style={productColumnStyle}>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/98219c_7bd75a9cc4254ffea09ed1f6d5081b06~mv2.png'
                    alt='F3 Lighter Gold'
                    style={productImageStyle}
                  />
                  <Text style={productNameStyle}>Elegant Gold</Text>
                </Column>
                <Column style={productColumnStyle}>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/98219c_f92f26ad811c4afebe0551f8bdc9644c~mv2.png'
                    alt='F3 Lighter Purple'
                    style={productImageStyle}
                  />
                  <Text style={productNameStyle}>Vibrant Purple</Text>
                </Column>
              </Row>
              <Row>
                <Column style={productColumnStyle}>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/image%20%2814%29.png'
                    alt='F3 Lighter Legalize Theme'
                    style={productImageStyle}
                  />
                  <Text style={productNameStyle}>"Legalize" Series</Text>
                </Column>
                <Column style={productColumnStyle}>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0001-FuP5BPuEn4jh00IsIq8M5sGCKAK8vo.jpg'
                    alt='F3 Lighter 420 Theme'
                    style={productImageStyle}
                  />
                  <Text style={productNameStyle}>"420" Collection</Text>
                </Column>
                <Column style={productColumnStyle}>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0002-jfVBzVQwyk4ovQVmY5tHRCrUt99LC4.jpg'
                    alt='F3 Lighter Space Theme'
                    style={productImageStyle}
                  />
                  <Text style={productNameStyle}>Cosmic Designs</Text>
                </Column>
              </Row>
            </Section>
            <Text style={paragraph}>
              ...and many more unique designs to capture your customers'
              attention!
            </Text>

            <Section style={packagingSection}>
              <Row>
                <Column
                  style={{
                    width: '60%',
                    paddingRight: '10px',
                    verticalAlign: 'middle',
                  }}
                >
                  <Heading as='h3' style={packagingHeading}>
                    Ready for Retail
                  </Heading>
                  <Text style={packagingText}>
                    Our F3 lighters are packaged for maximum impact and
                    convenience:
                  </Text>
                  <ul style={packagingList}>
                    <li>25 Lighters per Tray</li>
                    <li>Innerbox and Export Cartons Available</li>
                    <li>Eye-catching FLS Display Stands</li>
                  </ul>
                </Column>
                <Column
                  style={{
                    width: '40%',
                    paddingLeft: '10px',
                    verticalAlign: 'middle',
                  }}
                >
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/98219c_7bd75a9cc4254ffea09ed1f6d5081b06~mv2.png'
                    alt='FLS Lighter Display Tray'
                    style={{...productImageStyle, margin: '0 auto'}}
                  />
                </Column>
              </Row>
            </Section>

            <Section style={ctaSectionStyle}>
              <Button
                href='https://flsusa.shop/f3-collection'
                style={ctaButtonStylePrimary}
              >
                Explore All F3 Designs
              </Button>
              <Button
                href='https://flsusa.shop/wholesale'
                style={ctaButtonStyleSecondary}
              >
                Get Wholesale Pricing
              </Button>
            </Section>

            <Text style={paragraph}>
              We're confident the FLS F3 Collection will be a brilliant addition
              to your inventory. Contact us today to learn more or place an
              order.
            </Text>
            <Text style={signature}>
              Sincerely,
              <br />
              The FLS Lighters Team
              <br />
              <Link href='https://flsusa.shop' style={linkStyle}>
                flsusa.shop
              </Link>
              <br />
              1-888-556-7124
            </Text>
          </Section>

          <Section style={socialSectionStyle}>
            <Text style={socialTextStyle}>Follow us @FLSLighters</Text>
            <Row>
              <Column align='right' style={{width: '50%', paddingRight: '8px'}}>
                <Link href='https://facebook.com/FLSLighters'>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0003-3b6QCGldg5Ka2t206JZ4R8eYG4l7Io.jpg'
                    alt='Facebook'
                    width='32'
                    height='32'
                  />
                </Link>
              </Column>
              <Column align='left' style={{width: '50%', paddingLeft: '8px'}}>
                <Link href='https://instagram.com/FLSLighters'>
                  <Img
                    src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0004-3A7V8j8jPDyu2PZXpTmN93grcedHmX.jpg'
                    alt='Instagram'
                    width='32'
                    height='32'
                  />
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

const main: React.CSSProperties = {
  backgroundColor: darkBg,
  fontFamily: 'Poppins, Arial, sans-serif',
  color: lightText,
  margin: 0,
  padding: 0,
}

const container: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff', // Content area background
  color: darkText, // Default text color for content area
  borderRadius: '8px',
  overflow: 'hidden',
}

const heroSection: React.CSSProperties = {
  padding: '0',
  textAlign: 'center',
  backgroundColor: darkText, // Dark background for hero image container
}

const heroImage: React.CSSProperties = {
  width: '100%',
  height: 'auto',
}

const heroHeading: React.CSSProperties = {
  color: flsYellow,
  fontSize: '28px',
  fontWeight: 'bold',
  padding: '20px 20px 5px',
  margin: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
}

const heroText: React.CSSProperties = {
  color: lightText,
  fontSize: '16px',
  padding: '0 20px 20px',
  margin: 0,
  textAlign: 'center',
  lineHeight: '1.5',
}

const contentSection: React.CSSProperties = {
  padding: '20px 30px',
  color: darkText,
}

const greeting: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '16px',
}

const paragraph: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.6',
  marginBottom: '16px',
  color: midGray,
}

const subHeading: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: darkText,
  margin: '30px 0 15px',
  borderBottom: `2px solid ${flsYellow}`,
  paddingBottom: '5px',
}

const featuresGrid: React.CSSProperties = {
  margin: '20px 0',
}

const featureColumn: React.CSSProperties = {
  width: '50%',
  textAlign: 'center',
  padding: '0 8px',
}

const featureIcon: React.CSSProperties = {
  margin: '0 auto 8px auto',
}

const featureText: React.CSSProperties = {
  fontSize: '14px',
  color: midGray,
  margin: 0,
  lineHeight: '1.4',
}

const productGrid: React.CSSProperties = {
  margin: '20px 0',
  textAlign: 'center',
}

const productColumnStyle: React.CSSProperties = {
  width: '33.33%',
  padding: '0 8px',
  textAlign: 'center',
  verticalAlign: 'top',
}

const productImageStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '120px',
  height: 'auto',
  border: `1px solid #eee`,
  borderRadius: '4px',
  margin: '0 auto 10px auto',
  display: 'block',
}

const productNameStyle: React.CSSProperties = {
  fontSize: '13px',
  color: darkText,
  fontWeight: '500',
  margin: 0,
}

const packagingSection: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  margin: '30px 0',
  borderRadius: '4px',
  border: '1px solid #eaeaea',
}

const packagingHeading: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: darkText,
  margin: '0 0 10px',
}

const packagingText: React.CSSProperties = {
  fontSize: '14px',
  color: midGray,
  lineHeight: '1.5',
  margin: '0 0 10px',
}

const packagingList: React.CSSProperties = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  margin: 0,
  fontSize: '14px',
  color: midGray,
}

const ctaSectionStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '20px 0',
}

const ctaButtonStylePrimary: React.CSSProperties = {
  backgroundColor: flsYellow,
  color: darkText,
  padding: '12px 25px',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  borderRadius: '5px',
  marginRight: '10px',
  display: 'inline-block',
  marginBottom: '10px',
}

const ctaButtonStyleSecondary: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: flsYellow,
  border: `2px solid ${flsYellow}`,
  padding: '10px 23px',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  borderRadius: '5px',
  display: 'inline-block',
  marginBottom: '10px',
}

const signature: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.6',
  marginTop: '20px',
  color: midGray,
}

const linkStyle: React.CSSProperties = {
  color: flsYellow,
  textDecoration: 'underline',
}

const socialSectionStyle: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
  backgroundColor: darkText,
}

const socialTextStyle: React.CSSProperties = {
  color: lightText,
  fontSize: '14px',
  marginBottom: '10px',
}

export default F3ProductShowcaseTemplate
