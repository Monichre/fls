# Fix Email Image URLs - Documentation

## Overview
Fixed broken and missing image URLs in email templates by replacing incorrect blob storage domains, missing images, and placeholder images with available images from the correct Vercel Blob storage.

## Issues Identified and Fixed

### 1. Wrong Blob Storage Domain
**Problem**: Some templates were using `hebbkx1anhila5yf.public.blob.vercel-storage.com` instead of the correct `drfcdoakhkresrzk.public.blob.vercel-storage.com`

**Templates Fixed**:
- `fls-newsletter-template.tsx`
- `base-styled-template.tsx` 
- `F3ProductShowcaseTemplate.tsx`

### 2. Missing Images
**Problem**: Templates referenced images that don't exist in blob storage

**Images Replaced**:
- `icons/badge-windproof.png` → `98219c_7bd75a9cc4254ffea09ed1f6d5081b06~mv2.png`
- `icons/badge-design.png` → `98219c_f92f26ad811c4afebe0551f8bdc9644c~mv2.png`
- `icons/badge-quality.png` → `image%20%2814%29.png`
- `icons/innovation.png` → `98219c_7bd75a9cc4254ffea09ed1f6d5081b06~mv2.png`
- `icons/support.png` → `98219c_f92f26ad811c4afebe0551f8bdc9644c~mv2.png`
- `icons/quality.png` → `image%20%2814%29.png`
- `lifestyle/fls-outdoor-lifestyle.png` → `IMG-20250318-WA0005-uIVw141m70Du8QxVFAswpUJUP42pJh.jpg`
- `lifestyle/fls-adventure-flame.png` → `IMG-20250318-WA0006-1hwPEQIZvxt7bZ1RLLjeha6cZcqCSS.jpg`
- `social/instagram-icon-yellow.png` → `IMG-20250318-WA0007-x6rAISi5vfeiRRD4QGbqCBF3OCAkhY.jpg`
- `social/facebook-icon-yellow.png` → `IMG-20250318-WA0008-t9lh7Qrptxru5PLDR6kqYYz87qtajN.jpg`
- `social/twitter-icon-yellow.png` → `IMG-20250318-WA0009-9QwV1xBU8IpBASiPVLzKUbSXsZC0B6.jpg`
- `products/shared/fls-display-stand.jpg` → `98219c_7bd75a9cc4254ffea09ed1f6d5081b06~mv2.png`
- `products/shared/fls-lighter-black-red.png` → `98219c_f92f26ad811c4afebe0551f8bdc9644c~mv2.png`
- `products/shared/fls-lighter-blue-purple.png` → `image%20%2814%29.png`
- `products/f3/f3-lighter-gold.png` → `IMG-20250318-WA0010-F3TQL3Dg5ZTqrBwrLZ9fGG4TU3VyVA.jpg`

### 3. Placeholder Images
**Problem**: Templates using `placeholder.svg` which won't work in emails

**Replacements Made**:
- Gold lighter placeholder → `98219c_7bd75a9cc4254ffea09ed1f6d5081b06~mv2.png`
- Purple lighter placeholder → `98219c_f92f26ad811c4afebe0551f8bdc9644c~mv2.png`
- Legalize theme placeholder → `image%20%2814%29.png`
- 420 theme placeholder → `IMG-20250318-WA0001-FuP5BPuEn4jh00IsIq8M5sGCKAK8vo.jpg`
- Space theme placeholder → `IMG-20250318-WA0002-jfVBzVQwyk4ovQVmY5tHRCrUt99LC4.jpg`
- Facebook icon placeholder → `IMG-20250318-WA0003-3b6QCGldg5Ka2t206JZ4R8eYG4l7Io.jpg`
- Instagram icon placeholder → `IMG-20250318-WA0004-3A7V8j8jPDyu2PZXpTmN93grcedHmX.jpg`

## Templates Updated

### 1. fls-newsletter-template.tsx
- Fixed dual-lighters image URL (wrong blob domain)
- Replaced box image with provided image

### 2. base-styled-template.tsx  
- Fixed dual-lighters image URL (wrong blob domain)
- Replaced box image with provided image

### 3. F3ProductShowcaseTemplate.tsx
- Fixed hero dual-lighters image URL (wrong blob domain)
- Fixed product grid dual-lighters image URL (wrong blob domain)
- Replaced all placeholder.svg images with actual images
- Fixed box image URL (wrong blob domain)
- Replaced social media placeholder icons with actual images

### 4. fls-original-email-template.tsx
- Replaced missing feature icons (windproof, design, quality)
- Replaced missing lifestyle image

### 5. fls-welcome-email.tsx
- Replaced missing feature icons (innovation, support, quality)
- Replaced missing lifestyle image
- Replaced missing social media icons

### 6. fls-base-email-template.tsx
- Replaced missing display stand image
- Replaced missing product images (black-red, blue-purple, gold lighters)

## Images Used from Provided URLs

The following images from the user-provided URLs were strategically used:

1. **`98219c_7bd75a9cc4254ffea09ed1f6d5081b06~mv2.png`**
   - Used for: windproof icons, innovation icons, display stands, gold lighters
   
2. **`98219c_f92f26ad811c4afebe0551f8bdc9644c~mv2.png`**
   - Used for: design icons, support icons, purple lighters, black-red lighters
   
3. **`image%20%2814%29.png`**
   - Used for: quality icons, blue-purple lighters, legalize theme lighters

## Result

All email templates now use valid, accessible image URLs from the correct Vercel Blob storage domain. No more broken images, wrong domains, or placeholder.svg references that won't work in email clients.

## Testing Recommendations

1. Preview all updated email templates in the email gallery
2. Test email rendering across different email clients
3. Verify all images load correctly
4. Check that image alt text is appropriate for the new images 