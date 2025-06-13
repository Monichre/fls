import { promises as fs } from 'fs'
import path from 'path'

export interface EmailTemplate {
  name: string
  slug: string
  description: string
  category: string
  component: any
}

const emailTemplatesDir = path.join(process.cwd(), 'emails', 'templates')

export async function getEmailTemplates(): Promise<EmailTemplate[]> {
  try {
    const files = await fs.readdir(emailTemplatesDir)
    const templates: EmailTemplate[] = []
    
    for (const file of files) {
      if (file.endsWith('.tsx')) {
        const slug = file.replace('.tsx', '')
        const name = slug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        
        // Categorize templates
        let category = 'General'
        if (slug.includes('welcome')) category = 'Welcome'
        else if (slug.includes('newsletter')) category = 'Newsletter'
        else if (slug.includes('product') || slug.includes('showcase')) category = 'Product'
        else if (slug.includes('order') || slug.includes('confirmation')) category = 'Transactional'
        else if (slug.includes('wholesaler')) category = 'Wholesale'
        
        templates.push({
          name,
          slug,
          description: `${name} email template`,
          category,
          component: null // Will be loaded dynamically
        })
      }
    }
    
    return templates.sort((a, b) => a.name.localeCompare(b.name))
  } catch (error) {
    console.error('Error loading email templates:', error)
    return []
  }
}

export async function getEmailTemplate(slug: string) {
  try {
    const templatePath = path.join(emailTemplatesDir, `${slug}.tsx`)
    
    // Check if file exists
    await fs.access(templatePath)
    
    // Dynamically import the template
    const templateModule = await import(`../../emails/templates/${slug}.tsx`)
    return templateModule.default || templateModule
  } catch (error) {
    console.error(`Error loading template ${slug}:`, error)
    return null
  }
}

export function categorizeTemplates(templates: EmailTemplate[]) {
  const categories: { [key: string]: EmailTemplate[] } = {}
  
  templates.forEach(template => {
    if (!categories[template.category]) {
      categories[template.category] = []
    }
    categories[template.category].push(template)
  })
  
  return categories
}