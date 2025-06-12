/**
 * Email Theme - Shared styles extracted from globals.css
 * Ensures consistency across all email templates with the main application theme
 */

// Font families from globals.css
export const EMAIL_FONTS = {
  // Headings use Poppins (--font-poppins-black)
  heading: 'Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  
  // Body text uses Proxima Nova (--font-proxima-nova)  
  body: '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  
  // System fallback for compatibility
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
} as const

// Colors from globals.css (converted from oklch to hex for email compatibility)
export const EMAIL_COLORS = {
  // Brand colors
  brandYellow: '#f7cb00', // --brand-yellow
  yellow400: '#ffcc00',   // --yellow-400
  yellow500: '#e6b800',   // --yellow-500
  
  // Light theme colors (converted from oklch)
  background: '#ffffff',     // oklch(1 0 0)
  foreground: '#1a1a2e',     // oklch(0.129 0.042 264.695) 
  card: '#ffffff',           // oklch(1 0 0)
  cardForeground: '#1a1a2e', // oklch(0.129 0.042 264.695)
  primary: '#2d2d5f',        // oklch(0.208 0.042 265.755)
  primaryForeground: '#fafafa', // oklch(0.984 0.003 247.858)
  secondary: '#f5f5f5',      // oklch(0.968 0.007 247.896)
  secondaryForeground: '#2d2d5f', // oklch(0.208 0.042 265.755)
  muted: '#f5f5f5',          // oklch(0.968 0.007 247.896)
  mutedForeground: '#6b7280', // oklch(0.554 0.046 257.417)
  accent: '#f5f5f5',         // oklch(0.968 0.007 247.896)
  accentForeground: '#2d2d5f', // oklch(0.208 0.042 265.755)
  destructive: '#dc2626',    // oklch(0.577 0.245 27.325)
  border: '#e5e7eb',         // oklch(0.929 0.013 255.508)
  input: '#e5e7eb',          // oklch(0.929 0.013 255.508)
  ring: '#9ca3af',           // oklch(0.704 0.04 256.788)
  
  // Dark theme colors (for dark email templates)
  darkBackground: '#1a1a2e',    // oklch(0.129 0.042 264.695)
  darkForeground: '#fafafa',    // oklch(0.984 0.003 247.858)
  darkCard: '#2d2d5f',          // oklch(0.208 0.042 265.755)
  darkCardForeground: '#fafafa', // oklch(0.984 0.003 247.858)
  
  // Zinc colors for dark themes
  zinc800: '#1f1f1f',        // --zinc-800
  zinc900: '#121212',        // --zinc-900
  
  // Semantic colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6'
} as const

// Typography scale
export const EMAIL_TYPOGRAPHY = {
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    '5xl': '36px'
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.6',
    loose: '1.8'
  }
} as const

// Spacing scale (in pixels for email compatibility)
export const EMAIL_SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px'
} as const

// Border radius from globals.css
export const EMAIL_RADIUS = {
  sm: '6px',    // calc(var(--radius) - 4px) where --radius is 0.625rem (10px)
  md: '8px',    // calc(var(--radius) - 2px)
  lg: '10px',   // var(--radius)
  xl: '14px'    // calc(var(--radius) + 4px)
} as const

// Common email-safe style objects
export const EMAIL_STYLES = {
  // Container styles
  container: {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '600px',
    maxWidth: '100%',
    backgroundColor: EMAIL_COLORS.background,
    fontFamily: EMAIL_FONTS.body
  },
  
  // Heading styles
  heading: {
    fontFamily: EMAIL_FONTS.heading,
    fontWeight: EMAIL_TYPOGRAPHY.fontWeight.bold,
    color: EMAIL_COLORS.foreground,
    margin: '0 0 16px 0'
  },
  
  h1: {
    fontSize: EMAIL_TYPOGRAPHY.fontSize['4xl'],
    fontFamily: EMAIL_FONTS.heading,
    fontWeight: EMAIL_TYPOGRAPHY.fontWeight.bold,
    color: EMAIL_COLORS.foreground,
    margin: '0 0 24px 0',
    lineHeight: EMAIL_TYPOGRAPHY.lineHeight.tight
  },
  
  h2: {
    fontSize: EMAIL_TYPOGRAPHY.fontSize['3xl'],
    fontFamily: EMAIL_FONTS.heading,
    fontWeight: EMAIL_TYPOGRAPHY.fontWeight.bold,
    color: EMAIL_COLORS.foreground,
    margin: '0 0 20px 0',
    lineHeight: EMAIL_TYPOGRAPHY.lineHeight.tight
  },
  
  h3: {
    fontSize: EMAIL_TYPOGRAPHY.fontSize['2xl'],
    fontFamily: EMAIL_FONTS.heading,
    fontWeight: EMAIL_TYPOGRAPHY.fontWeight.semibold,
    color: EMAIL_COLORS.foreground,
    margin: '0 0 16px 0',
    lineHeight: EMAIL_TYPOGRAPHY.lineHeight.normal
  },
  
  // Text styles
  paragraph: {
    fontSize: EMAIL_TYPOGRAPHY.fontSize.base,
    lineHeight: EMAIL_TYPOGRAPHY.lineHeight.normal,
    color: EMAIL_COLORS.foreground,
    fontFamily: EMAIL_FONTS.body,
    margin: '0 0 16px 0'
  },
  
  // Button styles
  button: {
    backgroundColor: EMAIL_COLORS.brandYellow,
    borderRadius: EMAIL_RADIUS.md,
    color: EMAIL_COLORS.foreground,
    fontSize: EMAIL_TYPOGRAPHY.fontSize.base,
    fontWeight: EMAIL_TYPOGRAPHY.fontWeight.semibold,
    fontFamily: EMAIL_FONTS.body,
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer'
  },
  
  buttonPrimary: {
    backgroundColor: EMAIL_COLORS.primary,
    color: EMAIL_COLORS.primaryForeground
  },
  
  buttonSecondary: {
    backgroundColor: EMAIL_COLORS.secondary,
    color: EMAIL_COLORS.secondaryForeground
  },
  
  // Section styles
  section: {
    padding: EMAIL_SPACING.lg,
    margin: `${EMAIL_SPACING.md} 0`
  },
  
  // Dark theme variants
  dark: {
    container: {
      backgroundColor: EMAIL_COLORS.darkBackground,
      color: EMAIL_COLORS.darkForeground
    },
    heading: {
      color: EMAIL_COLORS.darkForeground
    },
    paragraph: {
      color: EMAIL_COLORS.darkForeground
    }
  }
} as const

// Utility function to merge styles
export const mergeEmailStyles = (...styles: Array<Record<string, any>>) => {
  return Object.assign({}, ...styles)
}

export default {
  fonts: EMAIL_FONTS,
  colors: EMAIL_COLORS,
  typography: EMAIL_TYPOGRAPHY,
  spacing: EMAIL_SPACING,
  radius: EMAIL_RADIUS,
  styles: EMAIL_STYLES,
  mergeStyles: mergeEmailStyles
} 