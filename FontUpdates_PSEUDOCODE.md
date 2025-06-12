# Font Updates to Hosted URLs - Pseudocode

## Objective
Update all font resource use in `@/emails` and `@/templates` folders to use hosted font URLs instead of CSS variables.

## Current State Analysis
- Email templates use `var(--font-proxima-nova)` and `var(--font-poppins-black)`
- These variables are not properly defined with @font-face rules
- Hosted font URLs are available in image-cdn-mapping.md

## Available Hosted Fonts
```
Proxima Nova: https://drfcdoakhkresrzk.public.blob.vercel-storage.com/fonts/proxima-reg.woff2
Poppins Black: https://drfcdoakhkresrzk.public.blob.vercel-storage.com/fonts/poppins-black/Poppins-Black.ttf
Poppins variants: Multiple weights and styles available
```

## Implementation Steps

### Step 1: Create Font Definitions Module
```pseudocode
CREATE emails/styles/fonts.ts
DEFINE @font-face rules for:
  - Proxima Nova (regular weight)
  - Poppins Black
  - Additional Poppins variants as needed
INCLUDE fallback fonts for email client compatibility
EXPORT font family constants
```

### Step 2: Create Email Font Styles Component
```pseudocode
CREATE emails/styles/email-fonts.tsx
IMPORT font definitions from fonts.ts
CREATE React component that includes:
  - <style> tag with @font-face definitions
  - CSS custom properties that map to font families
  - Fallback font stacks for email clients
EXPORT EmailFonts component for use in templates
```

### Step 3: Update Email Templates
```pseudocode
FOR each template in emails/templates/
  IMPORT EmailFonts component
  ADD EmailFonts component to template head
  REPLACE CSS variables with direct font family references:
    - 'var(--font-proxima-nova)' → 'Proxima Nova, Arial, sans-serif'
    - 'var(--font-poppins-black)' → 'Poppins Black, Impact, Arial Black, sans-serif'
  ENSURE proper fallback fonts for email client compatibility
END FOR
```

### Step 4: Handle Incomplete Font Definitions
```pseudocode
IDENTIFY templates with incomplete fontFamily properties
UPDATE these to use proper font definitions
ENSURE no undefined or empty font family values
```

### Step 5: Create Font Testing Component
```pseudocode
CREATE emails/test-font-template.tsx
IMPLEMENT template that demonstrates all font styles
INCLUDE different weights, sizes, and styles
USE for visual verification of font loading
```

### Step 6: Update Documentation
```pseudocode
UPDATE image-cdn-mapping.md
ADD section for font usage guidelines
DOCUMENT proper font implementation patterns
INCLUDE email client compatibility notes
```

## Font Mapping Strategy
```pseudocode
// Current usage → New implementation
'var(--font-proxima-nova)' → 'Proxima Nova, Arial, sans-serif'
'var(--font-poppins-black)' → 'Poppins Black, Impact, Arial Black, sans-serif'

// For email client compatibility
INCLUDE web-safe fallbacks in font stacks
CONSIDER font-display: swap for performance
TEST across major email clients (Gmail, Outlook, Apple Mail)
```

## Email Client Considerations
```pseudocode
GMAIL: Limited CSS support, prefers inline styles
OUTLOOK: Poor web font support, needs strong fallbacks  
APPLE_MAIL: Good web font support
MOBILE_CLIENTS: Vary in font loading capabilities

STRATEGY:
  Use inline styles for maximum compatibility
  Include multiple font formats (woff2, ttf)
  Provide comprehensive fallback font stacks
```

## File Structure After Implementation
```
emails/
├── styles/
│   ├── fonts.ts              # Font definitions and @font-face rules
│   ├── email-fonts.tsx       # React component with font styles
│   └── index.ts               # Export all styles
├── templates/
│   ├── [all existing templates updated]
│   └── test-font-template.tsx # Font testing template
└── image-cdn-mapping.md       # Updated with font guidelines
```

## Success Criteria
- All email templates load fonts from hosted URLs
- Proper fallback fonts ensure compatibility
- No broken font references or CSS variables
- Visual consistency across email clients
- Documentation updated with implementation guidelines 