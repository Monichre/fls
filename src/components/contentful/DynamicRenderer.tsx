// components/contentful/DynamicContentRenderer.js
import {useState, useEffect} from 'react'
import componentMap from './registry'

export default function DynamicContentRenderer({contentType, componentData}) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(false)
  }, [contentType])

  if (loading) return <div>Loading content...</div>
  if (error) return <div>Error loading content: {error.message}</div>

  // Get the component based on content type
  const Component = componentMap[contentType]

  if (!Component) {
    console.warn(`No component registered for content type: ${contentType}`)
    return <div>Unknown content type: {contentType}</div>
  }

  // Render the component with the content data as props
  return <Component {...componentData} />
}
