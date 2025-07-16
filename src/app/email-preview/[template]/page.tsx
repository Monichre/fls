import React from 'react'
import {render} from '@react-email/render'
import {getEmailTemplate, getEmailTemplates} from '@/lib/email-templates'
import {getEmailTemplateBySlug} from '@/lib/email-template-registry'

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
    // Use static registry instead of dynamic import
    const EmailComponent = getEmailTemplateBySlug(templateName)

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

    const html = render(React.createElement(EmailComponent))

    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {templateName}
            </h1>
            <p className="text-gray-600">Email Template Preview</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    )
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
