// types/contentful.ts
export interface ContentfulEntry {
	id: string;
	contentType: string;
	[key: string]: any;
}

export interface HeroBannerProps {
	title: string;
	subtitle?: string;
	backgroundImage?: MediaAsset;
	ctaText?: string;
	ctaLink?: string;
	textColor?: string;
	backgroundColor?: string;
}

export interface FeatureBlockProps {
	title: string;
	description?: string;
	iconImage?: MediaAsset;
	backgroundColor?: string;
	textColor?: string;
	ctaText?: string;
	ctaLink?: string;
	displayOrder?: number;
}

export interface MediaAsset {
	url: string;
	alt: string;
	width?: number;
	height?: number;
}

export interface PageData {
	id: string;
	contentType: "page";
	title: string;
	slug: string;
	contentSections: ContentfulEntry[];
	seoMetadata?: SEOData;
}

// Add more interfaces as needed
