// Static registry of email templates to avoid dynamic imports
import EnhancedEmailTemplate from '@/emails/templates/enhanced-email-template'
import F3ProductShowcaseTemplate from '@/emails/templates/f3-product-showcasee-template'
import FlsBaseEmailTemplate from '@/emails/templates/fls-base-email-template'
import FlsNewsletterTemplate from '@/emails/templates/fls-newsletter-template'
import FlsOrderEmail from '@/emails/templates/fls-order-email'
import FlsOriginalEmailTemplate from '@/emails/templates/fls-original-email-template'
import FlsF3ProductShowCaseTemplate from '@/emails/templates/fls-f3-product-show-case-template'
import FlsWelcomeEmail from '@/emails/templates/fls-welcome-email'
import WelcomeEmailNewTemplate from '@/emails/templates/WelcomeEmailNewTemplate'
import { NewsletterEmailTemplate } from '@/emails/templates/newsletter-email-template'
import WholesalerEmailTemplate from '@/emails/templates/wholesaler-email-template'
import OrderConfirmationTemplate from '@/emails/templates/OrderConfirmationTemplate'
import { WelcomeEmailTemplate } from '@/emails/templates/welcome-email'

export const emailTemplateRegistry: Record<string, any> = {
  'enhanced-email-template': EnhancedEmailTemplate,
  'f3-product-showcasee-template': F3ProductShowcaseTemplate,
  'fls-base-email-template': FlsBaseEmailTemplate,
  'fls-newsletter-template': FlsNewsletterTemplate,
  'fls-order-email': FlsOrderEmail,
  'fls-original-email-template': FlsOriginalEmailTemplate,
  'fls-f3-product-show-case-template': FlsF3ProductShowCaseTemplate,
  'fls-welcome-email': FlsWelcomeEmail,
  'WelcomeEmailNewTemplate': WelcomeEmailNewTemplate,
  'newsletter-email-template': NewsletterEmailTemplate,
  'wholesaler-email-template': WholesalerEmailTemplate,
  'OrderConfirmationTemplate': OrderConfirmationTemplate,
  'welcome-email': WelcomeEmailTemplate,
}

export function getEmailTemplateBySlug(slug: string) {
  return emailTemplateRegistry[slug] || null
}
