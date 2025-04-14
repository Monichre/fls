import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure the plugin is registered
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxOptions {
	isMobile?: boolean;
	prefersReducedMotion?: boolean;
	debug?: boolean;
	target?: string;
	trigger?: string;
	start?: string;
	end?: string;
	scrub?: number | boolean;
	markers?: boolean;
	yDistance?: number;
	scale?: boolean;
	opacity?: boolean;
	rotation?: boolean;
	background?: boolean;
	stagger?: boolean;
	onEnter?: () => void;
}

/**
 * A custom hook for creating parallax scrolling effects with GSAP
 */
export const useParallax = <T extends HTMLElement>(
	ref: React.RefObject<T>,
	options: ParallaxOptions = {},
) => {
	const animation = useRef<gsap.core.Timeline | null>(null);

	const {
		isMobile = false,
		prefersReducedMotion = false,
		debug = false,
		target,
		trigger,
		start = "top bottom",
		end = "bottom top",
		scrub = 0.5,
		markers = false,
		yDistance,
		scale = false,
		opacity = false,
		rotation = false,
		background = false,
		stagger = false,
		onEnter,
	} = options;

	useEffect(() => {
		if (!ref.current || prefersReducedMotion) return;

		const element = ref.current;
		const targetElement = target ? element.querySelectorAll(target) : element;
		const triggerElement = trigger
			? element.querySelector(trigger) || element
			: element;

		if (debug) {
			console.log("[Parallax] Target found:", targetElement);
			console.log("[Parallax] Trigger:", triggerElement);
		}

		// Use larger distances on desktop for more dramatic effects
		const distance = yDistance || (isMobile ? 40 : 80);

		// Animation timeline
		animation.current = gsap.timeline({
			scrollTrigger: {
				trigger: triggerElement,
				start,
				end,
				scrub,
				markers: debug || markers,
				onEnter:
					onEnter ||
					(debug
						? () => console.log("[Parallax] Element entered viewport")
						: undefined),
			},
		});

		// Y-axis parallax movement (most common effect)
		if (targetElement) {
			if (NodeList.prototype.isPrototypeOf(targetElement) && stagger) {
				// Handle multiple elements with staggered animations
				Array.from(targetElement as NodeListOf<Element>).forEach(
					(el, index) => {
						const direction = index % 2 === 0 ? 1 : -1;
						const staggerDelay = index * 0.1;

						// Y movement
						animation.current?.fromTo(
							el,
							{ y: distance * direction * -0.5 },
							{ y: distance * direction, ease: "none" },
							0,
						);

						// Optional scale effect
						if (scale) {
							animation.current?.fromTo(
								el,
								{ scale: 0.95 },
								{ scale: 1.05, ease: "none" },
								0,
							);
						}

						// Optional opacity effect
						if (opacity) {
							animation.current?.fromTo(
								el,
								{ opacity: 0.5 },
								{ opacity: 1, ease: "power2.out" },
								0,
							);
						}

						// Optional rotation effect
						if (rotation) {
							animation.current?.fromTo(
								el,
								{ rotationX: 5 * direction },
								{ rotationX: 0, ease: "none" },
								0,
							);
						}
					},
				);
			} else {
				// Single element or treating multiple elements as one
				// Y movement
				animation.current?.fromTo(
					targetElement,
					{ y: distance * 0.5 },
					{ y: -distance * 0.5, ease: "none" },
					0,
				);

				// Optional scale effect
				if (scale) {
					animation.current?.fromTo(
						targetElement,
						{ scale: 0.95 },
						{ scale: 1.05, ease: "none" },
						0,
					);
				}

				// Optional opacity effect
				if (opacity) {
					animation.current?.fromTo(
						targetElement,
						{ opacity: 0.7 },
						{ opacity: 1, ease: "power2.out" },
						0,
					);
				}

				// Optional rotation effect
				if (rotation) {
					animation.current?.fromTo(
						targetElement,
						{ rotationX: 5 },
						{ rotationX: 0, ease: "none" },
						0,
					);
				}
			}

			// Optional background parallax effect
			if (background) {
				animation.current?.fromTo(
					element,
					{ backgroundPosition: "50% 0%" },
					{ backgroundPosition: "50% 100%", ease: "none" },
					0,
				);
			}
		}

		// Cleanup function to kill ScrollTrigger instances
		return () => {
			if (animation.current) {
				animation.current.kill();
			}

			// Use for...of loop instead of forEach for better performance
			for (const trigger of ScrollTrigger.getAll()) {
				if (trigger.vars.trigger === triggerElement) {
					trigger.kill();
				}
			}
		};
	}, [
		ref,
		isMobile,
		prefersReducedMotion,
		target,
		trigger,
		start,
		end,
		scrub,
		markers,
		debug,
		yDistance,
		scale,
		opacity,
		rotation,
		background,
		stagger,
		onEnter,
	]);

	return { animation };
};
