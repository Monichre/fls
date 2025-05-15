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

			if (!formType) return;

			try {
				const formData = new FormData(e.currentTarget);
				const formEntries = Object.fromEntries(formData.entries());

				let response: Response | undefined;

				if (formType === "earlyAccess") {
					// Extract data for wholesaler email
					const payload = {
						name: formEntries.name as string,
						companyName: formEntries.companyName as string,
						businessEmail: formEntries.businessEmail as string,
						businessType: formEntries.businessType as string,
						phoneNumber: formEntries.phoneNumber as string,
						industry: formEntries.industry as string,
					};

					// Call the wholesaler API endpoint
					response = await fetch("/api/send/wholesalers", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(payload),
					});

					setSuccessMessage(SUCCESS_MESSAGES.earlyAccess);
				} else if (formType === "newsletter") {
					// Extract data for newsletter email
					const payload = {
						name: formEntries.name as string,
						email: formEntries.email as string,
					};

					// Call the newsletter API endpoint
					response = await fetch("/api/send/newsletter", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(payload),
					});

					setSuccessMessage(SUCCESS_MESSAGES.newsletter);
				}

				if (!response?.ok) {
					throw new Error("Failed to send email");
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
				console.error("Form submission error:", error);
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
