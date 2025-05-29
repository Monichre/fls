# Langbase AI Agent

This document explains how to use the Langbase AI Agent service in the FLS website project.

## Overview

The Langbase AI Agent allows you to integrate an AI assistant into your website that can answer questions about FLS products and services. This implementation provides:

- A TypeScript service to handle API calls to Langbase
- A React hook for easy integration into components
- A ready-to-use chat component

## Service Architecture

The implementation includes:

1. Core API service (`src/lib/api/langbase-agent.ts`)
2. React hook for state management (`src/hooks/useLangbaseAgent.ts`)
3. UI component (`src/components/langbase-agent/LangbaseChat.tsx`)

## Usage Examples

### Basic API Call

```typescript
import { callLangbaseAgent } from '@/lib/api/langbase-agent';

// In a server component or API route
export async function GET() {
  try {
    const result = await callLangbaseAgent('Tell me about FLS products');
    return Response.json(result);
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: 'Failed to connect to Langbase' }, { status: 500 });
  }
}
```

### Using the React Hook

```tsx
'use client';

import { useLangbaseAgent } from '@/hooks';

export default function MyComponent() {
  const { sendMessage, response, isLoading, error } = useLangbaseAgent();
  
  const handleClick = async () => {
    await sendMessage('Tell me about FLS products');
  };
  
  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Ask about products
      </button>
      
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {response && <div>{response.output}</div>}
    </div>
  );
}
```

### Using the Chat Component

```tsx
import { LangbaseChat } from '@/components/langbase-agent';

export default function AIChatPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chat with our AI Assistant</h1>
      <LangbaseChat
        placeholder="Ask about our products..."
        buttonText="Send Message"
        className="mx-auto"
      />
    </div>
  );
}
```

## Configuration

The Langbase API endpoint and authentication token are stored as constants in `src/lib/api/langbase-agent.ts`. For production environments, consider moving these values to environment variables.

## Security Considerations

- The authentication token is currently hardcoded in the service file. In a production environment, this should be moved to a server-side environment variable to prevent exposure in client-side code.
- Consider implementing rate limiting to prevent abuse of the API.

## Future Improvements

- Add streaming response support when Langbase provides it
- Implement conversation history
- Add typing indicators and other UX improvements
- Create a more comprehensive chat interface with message history 