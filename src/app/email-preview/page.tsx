import { EmailPreview } from '@/components/email-preview'
import { getEmailTemplates } from '@/lib/email-templates'

export default async function EmailsPage() {
  const templates = await getEmailTemplates()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <EmailPreview templates={templates} />
    </div>
  )
}

export const metadata = {
  title: 'FLS Email Templates - Team Preview',
  description: 'Preview FLS email templates for team members',
}