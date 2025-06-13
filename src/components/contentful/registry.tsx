// components/contentful/ComponentRegistry.js
import dynamic from 'next/dynamic'

// Use Next.js dynamic imports for code splitting
const componentMap = {
  heroBanner: dynamic(() =>
    import('./blocks/HeroBanner').then((mod) => mod.HeroBanner)
  ),
  featureBlock: dynamic(() =>
    import('./blocks/FeatureBlock').then((mod) => mod.FeatureBlock)
  ),
  collection: dynamic(() =>
    import('./blocks/Collection').then((mod) => mod.Collection)
  ),
  product: dynamic(() => import('./blocks/Product').then((mod) => mod.Product)),
  productFeature: dynamic(() =>
    import('./blocks/ProductFeature').then((mod) => mod.ProductFeature)
  ),
  navigation: dynamic(() =>
    import('./blocks/Navigation').then((mod) => mod.Navigation)
  ),
  contentBlock: dynamic(() =>
    import('./blocks/ContentBlock').then((mod) => mod.ContentBlock)
  ),
  // Add more components as needed
}

export default componentMap
