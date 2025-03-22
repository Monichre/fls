import type {
	HeroBannerProps,
	CTALink,
} from "@/components/contentful/blocks/HeroBanner";

interface ContentfulImage {
	url: string;
	width?: number;
	height?: number;
	description?: string;
}

interface ContentfulCTALink {
	sys?: {
		id: string;
	};
	title?: string;
	link?: string;
}

interface ContentfulHeroBanner {
	title?: string;
	subtitle?: string;
	backgroundImage?: ContentfulImage;
	iconImage?: ContentfulImage;
	content?: string;
	ctaText?: string;
	ctaLink?: string;
	textColor?: string;
	backgroundColor?: string;
	ctaLinksCollection?: {
		items?: ContentfulCTALink[];
	};
}

/**
 * Maps Contentful HeroBanner data to component props
 */
export const mapHeroBannerData = (
	data: ContentfulHeroBanner,
): HeroBannerProps => {
	if (!data) {
		throw new Error("No hero banner data provided");
	}

	// Extract and transform CTA links if they exist
	const ctaLinks: CTALink[] = [];

	if (data.ctaLink && data.ctaText) {
		ctaLinks.push({
			id: "primary-cta",
			title: data.ctaText,
			link: data.ctaLink,
		});
	}

	// If there's a collection of CTA links, add those too
	const ctaLinksItems = data.ctaLinksCollection?.items || [];

	if (ctaLinksItems.length > 0) {
		ctaLinksItems.forEach((item: ContentfulCTALink, index: number) => {
			ctaLinks.push({
				id: item.sys?.id || `cta-${index}`,
				title: item.title || "",
				link: item.link || "#",
			});
		});
	}

	return {
		title: data.title || "",
		subtitle: data.subtitle || "",
		backgroundImage: {
			url: data.backgroundImage?.url || "",
			width: data.backgroundImage?.width,
			height: data.backgroundImage?.height,
			description: data.backgroundImage?.description || "",
		},
		content: data.content || "",
		ctaLinks,
		textColor: data.textColor || "#FFFFFF",
		backgroundColor: data.backgroundColor || "#000000",
		logoImage: data.iconImage?.url || "/logo-letters.png",
	};
};
