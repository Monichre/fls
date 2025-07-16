import React from 'react'
import { render } from '@react-email/render'
import { getEmailTemplateBySlug } from '@/lib/email-template-registry'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { template: string } }
) {
  const { template: templateName } = params
  const { searchParams } = new URL(request.url)
  const format = searchParams.get('format') || 'html'
  
  try {
    const EmailComponent = getEmailTemplateBySlug(templateName)
    
    if (!EmailComponent) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      )
    }

    if (format === 'html') {
      const html = render(React.createElement(EmailComponent))
      return new NextResponse(html, {
        headers: { 'Content-Type': 'text/html' },
      })
    }
    
    if (format === 'text') {
      const text = render(React.createElement(EmailComponent), { plainText: true })
      return new NextResponse(text, {
        headers: { 'Content-Type': 'text/plain' },
      })
    }
    
    if (format === 'json') {
      const html = render(React.createElement(EmailComponent))
      const text = render(React.createElement(EmailComponent), { plainText: true })
      
      return NextResponse.json({
        html,
        text,
        template: templateName,
      })
    }
    
    return NextResponse.json(
      { error: 'Invalid format. Use html, text, or json' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Error rendering email template:', error)
    return NextResponse.json(
      { error: 'Failed to render template' },
      { status: 500 }
    )
  }
}