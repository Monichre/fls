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
	process.env.NEXT_PUBLIC_LANGBASE_API_ENDPOINT || "https://api.langbase.com/monichre/fls-website-agent";

// Use environment variable for authentication token
// Never directly hardcode authentication tokens in source code
const getAuthToken = (): string => {
	if (!process.env.LANGBASE_AUTH_TOKEN) {
		console.warn("LANGBASE_AUTH_TOKEN is not set in environment variables");
		// Return empty string or throw an error in production
		return process.env.NODE_ENV === "production" ? "" : "development_token";
	}
	return process.env.LANGBASE_AUTH_TOKEN;
};

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
				Authorization: `Bearer ${getAuthToken()}`,
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
