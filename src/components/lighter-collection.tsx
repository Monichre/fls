"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const lighters = [
	{
		id: 1,
		name: "Inferno Red",
		description: "Bold and powerful, with striking red accents",
		image: "/mobile_screen_large.png",
		color: "bg-red-500/20",
	},
	{
		id: 2,
		name: "Electric Blue",
		description: "Energetic blue with high-visibility yellow branding",
		image: "/interface_large.png",
		color: "bg-blue-500/20",
	},
	{
		id: 3,
		name: "Royal Purple",
		description: "Luxurious purple gradient with premium finish",
		image: "/dashboard_medium.png",
		color: "bg-purple-500/20",
	},
];

export function LighterCollection() {
	const sectionRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "center",
		loop: true,
	});

	// Scroll to next/previous slide
	const scrollPrev = () => emblaApi?.scrollPrev();
	const scrollNext = () => emblaApi?.scrollNext();

	// GSAP animations
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".collection-content", {
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				scrollTrigger: {
					trigger: contentRef.current,
					start: "top 80%",
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
			className="relative bg-zinc-900 py-20 md:py-32 overflow-hidden"
		>
			<div className="container mx-auto px-4 md:px-6">
				{/* Content */}
				<div ref={contentRef} className="max-w-3xl mb-12 md:mb-20">
					<h2 className="collection-content text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
						FLS Lighters Collection
					</h2>
					<p className="collection-content text-lg md:text-xl text-zinc-300 mb-8">
						FLS brings you a vibrant range of lighters that blend comfort and
						style effortlessly. Each one is crafted to fit perfectly in your
						hand for a comfy grip every time. With sleek designs and fun
						patterns, FLS Lighters not only work great but also add a splash of
						sophistication to any moment.
					</p>
					<Button
						size="lg"
						variant="outline"
						className="collection-content border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full"
					>
						View More
					</Button>
				</div>

				{/* Carousel */}
				<div className="relative px-4 md:px-12">
					<div className="embla overflow-hidden" ref={emblaRef}>
						<div className="embla__container flex">
							{lighters.map((lighter) => (
								<div
									key={lighter.id}
									className="embla__slide flex-[0_0_280px] md:flex-[0_0_400px] px-4"
								>
									<div
										className={`relative group rounded-2xl p-8 h-[500px] md:h-[600px] ${lighter.color} backdrop-blur-xl transition-all duration-300 hover:scale-105`}
									>
										<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
										<Image
											src={lighter.image || "/placeholder.svg"}
											alt={lighter.name}
											fill
											className="object-contain p-4"
											quality={100}
											priority
										/>
										<div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
											<h3 className="text-xl font-bold mb-2">{lighter.name}</h3>
											<p className="text-sm text-white/80">
												{lighter.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation arrows */}
					<button
						onClick={scrollPrev}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 rounded-full p-3 text-black hover:bg-yellow-500 transition-colors z-10"
						aria-label="Previous slide"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>
					<button
						onClick={scrollNext}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 rounded-full p-3 text-black hover:bg-yellow-500 transition-colors z-10"
						aria-label="Next slide"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>
		</section>
	);
}
