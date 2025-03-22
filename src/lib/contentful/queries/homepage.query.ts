export const HOMEPAGE_QUERY = (isDraftMode = false): string => `
query {
  homePage(id: "6Qc2uyFD9fWfiO1OTlCoc8") {
    sys {
      id
    }
    heroBanner {
      sys {
        id
      }
      title
      subtitle
      backgroundImage {
        url
        title
        width
        height
        description
      }
      textColor
      backgroundColor
      ctaLinksCollection(limit: 3) {
        items {
          text
          url
          type
        }
      }
    }
    pageSectionsCollection(limit: 10) {
      items {
        sys {
          id
        }
        title
        subtitle
        backgroundImage {
          url
          title
          width
          height
        }
        content {
          json
        }
        photoGalleryCollection(limit: 5) {
          items {
            url
            title
            width
            height
          }
        }
        sectionId
        ctaLinksCollection(limit: 3) {
          items {
            text
            url
            type
          }
        }
      }
    }
    featuredCollectionsCollection(limit: 5) {
      items {
        ... on Collection {
          sys {
            id
          }
          title
          description {
            json
          }
          featuredImage {
            url
            title
            width
            height
          }
          backgroundColor
          slug
          productsCollection(limit: 5) {
            items {
              ... on Product {
                sys {
                  id
                }
                name
                sku
                price
                salePrice
                slug
                imagesCollection(limit: 3) {
                  items {
                    url
                    title
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
    featuredProductsCollection(limit: 5) {
      items {
        ... on Product {
          sys {
            id
          }
          name
          sku
          description {
            json
          }
          price
          salePrice
          slug
          imagesCollection(limit: 3) {
            items {
              url
              title
              width
              height
            }
          }
          specifications
          colorsAvailable
        }
      }
    }
    valuePropositionsCollection(limit: 5) {
      items {
        ... on FeatureBlock {
          sys {
            id
          }
          title
          description {
            json
          }
          iconImage {
            url
            title
            width
            height
          }
          backgroundColor
          textColor
          ctaText
          ctaLink
          displayOrder
        }
      }
    }
    seoMetadata {
      ... on Seo {
        title
        description {
          json
        }
        keywords
        openGraphImage {
          url
          title
          width
          height
        }
        canonicalUrl
        robots
      }
    }
  }
}
`;
