# Email Template Fix - Pseudocode

## Problem Analysis
1. Email templates are using hardcoded font families instead of CSS variables from globals.css
2. EmailHeader and EmailFooter components use `Arial, sans-serif` instead of proper fonts
3. Some templates use intermediate theme system instead of direct CSS variables
4. Need to ensure all images use CDN URLs from image-cdn-mapping.md

## Solution Plan

### Step 1: Fix Font Usage
- Replace all `Arial, sans-serif` with `var(--font-proxima-nova)` for body text
- Replace heading fonts with `var(--font-poppins-black)`
- Update EmailHeader and EmailFooter components

### Step 2: Fix Color Usage  
- Replace hardcoded colors like `#FFCC00` with `var(--brand-yellow)`
- Replace other hardcoded colors with appropriate CSS variables
- Ensure consistent brand colors across all templates

### Step 3: Fix Email Template System
- Update email-template.tsx to use direct CSS variables instead of EMAIL_COLORS
- Remove dependency on email-theme.ts intermediate system
- Apply inline styles with proper CSS variables

### Step 4: Verify CDN Images
- Ensure all templates use correct CDN URLs from image-cdn-mapping.md
- Verify image paths are working

## Implementation Order
1. Fix EmailHeader component - replace Arial with proper fonts
2. Fix EmailFooter component - replace Arial with proper fonts  
3. Fix email-template.tsx - replace EMAIL_COLORS with CSS variables
4. Update other templates as needed
5. Test image loading and overall styling

## Expected Outcome
- All email templates use consistent fonts from globals.css
- All colors use proper CSS variables
- Images load correctly from CDN
- Email templates maintain compatibility while using proper theming 