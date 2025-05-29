# 03-UI-ChatbotAnimations.md

## Title
Implement Mirrored Entrance/Exit Animations for Chatbot Modal

## Description
Add framer-motion powered entrance and exit animations to the chatbot modal and trigger button. Animations must be visually appealing, consistent with project standards, and mirrored for entrance/exit. Animations should be performant and not impact accessibility or responsiveness.

## Acceptance Criteria
- Modal and trigger have smooth entrance/exit animations
- Animations are mirrored (exit matches entrance)
- Animations use framer-motion
- Animations are performant (no jank)
- Animations do not interfere with accessibility
- Animations are tested on mobile and desktop

## Implementation Notes
- Use framer-motion variants for mirrored states
- Follow derived-cursor-rules for animation consistency
- Test with prefers-reduced-motion
- Use Tailwind for transition helpers if needed

## References
- [framer-motion docs](https://www.framer.com/motion/)
- [derived-cursor-rules](mdc:.cursor/rules/derived-cursor-rules.mdc)

## Effort Estimation
- 1 story point
- High confidence
- Low complexity

## Testing Guidelines
- Unit: animation triggers, reduced motion
- Manual: mobile/desktop, visual review 