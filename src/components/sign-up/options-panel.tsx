'use client'

import {memo} from 'react'
import {motion} from 'motion/react'
import {X} from 'lucide-react'
import {OptionCard} from './option-card'
import type {SignUpOption, FormType} from '@/components/sign-up/signup-form'
import {ANIMATION} from '@/components/sign-up/constants'

interface OptionsPanelProps {
  options: SignUpOption[]
  onClose: () => void
  onSelectOption: (formType: FormType) => void
}

function OptionsPanelComponent({
  options,
  onClose,
  onSelectOption,
}: OptionsPanelProps) {
  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <motion.h2
          layoutId='sign-up'
          className='text-xl font-semibold text-gray-800'
        >
          Exclusive Offer
        </motion.h2>
        <motion.button
          layoutId='mail-icon'
          onClick={onClose}
          className='p-1 rounded-full hover:bg-gray-100'
        >
          <X className='size-5 text-gray-500' />
        </motion.button>
      </div>

      <motion.p
        initial={{opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 10}}
        transition={{
          duration: ANIMATION.duration.medium,
          delay: ANIMATION.delay.base,
        }}
        className='text-gray-600 mb-6'
      >
        Highest Quality Products at the Highest Margins
      </motion.p>

      <div className='space-y-3'>
        {options.map((option, index) => (
          <OptionCard
            key={option.id}
            option={option}
            index={index}
            onClick={() =>
              onSelectOption(option.id === 1 ? 'earlyAccess' : 'newsletter')
            }
          />
        ))}
      </div>
    </>
  )
}

export const OptionsPanel = memo(OptionsPanelComponent)
