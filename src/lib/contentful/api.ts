// lib/contentful.ts

import { HOMEPAGE_QUERY } from "@/lib/contentful/queries/homepage.query";
// API endpoint for Contentful GraphQL
export const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

// GraphQL fragments for each content type
export const SEO_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  description
  keywords
  openGraphImage {
    url
    width
    height
    description
  }
  canonicalUrl
  robots
`;

export const HERO_BANNER_GRAPHQL_FIELDS = `
  sys {
    id
    contentType {
      sys {
        id
      }
    }
  }
  title
  subtitle
  backgroundImage {
    url
    width
    height
    description
  }
  ctaText
  ctaLink
  textColor
  backgroundColor
`;

export const FEATURE_BLOCK_GRAPHQL_FIELDS = `
  sys {
    id
    contentType {
      sys {
        id
      }
    }
  }
  title
  description
  iconImage {
    url
    width
    height
    description
  }
  backgroundColor
  textColor
  ctaText
  ctaLink
  displayOrder
`;

export const COLLECTION_GRAPHQL_FIELDS = `
  sys {
    id
    contentType {
      sys {
        id
      }
    }
  }
  title
  description
  featuredImage {
    url
    width
    height
    description
  }
  backgroundColor
  productsCollection {
    items {
      sys {
        id
      }
      name
      slug
      price
      imagesCollection(limit: 1) {
        items {
          url
          width
          height
          description
        }
      }
    }
  }
  slug
  seoMetadata {
    ${SEO_GRAPHQL_FIELDS}
  }
`;

export const PRODUCT_FEATURE_GRAPHQL_FIELDS = `
  sys {
    id
    contentType {
      sys {
        id
      }
    }
  }
  title
  description
  iconImage {
    url
    width
    height
    description
  }
  technicalSpecifications
`;

export const CONTENT_BLOCK_GRAPHQL_FIELDS = `
  sys {
    id
    contentType {
      sys {
        id
      }
    }
  }
  title
  contentType
  richTextContent {
    json
  }
  mediaCollection {
    items {
      url
      width
      height
      description
    }
  }
  backgroundColor
  layout
  cta
`;

export const PAGE_GRAPHQL_FIELDS = `
  sys {
    id
    contentType {
      sys {
        id
      }
    }
  }
  title
  slug
  contentSectionsCollection(limit: 25) {
    items {
      ... on HeroBanner {
        ${HERO_BANNER_GRAPHQL_FIELDS}
      }
      ... on FeatureBlock {
        ${FEATURE_BLOCK_GRAPHQL_FIELDS}
      }
      ... on ContentBlock {
        ${CONTENT_BLOCK_GRAPHQL_FIELDS}
      }
      ... on Collection {
        ${COLLECTION_GRAPHQL_FIELDS}
      }
    }
  }
  seoMetadata {
    ${SEO_GRAPHQL_FIELDS}
  }
`;

/**
 * Fetch content from Contentful GraphQL API
 */
export async function fetchGraphQL(
	query: string,
	isDraftMode = false,
	variables = {},
): Promise<any> {
	try {
		const res = await fetch(CONTENTFUL_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${
					isDraftMode
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query, variables }),
			next: { tags: ["contentful"] },
		}).catch((err) => {
			console.error("Error fetching GraphQL data:", err);
			throw err;
		});

		console.log("🚀 ~ res:", res);

		// if (!res.ok) {
		// 	throw new Error(`GraphQL fetch failed: ${res.status} ${res.statusText}`);
		// }

		const { data, errors } = await res.json();

		console.log("🚀 ~ data:", data);

		if (errors) {
			console.error("GraphQL Errors:", errors);
			throw new Error(
				`GraphQL errors: ${errors.map((e: any) => e.message).join(", ")}`,
			);
		}

		return data;
	} catch (error) {
		console.error("Error fetching GraphQL data:", error);
		throw error;
	}
}

/**
 * Transform the GraphQL response to be component-friendly
 */
export function transformGraphQLResponse(entry: any): any {
	if (!entry) return null;

	// Extract content type from the sys object
	const contentType = entry.sys?.contentType?.sys?.id?.toLowerCase() || null;
	const id = entry.sys?.id;

	// Create a new object with the transformed fields
	const transformedData: any = {
		id,
		contentType,
	};

	// Transform all fields
	Object.keys(entry).forEach((key) => {
		if (key === "sys") return; // Skip sys, already processed

		const value = entry[key];

		if (!value) {
			transformedData[key] = null;
			return;
		}

		// Handle Collection fields (arrays of referenced items)
		if (key.endsWith("Collection") && value.items) {
			const newKey = key.replace("Collection", "");
			transformedData[newKey] = value.items.map(transformGraphQLResponse);
			return;
		}

		// Handle nested objects that might be references
		if (typeof value === "object" && value.sys?.id) {
			transformedData[key] = transformGraphQLResponse(value);
			return;
		}

		// Handle rich text
		if (key === "richTextContent" && value.json) {
			transformedData[key] = value.json;
			return;
		}

		// Handle regular fields
		transformedData[key] = value;
	});

	return transformedData;
}

/**
 * Get a page by its slug
 */
export async function getPageBySlug(
	slug: string,
	isDraftMode = false,
): Promise<any> {
	const data = await fetchGraphQL(
		`query GetPageBySlug($slug: String!) {
      pageCollection(where: { slug: $slug }, limit: 1, preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
		isDraftMode,
		{ slug },
	);

	const page = data?.pageCollection?.items?.[0];

	if (!page) {
		return null;
	}

	return transformGraphQLResponse(page);
}

/**
 * Get all pages for generating static paths
 */
export async function getAllPages(isDraftMode = false): Promise<any[]> {
	const data = await fetchGraphQL(
		`query {
      pageCollection(where: { slug_exists: true }, limit: 100, preview: ${isDraftMode ? "true" : "false"}) {
        items {
          sys {
            id
          }
          title
          slug
        }
      }
    }`,
		isDraftMode,
	);

	return data?.pageCollection?.items || [];
}

/**
 * Get home page data
 */
export const getHomePage = async (isDraftMode = false): Promise<any> => {
	const data = await fetchGraphQL(HOMEPAGE_QUERY(isDraftMode), isDraftMode, {});

	return data;
};

/**
 * Get navigation menus
 */
export async function getNavigation(
	location: string,
	isDraftMode = false,
): Promise<any> {
	const data = await fetchGraphQL(
		`query GetNavigation($location: String!) {
      navigationCollection(where: { location: $location }, limit: 1, preview: ${isDraftMode ? "true" : "false"}) {
        items {
          sys {
            id
            contentType {
              sys {
                id
              }
            }
          }
          title
          menuItems
          location
        }
      }
    }`,
		isDraftMode,
		{ location },
	);

	const navigation = data?.navigationCollection?.items?.[0];

	return navigation ? transformGraphQLResponse(navigation) : null;
}
