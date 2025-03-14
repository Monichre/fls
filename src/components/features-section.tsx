"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

// Feature points data
const features = [
	{
		title: "High-Capacity Lighter",
		description: "1200 Ignitions",
		position: "top-1/4 right-0 md:right-10",
		linePosition: "-translate-x-16",
	},
	{
		title: "Sculptured Body",
		description: "",
		position: "top-1/2 left-0 md:left-10",
		linePosition: "translate-x-16",
	},
	{
		title: "Distinctive Curved Base",
		description: "",
		position: "bottom-1/4 right-0 md:right-10",
		linePosition: "-translate-x-16",
	},
];

export function FeaturesSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	// GSAP animations
	useEffect(() => {
		const ctx = gsap.context(() => {
			// Animate heading and description
			gsap.from(".features-header", {
				y: 50,
				opacity: 0,
				duration: 1,
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 80%",
					end: "bottom 60%",
					toggleActions: "play none none reverse",
				},
			});

			// Animate feature points
			gsap.from(".feature-point", {
				opacity: 0,
				x: (i) => (i % 2 === 0 ? 50 : -50),
				stagger: 0.2,
				duration: 0.8,
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 60%",
					end: "bottom 60%",
					toggleActions: "play none none reverse",
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative bg-zinc-900 py-20 md:py-32 overflow-hidden h-min-[1030px] h-auto flex flex-col items-center justify-center"
		>
			{/* Background image */}
			<div className="absolute inset-0">
				<Image
					src="/banner-.png"
					alt="FLS Lighter Features Background"
					fill
					className="object-cover"
					priority
					quality={100}
				/>
			</div>

			<div
				ref={contentRef}
				className="container mx-auto p-4 md:px-6 relative z-10"
			>
				{/* Header content */}
				<div className="max-w-3xl mx-auto text-center mb-20">
					<h2 className="features-header text-4xl md:text-6xl font-bold text-white mb-6">
						Features
					</h2>
					<p className="features-header text-lg md:text-xl text-zinc-300">
						Discover the outstanding features of the FLS Lighter, a perfect
						blend of innovation, design, and reliability. From its sleek and
						ergonomic design to its advanced fixed flame technology, each aspect
						of the FLS Lighter is crafted to exceed expectations.
					</p>
				</div>

				{/* Main feature showcase */}
				<div className="relative h-[600px] md:h-[800px]">
					{/* Center lighter image */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="relative w-48 md:w-64 h-[400px] md:h-[500px]">
							<Image
								src="/mobile_screen_large.png"
								alt="FLS Lighter Features"
								fill
								className="object-contain"
								priority
								quality={100}
							/>
						</div>
					</div>

					{/* Feature points */}
					{features.map((feature, index) => (
						<div
							key={index}
							className={`feature-point absolute ${feature.position} transform ${
								index % 2 === 0 ? "text-right" : "text-left"
							}`}
						>
							<div className="relative">
								<div
									className={`absolute top-1/2 ${feature.linePosition} w-32 h-px bg-yellow-400/80 transform -translate-y-1/2`}
								/>
								<div className="relative backdrop-blur-sm bg-black/30 p-2 rounded">
									<h3 className="text-white font-bold mb-1">{feature.title}</h3>
									{feature.description && (
										<p className="text-yellow-400 text-sm">
											{feature.description}
										</p>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
