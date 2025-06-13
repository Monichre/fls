"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { useResponsive } from "@/hooks";

interface ResponsiveImageProps extends Omit<ImageProps, "src"> {
	src: string;
	mobileSrc?: string;
	desktopSrc?: string;
	loadingPriority?: "high" | "medium" | "low";
	fadeIn?: boolean;
}

/**
 * ResponsiveImage component that optimizes image loading based on device
 *
 * Features:
 * - Automatically selects the appropriate image source based on device
 * - Lazy loading with priority control
 * - Optional fade-in effect
 * - Reduced quality on mobile devices to improve performance
 */
export const ResponsiveImage = ({
	src,
	mobileSrc,
	desktopSrc,
	loadingPriority = "medium",
	fadeIn = true,
	quality,
	className,
	placeholder = "blur",
	blurDataURL,
	...props
}: ResponsiveImageProps) => {
	const { isMobile, isTablet, prefersReducedMotion } = useResponsive();
	const [loaded, setLoaded] = useState(false);

	// Determine the appropriate image source
	const imageSrc =
		isMobile && mobileSrc
			? mobileSrc
			: !isMobile && desktopSrc
				? desktopSrc
				: src;

	// Determine loading priority
	const priority = loadingPriority === "high" || props.priority;

	// Set appropriate quality based on device
	const imageQuality = quality || (isMobile ? 75 : isTablet ? 85 : 90);

	// Generate blur data URL if not provided
	const imageBlurDataURL =
		blurDataURL ||
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHg8Q8KAAAAABJRU5ErkJggg==";

	// Disable fade-in for users who prefer reduced motion
	const shouldFadeIn = fadeIn && !prefersReducedMotion;

	// Apply fade-in effect when loaded
	useEffect(() => {
		if (!shouldFadeIn) {
			setLoaded(true);
			return;
		}

		const timer = setTimeout(() => {
			setLoaded(true);
		}, 100);

		return () => clearTimeout(timer);
	}, [shouldFadeIn]);

	return (
		<div className="relative overflow-hidden">
			<Image
				src={imageSrc}
				quality={imageQuality}
				loading={priority ? "eager" : "lazy"}
				placeholder={placeholder}
				blurDataURL={imageBlurDataURL}
				onLoad={() => setLoaded(true)}
				className={`
          ${className || ""} 
          ${shouldFadeIn ? (loaded ? "opacity-100" : "opacity-0") : "opacity-100"}
          ${shouldFadeIn ? "transition-opacity duration-500" : ""}
        `}
				{...props}
			/>
		</div>
	);
};

export default ResponsiveImage;
