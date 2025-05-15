# Navigation Link Handling

## Overview
The FLS site has been updated to dynamically handle different types of navigation links:

1. **Hash Links** (`#hero`): Scroll smoothly to the corresponding section on the current page
2. **PDF Links** (ending with `.pdf`): Open in a new tab
3. **Regular Links**: Navigate normally to the target page

## Implementation Details

The `useScrollToSection` hook has been updated to detect link types and handle them appropriately:

- **Hash links**: Use smooth scrolling behavior
- **PDF links**: Open in new tab with `window.open()`
- **Regular links**: Let default navigation behavior handle them

## Catalogue Link

The "Catalogue" navigation item is specifically configured to:

1. Link to `/assets/catalogue.pdf`
2. Open in a new browser tab when clicked
3. Work properly on both desktop and mobile navigation menus

## Technical Notes

- Path `/catalogue` is also treated as a PDF link for backward compatibility
- Console logs are added for debugging purposes during development
- PDF path is `/assets/catalogue.pdf` - ensure this file exists in the public directory

## Future Improvements

- Add proper error handling for missing PDFs
- Consider implementing a PDF viewer component for in-app viewing
- Add analytics tracking for PDF downloads 