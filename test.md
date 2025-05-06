## Overview

This report consolidates testing observations for the FLS USA website across different workflows. The analysis focuses on the functioning of Homepage & Navigation, Product Search & Cart, Contact/Informational Pages, and the Explore link. The report summarizes the outcomes, highlights errors, and discusses design issues encountered during testing.

---

## Testing Summary Table

| **Workflow**                            | **Steps Taken & Outcomes**                                                                                                                                                                                                                                                                                                                                                                                       | **Errors**                                                                                                                        | **Design Issues**                                                                                                                                                                                                                                                                                                    |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Homepage & Navigation**               | - Verified homepage layout, navigation bar, and sections such as 'Signature Design', 'Lighter Collection', and 'Features'. <br> - Utilized anchor links to navigate within the page, which functioned correctly for sections like 'Features'.                                                                                                                              | - 404 errors encountered for footer links such as **Terms of Service** and **Privacy Policy**. <br> - Non-functional 'Contact' link leading to page errors. | - Navigation links (e.g., 'Contact', footer links) do not correctly route to their intended pages. <br> - Issues necessitate an improved linking system and design review for consistency.                                                          |
| **Product Search & Cart**               | - Explored the website for e-commerce functionalities. <br> - Attempted product search, cart additions, and checkout procedures. <br> - Found only informational content regarding FLS Lighter Collection without any clear e-commerce pathway.                                                                                                                    | - Misleading navigation suggesting e-commerce capabilities that ultimately do not exist.                                       | - Lack of a visible search bar or shopping cart icon. <br> - Ambiguous interface for potential purchase functionalities that may confuse users expecting a traditional e-commerce workflow.                                                            |
| **Contact/Informational Pages**         | - Tested the 'Contact' link from both the main navigation bar and footer links. <br> - Attempted to access **Terms of Service** and **Privacy Policy** pages via provided links.                                                                                                                                                                                    | - Clicking on 'Contact' resulted in no new page or response. <br> - **Terms of Service** and **Privacy Policy** links resulted in 404 errors.                        | - Critical informational pages are either missing or improperly linked.<br> - There's a lack of clear user directives regarding how to contact the company or access legal documents.                                                               |
| **Explore Link & Additional Navigation**| - Clicked on the 'Explore' link on the homepage navigation bar. <br> - Verified functionality of other links such as 'Signature Design', 'Lighter Collection', and 'Features'.                                                                                                                                                                                     | - 'Explore' link is non-functional, displaying no response or navigation.                                                 | - The non-functional 'Explore' link creates navigation disruption and could frustrate users seeking additional content. <br> - Inconsistency in link performance across the site.                                                             |

---

## Recommendations

1. **Fix Broken Links:**
   - Ensure that the **Terms of Service**, **Privacy Policy**, and **Contact** links are properly configured and accessible to users.
   - Regularly test all footer and navigation links to avoid 404 errors.

2. **Clarify Website Purpose:**
   - Clearly indicate that the website is intended primarily for brand or product awareness if e-commerce functionality is not provided.
   - Consider removing or re-routing misleading links (e.g., 'Explore', 'Contact') to avoid user confusion.

3. **Enhance Navigation Structure:**
   - Redesign the navigation bar to highlight clear sections and avoid non-functional elements.
   - Consider using a well-defined call-to-action for inquiries if traditional e-commerce functionalities are not present.

4. **Improve User Experience:**
   - Enhance overall user navigation by properly linking all navigational elements, ensuring smooth transitions between sections.
   - Add a visible search bar if the website intends to support content discovery or future e-commerce expansion.

By addressing these issues and implementing the recommended improvements, the FLS USA website can provide a more seamless and informative experience for its users.

**Final URL:** [https://flsusa.shop/](https://flsusa.shop/)
