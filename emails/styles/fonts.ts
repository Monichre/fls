// Font definitions using hosted URLs from Vercel Blob Storage
// Base URL: https://drfcdoakhkresrzk.public.blob.vercel-storage.com/fonts/

export const FONT_URLS = {
  proximaNova: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/fonts/proxima-reg.woff2',
  poppinsBlack: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/fonts/poppins-black/Poppins-Black.ttf',
  poppinsBold: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/fonts/poppins-black/Poppins-Bold.ttf',
  poppinsMedium: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/fonts/poppins-black/Poppins-Medium.ttf',
  poppinsRegular: 'https://drfcdoakhkresrzk.public.blob.vercel-storage.com/fonts/poppins-black/Poppins-Regular.ttf'
} as const;

export const FONT_FACE_RULES = `
  @font-face {
    font-family: 'Proxima Nova';
    src: url('${FONT_URLS.proximaNova}') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins Black';
    src: url('${FONT_URLS.poppinsBlack}') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins Bold';
    src: url('${FONT_URLS.poppinsBold}') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins Medium';
    src: url('${FONT_URLS.poppinsMedium}') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('${FONT_URLS.poppinsRegular}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

// Font family constants with fallbacks for email client compatibility
export const FONT_FAMILIES = {
  proximaNova: "'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
  poppinsBlack: "'Poppins Heavy', 'Poppins Bold', Impact, 'Arial Black', Arial, sans-serif",
  poppinsBold: "'Poppins Bold', 'Poppins Black', Impact, 'Arial Black', Arial, sans-serif",
  poppinsMedium: "'Poppins Medium', 'Poppins', Arial, sans-serif",
  poppins: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
} as const;

// Legacy variable mapping for migration
export const LEGACY_FONT_MAPPING = {
  'var(--font-proxima-nova)': FONT_FAMILIES.proximaNova,
  'var(--font-poppins-black)': FONT_FAMILIES.poppinsBlack
} as const; 