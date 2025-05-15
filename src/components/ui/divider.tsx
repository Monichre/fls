import {cn} from '@/lib/utils'
import type {CSSProperties} from 'react'

type DividerProps = {
  className?: string
  color?: string
  backgroundImage?: string
  height?: number
  position?: 'top' | 'bottom'
  flip?: boolean
  style?: CSSProperties
}

export const Divider = ({
  className,
  color = '#F7CB00',
  backgroundImage = '/bottom-decal.svg',
  height = 50,
  position = 'bottom',
  flip = false,
  style,
  ...props
}: DividerProps & React.HTMLAttributes<HTMLDivElement>) => {
  const dividerStyles: CSSProperties = {
    height: `${height}px`,
    // backgroundColor: color,
    backgroundImage: `url('${backgroundImage}')`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: '1515px 100%',
    backgroundPosition: 'center',
    transform: flip ? 'scale(1, -1)' : 'scale(1, 1)',
    ...style,
  }

  return (
    <div
      className={cn(
        'absolute left-0 w-full z-0',
        position === 'top' ? 'top-0' : 'bottom-0',
        className
      )}
      style={dividerStyles}
      {...props}
    />
  )
}
