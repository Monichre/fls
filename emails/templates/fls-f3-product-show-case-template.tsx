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
} from '@react-email/components'
import {EmailFonts, FONT_FAMILIES} from '../styles'
import type React from 'react'
import {EmailHeader} from '../ui/email-header'
import {EmailFooter} from '../ui/email-footer'

interface F3ProductShowcaseTemplateProps {
  recipientName?: string
  companyName?: string
  mainHeadline?: string
  introText?: string
  feature1Title?: string
  feature1Description?: string
  feature1IconUrl?: string
  feature2Title?: string
  feature2Description?: string
  feature2IconUrl?: string
  feature3Title?: string
  feature3Description?: string
  feature3IconUrl?: string
  productGridImages?: Array<{src: string; alt: string; name: string}>
  PackagingDetail1?: string
  PackagingDetail2?: string
  PackagingDetail3?: string
  callToActionText?: string
  websiteUrl?: string
  phoneNumber?: string
  email?: string // Added for footer consistency
}

export const F3ProductShowcaseTemplate: React.FC<
  Readonly<F3ProductShowcaseTemplateProps>
> = ({
  recipientName = 'Valued Partner',
  companyName = 'FLS USA',
  mainHeadline = 'Unveiling the F3 Lighter Collection',
  introText = 'Discover the perfect blend of style, performance, and reliability with our flagship F3 series. Engineered for those who demand the best.',
  feature1Title = 'Precision Flame',
  feature1Description = 'Adjustable and wind-resistant for optimal performance.',
  feature1IconUrl = 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0001-FuP5BPuEn4jh00IsIq8M5sGCKAK8vo.jpg',
  feature2Title = 'Ergonomic Design',
  feature2Description = 'Comfortable grip and intuitive operation.',
  feature2IconUrl = 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0002-jfVBzVQwyk4ovQVmY5tHRCrUt99LC4.jpg',
  feature3Title = 'Durable Build',
  feature3Description = 'Crafted with premium materials for lasting quality.',
  feature3IconUrl = 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0003-3b6QCGldg5Ka2t206JZ4R8eYG4l7Io.jpg',
  productGridImages = [
    {
      src: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0004-3A7V8j8jPDyu2PZXpTmN93grcedHmX.jpg',
      alt: 'F3 Carbon Fiber',
      name: 'Carbon Weave',
    },
    {
      src: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0005-uIVw141m70Du8QxVFAswpUJUP42pJh.jpg',
      alt: 'F3 Metallic Blue',
      name: 'Oceanic Blue',
    },
    {
      src: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0006-1hwPEQIZvxt7bZ1RLLjeha6cZcqCSS.jpg',
      alt: 'F3 Matte Black',
      name: 'Stealth Black',
    },
    {
      src: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0007-x6rAISi5vfeiRRD4QGbqCBF3OCAkhY.jpg',
      alt: 'F3 Gold Edition',
      name: '24K Gold',
    },
    {
      src: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0008-t9lh7Qrptxru5PLDR6kqYYz87qtajN.jpg',
      alt: 'F3 Crimson Red',
      name: 'Crimson Flare',
    },
    {
      src: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0009-9QwV1xBU8IpBASiPVLzKUbSXsZC0B6.jpg',
      alt: 'F3 Brushed Silver',
      name: 'Titan Silver',
    },
  ],
  PackagingDetail1 = '25 Lighters per Tray',
  PackagingDetail2 = 'Innerbox and Export Cartons Available',
  PackagingDetail3 = 'Eye-catching FLS Display Stands',
  callToActionText = 'Explore the F3 Collection & Wholesale Pricing',
  websiteUrl = 'https://flsusa.shop/f3-collection',
  phoneNumber = '979-488-9207',
  email = 'sales@flsusa.shop',
}) => (
  <Html>
    <Head>
      <EmailFonts />
    </Head>
    <Preview>{mainHeadline} - FLS USA</Preview>
    <Body
      style={{
        backgroundColor: '#121212',
        color: '#EAEAEA',
        fontFamily: FONT_FAMILIES.proximaNova,
      }}
    >
      <Container
        style={{
          margin: '0 auto',
          padding: '20px 0 48px',
          width: '600px',
          maxWidth: '100%',
        }}
      >
        {/* Using EmailHeader for consistency, but heroSection is more prominent */}
        <EmailHeader
          logoUrl='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logo-FlkeAzCczUoYzWRjHD4I3GPl9zoPMu.png'
          companyName={companyName}
          headerBackgroundColor='#0F0F0F'
          taglineColor='#f7cb00'
        />

        <Section
          style={{
            backgroundImage:
              "url('https://drfcdoakhkresrzk.public.blob.vercel-storage.com/dual-lighters-DDbYuPzwTH53bubLp1hGXt4Hjmr7OC.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '40px 20px',
            textAlign: 'center',
            borderRadius: '8px 8px 0 0',
          }}
        >
          <Heading
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#f7cb00',
              margin: '0 0 10px 0',
              textShadow: '1px 1px 2px #000000',
              fontFamily: FONT_FAMILIES.poppinsBlack,
            }}
          >
            {mainHeadline}
          </Heading>
          <Text
            style={{
              fontSize: '18px',
              color: '#FFFFFF',
              margin: '0 0 20px 0',
              textShadow: '1px 1px 2px #000000',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            {introText}
          </Text>
        </Section>

        <Section
          style={{
            backgroundColor: '#1E1E1E',
            padding: '30px',
            borderRadius: '8px',
            margin: '0 0 20px 0',
          }}
        >
          <Heading
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#f7cb00',
              marginBottom: '15px',
              fontFamily: FONT_FAMILIES.poppinsBlack,
            }}
          >
            Key Features
          </Heading>
          <Row>
            <Column
              style={{
                width: '33.33%',
                padding: '0 10px',
                textAlign: 'center',
              }}
            >
              <img
                src={feature1IconUrl}
                alt={feature1Title}
                style={{
                  width: '200px',
                  height: '200px',
                  marginBottom: '10px',
                }}
              />
              <Text
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  marginBottom: '5px',
                }}
              >
                {feature1Title}
              </Text>
              <Text
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#C0C0C0',
                  marginBottom: '15px',
                }}
              >
                {feature1Description}
              </Text>
            </Column>
            <Column
              style={{
                width: '33.33%',
                padding: '0 10px',
                textAlign: 'center',
              }}
            >
              <img
                src={feature2IconUrl}
                alt={feature2Title}
                style={{
                  width: '200px',
                  height: '40px',
                  marginBottom: '10px',
                }}
              />
              <Text
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  marginBottom: '5px',
                }}
              >
                {feature2Title}
              </Text>
              <Text
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#C0C0C0',
                  marginBottom: '15px',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                {feature2Description}
              </Text>
            </Column>
            <Column
              style={{
                width: '33.33%',
                padding: '0 10px',
                textAlign: 'center',
              }}
            >
              <img
                src={feature3IconUrl}
                alt={feature3Title}
                style={{
                  width: '40px',
                  height: '40px',
                  marginBottom: '10px',
                }}
              />
              <Text
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  marginBottom: '5px',
                  fontFamily: FONT_FAMILIES.poppinsBlack,
                }}
              >
                {feature3Title}
              </Text>
              <Text
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#C0C0C0',
                  marginBottom: '15px',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                {feature3Description}
              </Text>
            </Column>
          </Row>
        </Section>

        <Section
          style={{
            backgroundColor: '#181818',
            padding: '30px',
            borderRadius: '8px',
            margin: '0 0 20px 0',
          }}
        >
          <Heading
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#f7cb00',
              marginBottom: '15px',
              fontFamily: FONT_FAMILIES.poppinsBlack,
            }}
          >
            Diverse Designs
          </Heading>
          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#C0C0C0',
              marginBottom: '15px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            The F3 Collection offers a variety of stunning finishes to suit
            every taste. Each design is crafted with attention to detail,
            ensuring a premium look and feel.
          </Text>
          <Row>
            {productGridImages.slice(0, 3).map((img, idx) => (
              <Column
                key={idx}
                style={{
                  width: '33.33%',
                  padding: '10px',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    borderRadius: '4px',
                    marginBottom: '8px',
                    border: '1px solid #333333',
                  }}
                />
                <Text
                  style={{
                    fontSize: '14px',
                    color: '#f7cb00',
                    textAlign: 'center',
                    fontWeight: '500',
                    fontFamily: FONT_FAMILIES.proximaNova,
                  }}
                >
                  {img.name}
                </Text>
              </Column>
            ))}
          </Row>
          {productGridImages.length > 3 && (
            <Row>
              {productGridImages.slice(3, 6).map((img, idx) => (
                <Column
                  key={idx + 3}
                  style={{
                    width: '33.33%',
                    padding: '10px',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: '100%',
                      borderRadius: '4px',
                      marginBottom: '8px',
                      border: '1px solid #333333',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: '14px',
                      color: '#f7cb00',
                      textAlign: 'center',
                      fontWeight: '500',
                      fontFamily: FONT_FAMILIES.proximaNova,
                    }}
                  >
                    {img.name}
                  </Text>
                </Column>
              ))}
            </Row>
          )}
        </Section>

        <Section
          style={{
            backgroundColor: '#1E1E1E',
            padding: '30px',
            borderRadius: '8px',
            margin: '0 0 20px 0',
          }}
        >
          <Heading
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#f7cb00',
              marginBottom: '15px',
              fontFamily: FONT_FAMILIES.poppinsBlack,
            }}
          >
            Packaging & Display
          </Heading>
          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#C0C0C0',
              marginBottom: '15px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            We provide attractive and practical packaging solutions:
          </Text>
          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#C0C0C0',
              marginBottom: '15px',
              paddingLeft: '15px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            • {PackagingDetail1}
          </Text>
          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#C0C0C0',
              marginBottom: '15px',
              paddingLeft: '15px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            • {PackagingDetail2}
          </Text>
          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#C0C0C0',
              marginBottom: '15px',
              paddingLeft: '15px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            • {PackagingDetail3}
          </Text>
          <img
            src='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0010-F3TQL3Dg5ZTqrBwrLZ9fGG4TU3VyVA.jpg'
            alt='FLS Packaging and Display'
            style={{width: '100%', borderRadius: '4px', marginTop: '15px'}}
          />
        </Section>

        <Section
          style={{
            backgroundColor: '#1E1E1E',
            padding: '30px',
            borderRadius: '8px',
            margin: '0 0 20px 0',
            textAlign: 'center',
          }}
        >
          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#C0C0C0',
              marginBottom: '15px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            Ready to elevate your inventory with the F3 Lighter Collection?
          </Text>
          <Link
            href={websiteUrl}
            style={{
              backgroundColor: '#f7cb00',
              borderRadius: '5px',
              color: '#000000',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
              padding: '12px 0',
              margin: '30px auto 0 auto',
              width: '250px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            {callToActionText}
          </Link>
        </Section>

        <EmailFooter
          companyName={companyName}
          phoneNumber={phoneNumber}
          email={email}
          websiteUrl={websiteUrl}
          address='123 Spark Street, Houston, TX 77001'
          year={new Date().getFullYear().toString()}
          footerBackgroundColor='#0F0F0F'
          footerTextColor='#A0A0A0'
          footerLinkColor='#f7cb00'
        />
      </Container>
    </Body>
  </Html>
)

export default F3ProductShowcaseTemplate
