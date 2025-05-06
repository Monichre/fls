// import {getHomePage} from '@/lib/contentful/api'
// import {mapHeroBannerData} from '@/lib/contentful/mappers/hero-banner.mapper'
// import {HeroBanner} from '@/components/contentful/blocks/HeroBanner'
import {HomePage} from '@/layouts/home/HomePage'
export default async function Index() {
  // Fetch home page data from Contentful
  // const homePageData = await getHomePage()

  // // Extract hero banner data from the response
  // const heroData = homePageData?.homePageCollection?.items?.[0]?.heroBanner

  // // Map the data to our component props
  // const heroBannerProps = heroData ? mapHeroBannerData(heroData) : null

  return (
    <main>
      {/* Hero Banner */}
      {/* {heroBannerProps && <HeroBanner {...heroBannerProps} />} */}
      <HomePage />
      {/* Other homepage sections can be rendered here */}
    </main>
  )
}
