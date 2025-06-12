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

interface OriginalFlsEmailTemplateProps {
  firstName?: string
  senderName?: string
  companyName?: string
  phoneNumber?: string
  email?: string
  websiteUrl?: string
}

const mainStyle = {
  backgroundColor: '#1A1A1A', // Dark background
  color: '#E0E0E0', // Light text for contrast
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const containerStyle = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
}

const headingStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '30px',
  marginBottom: '20px',
  color: '#FFD700', // FLS Yellow
  textAlign: 'center' as const,
}

const paragraphStyle = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#E0E0E0', // Light text
  padding: '0 20px',
}

const sectionStyle = {
  padding: '20px',
  backgroundColor: '#2C2C2C', // Slightly lighter dark section
  borderRadius: '8px',
  margin: '20px 0',
}

const featureIconStyle = {
  width: '48px', // Adjusted from 64px
  height: '48px', // Adjusted from 64px
  margin: '0 auto 10px auto', // Center icon
  display: 'block',
}

const featureTextStyle = {
  textAlign: 'center' as const,
  fontSize: '14px',
  color: '#BDBDBD', // Lighter gray for feature text
}

const ctaButtonStyle = {
  backgroundColor: '#FFD700', // FLS Yellow
  borderRadius: '5px',
  color: '#000000', // Black text
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '14px 0',
  margin: '30px auto',
  width: '220px',
}

const lifestyleImage = {
  width: '100%',
  maxWidth: '500px', // Max width for the image
  height: 'auto', // Maintain aspect ratio
  borderRadius: '8px',
  margin: '20px auto', // Center image
  display: 'block',
}

const lifestyleSection = {
  textAlign: 'center' as const,
  margin: '30px 0',
}

const lifestyleCaption = {
  fontSize: '14px',
  color: '#FFD700', // FLS Yellow for caption
  fontStyle: 'italic',
  marginTop: '10px',
}

export const OriginalFlsEmailTemplate: React.FC<
  Readonly<OriginalFlsEmailTemplateProps>
> = ({
  firstName = 'Valued Partner',
  senderName = 'The FLS USA Team',
  companyName = 'FLS USA',
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
    <Preview>Discover the Spark with FLS USA Lighters!</Preview>
    <Body style={mainStyle}>
      <Container style={containerStyle}>
        <EmailHeader
          logoUrl='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logos/fls-logo-yellow-black-bg.png'
          companyName={companyName}
          tagline='IGNITE YOUR MOMENTS'
          headerBackgroundColor='#000000'
          taglineColor='#FFD700'
        />

        <Section style={{padding: '20px'}}>
          <Heading style={headingStyle}>
            Experience the FLS Difference, {firstName}!
          </Heading>
          <Text style={paragraphStyle}>
            We're {companyName}, pioneers in crafting high-performance, stylish
            lighters designed for every occasion. From everyday reliability to
            statement pieces, FLS is about more than just a flame – it's about
            sparking excitement.
          </Text>
        </Section>

        <Section style={sectionStyle}>
          <Heading
            as='h2'
            style={{...headingStyle, fontSize: '22px', marginTop: 0}}
          >
            Why Choose FLS?
          </Heading>
          <Row style={{marginBottom: '20px'}}>
            <Column style={{width: '33%', padding: '0 10px'}}>
              <Img
                src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/icons/badge-windproof.png'
                alt='Windproof Icon'
                style={featureIconStyle}
              />
              <Text style={featureTextStyle}>
                <strong>Windproof Reliability:</strong> Dependable flame in any
                condition.
              </Text>
            </Column>
            <Column style={{width: '33%', padding: '0 10px'}}>
              <Img
                src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/icons/badge-design.png'
                alt='Stylish Design Icon'
                style={featureIconStyle}
              />
              <Text style={featureTextStyle}>
                <strong>Striking Designs:</strong> Lighters that make a
                statement.
              </Text>
            </Column>
            <Column style={{width: '33%', padding: '0 10px'}}>
              <Img
                src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/icons/badge-quality.png'
                alt='Premium Quality Icon'
                style={featureIconStyle}
              />
              <Text style={featureTextStyle}>
                <strong>Premium Quality:</strong> Built to last with durable
                materials.
              </Text>
            </Column>
          </Row>
          <Text
            style={{
              ...paragraphStyle,
              padding: 0,
              textAlign: 'center' as const,
            }}
          >
            Our commitment to innovation ensures every FLS lighter delivers
            unmatched performance and aesthetic appeal.
          </Text>
        </Section>

        <Section style={lifestyleSection}>
          <Img
            src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/lifestyle/fls-outdoor-lifestyle.png'
            alt='FLS Lighter in an outdoor lifestyle setting'
            style={lifestyleImage}
          />
          <Text style={lifestyleCaption}>
            Reliable performance in any environment.
          </Text>
        </Section>

        <Section style={{padding: '20px', textAlign: 'center' as const}}>
          <Text style={paragraphStyle}>
            Ready to explore our collections and find your perfect spark?
          </Text>
          <Link href={websiteUrl} style={ctaButtonStyle}>
            Visit FLSUSA.shop
          </Link>
          <Text style={{...paragraphStyle, fontSize: '14px'}}>
            For wholesale inquiries or questions, contact us at {email} or call{' '}
            {phoneNumber}.
          </Text>
        </Section>

        <EmailFooter
          companyName={companyName}
          phoneNumber={phoneNumber}
          email={email}
          websiteUrl={websiteUrl}
          address='123 Spark Street, Houston, TX 77001'
          year={new Date().getFullYear().toString()}
          footerBackgroundColor='#000000'
          footerTextColor='#BDBDBD'
          footerLinkColor='#FFD700'
        />
      </Container>
    </Body>
  </Html>
)

export default OriginalFlsEmailTemplate
