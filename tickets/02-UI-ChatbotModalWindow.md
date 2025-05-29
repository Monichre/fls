# 02-UI-ChatbotModalWindow.md

## Title
Implement Chatbot Modal Window

## Description
Develop a modal window that displays the AI chatbot interface. The modal should be accessible, responsive, and styled to match the site's design system. It must support keyboard navigation, focus trapping, and be dismissible via close button, ESC key, and clicking outside. Modal should use framer-motion for entrance/exit animations, mirroring as per project standards.

## Acceptance Criteria
- Modal opens/closes via trigger, ESC, and outside click
- Modal traps focus and restores on close
- Modal header displays Ibrahim's avatar and name
- Modal is styled with shadcn/ui and Tailwind
- Modal uses framer-motion for mirrored entrance/exit
- Modal is responsive (desktop/mobile)
- Modal is accessible (ARIA roles, keyboard nav)
- Modal does not interfere with other overlays

## Implementation Notes
- Use shadcn/ui Dialog as base
- Use framer-motion for animation
- Ensure z-index above all content
- Header: avatar, name, close button
- Focus management: trap, restore
- Dismiss on ESC, click outside, close button

## References
- [shadcn/ui Dialog](https://ui.shadcn.com/docs/components/dialog)
- [framer-motion docs](https://www.framer.com/motion/)

## Effort Estimation
- 2 story points
- Medium confidence
- Moderate complexity (accessibility, animation)

## Testing Guidelines
- Unit: open/close, focus trap, dismiss
- Accessibility: ARIA, keyboard nav
- Manual: mobile/desktop, animation smoothness 