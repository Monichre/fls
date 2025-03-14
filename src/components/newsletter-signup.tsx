"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { CheckCircle2, Loader2 } from "lucide-react";

export function NewsletterSignup() {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!email || !email.includes("@")) {
			toast("Invalid email", {
				description: "Please enter a valid email address",
				className: "destructive",
			});
			return;
		}

		setIsSubmitting(true);

		// Simulate API call
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			setIsSuccess(true);
			toast("Successfully subscribed!", {
				description: "Thank you for joining our newsletter",
			});
		} catch (error) {
			toast("Something went wrong", {
				description: "Please try again later",
				className: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full">
			{!isSuccess ? (
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="flex flex-col sm:flex-row gap-3">
						<Input
							type="email"
							placeholder="Enter your email"
							className="bg-zinc-800 border-zinc-700 focus-visible:ring-yellow-400"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<Button
							type="submit"
							className="bg-yellow-400 hover:bg-yellow-500 text-black"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<Loader2 className="h-4 w-4 animate-spin mr-2" />
							) : null}
							Subscribe
						</Button>
					</div>
					<p className="text-xs text-zinc-400 text-center sm:text-left">
						By subscribing, you agree to our Terms of Service and Privacy
						Policy.
					</p>
				</form>
			) : (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-zinc-800/50 p-6 rounded-lg text-center"
				>
					<CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
					<h3 className="text-xl font-medium mb-2">Thanks for subscribing!</h3>
					<p className="text-zinc-400">
						We've sent a confirmation email to{" "}
						<span className="text-white font-medium">{email}</span>
					</p>
				</motion.div>
			)}
		</div>
	);
}
