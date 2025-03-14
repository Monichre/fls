"use client";

import { useState, useEffect } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface ResponsiveOptions {
	defaultBreakpoint?: Breakpoint;
	debounceDelay?: number;
}

interface ResponsiveState {
	breakpoint: Breakpoint;
	width: number;
	height: number;
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	isLandscape: boolean;
	prefersReducedMotion: boolean;
}

const breakpointValues = {
	xs: 0,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
};

/**
 * React hook for responsive design that works with Tailwind CSS breakpoints
 * @param options Configuration options
 * @returns Responsive state object with current breakpoint and device information
 */
export const useResponsive = (
	options: ResponsiveOptions = {},
): ResponsiveState => {
	const { debounceDelay = 200 } = options;

	const [state, setState] = useState<ResponsiveState>({
		breakpoint: "md",
		width: typeof window !== "undefined" ? window.innerWidth : 1024,
		height: typeof window !== "undefined" ? window.innerHeight : 768,
		isMobile: false,
		isTablet: false,
		isDesktop: true,
		isLandscape: true,
		prefersReducedMotion: false,
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		// Check for reduced motion preference
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		let debounceTimeout: NodeJS.Timeout;

		const calculateResponsiveState = (): ResponsiveState => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			const isLandscape = width > height;

			// Determine breakpoint
			let breakpoint: Breakpoint = "xs";
			if (width >= breakpointValues["2xl"]) breakpoint = "2xl";
			else if (width >= breakpointValues.xl) breakpoint = "xl";
			else if (width >= breakpointValues.lg) breakpoint = "lg";
			else if (width >= breakpointValues.md) breakpoint = "md";
			else if (width >= breakpointValues.sm) breakpoint = "sm";

			// Determine device type
			const isMobile = width < breakpointValues.md;
			const isTablet =
				width >= breakpointValues.md && width < breakpointValues.lg;
			const isDesktop = width >= breakpointValues.lg;

			return {
				breakpoint,
				width,
				height,
				isMobile,
				isTablet,
				isDesktop,
				isLandscape,
				prefersReducedMotion,
			};
		};

		// Set initial state
		setState(calculateResponsiveState());

		// Add classes to html element
		const updateHtmlClasses = (state: ResponsiveState) => {
			const html = document.documentElement;

			// Clear existing classes
			html.classList.remove("xs", "sm", "md", "lg", "xl", "2xl");
			html.classList.remove("is-mobile", "is-tablet", "is-desktop");
			html.classList.remove("landscape", "portrait");

			// Add current breakpoint class
			html.classList.add(state.breakpoint);

			// Add device type class
			if (state.isMobile) html.classList.add("is-mobile");
			if (state.isTablet) html.classList.add("is-tablet");
			if (state.isDesktop) html.classList.add("is-desktop");

			// Add orientation class
			html.classList.add(state.isLandscape ? "landscape" : "portrait");

			// Add reduced-motion class if applicable
			if (state.prefersReducedMotion) {
				html.classList.add("prefers-reduced-motion");
			} else {
				html.classList.remove("prefers-reduced-motion");
			}
		};

		// Handle resize with debounce for performance
		const handleResize = () => {
			clearTimeout(debounceTimeout);
			debounceTimeout = setTimeout(() => {
				const newState = calculateResponsiveState();
				setState(newState);
				updateHtmlClasses(newState);
			}, debounceDelay);
		};

		// Update on mount
		const initialState = calculateResponsiveState();
		updateHtmlClasses(initialState);

		// Listen for resize and orientation change
		window.addEventListener("resize", handleResize);
		window.addEventListener("orientationchange", handleResize);

		// Clean up
		return () => {
			clearTimeout(debounceTimeout);
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("orientationchange", handleResize);
		};
	}, [debounceDelay]);

	return state;
};

/**
 * Utility function to conditionally apply class names based on responsive state
 */
export const cn = (...classes: (string | boolean | undefined)[]) => {
	return classes.filter(Boolean).join(" ");
};

/**
 * Generate responsive class strings for Tailwind CSS
 */
export const responsive = (
	base: string,
	breakpoints: Record<Breakpoint, string>,
) => {
	return Object.entries(breakpoints).reduce((classes, [breakpoint, value]) => {
		return `${classes} ${breakpoint}:${value}`;
	}, base);
};

// Create hook index file
export * from "./use-responsive";
