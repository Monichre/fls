'use client'

import {motion, useAnimation} from 'framer-motion'
import {Mail, Sparkles, Zap, Star} from 'lucide-react'
import {useEffect, useState} from 'react'

interface MagicLockPricingButtonProps {
  onClick: () => void
  disabled?: boolean
  submitted?: boolean
}

// Floating particle component
const FloatingParticle = ({delay, size}: {delay: number; size: number}) => (
  <motion.div
    className='absolute rounded-full bg-yellow-300/80'
    style={{
      width: size,
      height: size,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [-20, -80, -20],
      x: [-10, 10, -10],
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      delay: delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

// Magic sparkle component
const MagicSparkle = ({index}: {index: number}) => {
  const angle = (index * 45) % 360
  const radius = 60 + Math.random() * 20

  return (
    <motion.div
      className='absolute'
      style={{
        left: '50%',
        top: '50%',
      }}
      animate={{
        rotate: [0, 360],
        x: [
          Math.cos((angle * Math.PI) / 180) * radius,
          Math.cos(((angle + 180) * Math.PI) / 180) * radius,
          Math.cos((angle * Math.PI) / 180) * radius,
        ],
        y: [
          Math.sin((angle * Math.PI) / 180) * radius,
          Math.sin(((angle + 180) * Math.PI) / 180) * radius,
          Math.sin((angle * Math.PI) / 180) * radius,
        ],
        opacity: [0, 1, 0.5, 1, 0],
        scale: [0, 1, 0.5, 1, 0],
      }}
      transition={{
        duration: 4,
        delay: index * 0.3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Star
        className='h-3 w-3 text-yellow-300 drop-shadow-lg'
        fill='currentColor'
      />
    </motion.div>
  )
}

export function MagicLockPricingButton({
  onClick,
  disabled = false,
  submitted = false,
}: MagicLockPricingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showMagicBurst, setShowMagicBurst] = useState(false)
  const glowControls = useAnimation()
  const buttonControls = useAnimation()

  // Continuous magical glow animation
  useEffect(() => {
    const startGlowAnimation = async () => {
      await glowControls.start({
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.2, 1],
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      })
    }

    startGlowAnimation()
  }, [glowControls])

  // Periodic magic burst effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMagicBurst(true)
      setTimeout(() => setShowMagicBurst(false), 1500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Button hover animation
  useEffect(() => {
    if (isHovered) {
      buttonControls.start({
        scale: 1.05,
        rotate: [0, 2, -2, 0],
        transition: {
          scale: {duration: 0.2},
          rotate: {duration: 1, repeat: Infinity},
        },
      })
    } else {
      buttonControls.start({
        scale: 1,
        rotate: 0,
        transition: {duration: 0.2},
      })
    }
  }, [isHovered, buttonControls])

  const handleClick = () => {
    setShowMagicBurst(true)
    setTimeout(() => setShowMagicBurst(false), 1000)
    onClick()
  }

  return (
    <div className='relative flex items-center justify-center mt-8'>
      {/* Outer magical aura */}
      <motion.div
        className='absolute inset-0 rounded-full'
        style={{
          background:
            'radial-gradient(circle, var(--brand-yellow, #F7CB00) 0%, rgba(247, 203, 0, 0.1) 50%, transparent 70%)',
          filter: 'blur(20px)',
          width: '200%',
          height: '200%',
          left: '-50%',
          top: '-50%',
        }}
        animate={glowControls}
      />

      {/* Pulsing ring effect */}
      <motion.div
        className='absolute inset-0 border-2 border-yellow-400/50 rounded-full'
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        style={{
          width: '150%',
          height: '150%',
          left: '-25%',
          top: '-25%',
        }}
      />

      {/* Floating particles around the button */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{width: '200%', height: '200%', left: '-50%', top: '-50%'}}
      >
        {Array.from({length: 6}).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            size={4 + Math.random() * 6}
          />
        ))}
      </div>

      {/* Magic sparkles that appear during burst */}
      {showMagicBurst && (
        <div className='absolute inset-0 pointer-events-none'>
          {Array.from({length: 8}).map((_, i) => (
            <MagicSparkle key={i} index={i} />
          ))}
        </div>
      )}

      {/* Main button with shimmer effect */}
      <motion.button
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={buttonControls}
        // disabled={disabled || submitted}
        className={`
          relative overflow-hidden z-50
          flex items-center gap-3 px-8 py-4
          bg-yellow text-black font-bold text-lg
          rounded-full
          shadow-xl shadow-yellow-400/30
          transition-all duration-300
          cursor-pointer
          hover:shadow-2xl hover:shadow-yellow-400/50
          active:scale-95
        `}
        style={{borderRadius: 40}}
        whileTap={{scale: 0.95}}
      >
        {/* Shimmer overlay */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent'
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: '50%',
            skewX: '-20deg',
          }}
        />

        {/* Button content */}
        <motion.div
          className='relative z-10 flex items-center gap-3'
          animate={{
            filter: isHovered
              ? ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
              : 'brightness(1)',
          }}
          transition={{duration: 0.5, repeat: isHovered ? Infinity : 0}}
        >
          {/* Icon with rotation effect */}
          <motion.div
            animate={{
              rotate: isHovered ? [0, 360] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              rotate: {
                duration: 1,
                repeat: isHovered ? Infinity : 0,
                ease: 'linear',
              },
              scale: {duration: 0.6, repeat: isHovered ? Infinity : 0},
            }}
          >
            {submitted ? (
              <Sparkles className='h-5 w-5 text-black' />
            ) : isHovered ? (
              <Zap className='h-5 w-5 text-black' />
            ) : (
              <Mail className='h-5 w-5 text-black' />
            )}
          </motion.div>

          {/* Text with typing effect when hovered */}
          <motion.span
            className='font-bold text-black'
            animate={{
              letterSpacing: isHovered ? '0.05em' : '0em',
            }}
            transition={{duration: 0.2}}
          >
            {submitted ? 'Thank You! ✨' : 'GET PRICING NOW! 🔥'}
          </motion.span>
        </motion.div>

        {/* Inner glow effect */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-white/10 to-yellow-300/20 rounded-full'
          animate={{
            opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: 'easeInOut',
          }}
        />
      </motion.button>

      {/* Magnetic field effect */}
      {isHovered && (
        <motion.div
          className='absolute inset-0 border border-yellow-400/40 rounded-full'
          initial={{scale: 0.8, opacity: 0}}
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          style={{
            width: '180%',
            height: '180%',
            left: '-40%',
            top: '-40%',
          }}
        />
      )}
    </div>
  )
}
