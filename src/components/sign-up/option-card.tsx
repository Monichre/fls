'use client'

import {motion} from 'motion/react'
import {ChevronRight} from 'lucide-react'

import {ANIMATION} from '@/components/sign-up/constants'
import type {SignUpOption} from '@/components/sign-up/signup-form'

interface OptionCardProps {
  option: SignUpOption
  index: number
  onClick: () => void
}

export function OptionCard({option, index, onClick}: OptionCardProps) {
  return (
    <motion.div
      key={option.id}
      className='flex items-center gap-3 w-full justify-between py-4 px-3 rounded-2xl bg-gray-50/50 hover:bg-gray-50 border border-gray-100 cursor-pointer'
      initial={{opacity: 0, y: 10, scale: 0.9}}
      animate={{opacity: 1, y: 0, scale: 1}}
      exit={{opacity: 0, y: 10, scale: 0.9}}
      transition={{
        duration: ANIMATION.duration.medium,
        delay: index * ANIMATION.delay.stagger + ANIMATION.delay.base,
      }}
      onClick={onClick}
    >
      <div className='p-3 bg-white rounded-full border'>{option.icon}</div>
      <div className='w-full flex flex-col items-start'>
        <motion.div
          layoutId={`text-${option.id}`}
          className='font-medium text-gray-800'
        >
          {option.title}
        </motion.div>
        <div className='text-sm text-gray-500'>{option.description}</div>
      </div>
      <motion.div
        layoutId={`return-${option.id}`}
        className='flex items-center'
      >
        <ChevronRight className='size-6 text-gray-400' />
      </motion.div>
    </motion.div>
  )
}
