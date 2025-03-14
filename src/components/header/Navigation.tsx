"use client";

import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuItems = [
		{ label: "Home", href: "https://www.flslighter.com.au" },
		{ label: "Products", href: "https://www.flslighter.com.au/products" },
		{ label: "About", href: "https://www.flslighter.com.au/about" },
		{ label: "Community", href: "https://www.flslighter.com.au/community" },
		{ label: "Gallery", href: "https://www.flslighter.com.au/gallery" },
		{ label: "Contact", href: "https://www.flslighter.com.au/contact" },
		{ label: "FAQ", href: "https://www.flslighter.com.au/faq" },
	];

	return (
		<nav
			className="flex items-center w-min bg-black rounded-full ml-auto"
			aria-label="Site"
		>
			{/* Desktop Navigation */}
			<ul className="hidden md:flex space-x-6 bg-transparent rounded-full p-4">
				{menuItems.map((item) => (
					<li key={item.label} className="relative rounded-full">
						<Link
							href={item.href}
							className="py-4 px-2 text-white hover:text-[#f7cb00] transition-colors duration-200 rounded-full"
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>

			{/* Mobile Navigation Toggle */}
			<button
				type="button"
				className="md:hidden text-white bg-black p-2 rounded-md"
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				aria-expanded={isMobileMenuOpen}
				aria-controls="mobile-menu"
				aria-label="Toggle menu"
			>
				<span className="sr-only">Toggle menu</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-6 h-6"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d={
							isMobileMenuOpen
								? "M6 18L18 6M6 6l12 12"
								: "M4 6h16M4 12h16M4 18h16"
						}
					/>
				</svg>
			</button>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div
					id="mobile-menu"
					className="absolute top-16 left-0 right-0 bg-black shadow-md py-2 md:hidden z-10"
				>
					<ul className="flex flex-col">
						{menuItems.map((item) => (
							<li key={item.label}>
								<Link
									href={item.href}
									className="block py-2 px-4 text-white hover:bg-gray-800"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};
