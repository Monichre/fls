"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

type Product = {
	id: string;
	name: string;
	imageSrc: string;
};

export const ProductGallery = () => {
	const [products] = useState<Product[]>([
		{
			id: "product1",
			name: "Electronic Lighter",
			imageSrc: "/images/product1.png",
		},
		{
			id: "product2",
			name: "FLS Lighter Blue",
			imageSrc: "/images/product2.png",
		},
		{
			id: "product3",
			name: "Metallic Lighter",
			imageSrc: "/images/product3.png",
		},
		{
			id: "product4",
			name: "Pocket Lighter",
			imageSrc: "/images/product4.png",
		},
		{
			id: "product5",
			name: "Premium Lighter",
			imageSrc: "/images/product5.png",
		},
	]);

	const scrollContainer = useRef<HTMLDivElement>(null);
	const [showLeftScroll, setShowLeftScroll] = useState(false);
	const [showRightScroll, setShowRightScroll] = useState(true);

	const checkScrollButtons = useCallback(() => {
		if (scrollContainer.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
			setShowLeftScroll(scrollLeft > 0);
			setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 5);
		}
	}, []);

	useEffect(() => {
		const container = scrollContainer.current;
		if (container) {
			container.addEventListener("scroll", checkScrollButtons);
			// Initial check
			checkScrollButtons();

			return () => {
				container.removeEventListener("scroll", checkScrollButtons);
			};
		}
	}, [checkScrollButtons]);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainer.current) {
			const scrollAmount = 300;
			const newScrollLeft =
				direction === "left"
					? scrollContainer.current.scrollLeft - scrollAmount
					: scrollContainer.current.scrollLeft + scrollAmount;

			scrollContainer.current.scrollTo({
				left: newScrollLeft,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="relative">
			{showLeftScroll && (
				<button
					type="button"
					className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 text-white rounded-full p-2 shadow-lg"
					onClick={() => scroll("left")}
					aria-label="Scroll left"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>
			)}

			{showRightScroll && (
				<button
					type="button"
					className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 text-white rounded-full p-2 shadow-lg"
					onClick={() => scroll("right")}
					aria-label="Scroll right"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			)}

			<div
				ref={scrollContainer}
				className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
			>
				{products.map((product) => (
					<div key={product.id} className="flex-none w-64 snap-start">
						<div className="bg-gray-900 rounded-lg shadow-md overflow-hidden h-96 border border-gray-800">
							<div className="p-4 h-full flex flex-col">
								<div className="flex-grow flex items-center justify-center p-4">
									<Image
										src={product.imageSrc}
										alt={product.name}
										width={200}
										height={350}
										className="object-contain max-h-full"
									/>
								</div>
								<div className="p-4 text-center">
									<h3 className="font-medium text-lg text-white">
										{product.name}
									</h3>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
		</div>
	);
};
