'use client'
import {VFXProvider} from 'react-vfx'
import {MobileProvider} from './mobile-context'
import { PostHogProvider } from './PostHogProvider'

export const AppProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <PostHogProvider>
      <VFXProvider>
        <MobileProvider>{children}</MobileProvider>
      </VFXProvider>
    </PostHogProvider>
  )
}