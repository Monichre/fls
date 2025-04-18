'use client'
import {VFXImg} from 'react-vfx'

interface GlitchEffectProps {
  src: string
  shader?: string
}

export const GlitchEffect = ({src, shader = 'rgbShift'}: GlitchEffectProps) => {
  return <VFXImg src={src} shader={shader} />
}
