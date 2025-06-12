# Email Template Image Fixes - Pseudocode

## Overview
Fix image URLs and styling inconsistencies in F3ProductShowcaseTemplate.tsx, NewsletterTemplate.tsx, and OriginalFlsEmailTemplate.tsx to match the working base-styled-template.tsx.

## Available Resources

### CSS Variables (from globals.css):
- `--font-poppins-black` for headings
- `--font-proxima-nova` for body text
- `--brand-yellow: #f7cb00` for FLS yellow color

### Available Images (from Vercel Blob):
- `logo-FlkeAzCczUoYzWRjHD4I3GPl9zoPMu.png` - Main logo
- `dual-lighters-DDbYuPzwTH53bubLp1hGXt4Hjmr7OC.png` - Product showcase image
- `IMG-20250318-WA0001-FuP5BPuEn4jh00IsIq8M5sGCKAK8vo.jpg` - Feature icon 1
- `IMG-20250318-WA0002-jfVBzVQwyk4ovQVmY5tHRCrUt99LC4.jpg` - Feature icon 2  
- `IMG-20250318-WA0003-3b6QCGldg5Ka2t206JZ4R8eYG4l7Io.jpg` - Feature icon 3
- `IMG-20250318-WA0011-5NMgw6YixwjZAHHlXoJbV8JOn5KU5Y.jpg` - Display stand
- Various other product images

## Fix Plan

### 1. F3ProductShowcaseTemplate.tsx
**Issues:**
- Non-existent product grid images (f3-lighter-carbon.png, etc.)
- Non-existent feature icons (icon-flame.png, etc.)
- Inconsistent font usage

**Fixes:**
```
REPLACE non-existent product grid images WITH available product images:
- f3-lighter-carbon.png → IMG-20250318-WA0004-3A7V8j8jPDyu2PZXpTmN93grcedHmX.jpg
- f3-lighter-metallic-blue.png → IMG-20250318-WA0005-uIVw141m70Du8QxVFAswpUJUP42pJh.jpg
- f3-lighter-matte-black.png → IMG-20250318-WA0006-1hwPEQIZvxt7bZ1RLLjeha6cZcqCSS.jpg
- f3-lighter-gold.png → IMG-20250318-WA0007-x6rAISi5vfeiRRD4QGbqCBF3OCAkhY.jpg
- f3-lighter-red.png → IMG-20250318-WA0008-t9lh7Qrptxru5PLDR6kqYYz87qtajN.jpg
- f3-lighter-silver.png → IMG-20250318-WA0009-9QwV1xBU8IpBASiPVLzKUbSXsZC0B6.jpg

REPLACE non-existent feature icons WITH available feature images:
- icon-flame.png → IMG-20250318-WA0001-FuP5BPuEn4jh00IsIq8M5sGCKAK8vo.jpg
- icon-grip.png → IMG-20250318-WA0002-jfVBzVQwyk4ovQVmY5tHRCrUt99LC4.jpg
- icon-shield.png → IMG-20250318-WA0003-3b6QCGldg5Ka2t206JZ4R8eYG4l7Io.jpg

REPLACE display box image WITH:
- fls-display-box.jpg → IMG-20250318-WA0011-5NMgw6YixwjZAHHlXoJbV8JOn5KU5Y.jpg

UPDATE fonts TO use CSS variables:
- Replace hardcoded font families with 'var(--font-poppins-black)' for headings
- Replace hardcoded font families with 'var(--font-proxima-nova)' for body text

UPDATE colors TO use CSS variables:
- Replace hardcoded yellow (#FFD700) with 'var(--brand-yellow)'
```

### 2. NewsletterTemplate.tsx
**Issues:**
- Uses complex email-theme system instead of direct CSS variables
- Imports from '../styles/email-theme' which is unnecessary complexity

**Fixes:**
```
REMOVE import from '../styles/email-theme'

REPLACE email theme object usage WITH direct CSS variables:
- EMAIL_FONTS.heading → 'var(--font-poppins-black)'
- EMAIL_FONTS.body → 'var(--font-proxima-nova)'
- EMAIL_COLORS.brandYellow → 'var(--brand-yellow)'
- EMAIL_COLORS.* → Direct color values or CSS variables

SIMPLIFY styling objects TO use direct CSS:
- Remove mergeEmailStyles() calls
- Use plain CSS objects with CSS variables
```

### 3. OriginalFlsEmailTemplate.tsx  
**Issues:**
- Minor font consistency issues (user says "almost there")

**Fixes:**
```
ENSURE all fontFamily properties use CSS variables:
- headingStyle.fontFamily → 'var(--font-poppins-black)'
- paragraphStyle.fontFamily → 'var(--font-proxima-nova)'
- All other text elements → appropriate CSS variable

VERIFY all color values use CSS variables:
- Yellow colors → 'var(--brand-yellow)'
```

## Implementation Steps

1. **Create backup** of current templates
2. **Fix F3ProductShowcaseTemplate.tsx** with proper image URLs and CSS variables
3. **Simplify NewsletterTemplate.tsx** to remove email-theme dependency  
4. **Polish OriginalFlsEmailTemplate.tsx** font usage
5. **Test** all templates in email gallery
6. **Document** changes in EmailTemplateImageFixes.md

## Success Criteria

- All image URLs point to existing Vercel Blob storage resources
- All templates use CSS variables from globals.css consistently
- All templates follow the successful pattern from base-styled-template.tsx
- Email gallery displays all templates correctly
- No broken images or missing resources 