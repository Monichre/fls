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
import {EmailHeader} from '../ui/email-header' // Corrected path
import {EmailFooter} from '../ui/email-footer' // Corrected path

interface FlsEmailTemplateProps {
  firstName?: string
  senderName?: string
  companyName?: string
  recipientCompany?: string
  productBenefit?: string
  customerRating?: string
  valueProposition?: string
  callToAction?: string
  phoneNumber?: string
  email?: string
  websiteUrl?: string
}

const main = {
  backgroundColor: '#ffffff',
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
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '30px',
  color: '#333',
  textAlign: 'center' as const,
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#555',
}

const ctaButton = {
  backgroundColor: '#FFD700', // FLS Yellow
  borderRadius: '5px',
  color: '#000000', // Black text
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 20px',
  margin: '20px 0',
}

const featureSection = {
  margin: '32px 0',
}

const featureText = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#555',
  paddingLeft: '10px',
}

const badgeStyle = {
  display: 'inline-block',
  padding: '4px 8px',
  borderRadius: '4px',
  backgroundColor: '#FFFDE7', // Light yellow
  color: '#F59E0B', // Amber
  fontSize: '12px',
  fontWeight: 'bold',
  marginRight: '8px',
  marginBottom: '8px',
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
  marginBottom: '8px',
}

const productName = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '4px',
}

const productDescription = {
  fontSize: '12px',
  color: '#666',
}

export const FlsEmailTemplate: React.FC<Readonly<FlsEmailTemplateProps>> = ({
  firstName = 'Valued Partner',
  senderName = 'The FLS Team',
  companyName = 'FLS USA',
  recipientCompany = 'your esteemed company',
  productBenefit = 'our vibrant, wind-resistant, and long-lasting lighters',
  customerRating = '4.8/5 stars',
  valueProposition = 'Our lighters are designed to catch the eye and provide reliable performance, making them a favorite among consumers and a profitable addition for retailers.',
  callToAction = 'Would you be open to a brief 15-minute call next week to explore how FLS can ignite your sales?',
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
          logoUrl='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logos/fls-logo-yellow-black-bg.png'
          companyName={companyName}
          tagline='SPARK THE EXCITEMENT'
        />

        <Section style={{padding: '20px'}}>
          <Heading style={heading}>
            Boost Your Profits with {companyName} Lighters!
          </Heading>
          <Text style={paragraph}>Dear {firstName},</Text>
          <Text style={paragraph}>
            I hope this email finds you well. My name is {senderName}, and I'm
            reaching out from {companyName} to introduce an exciting opportunity
            for {recipientCompany}. We specialize in high-quality,{' '}
            {productBenefit}.
          </Text>

          <Img
            src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/98219c_7bd75a9cc4254ffea09ed1f6d5081b06~mv2.png'
            width='540'
            height='300'
            alt='FLS Lighters Display Stand'
            style={imageStyle}
          />

          <Text style={paragraph}>{valueProposition}</Text>

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
                  <span style={badgeStyle}>HIGH RATED ({customerRating})</span>
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
              style={{...heading, fontSize: '20px', textAlign: 'left'}}
            >
              Featured Designs:
            </Heading>
            <Row>
              <Column style={productColumn}>
                <Img
                  src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/98219c_f92f26ad811c4afebe0551f8bdc9644c~mv2.png'
                  alt='FLS Black and Red Lighter'
                  style={productImage}
                />
                <Text style={productName}>Crimson Blaze</Text>
                <Text style={productDescription}>Bold and fiery design.</Text>
              </Column>
              <Column style={productColumn}>
                <Img
                  src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/image%20%2814%29.png'
                  alt='FLS Blue and Purple Lighter'
                  style={productImage}
                />
                <Text style={productName}>Azure Fusion</Text>
                <Text style={productDescription}>Cool and captivating.</Text>
              </Column>
              <Column style={productColumn}>
                <Img
                  src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0010-F3TQL3Dg5ZTqrBwrLZ9fGG4TU3VyVA.jpg'
                  alt='FLS Gold Lighter'
                  style={productImage}
                />
                <Text style={productName}>Golden Spark</Text>
                <Text style={productDescription}>Elegant and striking.</Text>
              </Column>
            </Row>
          </Section>

          <Text style={paragraph}>{callToAction}</Text>

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
