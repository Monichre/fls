export interface EmailTemplate {
  name: string
  slug: string
  description: string
  category: string
  component: any
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