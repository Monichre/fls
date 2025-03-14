"use client";

import { ProductCollection } from "./ProductCollection";
import { About } from "./About";
import { WholeSale } from "./WholeSale";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/navbar";
import { NewsletterSignup } from "@/components/newsletter-signup";

import { Hero } from "@/components/hero";

import { useGSAP } from "@gsap/react";
import { DualSection } from "@/components/dual-section/DualSection";
import { SignatureDesignSection } from "@/components/signature-design-section";
import { LighterCollection } from "@/components/lighter-collection";
import { FeaturesSection } from "@/components/features-section";

gsap.registerPlugin(useGSAP);

// Register GSAP plugins
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

export const HomePage = () => {
	const containerRef = useRef(null);
	const heroRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	// Check if mobile on client side
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Parallax effect
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

	useGSAP(
		() => {
			// Animate hero text
			gsap.from(".hero-text", {
				y: 100,
				opacity: 0,
				duration: 1,
				stagger: 0.2,
				ease: "power3.out",
			});

			// Animate buttons
			gsap.fromTo(
				".hero-buttons .button",
				{
					y: 10,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.2,
					delay: 0.5,
					ease: "power3.out",
				},
			);

			// Scroll animations
			ScrollTrigger.batch(".fade-in", {
				onEnter: (elements) => {
					gsap.to(elements, {
						opacity: 1,
						y: 0,
						stagger: 0.15,
						duration: 0.8,
						ease: "power3.out",
					});
				},
				start: "top 85%",
			});
		},
		{ scope: containerRef },
	);

	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-zinc-900 text-white overflow-hidden"
		>
			<Hero y={y} opacity={opacity} ref={heroRef} />
			<DualSection />
			{/* Fixed Flame Section */}
			{/* <ProductCollection /> */}
			<SignatureDesignSection />
			<LighterCollection />
			<FeaturesSection />
		</div>
	);
};
