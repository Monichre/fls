'use client'

import {motion} from 'framer-motion'
import type {CSSProperties} from 'react'

// Animation variants
const draw = {
  hidden: {pathLength: 0, opacity: 0},
  visible: (i: number) => {
    const delay = i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {delay, type: 'spring', duration: 1.5, bounce: 0},
        opacity: {delay, duration: 0.01},
      },
    }
  },
}

// Hover animations
const logoHover = {
  rest: {
    scale: 1,
    rotate: 0,
    transition: {duration: 0.3, type: 'tween', ease: 'easeOut'},
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {duration: 0.3, type: 'tween', ease: 'easeOut'},
  },
  tap: {
    scale: 0.95,
    rotate: 0,
    transition: {duration: 0.1, type: 'tween', ease: 'easeOut'},
  },
}

// Path hover animation
const pathHover = {
  rest: {fill: 'transparent', transition: {duration: 0.3}},
  hover: {fill: 'rgba(170, 0, 255, 0.2)', transition: {duration: 0.3}},
}

// Styles
const image: CSSProperties = {
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
}

const shape: CSSProperties = {
  strokeWidth: 4,
  stroke: '#7700FF',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'transparent',
}

// PathDrawing Component
export default function PathDrawing() {
  return (
    <motion.svg
      width='600'
      height='600'
      viewBox='0 0 600 600'
      initial='hidden'
      animate='visible'
      style={image}
      title='Path Drawing Animation'
    >
      <motion.circle
        className='circle-path'
        cx='100'
        cy='100'
        r='80'
        stroke='#7700FF'
        variants={draw}
        custom={1}
        style={shape}
      />
      <motion.line
        x1='220'
        y1='30'
        x2='360'
        y2='170'
        variants={draw}
        custom={2}
        style={shape}
      />
    </motion.svg>
  )
}

// CounterCultureLogo Component
export function CounterCultureLogo() {
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 0.5,
    },
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.0'
        width='300'
        height='200'
        viewBox='0 0 300 200'
        aria-label='Counter Culture Logo'
        animate={pulseAnimation}
      >
        <defs>
          <linearGradient id='logo-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#fa71cd' />
            <stop offset='100%' stopColor='#9b59b6' />
          </linearGradient>
          <filter id='shadow' x='-20%' y='-20%' width='140%' height='140%'>
            <feDropShadow dx='2' dy='2' stdDeviation='2' floodOpacity='0.3' />
          </filter>
        </defs>

        {/* Background */}
        <motion.rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill='#fff'
          fillOpacity='1'
        />

        {/* Logo elements */}
        <motion.g
          fill='#444'
          transform='translate(75, 100)'
          initial='rest'
          whileHover='hover'
          whileTap='tap'
          variants={logoHover}
          style={{originX: 0.5, originY: 0.5}}
        >
          {/* Text path */}
          <motion.path
            d='M7.44 0.22Q4.51 0.22 2.98-1.38 1.45-2.97 1.34-5.74L1.34-5.74Q1.32-6.34 1.32-7.68L1.32-7.68Q1.32-9.04 1.34-9.66L1.34-9.66Q1.45-12.43 2.98-14.02 4.51-15.62 7.44-15.62L7.44-15.62Q9.39-15.62 10.76-14.93 12.12-14.23 12.81-13.11 13.51-11.99 13.57-10.71L13.57-10.71Q13.57-10.52 13.43-10.39 13.29-10.27 13.09-10.27L13.09-10.27 11.99-10.27Q11.77-10.27 11.64-10.38 11.51-10.49 11.44-10.76L11.44-10.76Q11.07-12.45 10.09-13.13 9.11-13.82 7.44-13.82L7.44-13.82Q3.61-13.82 3.45-9.55L3.45-9.55Q3.43-8.95 3.43-7.72L3.43-7.72Q3.43-6.49 3.45-5.85L3.45-5.85Q3.61-1.61 7.44-1.61L7.44-1.61Q9.09-1.61 10.08-2.29 11.07-2.97 11.44-4.64L11.44-4.64Q11.51-4.91 11.64-5.02 11.77-5.13 11.99-5.13L11.99-5.13 13.09-5.13Q13.29-5.13 13.43-5 13.57-4.88 13.57-4.69L13.57-4.69Q13.51-3.41 12.81-2.29 12.12-1.17 10.76-0.47 9.39 0.22 7.44 0.22L7.44 0.22Z'
            transform='translate(-1.32, 15.62)'
            filter='url(#shadow)'
          />

          {/* Interactive logo element */}
          <motion.g transform='translate(84, 0)'>
            <motion.rect
              fill='#444'
              fillOpacity='0'
              strokeWidth='2'
              x='0'
              y='0'
              width='28'
              height='28'
              className='image-rect'
            />

            {/* Logo circle and path with drawing animation */}
            <motion.circle
              cx='14'
              cy='14'
              r='14'
              variants={pathHover}
              stroke='url(#logo-gradient)'
              strokeWidth='2'
              filter='url(#shadow)'
              initial='hidden'
              animate='visible'
              custom={1}
            />

            <motion.path
              d='M1.4 25.7l15-15c3-3 7-5 12-5 8 0 15 7 15 15s-7 15-15 15'
              fill='none'
              stroke='#444'
              strokeWidth='2'
              strokeLinecap='round'
              variants={draw}
              initial='hidden'
              animate='visible'
              custom={2}
              filter='url(#shadow)'
            />
          </motion.g>
        </motion.g>
      </motion.svg>
    </motion.div>
  )
}
