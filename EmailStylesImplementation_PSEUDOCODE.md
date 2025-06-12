# Email Styles Implementation Pseudocode

## Problem Analysis
- Email templates currently use hardcoded inline styles
- No consistency with global theme from `globals.css`
- Font families are hardcoded instead of using CSS variables
- Colors don't match the brand theme

## Solution Architecture

### 1. Create Shared Email Styles Module
```typescript
// emails/styles/email-theme.ts
export const EMAIL_THEME = {
  fonts: {
    heading: 'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
  },
  colors: {
    // Extract from globals.css
    brandYellow: '#f7cb00',
    background: '#ffffff',
    foreground: '#129 0.042 264.695', // Convert from oklch
    primary: '#208 0.042 265.755',
    // ... other colors
  },
  spacing: {
    // Standard spacing values
  }
}
```

### 2. Update Email Templates
For each template:
1. Import EMAIL_THEME
2. Replace hardcoded font families with theme fonts
3. Replace hardcoded colors with theme colors
4. Ensure consistent spacing and styling

### 3. Template Categories to Update
- F3ProductShowcaseTemplate.tsx
- FlsEmailTemplate.tsx  
- NewsletterTemplate.tsx
- OrderConfirmationTemplate.tsx
- OriginalFlsEmailTemplate.tsx
- SignatureSeriesLaunchTemplate.tsx
- WelcomeEmailNewTemplate.tsx
- All other templates in emails/templates/

### 4. Key Changes Per Template
- fontFamily: Use EMAIL_THEME.fonts.heading for h1-h6
- fontFamily: Use EMAIL_THEME.fonts.body for paragraphs and text
- backgroundColor: Use EMAIL_THEME.colors.brandYellow for buttons
- color: Use theme colors instead of hardcoded hex values
- Maintain email-safe inline styles (required for email clients)

### 5. Implementation Steps
1. Create email-theme.ts with extracted styles
2. Update each template systematically
3. Test email rendering
4. Document changes 