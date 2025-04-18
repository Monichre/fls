"use client";

import type React from "react";

import { useState, useCallback } from "react";
import type {
	SubmissionStatus,
	FormType,
} from "@/components/sign-up/signup-form";
import { FORM_TIMING, SUCCESS_MESSAGES } from "@/components/sign-up/constants";

interface UseFormSubmissionProps {
	onSuccess?: () => void;
	onReset?: () => void;
}

export function useFormSubmission({
	onSuccess,
	onReset,
}: UseFormSubmissionProps = {}) {
	const [submissionStatus, setSubmissionStatus] =
		useState<SubmissionStatus>("idle");
	const [successMessage, setSuccessMessage] = useState("");

	const handleSubmit = useCallback(
		async (e: React.FormEvent<HTMLFormElement>, formType: FormType) => {
			e.preventDefault();
			setSubmissionStatus("submitting");

			try {
				// Simulate form submission with a delay
				await new Promise((resolve) =>
					setTimeout(resolve, FORM_TIMING.submissionDelay),
				);

				// Set success message based on form type
				if (formType === "earlyAccess") {
					setSuccessMessage(SUCCESS_MESSAGES.earlyAccess);
				} else {
					setSuccessMessage(SUCCESS_MESSAGES.newsletter);
				}

				setSubmissionStatus("success");
				onSuccess?.();

				// Close the form after showing success message for a few seconds
				setTimeout(() => {
					// Reset states after animation completes
					setTimeout(() => {
						setSubmissionStatus("idle");
						onReset?.();
					}, FORM_TIMING.resetDelay);
				}, FORM_TIMING.successMessageDuration);
			} catch (error) {
				setSubmissionStatus("error");
				setSuccessMessage("An error occurred. Please try again.");
			}
		},
		[onSuccess, onReset],
	);

	return {
		submissionStatus,
		successMessage,
		handleSubmit,
	};
}
