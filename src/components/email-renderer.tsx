'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Monitor, Smartphone, Code, Eye } from 'lucide-react'

interface EmailRendererProps {
  html: string
  templateName: string
}

export function EmailRenderer({ html, templateName }: EmailRendererProps) {
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview')
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop')

  const formatTemplateName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/emails">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Templates
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {formatTemplateName(templateName)}
              </h1>
              <p className="text-sm text-gray-500">Email Template Preview</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline">{templateName}</Badge>
            <div className="flex items-center border rounded-lg">
              <Button
                variant={viewMode === 'preview' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('preview')}
                className="rounded-r-none border-r"
              >
                <Eye className="w-4 h-4 mr-1" />
                Preview
              </Button>
              <Button
                variant={viewMode === 'code' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('code')}
                className="rounded-l-none"
              >
                <Code className="w-4 h-4 mr-1" />
                Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {viewMode === 'preview' ? (
          <div className="p-6">
            {/* Device Toggle */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center border rounded-lg bg-white">
                <Button
                  variant={deviceMode === 'desktop' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setDeviceMode('desktop')}
                  className="rounded-r-none border-r"
                >
                  <Monitor className="w-4 h-4 mr-1" />
                  Desktop
                </Button>
                <Button
                  variant={deviceMode === 'mobile' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setDeviceMode('mobile')}
                  className="rounded-l-none"
                >
                  <Smartphone className="w-4 h-4 mr-1" />
                  Mobile
                </Button>
              </div>
            </div>

            {/* Email Preview */}
            <div className="flex justify-center">
              <div
                className={`bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden ${
                  deviceMode === 'mobile' ? 'w-[375px]' : 'w-full max-w-4xl'
                }`}
              >
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-sm text-gray-600">
                      {formatTemplateName(templateName)} Preview
                    </span>
                  </div>
                </div>
                <iframe
                  srcDoc={html}
                  className={`w-full border-0 ${
                    deviceMode === 'mobile' ? 'h-[600px]' : 'h-[800px]'
                  }`}
                  title={`${templateName} Preview`}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-700">HTML Source</h3>
              </div>
              <pre className="p-4 text-sm overflow-auto max-h-[600px] bg-gray-50">
                <code>{html}</code>
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <a
            href={`/api/emails/${templateName}?format=html`}
            download={`${templateName}.html`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            Download HTML
          </a>
          <a
            href={`/api/emails/${templateName}?format=text`}
            download={`${templateName}.txt`}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            Download Text
          </a>
          <a
            href={`/api/emails/${templateName}?format=json`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            View JSON
          </a>
        </div>
      </div>
    </div>
  )
}