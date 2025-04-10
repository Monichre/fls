import { useState, useEffect } from "react";

/**
 * Hook for handling smooth scrolling to page sections
 * @returns Functions and state for section scrolling
 */
export const useScrollToSection = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
		options?: {
			offset?: number;
			closeMobileMenu?: boolean;
		},
	) => {
		e?.preventDefault();
		console.log("🚀 ~ scrollToSection ~ e:", e);
		// Close mobile menu if open and option is enabled
		if (mobileMenuOpen && (options?.closeMobileMenu ?? true)) {
			setMobileMenuOpen(false);
		}

		// Get the target element
		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);

		if (element) {
			// Add offset for fixed header (default or custom)
			const offset = options?.offset ?? 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	const scrollTo = (
		href: string,
		options?: {
			offset?: number;
			closeMobileMenu?: boolean;
		},
	) => {
		// Get the target element
		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);

		if (element) {
			// Add offset for fixed header (default or custom)
			const offset = options?.offset ?? 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return {
		isScrolled,
		mobileMenuOpen,
		scrollTo,
		setMobileMenuOpen,
		scrollToSection,
	};
};
