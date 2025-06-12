import type React from 'react'

interface EmailFooterProps {
  companyName?: string
  phoneNumber?: string
  email?: string
  websiteUrl?: string
  address?: string
  year?: string
  unsubscribeUrl?: string
  privacyUrl?: string
  termsUrl?: string
  footerBackgroundColor?: string
  footerTextColor?: string
  footerLinkColor?: string
}

export const EmailFooter: React.FC<EmailFooterProps> = ({
  companyName = 'FLS USA',
  phoneNumber = '979-488-9207',
  email = 'sales@flsusa.shop',
  websiteUrl = 'https://flsusa.shop',
  address = '123 Spark Street, Houston, TX 77001',
  year = new Date().getFullYear().toString(),
  unsubscribeUrl,
  privacyUrl,
  termsUrl,
  footerBackgroundColor = '#f5f5f5',
  footerTextColor = '#666666',
  footerLinkColor = '#444444',
}) => {
  return (
    <div
      style={{
        backgroundColor: footerBackgroundColor,
        padding: '16px',
        borderTop: '1px solid #e5e5e5',
        fontFamily: 'var(--font-proxima-nova)',
      }}
    >
      <div
        style={{
          maxWidth: '512px',
          margin: '0 auto',
          textAlign: 'center',
          fontSize: '14px',
          color: footerTextColor,
          fontFamily: 'var(--font-proxima-nova)',
        }}
      >
        <p
          style={{marginBottom: '8px', fontFamily: 'var(--font-proxima-nova)'}}
        >
          © {year} {companyName}. All rights reserved.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '8px',
          }}
        >
          <a
            href={websiteUrl}
            style={{
              color: footerLinkColor,
              textDecoration: 'underline',
              fontFamily: 'var(--font-proxima-nova)',
            }}
          >
            Website
          </a>
          <span>•</span>
          <a
            href={`mailto:${email}`}
            style={{
              color: footerLinkColor,
              textDecoration: 'underline',
              fontFamily: 'var(--font-proxima-nova)',
            }}
          >
            Contact
          </a>
          <span>•</span>
          <a
            href={`tel:${phoneNumber}`}
            style={{
              color: footerLinkColor,
              textDecoration: 'underline',
              fontFamily: 'var(--font-proxima-nova)',
            }}
          >
            {phoneNumber}
          </a>
          {unsubscribeUrl && (
            <>
              <span>•</span>
              <a
                href={unsubscribeUrl}
                style={{
                  color: footerLinkColor,
                  textDecoration: 'underline',
                  fontFamily: 'var(--font-proxima-nova)',
                }}
              >
                Unsubscribe
              </a>
            </>
          )}
        </div>

        {address && (
          <p
            style={{
              marginBottom: '8px',
              fontFamily: 'var(--font-proxima-nova)',
            }}
          >
            {address}
          </p>
        )}

        <p style={{fontFamily: 'var(--font-proxima-nova)'}}>
          Wind-Resistant Technology • Free Shipping on Orders $50+
        </p>

        {(privacyUrl || termsUrl) && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '8px',
            }}
          >
            {privacyUrl && (
              <a
                href={privacyUrl}
                style={{
                  color: footerLinkColor,
                  textDecoration: 'underline',
                  fontFamily: 'var(--font-proxima-nova)',
                }}
              >
                Privacy Policy
              </a>
            )}
            {privacyUrl && termsUrl && <span>•</span>}
            {termsUrl && (
              <a
                href={termsUrl}
                style={{
                  color: footerLinkColor,
                  textDecoration: 'underline',
                  fontFamily: 'var(--font-proxima-nova)',
                }}
              >
                Terms of Service
              </a>
            )}
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: '16px',
          paddingTop: '8px',
          borderTop: '1px solid #d1d5db',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              height: '8px',
              width: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--brand-yellow)',
            }}
          ></div>
          <span
            style={{
              fontSize: '12px',
              color: '#888888',
              fontFamily: 'var(--font-proxima-nova)',
            }}
          >
            Satisfaction Guaranteed
          </span>
          <div
            style={{
              height: '8px',
              width: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--brand-yellow)',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
