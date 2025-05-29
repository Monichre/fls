# 05-Chatbot-UI-Integration.md

## Title
Integrate Vercel AI SDK UI Chat Interface

## Description
Embed the Vercel AI SDK UI chat interface inside the chatbot modal. Use the `useChat` hook for real-time streaming, message state, and input management. Ensure the chat UI is styled to match the site, supports session message persistence, and handles loading/error states gracefully.

## Acceptance Criteria
- Chat UI is rendered inside the modal
- Uses Vercel AI SDK UI `useChat` hook
- Supports real-time streaming of messages
- Handles loading, error, and empty states
- Session message persistence (while modal open)
- UI matches site design (shadcn/ui, Tailwind)
- Input is accessible and mobile-friendly

## Implementation Notes
- Follow Vercel AI SDK UI docs for integration
- Use named exports, functional components
- Style with shadcn/ui and Tailwind
- Test with long/short messages, errors

## References
- [Vercel AI SDK UI](https://sdk.vercel.ai/docs/ai-sdk-ui/)
- [useChat hook](https://sdk.vercel.ai/docs/ai-sdk-ui/generative-user-interfaces)

## Effort Estimation
- 2 story points
- Medium confidence
- Moderate complexity (integration, state)

## Testing Guidelines
- Unit: message send/receive, error state
- Manual: mobile/desktop, streaming, persistence 