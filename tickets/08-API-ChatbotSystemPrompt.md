# 08-API-ChatbotSystemPrompt.md

## Title
Define and Manage Ibrahim System Prompt for Chatbot API

## Description
Create a clear, maintainable system prompt for the Ibrahim persona, to be used in the chatbot API route. The prompt should define Ibrahim's tone, expertise, and helpfulness, and be easy to update as needed. Store the prompt in a dedicated config file or constant, and ensure it is imported by the API route and UI as required.

## Acceptance Criteria
- System prompt is defined in a single config file/constant
- Prompt describes Ibrahim's tone, expertise, and helpfulness
- API route imports and uses the prompt
- Prompt is easy to update without code changes elsewhere
- Prompt is documented for future reference

## Implementation Notes
- Use a TypeScript constant or config file
- Example: "You are Ibrahim, a friendly, knowledgeable FLS employee..."
- Document prompt location and update process

## References
- [Vercel AI SDK UI system prompt](https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot)

## Effort Estimation
- 1 story point
- High confidence
- Low complexity

## Testing Guidelines
- Unit: prompt import, usage in API
- Manual: persona consistency in responses 