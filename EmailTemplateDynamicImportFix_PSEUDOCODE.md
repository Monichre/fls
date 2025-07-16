# EmailTemplateDynamicImportFix – Pseudocode

## Objective

Eliminate runtime `MODULE_NOT_FOUND` errors when loading email templates in `/email-preview/[template]` by replacing runtime dynamic `import()` of TypeScript files with a static, build-time mapping of compiled modules.

---

## High-Level Plan

1. **Identify Failure Cause**  
   • `getEmailTemplate(slug)` attempted to `import()` `emails/templates/${slug}.tsx` during runtime.  
   • Node cannot execute raw TypeScript – resulting in `MODULE_NOT_FOUND`.
2. **Solution Strategy**  
   • Import every template **statically** so Next.js compiles them during build.  
   • Register each imported module in a lookup table keyed by *slug* (filename without extension).  
   • `getEmailTemplate(slug)` now simply returns `TEMPLATE_REGISTRY[slug]`.
3. **Implementation Steps**  

   ```text
   a. In src/lib/email-templates.ts
      i.  Define helper `resolveTemplate(mod)` -> picks default export or first named export.
      ii. Namespace-import every template file (e.g. `import * as NewsletterModule from '../../emails/templates/newsletter-email-template'`).
      iii. Build `TEMPLATE_REGISTRY` using `resolveTemplate()` for each module.
      iv. Update `getEmailTemplate` to read from registry first, falling back to old fs/dynamic logic for edge cases.
   b. No changes required to template files themselves.
   c. Maintain existing `getEmailTemplates()` directory scan for metadata.
   ```

4. **Risk / Edge Cases**  
   • New templates must be added to the registry – documented in comments.  
   • If a module exports multiple values, `resolveTemplate` picks the first; adjust if needed.

---

## Expected Outcome

• `/email-preview/[template]` now renders all templates without runtime errors.  
• API routes importing templates (e.g. wholesalers) remain unaffected.  
• Build remains incremental; static imports are tree-shaken by Next.js.
