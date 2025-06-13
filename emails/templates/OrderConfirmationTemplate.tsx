import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
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

interface OrderConfirmationTemplateProps {
  customerName?: string
  orderNumber?: string
  orderDate?: string
  shippingAddressLine1?: string
  shippingAddressLine2?: string
  billingAddressLine1?: string
  billingAddressLine2?: string
  items?: Array<{
    id: string
    name: string
    quantity: number
    price: string
    image_url: string
  }>
  subtotal?: string
  shippingCost?: string
  tax?: string
  orderTotal?: string
  estimatedDelivery?: string
  trackingUrl?: string
  supportEmail?: string
  websiteUrl?: string
  companyName?: string
  phoneNumber?: string // Added from FlsEmailTemplate for footer consistency
}

export const OrderConfirmationTemplate: React.FC<
  Readonly<OrderConfirmationTemplateProps>
> = ({
  customerName = 'Customer',
  orderNumber = 'FLS123456789',
  orderDate = new Date().toLocaleDateString(),
  shippingAddressLine1 = '123 Main St',
  shippingAddressLine2 = 'Anytown, USA 12345',
  billingAddressLine1 = '123 Main St',
  billingAddressLine2 = 'Anytown, USA 12345',
  items = [
    {
      id: 'prod_1',
      name: 'FLS Signature Lighter - Crimson',
      quantity: 2,
      price: '$24.99',
      image_url:
        'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/dual-lighters-DDbYuPzwTH53bubLp1hGXt4Hjmr7OC.png',
    },
    {
      id: 'prod_2',
      name: 'FLS Display Stand - Small',
      quantity: 1,
      price: '$15.00',
      image_url:
        'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/IMG-20250318-WA0011-5NMgw6YixwjZAHHlXoJbV8JOn5KU5Y.jpg',
    },
  ],
  subtotal = '$64.98',
  shippingCost = '$5.00',
  tax = '$4.55',
  orderTotal = '$74.53',
  estimatedDelivery = '3-5 business days',
  trackingUrl = 'https://flsusa.shop/track?orderId=FLS123456789',
  supportEmail = 'support@flsusa.shop',
  websiteUrl = 'https://flsusa.shop',
  companyName = 'FLS USA',
  phoneNumber = '979-488-9207',
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
    <Preview>Your FLS USA Order {orderNumber} is Confirmed!</Preview>
    <Body
      style={{
        backgroundColor: '#f9fafb',
        fontFamily: FONT_FAMILIES.proximaNova,
      }}
    >
      <Container
        style={{
          margin: '0 auto',
          padding: '20px 0 48px',
          width: '580px',
          maxWidth: '100%',
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
        }}
      >
        <EmailHeader
          logoUrl='https://drfcdoakhkresrzk.public.blob.vercel-storage.com/logo-FlkeAzCczUoYzWRjHD4I3GPl9zoPMu.png'
          companyName={companyName}
        />
        <Section style={{padding: '20px 30px'}}>
          <Heading
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginTop: '20px',
              marginBottom: '20px',
              color: '#111827',
              textAlign: 'center',
            }}
          >
            Thank You for Your Order!
          </Heading>

          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#374151',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            Hi {customerName},
          </Text>

          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#374151',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            We're excited to let you know that your order #{orderNumber} placed
            on {orderDate} has been confirmed and is being processed.
          </Text>

          <Hr style={{borderColor: '#e5e7eb', margin: '20px 0'}} />

          <Text
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#111827',
              margin: '20px 0 10px 0',
            }}
          >
            Order Summary
          </Text>

          {items.map((item) => (
            <Row
              key={item.id}
              style={{
                borderBottom: '1px solid #e5e7eb',
                paddingBottom: '10px',
                marginBottom: '10px',
              }}
            >
              <Column style={{width: '60px'}}>
                <Img
                  src={item.image_url}
                  alt={item.name}
                  width='50'
                  height='50'
                  style={{
                    borderRadius: '4px',
                    marginRight: '15px',
                  }}
                />
              </Column>
              <Column>
                <Text
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#374151',
                    fontWeight: 'bold',
                    margin: '0 0 5px 0',
                    fontFamily: FONT_FAMILIES.proximaNova,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: '14px',
                    lineHeight: '24px',
                    color: '#374151',
                    margin: '0',
                    fontFamily: FONT_FAMILIES.proximaNova,
                  }}
                >
                  Quantity: {item.quantity}
                </Text>
              </Column>
              <Column style={{textAlign: 'right'}}>
                <Text
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#374151',
                    fontWeight: 'bold',
                    fontFamily: FONT_FAMILIES.proximaNova,
                  }}
                >
                  {item.price}
                </Text>
              </Column>
            </Row>
          ))}

          <Hr style={{borderColor: '#e5e7eb', margin: '20px 0'}} />

          <Row style={{marginTop: '10px'}}>
            <Column>
              <Text
                style={{
                  fontSize: '14px',
                  color: '#374151',
                  textAlign: 'right',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                Subtotal:
              </Text>
            </Column>
            <Column>
              <Text
                style={{
                  fontSize: '14px',
                  color: '#374151',
                  textAlign: 'right',
                  fontWeight: 'bold',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                {subtotal}
              </Text>
            </Column>
          </Row>

          <Row style={{marginTop: '10px'}}>
            <Column>
              <Text
                style={{
                  fontSize: '14px',
                  color: '#374151',
                  textAlign: 'right',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                Shipping:
              </Text>
            </Column>
            <Column>
              <Text
                style={{
                  fontSize: '14px',
                  color: '#374151',
                  textAlign: 'right',
                  fontWeight: 'bold',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                {shippingCost}
              </Text>
            </Column>
          </Row>

          <Row style={{marginTop: '10px'}}>
            <Column>
              <Text
                style={{
                  fontSize: '14px',
                  color: '#374151',
                  textAlign: 'right',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                Tax:
              </Text>
            </Column>
            <Column>
              <Text
                style={{
                  fontSize: '14px',
                  color: '#374151',
                  textAlign: 'right',
                  fontWeight: 'bold',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                {tax}
              </Text>
            </Column>
          </Row>

          <Row
            style={{
              marginTop: '10px',
              paddingTop: '10px',
              borderTop: '1px solid #e5e7eb',
            }}
          >
            <Column>
              <Text
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  textAlign: 'right',
                  fontWeight: 'bold',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                Order Total:
              </Text>
            </Column>
            <Column>
              <Text
                style={{
                  fontSize: '18px',
                  color: '#374151',
                  textAlign: 'right',
                  fontWeight: 'bold',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                {orderTotal}
              </Text>
            </Column>
          </Row>

          <Hr style={{borderColor: '#e5e7eb', margin: '20px 0'}} />

          <Row>
            <Column style={{width: '50%'}}>
              <Text
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#111827',
                  margin: '20px 0 10px 0',
                }}
              >
                Shipping Address
              </Text>
              <Text
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#374151',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                {shippingAddressLine1}
                <br />
                {shippingAddressLine2}
              </Text>
            </Column>
            <Column style={{width: '50%'}}>
              <Text
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#111827',
                  margin: '20px 0 10px 0',
                }}
              >
                Billing Address
              </Text>
              <Text
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#374151',
                  fontFamily: FONT_FAMILIES.proximaNova,
                }}
              >
                {billingAddressLine1}
                <br />
                {billingAddressLine2}
              </Text>
            </Column>
          </Row>

          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#374151',
              marginTop: '20px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            Estimated Delivery: <strong>{estimatedDelivery}</strong>
          </Text>

          <Link
            href={trackingUrl}
            style={{
              backgroundColor: '#f7cb00',
              borderRadius: '5px',
              color: '#000000',
              fontSize: '16px',
              fontWeight: 'bold',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
              padding: '12px 0',
              margin: '20px auto',
              width: '200px',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            Track Your Order
          </Link>

          <Text
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              color: '#374151',
              fontFamily: FONT_FAMILIES.proximaNova,
            }}
          >
            If you have any questions about your order, please don't hesitate to
            contact us at{' '}
            <Link href={`mailto:${supportEmail}`} style={{color: '#f7cb00'}}>
              {supportEmail}
            </Link>
            .
          </Text>
        </Section>
        <EmailFooter
          companyName={companyName}
          phoneNumber={phoneNumber}
          email={supportEmail}
          websiteUrl={websiteUrl}
          address='123 Spark Street, Houston, TX 77001'
          year={new Date().getFullYear().toString()}
        />
      </Container>
    </Body>
  </Html>
)

export default OrderConfirmationTemplate
