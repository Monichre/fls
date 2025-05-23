<!-- Generated by SpecStory -->

# Contentful Usage and Bug Concerns (2025-05-06 14:26:34)

_**User**_

Is contentful being used anywhere where it may break or csause bugs?

---

_**Assistant**_



---

I'll check where and how Contentful is being used in the codebase to identify potential issues.

---

<details>
            <summary>Searched codebase "import * from "@/lib/contentful/api"" • **25** results</summary>
        
| File | Lines |
|------|-------|
| `src/lib/contentful/api.ts` | L1-5 |
| `src/lib/contentful/api.ts` | L191-241 |
| `src/lib/contentful/api.ts` | L132-159 |
| `src/lib/contentful/api.ts` | L344-353 |
| `src/lib/contentful/api.ts` | L70-112 |
| `src/lib/contentful/api.ts` | L159-191 |
| `src/lib/contentful/api.ts` | L46-70 |
| `src/lib/contentful/api.ts` | L241-294 |
| `src/lib/contentful/api.ts` | L23-46 |
| `src/lib/contentful/api.ts` | L294-322 |
| `src/lib/contentful/api.ts` | L112-132 |
| `src/lib/contentful/api.ts` | L5-23 |
| `src/lib/contentful/api.ts` | L322-344 |
| `src/lib/contentful/types.ts` | L1-6 |
| `src/lib/contentful/api.ts` | L353-387 |
| `src/lib/contentful/setup.ts` | L1-22 |
| `src/lib/contentful/queries/homepage.query.ts` | L1-177 |
| `src/lib/contentful/types.ts` | L34-43 |
| `src/lib/contentful/mappers/hero-banner.mapper.ts` | L1-11 |
| `src/lib/contentful/types.ts` | L27-34 |
| `src/lib/contentful/markdown.tsx` | L15-22 |
| `src/lib/contentful/mappers/hero-banner.mapper.ts` | L11-19 |
| `src/lib/contentful/mappers/hero-banner.mapper.ts` | L34-85 |
| `src/lib/contentful/markdown.tsx` | L1-11 |
| `src/lib/contentful/mappers/hero-banner.mapper.ts` | L19-34 |

</details>

---



---

<details>
            <summary>Searched codebase "from "@/lib/contentful/api"" • **25** results</summary>
        
| File | Lines |
|------|-------|
| `src/lib/contentful/api.ts` | L1-5 |
| `src/lib/contentful/api.ts` | L191-241 |
| `src/lib/contentful/api.ts` | L132-159 |
| `src/lib/contentful/api.ts` | L344-353 |
| `src/lib/contentful/api.ts` | L241-294 |
| `src/lib/contentful/api.ts` | L70-112 |
| `src/lib/contentful/api.ts` | L294-322 |
| `src/lib/contentful/api.ts` | L46-70 |
| `src/lib/contentful/api.ts` | L159-191 |
| `src/lib/contentful/api.ts` | L23-46 |
| `src/lib/contentful/api.ts` | L112-132 |
| `src/lib/contentful/api.ts` | L322-344 |
| `src/lib/contentful/api.ts` | L5-23 |
| `src/lib/contentful/types.ts` | L1-6 |
| `src/lib/contentful/api.ts` | L353-387 |
| `src/lib/contentful/types.ts` | L34-43 |
| `src/lib/contentful/setup.ts` | L1-22 |
| `src/lib/contentful/queries/homepage.query.ts` | L1-177 |
| `src/lib/contentful/types.ts` | L27-34 |
| `src/lib/contentful/mappers/hero-banner.mapper.ts` | L1-11 |
| `src/lib/contentful/markdown.tsx` | L15-22 |
| `src/lib/contentful/mappers/hero-banner.mapper.ts` | L11-19 |
| `src/lib/contentful/mappers/hero-banner.mapper.ts` | L34-85 |
| `src/lib/contentful/markdown.tsx` | L1-11 |
| `src/lib/contentful/mappers/hero-banner.mapper.ts` | L19-34 |

</details>

---



---

<details>
            <summary>Searched codebase "import { getHomePage, getPageBySlug, getNavigation, fetchGraphQL, transformGraphQLResponse } from" • **25** results</summary>
        
| File | Lines |
|------|-------|
| `src/lib/contentful/api.ts` | L353-387 |
| `src/lib/contentful/api.ts` | L344-353 |
| `src/lib/contentful/api.ts` | L294-322 |
| `src/lib/contentful/queries/homepage.query.ts` | L1-177 |
| `src/lib/contentful/api.ts` | L1-5 |
| `src/app/page.tsx` | L1-23 |
| `src/lib/contentful/api.ts` | L322-344 |
| `src/lib/contentful/api.ts` | L159-191 |
| `src/layouts/home/HomePage.tsx` | L48-78 |
| `src/components/contentful/registry.tsx` | L1-28 |
| `src/lib/contentful/api.ts` | L241-294 |
| `src/components/contentful/blocks/Navigation.tsx` | L1-3 |
| `src/components/contentful/blocks/index.ts` | L3-4 |
| `src/layouts/home/HomePage.tsx` | L1-48 |
| `src/components/header/Navigation.tsx` | L1-69 |
| `src/layouts/home/index.ts` | L3-4 |
| `src/lib/contentful/api.ts` | L70-112 |
| `src/lib/contentful/api.ts` | L191-241 |
| `src/layouts/home/HomePage.tsx` | L166-219 |
| `src/lib/contentful/types.ts` | L34-43 |
| `src/layouts/home/HomePage.tsx` | L146-166 |
| `src/components/header/Header.tsx` | L1-15 |
| `src/lib/contentful/api.ts` | L5-23 |
| `src/lib/contentful/api.ts` | L23-46 |
| `src/layouts/home/HomePage.tsx` | L78-146 |

