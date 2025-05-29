# 01-UI-ChatbotModalTrigger.md

## Title
Implement Chatbot Modal Trigger Button

## Description
Add a persistent, accessible trigger button to open the AI chatbot modal, modeled after employee Ibrahim, on all pages. The button should be visually distinct, use Ibrahim's avatar, and be positioned as a floating action button (FAB) on desktop and mobile. The trigger must not interfere with other UI elements and should be accessible via keyboard and screen readers.

## Acceptance Criteria
- Floating trigger button is visible on all pages (desktop/mobile)
- Button uses Ibrahim's avatar and a chat icon
- Button opens the chatbot modal on click/keyboard
- Button is accessible (ARIA, tab order, focus ring)
- Button does not overlap critical UI
- Button is styled with shadcn/ui and Tailwind
- Button is dynamically imported for performance

## Implementation Notes
- Use shadcn/ui Button as base
- Use framer-motion for entrance/exit animation
- Use dynamic import for modal
- Position with fixed/bottom-right (desktop), fixed/bottom (mobile)
- Avatar asset: use provided or placeholder if not available
- Ensure z-index above main content, below nav overlays

## References
- [shadcn/ui Button](mdc:src/components/ui/button.tsx)
- [framer-motion docs](https://www.framer.com/motion/)
- [Vercel AI SDK UI](https://sdk.vercel.ai/docs/ai-sdk-ui/)

## Effort Estimation
- 1 story point
- High confidence
- Low complexity

## Testing Guidelines
- Unit test: button renders, opens modal
- Accessibility: tab, screen reader, focus
- Manual: mobile/desktop, overlapping UI 