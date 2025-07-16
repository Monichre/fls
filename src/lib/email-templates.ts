import { promises as fs } from 'fs'
import path from 'path'
import { EmailTemplate } from './email-templates-client'

const emailTemplatesDir = path.join( process.cwd(), 'emails', 'templates' )

// -----------------------------------------------------------------------------
// STATIC TEMPLATE IMPORTS
// -----------------------------------------------------------------------------
// We use namespace imports (`* as Module`) so we can gracefully handle modules
// that export their component either as a default export *or* as a named
// export. The helper `resolveTemplate` picks the appropriate export at
// runtime.

// Helper to extract the email component from a module regardless of export
// style.
const resolveTemplate = ( mod: any ) => mod?.default ?? Object.values( mod ?? {} )[0]

// General templates
import * as NewsletterEmailTemplateModule from '../../emails/templates/newsletter-email-template'
import * as FlsNewsletterTemplateModule from '../../emails/templates/fls-newsletter-template'

// Welcome templates
import * as WelcomeEmailNewTemplateModule from '../../emails/templates/WelcomeEmailNewTemplate'
import * as FlsWelcomeEmailModule from '../../emails/templates/fls-welcome-email'
import * as WelcomeEmailModule from '../../emails/templates/welcome-email'

// Product / showcase templates
import * as F3ProductShowcaseTemplateModule from '../../emails/templates/f3-product-showcasee-template'
import * as FlsF3ProductShowCaseTemplateModule from '../../emails/templates/fls-f3-product-show-case-template'

// Transactional templates
import * as OrderConfirmationTemplateModule from '../../emails/templates/OrderConfirmationTemplate'
import * as FlsOrderEmailModule from '../../emails/templates/fls-order-email'

// Wholesale templates
import * as WholesalerEmailTemplateModule from '../../emails/templates/wholesaler-email-template'

// Misc / base templates
import * as EnhancedEmailTemplateModule from '../../emails/templates/enhanced-email-template'
import * as FlsBaseEmailTemplateModule from '../../emails/templates/fls-base-email-template'
import * as FlsOriginalEmailTemplateModule from '../../emails/templates/fls-original-email-template'

// -----------------------------------------------------------------------------
// TEMPLATE REGISTRY – keyed by slug (filename without extension)
// -----------------------------------------------------------------------------

const TEMPLATE_REGISTRY: Record<string, any> = {
  'newsletter-email-template': resolveTemplate( NewsletterEmailTemplateModule ),
  'fls-newsletter-template': resolveTemplate( FlsNewsletterTemplateModule ),

  'WelcomeEmailNewTemplate': resolveTemplate( WelcomeEmailNewTemplateModule ),
  'fls-welcome-email': resolveTemplate( FlsWelcomeEmailModule ),
  'welcome-email': resolveTemplate( WelcomeEmailModule ),

  'f3-product-showcasee-template': resolveTemplate( F3ProductShowcaseTemplateModule ),
  'fls-f3-product-show-case-template': resolveTemplate( FlsF3ProductShowCaseTemplateModule ),

  'OrderConfirmationTemplate': resolveTemplate( OrderConfirmationTemplateModule ),
  'fls-order-email': resolveTemplate( FlsOrderEmailModule ),

  'wholesaler-email-template': resolveTemplate( WholesalerEmailTemplateModule ),

  'enhanced-email-template': resolveTemplate( EnhancedEmailTemplateModule ),
  'fls-base-email-template': resolveTemplate( FlsBaseEmailTemplateModule ),
  'fls-original-email-template': resolveTemplate( FlsOriginalEmailTemplateModule ),
}

export async function getEmailTemplates(): Promise<EmailTemplate[]> {
  try {
    const files = await fs.readdir( emailTemplatesDir )
    const templates: EmailTemplate[] = []

    for ( const file of files ) {
      if ( file.endsWith( '.tsx' ) ) {
        const slug = file.replace( '.tsx', '' )
        const name = slug
          .split( '-' )
          .map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) )
          .join( ' ' )

        // Categorize templates
        let category = 'General'
        if ( slug.includes( 'welcome' ) ) category = 'Welcome'
        else if ( slug.includes( 'newsletter' ) ) category = 'Newsletter'
        else if ( slug.includes( 'product' ) || slug.includes( 'showcase' ) ) category = 'Product'
        else if ( slug.includes( 'order' ) || slug.includes( 'confirmation' ) ) category = 'Transactional'
        else if ( slug.includes( 'wholesaler' ) ) category = 'Wholesale'

        templates.push( {
          name,
          slug,
          description: `${name} email template`,
          category,
          component: null // Will be loaded dynamically
        } )
      }
    }

    return templates.sort( ( a, b ) => a.name.localeCompare( b.name ) )
  } catch ( error ) {
    console.error( 'Error loading email templates:', error )
    return []
  }
}

export async function getEmailTemplate( slug: string ) {
  // First, attempt to resolve from the static registry. This guarantees that
  // we always return a compiled React component without touching the file
  // system or relying on runtime TypeScript execution.
  if ( slug in TEMPLATE_REGISTRY ) {
    return TEMPLATE_REGISTRY[slug]
  }

  // Fallback – retain previous behaviour for any edge-case files that might be
  // added later but not yet registered. This keeps the API flexible while
  // ensuring existing templates work reliably.
  try {
    const templatePath = path.join( emailTemplatesDir, `${slug}.tsx` )

    // Verify the file exists before attempting dynamic import.
    await fs.access( templatePath )

    // Dynamic import of TypeScript files at runtime will fail; however, if the
    // file is JavaScript or has been pre-compiled elsewhere, this may succeed.
    // Use conditional import only as a last resort.
    const fullPath = path.resolve( process.cwd(), 'emails', 'templates', `${slug}` )
    const templateModule = await import( fullPath )
    return templateModule.default || templateModule
  } catch ( error ) {
    console.error( `Error loading template ${slug}:`, error )
    return null
  }
}

