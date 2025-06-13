import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Font,
} from '@react-email/components'
import {EmailFonts, FONT_FAMILIES} from '../styles'

interface WelcomeEmailTemplateProps {
  firstName?: string
  companyName?: string
  loginUrl?: string
  supportEmail?: string
}

export const WelcomeEmailTemplate = ({
  firstName = '{{FirstName}}',
  companyName = '{{CompanyName}}',
  loginUrl = '{{LoginUrl}}',
  supportEmail = '{{SupportEmail}}',
}: WelcomeEmailTemplateProps) => {
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
      <Body style={main}>
        <Preview>Welcome to {companyName} - Let's Get Started!</Preview>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Welcome to {companyName}! 🎉</Heading>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>Hi {firstName},</Text>

            <Text style={paragraph}>
              We're thrilled to have you join our community! Your journey with
              us starts now, and we're here to make it amazing.
            </Text>

            <Text style={paragraph}>Here's what you can do next:</Text>

            <Section style={bulletPoints}>
              <Text style={bullet}>
                ✓ Complete your profile to personalize your experience
              </Text>
              <Text style={bullet}>
                ✓ Explore our product catalog and exclusive offers
              </Text>
              <Text style={bullet}>
                ✓ Connect with our support team if you need anything
              </Text>
            </Section>

            <Section style={ctaSection}>
              <Button style={button} href={loginUrl}>
                Get Started
              </Button>
            </Section>

            <Text style={paragraph}>
              If you have any questions, just reply to this email or contact us
              at {supportEmail} - we're always happy to help!
            </Text>

            <Text style={signature}>
              Best regards,
              <br />
              The {companyName} Team
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f0f4f8',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
  maxWidth: '100%',
  backgroundColor: '#ffffff',
  marginBottom: '60px',
}

const header = {
  padding: '40px 40px 20px',
  textAlign: 'center' as const,
}

const h1 = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#111827',
  margin: '0',
  padding: '0',
}

const content = {
  padding: '0 40px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#374151',
  margin: '15px 0',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const bulletPoints = {
  margin: '20px 0',
  padding: '0 15px',
}

const bullet = {
  fontSize: '16px',
  lineHeight: '28px',
  color: '#374151',
  margin: '10px 0',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const ctaSection = {
  textAlign: 'center' as const,
  margin: '40px 0',
}

const button = {
  backgroundColor: '#f7cb00',
  color: '#000000',
  borderRadius: '8px',
  padding: '15px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const signature = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#374151',
  margin: '40px 0 15px',
  fontFamily: FONT_FAMILIES.proximaNova,
}

const footer = {
  borderTop: '1px solid #e5e7eb',
  padding: '40px 40px 0',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
  fontFamily: FONT_FAMILIES.proximaNova,
}
