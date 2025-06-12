import type React from 'react'
// Note: Lucide icons not available in email context, using emoji instead
import {Link} from '@react-email/components'
import {EmailFonts, FONT_FAMILIES} from '../styles'
// Note: Button component not available in email context, using Link instead
import {EmailHeader} from '../ui/email-header'
import {EmailFooter} from '../ui/email-footer'

interface EmailTemplateProps {
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

export const FlsEmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName = '{{FirstName}}',
  senderName = '{{SenderName}}',
  companyName = '{{CompanyName}}',
  recipientCompany = '{{RecipientCompany}}',
  productBenefit = '{{ProductBenefit}}',
  customerRating = '{{CustomerRating}}',
  valueProposition = '{{ValueProposition}}',
  callToAction = '{{CallToAction}}',
  phoneNumber = '{{PhoneNumber}}',
  email = '{{Email}}',
  websiteUrl = '{{WebsiteUrl}}',
}) => {
  return (
    <div
      style={{
        backgroundColor: '#121212',
        minHeight: '100vh',
        padding: '8px',
        fontFamily: FONT_FAMILIES.proximaNova,
      }}
    >
      <div
        style={{
          maxWidth: '768px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <EmailHeader />

        {/* Email Content */}
        <div style={{padding: '24px 48px'}}>
          <h1
            style={{
              fontSize: '32px',
              fontFamily: FONT_FAMILIES.poppinsBlack,
              fontWeight: 'bold',
              color: '#1a1a2e',
              margin: '0 0 24px 0',
              lineHeight: '1.2',
            }}
          >
            Ignite Your Sales with Windproof FLS Lighters
          </h1>

          <div
            style={{
              marginBottom: '24px',
              color: '#1a1a2e',
            }}
          >
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#1a1a2e',
                fontFamily: FONT_FAMILIES.proximaNova,
                margin: '0 0 16px 0',
              }}
            >
              Hi {firstName},
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#1a1a2e',
                fontFamily: FONT_FAMILIES.proximaNova,
                margin: '0 0 16px 0',
              }}
            >
              Every great sale starts with a spark – and our FLS windproof
              lighters can provide it. {companyName} offers high-performance
              lighters designed to spark excitement at your checkout. These
              premium lighters are wind-resistant, long-lasting (up to 1,200
              ignitions each), and feature an ergonomic curved base that fits
              perfectly in hand.
            </p>

            <div
              style={{
                backgroundColor: '#f5f5f5',
                padding: '16px',
                borderLeft: '4px solid var(--brand-yellow)',
                marginBottom: '16px',
              }}
            >
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: '#1a1a2e',
                  fontFamily: FONT_FAMILIES.proximaNova,
                  margin: '0 0 16px 0',
                  fontWeight: '500',
                }}
              >
                {valueProposition} With a{' '}
                <span
                  style={{
                    color: '#f7cb00',
                    fontWeight: 'bold',
                  }}
                >
                  {customerRating} customer rating
                </span>{' '}
                and thousands sold, FLS lighters are a proven hit that can boost{' '}
                {recipientCompany}'s revenue and customer satisfaction.
              </p>
            </div>

            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#1a1a2e',
                fontFamily: FONT_FAMILIES.proximaNova,
                margin: '0 0 16px 0',
              }}
            >
              As fellow convenience store enthusiasts, our founders built FLS to
              help retailers like you succeed. We offer exclusive wholesale
              pricing and early access to new products to our partners.
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#1a1a2e',
                fontFamily: FONT_FAMILIES.proximaNova,
                margin: '0 0 24px 0',
              }}
            >
              {callToAction}
            </p>

            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#1a1a2e',
                fontFamily: FONT_FAMILIES.proximaNova,
                margin: '0 0 4px 0',
              }}
            >
              Best regards,
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#1a1a2e',
                fontFamily: FONT_FAMILIES.poppinsBlack,
                margin: '0 0 16px 0',
                fontWeight: 'bold',
              }}
            >
              {senderName}
            </p>
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                color: '#6b7280',
                fontFamily: FONT_FAMILIES.proximaNova,
                margin: '0 0 16px 0',
              }}
            >
              {companyName}
            </p>
          </div>

          <div style={{textAlign: 'center', margin: '48px 0'}}>
            <Link
              href='#'
              style={{
                backgroundColor: '#f7cb00',
                color: '#1a1a2e',
                fontWeight: 'bold',
                padding: '16px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                display: 'inline-block',
                fontFamily: FONT_FAMILIES.proximaNova,
              }}
            >
              📅 Schedule a 15-minute call with our team
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              textAlign: 'center',
              marginTop: '48px',
              color: '#6b7280',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: '#f7cb00',
                  marginRight: '8px',
                }}
              >
                📞
              </span>
              <span style={{fontFamily: FONT_FAMILIES.proximaNova}}>
                {phoneNumber}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: '#f7cb00',
                  marginRight: '8px',
                }}
              >
                ✉️
              </span>
              <span style={{fontFamily: FONT_FAMILIES.proximaNova}}>
                {email}
              </span>
            </div>
          </div>
        </div>

        <EmailFooter />
      </div>
    </div>
  )
}

export default FlsEmailTemplate
