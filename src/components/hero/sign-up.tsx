import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'
import {CircleCheck, Mail} from 'lucide-react'
import confetti from 'canvas-confetti'

export function SignUp() {
  const [step, setStep] = React.useState<'one' | 'two' | 'three'>('one')
  return (
    <div className='relative flex justify-center md:justify-center'>
      <motion.div
        layoutId='input'
        className='relative flex h-[68px] w-auto md:w-[196px] items-center justify-center'
        style={{borderRadius: 40}}
      >
        <div className='absolute left-4 -z-10'>
          <motion.div layoutId='icon'>
            <Mail className='text-zinc-500' />
          </motion.div>
        </div>
        <motion.button
          layoutId='button'
          className='bg-[#F7CB00] px-10 py-3'
          style={{borderRadius: 40}}
          onClick={() => setStep('two')}
        >
          <motion.span
            layoutId='text-input'
            className='font-semibold text-white'
          >
            Early Access
          </motion.span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {step === 'two' && (
          <motion.div
            className='absolute inset-0 flex h-full w-full items-center justify-center'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            style={{borderRadius: 40}}
          >
            <div className='relative w-full shrink-0'>
              <motion.input
                layoutId='input'
                className='w-full border-2 border-zinc-200 bg-white py-5 pl-14 pr-40 outline-none ring-0'
                style={{borderRadius: 40}}
                placeholder='Email address'
              />
              <div className='absolute bottom-0 left-6 top-0 flex items-center justify-center'>
                <motion.div layoutId='icon'>
                  <Mail className='text-zinc-500' />
                </motion.div>
              </div>
              <div className='absolute bottom-0 right-2 top-0 flex items-center justify-center'>
                <motion.button
                  layoutId='button'
                  className='border-2 border-white/30 bg-zinc-800 px-4 md:px-10 py-3 ring-2 ring-zinc-950'
                  style={{borderRadius: 40}}
                  onClick={() => {
                    setStep('three')
                    setTimeout(showConfetti, 500)
                  }}
                >
                  <motion.span
                    layoutId='text-input'
                    className='font-semibold text-white'
                  >
                    Sign Up
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {step === 'three' && (
          <motion.div
            className='absolute inset-0 flex h-full w-full items-center justify-center'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            style={{borderRadius: 40}}
          >
            <motion.button
              layoutId='button'
              className='border-2 border-white/30 bg-zinc-800 p-3 ring-2 ring-zinc-950'
              style={{borderRadius: 60}}
              onClick={() => setStep('one')}
            >
              <motion.span
                layoutId='icon'
                className='block font-semibold text-white'
              >
                <CircleCheck className='size-6' />
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const showConfetti = () => {
  // https://magicui.design/docs/components/confetti

  const scalar = 2
  const triangle = confetti.shapeFromPath({
    path: 'M0 10 L5 0 L10 10z',
  })
  const square = confetti.shapeFromPath({
    path: 'M0 0 L10 0 L10 10 L0 10 Z',
  })
  const coin = confetti.shapeFromPath({
    path: 'M5 0 A5 5 0 1 0 5 10 A5 5 0 1 0 5 0 Z',
  })
  const tree = confetti.shapeFromPath({
    path: 'M5 0 L10 10 L0 10 Z',
  })

  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: [triangle, square, coin, tree],
    scalar,
  }

  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 30,
    })

    confetti({
      ...defaults,
      particleCount: 5,
    })

    confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ['circle'],
    })
  }

  setTimeout(shoot, 0)
  setTimeout(shoot, 100)
  setTimeout(shoot, 200)
}
