/**
 * Langbase AI Agent service
 *
 * This service provides a wrapper around the Langbase AI API for the FLS website agent.
 */

// Type definitions
export interface LangbaseAgentRequest {
	input: string;
	options?: Record<string, any>;
}

export interface LangbaseAgentResponse {
	output: string;
	[key: string]: any; // For additional fields in the response
}

export const LANGBASE_API_ENDPOINT =
	"https://api.langbase.com/monichre/fls-website-agent";
export const LANGBASE_AUTH_TOKEN =
	"user_j1kyyhtUKA1S71EG8HTM7th9mX9CLC3G9fH8HFvRrWrVh5WEAXJ1pJDX1fEH1MWHUdHavb6PMVjiX1ZVpqQU36d";

/**
 * Calls the Langbase AI agent with the provided input
 *
 * @param input - The user input to send to the agent
 * @param options - Optional parameters to customize the agent behavior
 * @returns The response from the Langbase AI agent
 */
export async function callLangbaseAgent(
	input: string,
	options?: Record<string, any>,
): Promise<LangbaseAgentResponse> {
	try {
		const response = await fetch(LANGBASE_API_ENDPOINT, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${LANGBASE_AUTH_TOKEN}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				input,
				...options,
			}),
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Langbase API error (${response.status}): ${errorText || response.statusText}`,
			);
		}

		const data = await response.json();
		return data as LangbaseAgentResponse;
	} catch (error) {
		console.error("Error calling Langbase agent:", error);
		throw error instanceof Error
			? error
			: new Error("Unknown error occurred while calling Langbase agent");
	}
}
