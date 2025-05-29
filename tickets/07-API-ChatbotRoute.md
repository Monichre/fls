# 07-API-ChatbotRoute.md

## Title
Implement Next.js API Route for Chatbot

## Description
Create a Next.js API route (e.g., `/api/chat`) to handle chat requests from the frontend. The route should use the Vercel AI SDK to stream responses from the selected model (e.g., GPT-4o), apply the Ibrahim persona system prompt, and handle errors gracefully. The route must be secure, performant, and support streaming.

## Acceptance Criteria
- API route exists at `/api/chat`
- Uses Vercel AI SDK to stream responses
- Applies Ibrahim persona system prompt
- Handles errors and returns appropriate status codes
- Supports streaming for real-time UI
- No sensitive data exposure
- Rate limiting or abuse prevention in place

## Implementation Notes
- Use Vercel AI SDK `streamText` in route
- Import system prompt/persona from config
- Handle POST requests with message array
- Return streaming response
- Add basic rate limiting (middleware or logic)

## References
- [Vercel AI SDK UI API route example](https://sdk.vercel.ai/docs/ai-sdk-ui/generative-user-interfaces)

## Effort Estimation
- 2 story points
- Medium confidence
- Moderate complexity (streaming, error handling)

## Testing Guidelines
- Unit: valid/invalid requests, error handling
- Manual: streaming, persona prompt, rate limit 