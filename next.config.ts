import type { NextConfig } from "next";

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
		// dangerouslyAllowSVG: true,
		// contentDispositionType: "attachment",
	},
	// Increase build timeout if needed
	experimental: {
		// Other valid experimental options can go here
	},
	// Reduce the strictness of the output mode
	// output: "standalone",
	// poweredByHeader: false,
};

export default nextConfig;
