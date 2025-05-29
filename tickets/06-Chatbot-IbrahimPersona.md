# 06-Chatbot-IbrahimPersona.md

## Title
Implement Ibrahim Persona for Chatbot

## Description
Configure the chatbot to consistently represent the persona of employee Ibrahim. This includes using Ibrahim's avatar, name, and a system prompt that defines his tone, expertise, and helpfulness. The chatbot should introduce itself as Ibrahim and maintain a friendly, knowledgeable, and professional tone throughout the conversation.

## Acceptance Criteria
- Chatbot header displays Ibrahim's avatar and name
- System prompt configures chatbot as Ibrahim (tone, expertise)
- Chatbot introduces itself as Ibrahim on first message
- Persona is consistent across all responses
- Avatar is accessible (alt text, size)
- Persona details are easy to update in code

## Implementation Notes
- Use a constant for persona config (name, avatar, prompt)
- System prompt: friendly, helpful, FLS product expert
- Avatar: use provided image or placeholder
- Ensure persona is referenced in API and UI

## References
- [Vercel AI SDK UI system prompt](https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot)

## Effort Estimation
- 1 story point
- High confidence
- Low complexity

## Testing Guidelines
- Unit: persona config, avatar render
- Manual: intro message, tone consistency 