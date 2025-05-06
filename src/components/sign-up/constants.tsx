import type {SignUpOption} from '@/components/sign-up/signup-form'
import {Mail, Users} from 'lucide-react'

// Color constants
export const COLORS = {
  primary: '#F7CB00',
  primaryHover: '#e6bc00',
  white: '#ffffff',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
  },
}

// Animation constants
export const ANIMATION = {
  duration: {
    short: 0.2,
    medium: 0.3,
    long: 0.4,
  },
  delay: {
    stagger: 0.1,
    base: 0.2,
  },
  spring: {
    default: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
  transition: {
    default: {
      duration: 0.3,
    },
    spring: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
}

// Form submission timing
export const FORM_TIMING = {
  submissionDelay: 1500,
  successMessageDuration: 3000,
  resetDelay: 500,
}

// Sign up options
export const SIGN_UP_OPTIONS: SignUpOption[] = [
  {
    id: 1,
    icon: <Users className='size-6 text-gray-600' />,
    title: 'Get Pricing Now',
    description: 'Exclusively for distributors and wholesalers',
  },
]

// Success messages
export const SUCCESS_MESSAGES = {
  earlyAccess:
    "Thank you for your interest in early access! We'll review your application and get back to you soon.",
}
