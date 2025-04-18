'use client'
import {VFXProvider} from 'react-vfx'
import {MobileProvider} from './mobile-context'

export const AppProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <VFXProvider>
      <MobileProvider>{children}</MobileProvider>
    </VFXProvider>
  )
}
