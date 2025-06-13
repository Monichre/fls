import {render} from '@react-email/render'
import {getEmailTemplate} from '@/lib/email-templates'
import {EmailRenderer} from '@react-email/components'

interface EmailTemplatePageProps {
  params: {
    template: string
  }
}

export default async function EmailTemplatePage({
  params,
}: EmailTemplatePageProps) {
  const {template: templateName} = params

  try {
    const EmailComponent = await getEmailTemplate(templateName)

    if (!EmailComponent) {
      return (
        <div className='flex items-center justify-center min-h-screen'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>
              Template Not Found
            </h1>
            <p className='text-gray-600'>
              The template "{templateName}" could not be found.
            </p>
          </div>
        </div>
      )
    }

    const html = render(<EmailComponent />)

    return <EmailRenderer html={html} templateName={templateName} />
  } catch (error) {
    console.error('Error rendering email template:', error)
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-red-600 mb-2'>Error</h1>
          <p className='text-gray-600'>
            Failed to render template "{templateName}"
          </p>
        </div>
      </div>
    )
  }
}

export async function generateStaticParams() {
  const templates = await import('@/lib/email-templates').then((mod) =>
    mod.getEmailTemplates()
  )
  return templates.map((template) => ({
    template: template.slug,
  }))
}
