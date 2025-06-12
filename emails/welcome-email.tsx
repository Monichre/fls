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
  Tailwind,
} from '@react-email/components'

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
    <Tailwind>
      <Html>
        <Head />
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
                If you have any questions, just reply to this email or contact
                us at {supportEmail} - we're always happy to help!
              </Text>

              <Text style={signature}>
                Best regards,
                <br />
                The {companyName} Team
              </Text>
            </Section>

            <Section style={footer}>
              <Text style={footerText}>
                © {new Date().getFullYear()} {companyName}. All rights
                reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const header = {
  padding: '32px 32px 24px',
  textAlign: 'center' as const,
}

const h1 = {
  color: '#333',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0',
  padding: '0',
  fontFamily:
    'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const content = {
  padding: '0 32px',
}

const paragraph = {
  color: '#525252',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
  fontFamily:
    'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const bulletPoints = {
  margin: '24px 0',
  padding: '0 16px',
}

const bullet = {
  color: '#525252',
  fontSize: '16px',
  lineHeight: '28px',
  margin: '8px 0',
  fontFamily:
    'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const ctaSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#5469d4',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  fontFamily:
    'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const signature = {
  color: '#525252',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '32px 0 16px',
  fontFamily:
    'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const footer = {
  borderTop: '1px solid #e6e6e6',
  padding: '32px 32px 0',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#8898aa',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
  fontFamily:
    'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}
