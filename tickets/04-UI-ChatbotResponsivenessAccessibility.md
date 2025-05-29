# 04-UI-ChatbotResponsivenessAccessibility.md

## Title
Ensure Chatbot Modal and Trigger are Responsive and Accessible

## Description
Guarantee that the chatbot modal and trigger button are fully responsive across all device sizes and meet accessibility standards (WCAG 2.1 AA). This includes proper ARIA roles, keyboard navigation, focus management, and screen reader support. The UI must adapt gracefully to mobile, tablet, and desktop layouts.

## Acceptance Criteria
- Modal and trigger are fully responsive (mobile, tablet, desktop)
- All interactive elements are accessible via keyboard
- ARIA roles and labels are present and correct
- Focus is managed and visible at all times
- Screen reader users can open, interact, and close the modal
- Color contrast meets accessibility standards
- No horizontal scrolling or layout breakage

## Implementation Notes
- Use shadcn/ui and Tailwind responsive utilities
- Test with keyboard, screen reader, and mobile emulation
- Use aria-modal, aria-labelledby, aria-describedby as needed
- Ensure focus trap and restore

## References
- [shadcn/ui Dialog](https://ui.shadcn.com/docs/components/dialog)
- [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/)

## Effort Estimation
- 1 story point
- High confidence
- Low complexity

## Testing Guidelines
- Manual: keyboard, screen reader, mobile/desktop
- Accessibility: axe, Lighthouse, manual review 