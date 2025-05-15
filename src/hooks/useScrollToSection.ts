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
		// Close mobile menu if open and option is enabled
		if (mobileMenuOpen && (options?.closeMobileMenu ?? true)) {
			setMobileMenuOpen(false);
		}

		// Handle different types of links
		if (href.startsWith("#")) {
			// This is an anchor link - handle with scroll
			e?.preventDefault();

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
		} else if (
			href.toLowerCase().endsWith(".pdf") ||
			href.includes("/catalogue")
		) {
			// This is a PDF link - open in new tab
			e?.preventDefault();
			console.log("Opening PDF link:", href);
			window.open(href, "_blank", "noopener,noreferrer");
		}
		// For all other links, let the default navigation happen
	};

	const scrollTo = (
		href: string,
		options?: {
			offset?: number;
			closeMobileMenu?: boolean;
		},
	) => {
		// Only handle hash links in scrollTo
		if (href.startsWith("#")) {
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
		} else if (
			href.toLowerCase().endsWith(".pdf") ||
			href.includes("/catalogue")
		) {
			// This is a PDF link - open in new tab
			console.log("Opening PDF link:", href);
			window.open(href, "_blank", "noopener,noreferrer");
		} else {
			// For other links, navigate to the page
			window.location.href = href;
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
