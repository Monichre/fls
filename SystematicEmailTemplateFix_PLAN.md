# Systematic Email Template Fix - Complete Plan

## Issues Identified

### 1. Hardcoded Colors (`#FFD700` → `var(--brand-yellow)`)
**Affected Templates:**
- `F3ProductShowcaseTemplate.tsx` - ✅ **FIXED**
- `dls-newsletter-template.tsx` 
- `fls-base-email-template.tsx`
- `fls-original-email-template.tsx` 
- `OrderConfirmationTemplate.tsx`
- `fls-signature-series-email.tsx`
- `fls-welcome-email.tsx`
- `OriginalFlsEmailTemplate.tsx` 
- `SignatureSeriesLaunchTemplate.tsx`

### 2. Hardcoded Fonts (`Arial, sans-serif` → CSS variables)
**Affected Templates:**
- `test-image-template.tsx`
- `base-styled-template.tsx`

### 3. Redundant Style Objects (const declarations)
**Templates with const style objects that should use inline styles:**
- `dls-newsletter-template.tsx` (10+ const objects)
- `fls-base-email-template.tsx` (15+ const objects)
- `fls-original-email-template.tsx` (12+ const objects)
- `OrderConfirmationTemplate.tsx` (11+ const objects)
- `NewsletterTemplate.tsx` (9+ const objects - also uses EMAIL_STYLES)
- `base-styled-template.tsx` (25+ const objects)
- `FlsEmailTemplate.tsx` (11+ const objects - also uses EMAIL_STYLES)

## Fix Strategy

### Priority 1: High-Impact Templates (Most Used)
1. **OrderConfirmationTemplate.tsx** - Customer-facing
2. **fls-welcome-email.tsx** - New user experience
3. **SignatureSeriesLaunchTemplate.tsx** - Product launches

### Priority 2: Newsletter & Marketing Templates
4. **dls-newsletter-template.tsx** - Regular communications
5. **NewsletterTemplate.tsx** - Alternative newsletter format
6. **fls-base-email-template.tsx** - Base template

### Priority 3: Specialized Templates
7. **fls-original-email-template.tsx** - Legacy template
8. **OriginalFlsEmailTemplate.tsx** - Duplicate of above
9. **base-styled-template.tsx** - Complex template
10. **test-image-template.tsx** - Development template

## Changes Required for Each Template

### Standard Fix Pattern:
1. **Remove all `const styleObject = {}` declarations**
2. **Replace `#FFD700` with `var(--brand-yellow)`**
3. **Replace `Arial, sans-serif` with `var(--font-proxima-nova)`**
4. **Apply `var(--font-poppins-black)` to headings**
5. **Convert to inline styles** for email compatibility
6. **Update any EMAIL_STYLES imports** to direct CSS variables

### Template-Specific Notes:
- **NewsletterTemplate.tsx**: Remove EMAIL_STYLES dependency
- **FlsEmailTemplate.tsx**: Remove EMAIL_STYLES dependency  
- **base-styled-template.tsx**: Most complex - 25+ style objects to inline
- **test-image-template.tsx**: Simple fix - just font update

## Automation Approach

### Phase 1: Color Fixes (Quick Wins)
- Find/replace all `#FFD700` → `var(--brand-yellow)`
- Find/replace all `#FFCC00` → `var(--brand-yellow)` (if any)

### Phase 2: Font Fixes
- Replace `Arial, sans-serif` → `var(--font-proxima-nova)`
- Add `fontFamily: 'var(--font-poppins-black)'` to headings

### Phase 3: Style Inlining
- Remove const declarations
- Move styles inline to JSX elements
- Ensure email client compatibility

## Expected Impact

### Before Fix:
- ❌ Inconsistent fonts across templates
- ❌ Hardcoded colors breaking theme consistency  
- ❌ Redundant style objects making templates hard to maintain
- ❌ Mixed theming systems (EMAIL_STYLES vs direct styles)

### After Fix:
- ✅ All templates use CSS variables from globals.css
- ✅ Consistent fonts: Poppins for headings, Proxima Nova for body
- ✅ Brand yellow consistent across all communications
- ✅ Simplified inline styles for email compatibility
- ✅ Single source of truth: globals.css

## Implementation Order

1. Start with **OrderConfirmationTemplate.tsx** (customer-critical)
2. Fix **SignatureSeriesLaunchTemplate.tsx** (product launches)
3. Batch process newsletter templates
4. Handle complex templates (base-styled-template.tsx) last

## Quality Assurance

After each fix:
- [ ] Test in React Email dev server
- [ ] Verify CSS variables render correctly
- [ ] Check email client compatibility
- [ ] Validate brand consistency
- [ ] Confirm no style regressions 