</details>

---



---

<details>
            <summary>Searched codebase "components/contentful/blocks" • **25** results</summary>
        
| File | Lines |
|------|-------|
| `src/components/contentful/blocks/ContentBlock.tsx` | L1-45 |
| `src/lib/contentful/api.ts` | L132-159 |
| `src/components/contentful/blocks/FeatureBlock.tsx` | L1-35 |
| `src/lib/contentful/api.ts` | L46-70 |
| `src/components/contentful/blocks/index.ts` | L2-3 |
| `src/lib/contentful/types.ts` | L16-27 |
| `src/lib/contentful/mappers/hero-banner.mapper.ts` | L1-11 |
| `src/components/contentful/registry.tsx` | L1-28 |
| `src/lib/contentful/markdown.tsx` | L1-11 |
| `src/components/contentful/blocks/index.ts` | L1-2 |
| `src/lib/contentful/markdown.tsx` | L38-51 |
| `src/components/contentful/blocks/index.ts` | L6-7 |
| `src/components/contentful/blocks/index.ts` | L3-4 |
| `src/lib/contentful/api.ts` | L159-191 |
| `src/components/contentful/blocks/HeroBanner.tsx` | L13-31 |
| `src/components/contentful/blocks/Collection.tsx` | L1-3 |
| `src/components/contentful/blocks/index.ts` | L4-5 |
| `src/components/contentful/blocks/HeroBanner.tsx` | L130-147 |
| `src/components/contentful/blocks/HeroBanner.tsx` | L1-13 |
| `src/components/contentful/blocks/index.ts` | L1-1 |
| `src/components/contentful/blocks/index.ts` | L5-6 |
| `src/lib/contentful/markdown.tsx` | L11-15 |
| `src/components/contentful/blocks/HeroBanner.tsx` | L31-75 |
| `src/components/contentful/blocks/HeroBanner.tsx` | L75-130 |
| `src/components/contentful/blocks/Navigation.tsx` | L1-3 |

</details>

---



---

Based on my search of the codebase, I've identified several potential issues with Contentful implementation that could cause bugs:

1. **Debug Console Logs in Production**:
   - The `fetchGraphQL` function in `api.ts` contains console logs (`console.log("🚀 ~ res:", res)` and `console.log("🚀 ~ data:", data)`) that would appear in the browser console.
   - These should be removed in production code.

2. **Commented-Out Error Handling**:
   - There's commented-out HTTP error handling in `fetchGraphQL`:
     ```typescript
     // if (!res.ok) {
     //   throw new Error(`GraphQL fetch failed: ${res.status} ${res.statusText}`);
     // }
     ```
   - This means the function might miss handling certain HTTP errors properly.

3. **Type Safety Issues**:
   - Multiple `any` types throughout the Contentful API code (11 instances identified in linter errors).
   - This could lead to runtime errors that TypeScript would normally catch.

4. **Disconnected Implementation**:
   - The main page (`src/app/page.tsx`) has commented-out Contentful code:
     ```typescript
     // const homePageData = await getHomePage()
     // const heroData = homePageData?.homePageCollection?.items?.[0]?.heroBanner
     // const heroBannerProps = heroData ? mapHeroBannerData(heroData) : null
     ```
   - Instead, it's using a static `HomePage` component, suggesting a transition away from Contentful.

5. **Component Registry Edge Cases**:
   - The `ContentBlock` component checks for content type but might not handle edge cases well:
     ```typescript
     if (!SubComponent) {
       return <div>Unknown content block type: {contentType}</div>;
     }
     ```

6. **Environment Variables Dependency**:
   - The code depends on environment variables (`CONTENTFUL_SPACE_ID`, `CONTENTFUL_PREVIEW_ACCESS_TOKEN`, `CONTENTFUL_ACCESS_TOKEN`) which could be missing in some environments.

7. **Hard-coded ID in HomePage Query**:
   - The homepage query has a hard-coded ID: `homePage(id: "6Qc2uyFD9fWfiO1OTlCoc8")`
   - This could cause issues if the content moves to a different environment or gets deleted.

Most importantly, it appears the site may be in transition away from Contentful (given the commented-out code in the main page), which could lead to confusion or unexpected behavior if some parts still try to use Contentful data.

---

