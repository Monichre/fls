# Contentful Content Model Architecture for FLS Lighters Website

## Content Types Overview

### 1. Brand Information

- **Content Type: Brand**
  - Fields:
    - Name (Short Text)
    - Logo (Media)
    - Tagline (Short Text)
    - Mission Statement (Long Text)
    - Brand Story (Rich Text)
    - Social Media Links (JSON Object)
    - Contact Information (JSON Object)

### 2. Homepage Elements

- **Content Type: HomePage**
  - Fields:
    - Hero Banner (Reference to Hero Banner)
    - Featured Collections (References to Collections)
    - Featured Products (References to Products)
    - Value Propositions (References to Feature Blocks)
    - SEO Metadata (Reference to SEO)

### 3. Hero Banners

- **Content Type: HeroBanner**
  - Fields:
    - Title (Short Text) - "Crafted for Perfection"
    - Subtitle (Short Text)
    - Background Image (Media)
    - Icon
    - Content (Rich Text)
    - CTA Links (Reference to CTA Link)

### 4. Feature Blocks

- **Content Type: FeatureBlock**
  - Fields:
    - Title (Short Text) - e.g., "Reliable in Any Condition"
    - Description (Long Text)
    - Icon/Image (Media)
    - Background Color (Short Text)
    - Text Color (Short Text)
    - CTA Text (Short Text)
    - CTA Link (Short Text)
    - Display Order (Number)

### 5. Product Collections

- **Content Type: Collection**
  - Fields:
    - Title (Short Text) - e.g., "FLS Lighters Collection"
    - Description (Long Text)
    - Featured Image (Media)
    - Background Color (Short Text)
    - Products (References to Products)
    - Slug (Short Text)
    - SEO Metadata (Reference to SEO)

### 6. Products

- **Content Type: Product**
  - Fields:
    - Name (Short Text)
    - SKU (Short Text)
    - Description (Rich Text)
    - Images (Media - Multiple)
    - Price (Number)
    - Sale Price (Number)
    - Features (References to Feature Blocks)
    - Specifications (JSON Object)
    - Colors Available (JSON Object)
    - Related Products (References to Products)
    - Slug (Short Text)
    - SEO Metadata (Reference to SEO)

### 7. Product Features

- **Content Type: ProductFeature**
  - Fields:
    - Title (Short Text)
    - Description (Long Text)
    - Icon/Image (Media)
    - Technical Specifications (JSON Object)

### 8. Navigation

- **Content Type: Navigation**
  - Fields:
    - Title (Short Text)
    - Menu Items (JSON Object with links)
    - Location (Short Text) - header, footer, etc.

### 9. Page

- **Content Type: Page**
  - Fields:
    - Title (Short Text)
    - Slug (Short Text)
    - Content Sections (References to Content Blocks)
    - SEO Metadata (Reference to SEO)

### 10. Content Block (For flexible page building)

- **Content Type: ContentBlock**
  - Fields:
    - Title (Short Text)
    - Content Type (Short Text) - text, image, gallery, feature list, etc.
    - Rich Text Content (Rich Text)
    - Media (Media - Multiple)
    - Background Color (Short Text)
    - Layout (Short Text) - full width, split, etc.
    - CTA (JSON Object)

### 11. SEO

- **Content Type: SEO**
  - Fields:
    - Title (Short Text)
    - Description (Long Text)
    - Keywords (Short Text)
    - Open Graph Image (Media)
    - Canonical URL (Short Text)
    - Robots (Short Text)

## Content Strategy Recommendations

1. **Modular Content Approach**
   - Build reusable content blocks that can be assembled in different ways
   - Create consistent branded elements across the site

2. **Content Relationships**
   - Set up clear relationships between products and collections
   - Link related products for cross-selling opportunities
   - Connect feature blocks to both general site content and specific products

3. **Visual Consistency**
   - Maintain the black/yellow color scheme throughout the content model
   - Allow color customization fields for special promotions or seasonal changes

4. **Localization Strategy**
   - Set up content fields to support multiple languages
   - Create a localization structure for international expansion

5. **Content Governance**
   - Implement publishing workflows with clearly defined roles
   - Schedule content releases for product launches

6. **Rich Media Management**
   - Organize assets with consistent naming conventions
   - Set up image transformations for different display contexts

## Implementation Approach

1. **Development Phase**
   - Start with core content types (Brand, Product, Collection)
   - Build flexible page templates using the ContentBlock type
   - Implement a component-based approach in Next.js that mirrors Contentful structure

2. **Migration Plan**
   - Map existing content to new content model
   - Create initial seed content for essential pages
   - Set up automated imports where possible

3. **Performance Optimization**
   - Implement static site generation for product pages
   - Set up incremental static regeneration for frequently updated content
   - Use Contentful's GraphQL API for efficient data fetching

4. **Integration Points**
   - Integrate with e-commerce platform if needed
   - Set up webhooks for content updates
   - Implement analytics tracking for content performance
