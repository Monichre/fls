import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Team member email domains - add your team domains here
const ALLOWED_DOMAINS = [
  'flsusa.shop',
  'vercel.com', // Add your team's domains
  // Add more domains as needed
]

// Simple team authentication for email preview
export function middleware(request: NextRequest) {
  // Only apply to /emails routes
  if (!request.nextUrl.pathname.startsWith('/emails')) {
    return NextResponse.next()
  }

  // In development, allow all access
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next()
  }

  // Check for team authentication
  const teamAuth = request.headers.get('x-team-auth')
  const userEmail = request.headers.get('x-user-email')
  
  // If no auth headers, redirect to unauthorized page
  if (!teamAuth || !userEmail) {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  // Check if user email domain is allowed
  const emailDomain = userEmail.split('@')[1]
  if (!ALLOWED_DOMAINS.includes(emailDomain)) {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/emails/:path*',
    '/api/emails/:path*'
  ]
}