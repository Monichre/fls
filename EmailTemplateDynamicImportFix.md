# EmailTemplateDynamicImportFix – Implementation Notes

## Modified Files

1. **`src/lib/email-templates.ts`**  
   • Added static namespace-imports for every template in `emails/templates`.  
   • Implemented `resolveTemplate` helper to gracefully extract the component (default or first named export).  
   • Created `TEMPLATE_REGISTRY` mapping `slug -> component`.  
   • Updated `getEmailTemplate(slug)` to look up in the registry first, falling back to legacy dynamic logic for yet-to-be-registered templates.
2. **`EmailTemplateDynamicImportFix_PSEUDOCODE.md`**  
   • Captures the step-by-step reasoning and high-level plan.

## Data Flow After Fix

```
[email-preview route] ─┐
                      ▼
           getEmailTemplate(slug)
                      ▼ (registry lookup)
            TEMPLATE_REGISTRY[slug]
                      ▼
               React.createElement()
                      ▼
                 @react-email/render
                      ▼
                 HTML preview page
```

* All template components are now part of the build graph, ensuring type-safety and eliminating runtime `MODULE_NOT_FOUND` errors.

## Key Considerations

• **Extensibility** – New templates require a single namespace import and registry entry.  
• **Performance** – Static imports allow Next.js to tree-shake unused templates in production bundles.  
• **Backward Compatibility** – The fallback dynamic import preserves previous behaviour for unregistered files.
