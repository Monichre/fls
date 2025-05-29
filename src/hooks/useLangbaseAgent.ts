"use client";

import { useState } from "react";
import {
	callLangbaseAgent,
	LangbaseAgentResponse,
} from "../lib/api/langbase-agent";

/**
 * Hook for interacting with the Langbase AI agent
 */
export function useLangbaseAgent() {
	const [response, setResponse] = useState<LangbaseAgentResponse | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	/**
	 * Send a message to the Langbase AI agent
	 *
	 * @param input - The user input to send to the agent
	 * @param options - Optional parameters for the agent
	 */
	const sendMessage = async (input: string, options?: Record<string, any>) => {
		setIsLoading(true);
		setError(null);

		try {
			const result = await callLangbaseAgent(input, options);
			setResponse(result);
			return result;
		} catch (err) {
			const error =
				err instanceof Error ? err : new Error("Unknown error occurred");
			setError(error);
			return null;
		} finally {
			setIsLoading(false);
		}
	};

	/**
	 * Clear the current response and error state
	 */
	const clearResponse = () => {
		setResponse(null);
		setError(null);
	};

	return {
		sendMessage,
		clearResponse,
		response,
		isLoading,
		error,
	};
}
