// AnimatedCcLogo.tsx
import React, {useEffect, useRef} from 'react'
import {animate, svg, stagger} from 'animejs'

export function GptLogo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    // find those two paths we marked with className="line"
    const drawables = svg.createDrawable(
      containerRef.current.querySelectorAll<SVGPathElement>('.line')
    )
    animate(drawables, {
      draw: ['0 0', '0 1', '1 1'],
      easing: 'easeInOutQuad',
      duration: 2000,
      delay: stagger(150),
      loop: true,
    })
  }, [])

  return (
    <div ref={containerRef}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.0'
        x='0'
        y='0'
        width='2400'
        height='401.66638318370934'
        viewBox='73.94997146606445 108.92496994018555 192.1000570678711 32.15005630493164'
        preserveAspectRatio='xMidYMid meet'
        colorInterpolationFilters='sRGB'
      >
        <g>
          <defs>
            <linearGradient id='92' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#fa71cd' />
              <stop offset='100%' stopColor='#9b59b6' />
            </linearGradient>
            <linearGradient id='93' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#f9d423' />
              <stop offset='100%' stopColor='#f83600' />
            </linearGradient>
            <linearGradient id='94' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#0064d2' />
              <stop offset='100%' stopColor='#1cb0f6' />
            </linearGradient>
            <linearGradient id='95' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#f00978' />
              <stop offset='100%' stopColor='#3f51b1' />
            </linearGradient>
            <linearGradient id='96' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#7873f5' />
              <stop offset='100%' stopColor='#ec77ab' />
            </linearGradient>
            <linearGradient id='97' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#f9d423' />
              <stop offset='100%' stopColor='#e14fad' />
            </linearGradient>
            <linearGradient id='98' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#009efd' />
              <stop offset='100%' stopColor='#2af598' />
            </linearGradient>
            <linearGradient id='99' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#ffcc00' />
              <stop offset='100%' stopColor='#00b140' />
            </linearGradient>
            <linearGradient id='100' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#d51007' />
              <stop offset='100%' stopColor='#ff8177' />
            </linearGradient>
            <linearGradient id='102' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#a2b6df' />
              <stop offset='100%' stopColor='#0c3483' />
            </linearGradient>
            <linearGradient id='103' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#7ac5d8' />
              <stop offset='100%' stopColor='#eea2a2' />
            </linearGradient>
            <linearGradient id='104' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#00ecbc' />
              <stop offset='100%' stopColor='#007adf' />
            </linearGradient>
            <linearGradient id='105' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#b88746' />
              <stop offset='100%' stopColor='#fdf5a6' />
            </linearGradient>
          </defs>

          <g
            fill='#eeeeee'
            className='iconblsvg-g iconsvg'
            transform='translate(75.83330535888672,110.80830574035645)'
          >
            <g className='tp-name'>
              <g transform='translate(0, 6.271694316864013)'>
                <g transform='scale(1)'>
                  {/* first path: add className="line" */}
                  <path
                    className='line'
                    d='M7.44 0.22Q4.51 0.22 2.98-1.38 1.45-2.97 1.34-5.74L1.34-5.74Q1.32-6.34 1.32-7.68L1.32-7.68Q1.32-9.04 1.34-9.66L1.34-9.66Q1.45-12.43 2.98-14.02 4.51-15.62 7.44-15.62L7.44-15.62Q9.39-15.62 10.76-14.93 12.12-14.23 12.81-13.11 13.51-11.99 13.57-10.71L13.57-10.71Q13.57-10.52 13.43-10.39 13.29-10.27 13.09-10.27L13.09-10.27 11.99-10.27Q11.77-10.27 11.64-10.38 11.51-10.49 11.44-10.76L11.44-10.76Q11.07-12.45 10.09-13.13 9.11-13.82 7.44-13.82L7.44-13.82Q3.61-13.82 3.45-9.55L3.45-9.55Q3.43-8.95 3.43-7.72L3.43-7.72Q3.43-6.49 3.45-5.85L3.45-5.85Q3.61-1.61 7.44-1.61L7.44-1.61Q9.09-1.61 10.08-2.29 11.07-2.97 11.44-4.64L11.44-4.64Q11.51-4.91 11.64-5.02 11.77-5.13 11.99-5.13L11.99-5.13 13.09-5.13Q13.29-5.13 13.43-5 13.57-4.88 13.57-4.69L13.57-4.69Q13.51-3.41 12.81-2.29 12.12-1.17 10.76-0.47 9.39 0.22 7.44 0.22Z'
                    transform='translate(-1.3200000524520874, 15.619999885559082)'
                  />
                </g>
              </g>
            </g>

            {/* entire image/svg block, uncut */}
            <g transform='translate(84.09000396728516, 0)'>
              <g>
                <g fill='#eeeeee' className='imagesvg'>
                  <rect
                    fill='#eeeeee'
                    fillOpacity='0'
                    strokeWidth='2'
                    x='0'
                    y='0'
                    width='28.38338777414839'
                    height='28.38338777414839'
                    className='image-rect'
                  />
                  <svg
                    viewBox='0 0 60 60'
                    x='0'
                    y='0'
                    width='28.38338777414839'
                    height='28.38338777414839'
                    className='image-svg-svg bn'
                    style={{overflow: 'visible'}}
                  >
                    <g mask='url(#3fa9de65-802c-4ebc-ba27-5e37f4c5ae2a)'>
                      <g>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='#000000'
                          version='1.1'
                          style={{
                            shapeRendering: 'geometricprecision',
                            textRendering: 'geometricprecision',
                            overflow: 'visible',
                          }}
                          viewBox='0 0 300 300'
                          x='0'
                          y='0'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          width='60'
                          height='60'
                          filter='url(#58cCIoSQV_DPXxtk4qs1T)'
                        >
                          <g transform='scale(1, 1) skewX(0)'>
                            <defs>
                              <filter id='58cCIoSQV_DPXxtk4qs1T'>
                                <feColorMatrix
                                  type='matrix'
                                  values='0 0 0 0 0.9296875  0 0 0 0 0.9296875  0 0 0 0 0.9296875  0 0 0 1 0'
                                />
                              </filter>
                            </defs>
                            <g>
                              <circle
                                className='fil0'
                                cx='150'
                                cy='150'
                                r='150'
                              />
                            </g>
                          </g>
                        </svg>
                      </g>
                    </g>
                    <g filter='url(#colors3506011312)'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 85.4 57.2'
                        width='59'
                        height='59'
                        x='0.5'
                        y='0.5'
                        className='image-svg-icon'
                      >
                        <path
                          d='M1.4 55.7l40.5-40.5c3.6-3.6 8.6-5.8 14.1-5.8 11 0 20 8.9 20 20 0 11-8.9 20-20 20M29.4 7.8c-11 0-20 8.9-20 20v-.4c0 11 8.9 20.3 20 20.3h.6c5.5 0 9.9-2.2 13.5-5.9L84 1.4'
                          fill='none'
                          stroke='#333'
                          strokeWidth='4'
                          strokeMiterlimit='10'
                        />
                      </svg>
                    </g>
                  </svg>
                  <mask id='3fa9de65-802c-4ebc-ba27-5e37f4c5ae2a'>
                    <g fill='white'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        version='1.1'
                        style={{
                          shapeRendering: 'geometricprecision',
                          textRendering: 'geometricprecision',
                          overflow: 'visible',
                        }}
                        viewBox='0 0 300 300'
                        x='0'
                        y='0'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        width='60'
                        height='60'
                      >
                        <g transform='scale(1, 1) skewX(0)'>
                          <defs />
                          <g>
                            <circle cx='150' cy='150' r='150' />
                          </g>
                        </g>
                      </svg>
                    </g>
                  </mask>
                  <g fill='black'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 85.4 57.2'
                      width='59'
                      height='59'
                      x='0.5'
                      y='0.5'
                      className='image-svg-icon'
                    >
                      <path
                        d='M1.4 55.7l40.5-40.5c3.6-3.6 8.6-5.8 14.1-5.8 11 0 20 8.9 20 20 0 11-8.9 20-20 20M29.4 7.8c-11 0-20 8.9-20 20v-.4c0 11 8.9 20.3 20 20.3h.6c5.5 0 9.9-2.2 13.5-5.9L84 1.4'
                        fill='none'
                        stroke='black'
                        strokeWidth='4'
                        strokeMiterlimit='10'
                      />
                    </svg>
                  </g>
                </g>
                <mask id='3fa9de65-802c-4ebc-ba27-5e37f4c5ae2a' />
              </g>
            </g>

            <g
              fill='#eeeeee'
              transform='translate(115.47339248657227, 6.271694316864013)'
            >
              <g transform='scale(1)'>
                <path
                  className='line'
                  d='M7.44 0.22Q4.51 0.22 2.98-1.38 1.45-2.97 1.34-5.74L1.34-5.74Q1.32-6.34 1.32-7.68L1.32-7.68Q1.32-9.04 1.34-9.66L1.34-9.66Q1.45-12.43 2.98-14.02 4.51-15.62 7.44-15.62L7.44-15.62Q9.39-15.62 10.76-14.93 12.12-14.23 12.81-13.11 13.51-11.99 13.57-10.71L13.57-10.71Q13.57-10.52 13.43-10.39 13.29-10.27 13.09-10.27L13.09-10.27 11.99-10.27Q11.77-10.27 11.64-10.38 11.51-10.49 11.44-10.76L11.44-10.76Q11.07-12.45 10.09-13.13 9.11-13.82 7.44-13.82L7.44-13.82Q3.61-13.82 3.45-9.55L3.45-9.55Q3.43-8.95 3.43-7.72L3.43-7.72Q3.43-6.49 3.45-5.85L3.45-5.85Q3.61-1.61 7.44-1.61L7.44-1.61Q9.09-1.61 10.08-2.29 11.07-2.97 11.44-4.64L11.44-4.64Q11.51-4.91 11.64-5.02 11.77-5.13 11.99-5.13L11.99-5.13 13.09-5.13Q13.29-5.13 13.43-5 13.57-4.88 13.57-4.69L13.57-4.69Q13.51-3.41 12.81-2.29 12.12-1.17 10.76-0.47 9.39 0.22 7.44 0.22Z'
                  transform='translate(-1.3200000524520874, 15.619999885559082)'
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
