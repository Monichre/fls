# Fix Email Image URLs - Pseudocode

## Step 1: Identify Issues
1. **Wrong blob storage domain**: Templates using `hebbkx1anhila5yf.public.blob.vercel-storage.com` instead of `drfcdoakhkresrzk.public.blob.vercel-storage.com`
2. **Missing images**: References to images that don't exist in blob storage:
   - `icons/badge-windproof.png`
   - `icons/badge-design.png` 
   - `icons/badge-quality.png`
   - `icons/innovation.png`
   - `icons/support.png`
   - `icons/quality.png`
   - `lifestyle/fls-outdoor-lifestyle.png`
   - `lifestyle/fls-adventure-flame.png`
   - `social/instagram-icon-yellow.png`
   - `social/facebook-icon-yellow.png`
   - `social/twitter-icon-yellow.png`
   - `products/shared/fls-display-stand.jpg`
   - `products/shared/fls-lighter-black-red.png`
   - `products/shared/fls-lighter-blue-purple.png`
   - `products/f3/f3-lighter-gold.png`
3. **Placeholder images**: Using placeholder.svg which won't work in emails

## Step 2: Map Available Images
From the provided URLs:
- `https://drfcdoakhkresrzk.public.blob.vercel-storage.com/98219c_7bd75a9cc4254ffea09ed1f6d5081b06~mv2.png`
- `https://drfcdoakhkresrzk.public.blob.vercel-storage.com/98219c_f92f26ad811c4afebe0551f8bdc9644c~mv2.png`
- `https://drfcdoakhkresrzk.public.blob.vercel-storage.com/image%20%2814%29.png`

## Step 3: Fix Templates
1. **fls-newsletter-template.tsx**: Fix wrong blob domain
2. **base-styled-template.tsx**: Fix wrong blob domain
3. **F3ProductShowcaseTemplate.tsx**: Fix wrong blob domain and placeholders
4. **fls-original-email-template.tsx**: Replace missing icon/lifestyle images
5. **fls-welcome-email.tsx**: Replace missing icon/social images
6. **fls-base-email-template.tsx**: Replace missing product images

## Step 4: Image Replacement Strategy
- Use provided images as fallbacks for missing images
- Prioritize using existing images from blob storage when available
- Replace placeholder.svg with actual images
- Ensure all URLs use correct blob domain

## Step 5: Update Templates
For each template:
1. Replace wrong blob domain URLs
2. Replace missing image URLs with available alternatives
3. Remove placeholder.svg references
4. Test image accessibility 