import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
	/* config options here */
	typescript: {
		// ⚠️ Dangerously allow production builds to successfully complete even if
		// your project has type errors
		ignoreBuildErrors: true,
	},
	eslint: {
		// ⚠️ Dangerously allow production builds to successfully complete even if
		// your project has ESLint errors
		ignoreDuringBuilds: true,
	},
	images: {
		// Allow SVG images and be more permissive with image domains
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		// More permissive image loading configuration
		unoptimized: false, // Keep optimization for performance
		remotePatterns: [
			// Vercel Blob Storage
			{
				protocol: "https",
				hostname: "*.public.blob.vercel-storage.com",
			},
			{
				protocol: "https",
				hostname: "drfcdoakhkresrzk.public.blob.vercel-storage.com",
			},
			{
				protocol: "https",
				hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
			},
			// Common CDNs and image services
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "github.com",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
			// Allow any subdomain of common services
			{
				protocol: "https",
				hostname: "**.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "**.cloudfront.net",
			},
			{
				protocol: "https",
				hostname: "**.vercel.app",
			},
			{
				protocol: "https",
				hostname: "**.netlify.app",
			},
			// Very permissive catch-all patterns (use with caution)
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
			},
		],
	},
	// Increase build timeout if needed
	experimental: {
		// Other valid experimental options can go here
	},
	// Reduce the strictness of the output mode
	// output: "standalone",
	// poweredByHeader: false,
};

export default withContentlayer(nextConfig);
