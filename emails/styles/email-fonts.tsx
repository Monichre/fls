import React from 'react'
import {FONT_FACE_RULES, FONT_FAMILIES} from './fonts'

export interface EmailFontsProps {
  /**
   * Additional CSS styles to include
   */
  additionalStyles?: string
}

/**
 * EmailFonts component provides font definitions for email templates
 * Includes @font-face rules for hosted fonts and CSS custom properties
 */
export const EmailFonts: React.FC<EmailFontsProps> = ({
  additionalStyles = '',
}) => {
  const combinedStyles = `
    ${FONT_FACE_RULES}
    
    /* CSS Custom Properties for Font Families */
    :root {
      --font-proxima-nova: ${FONT_FAMILIES.proximaNova};
      --font-poppins-black: ${FONT_FAMILIES.poppinsBlack};
      --font-poppins-bold: ${FONT_FAMILIES.poppinsBold};
      --font-poppins-medium: ${FONT_FAMILIES.poppinsMedium};
      --font-poppins: ${FONT_FAMILIES.poppins};
    }
    
    /* Base email styles */
    body {
      font-family: ${FONT_FAMILIES.proximaNova};
      line-height: 1.6;
      color: #333333;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: ${FONT_FAMILIES.poppinsBlack};
      line-height: 1.2;
      margin: 0 0 16px 0;
    }
    
    p {
      font-family: ${FONT_FAMILIES.proximaNova};
      margin: 0 0 16px 0;
    }
    
    a {
      color: #f7cb00;
      text-decoration: none;
    }
    
    /* Email client specific overrides */
    .email-content {
      font-family: ${FONT_FAMILIES.proximaNova};
    }
    
    .email-heading {
      font-family: ${FONT_FAMILIES.poppinsBlack};
    }
    
    ${additionalStyles}
  `

  return <style dangerouslySetInnerHTML={{__html: combinedStyles}} />
}

/**
 * Inline font styles for maximum email client compatibility
 * Use these when you need to apply styles directly to elements
 */
export const EMAIL_INLINE_STYLES = {
  body: {
    fontFamily: FONT_FAMILIES.proximaNova,
    lineHeight: '1.6',
    color: '#333333',
    margin: 0,
    padding: 0,
  },
  heading: {
    fontFamily: FONT_FAMILIES.poppinsBlack,
    lineHeight: '1.2',
    margin: '0 0 16px 0',
    color: '#333333',
  },
  paragraph: {
    fontFamily: FONT_FAMILIES.proximaNova,
    lineHeight: '1.6',
    margin: '0 0 16px 0',
    color: '#333333',
  },
  button: {
    fontFamily: FONT_FAMILIES.proximaNova,
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#f7cb00',
    color: '#333333',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  },
  link: {
    fontFamily: FONT_FAMILIES.proximaNova,
    color: '#f7cb00',
    textDecoration: 'none',
  },
} as const

export default EmailFonts
