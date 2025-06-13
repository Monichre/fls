'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EmailTemplate, categorizeTemplates } from '@/lib/email-templates'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface EmailPreviewProps {
  templates: EmailTemplate[]
}

export function EmailPreview({ templates }: EmailPreviewProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const categorizedTemplates = categorizeTemplates(templates)
  
  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const filteredCategorized = categorizeTemplates(filteredTemplates)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          FLS Email Templates
        </h1>
        <p className="text-lg text-gray-600">
          Preview and test email templates for the FLS team
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Templates by Category */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All ({templates.length})</TabsTrigger>
          {Object.entries(categorizedTemplates).map(([category, categoryTemplates]) => (
            <TabsTrigger key={category} value={category.toLowerCase()}>
              {category} ({categoryTemplates.length})
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <TemplateGrid templates={filteredTemplates} />
        </TabsContent>
        
        {Object.entries(filteredCategorized).map(([category, categoryTemplates]) => (
          <TabsContent key={category} value={category.toLowerCase()} className="mt-6">
            <TemplateGrid templates={categoryTemplates} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function TemplateGrid({ templates }: { templates: EmailTemplate[] }) {
  if (templates.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No templates found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <Card key={template.slug} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{template.name}</CardTitle>
              <Badge variant="secondary">{template.category}</Badge>
            </div>
            <CardDescription>{template.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Link
                href={`/emails/${template.slug}`}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center text-sm font-medium transition-colors"
              >
                Preview
              </Link>
              <a
                href={`/api/emails/${template.slug}?format=html`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-center text-sm font-medium transition-colors"
              >
                View HTML
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}