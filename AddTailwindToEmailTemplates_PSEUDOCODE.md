# Add Tailwind Component to Email Templates - Pseudocode

## Overview
Add the `<Tailwind>` component wrapper around each email template in both `/emails` and `/emails/templates` directories.

## Step-by-Step Plan

### 1. Identify All Email Template Files
- Templates in `/emails` root directory:
  - welcome-email.tsx
  - notion-magic-link.tsx  
  - stripe-welcome.tsx
  - plaid-verify-identity.tsx
  - vercel-invite-user.tsx
  - newsletter-signup.tsx

- Templates in `/emails/templates` directory:
  - WelcomeEmailNewTemplate.tsx
  - wholesaler-email-template.tsx
  - newsletter-email-template.tsx
  - test-image-template.tsx
  - welcome-email.tsx
  - fls-welcome-email.tsx
  - fls-signature-series-email.tsx
  - fls-newsletter-template.tsx
  - fls-original-email-template.tsx
  - fls-f3-product-show-case-template.tsx
  - fls-base-email-template.tsx
  - enhanced-email-template.tsx
  - base-styled-template.tsx
  - email-template.tsx
  - SignatureSeriesLaunchTemplate.tsx
  - OriginalFlsEmailTemplate.tsx
  - OrderConfirmationTemplate.tsx
  - NewsletterTemplate.tsx
  - FlsEmailTemplate.tsx
  - F3ProductShowcaseTemplate.tsx
  - font-test-template.tsx

### 2. Update Each Template File

FOR EACH template_file:
  1. UPDATE import statement to include Tailwind
     - IF import uses @react-email/components:
       - ADD 'Tailwind' to existing import list
     - ELSE:
       - ADD new import: import { Tailwind } from '@react-email/components'
  
  2. WRAP the entire JSX content inside <Tailwind> component
     - FIND the outermost JSX element (usually <Html> or <div>)
     - WRAP it with <Tailwind> and </Tailwind>
     - MAINTAIN proper indentation and formatting

### 3. Template Patterns

PATTERN A - React Email Components (like welcome-email.tsx):
```typescript
// BEFORE:
import { Body, Button, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components"

return (
  <Html>
    <Head />
    <Body>
      // content
    </Body>
  </Html>
)

// AFTER:
import { Body, Button, Container, Head, Heading, Html, Preview, Section, Text, Tailwind } from "@react-email/components"

return (
  <Tailwind>
    <Html>
      <Head />
      <Body>
        // content
      </Body>
    </Html>
  </Tailwind>
)
```

PATTERN B - HTML div elements (like newsletter-email-template.tsx):
```typescript
// BEFORE:
import * as React from 'react'
// other imports

return (
  <div style={...}>
    // content
  </div>
)

// AFTER:
import * as React from 'react'
import { Tailwind } from '@react-email/components'
// other imports

return (
  <Tailwind>
    <div style={...}>
      // content
    </div>
  </Tailwind>
)
```

### 4. Processing Order
- Start with `/emails` root directory templates
- Then process `/emails/templates` directory templates
- Process each file individually to ensure proper wrapping

### 5. Validation
- VERIFY each file compiles without errors
- ENSURE proper import syntax
- CONFIRM Tailwind wrapper is correctly positioned
- MAINTAIN existing functionality and styling

## Expected Outcome
All email templates will have:
1. Tailwind imported from '@react-email/components'
2. Content wrapped in <Tailwind> component
3. Preserved existing styling and functionality
4. Consistent structure across all templates 