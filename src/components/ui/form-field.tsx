import type React from 'react'
import {motion} from 'motion/react'
import {ANIMATION} from '@/components/sign-up/constants'

interface FormFieldProps {
  label: string
  id: string
  type?: string
  required?: boolean
  disabled?: boolean
  index?: number
  children?: React.ReactNode
}

export function FormField({
  label,
  id,
  type = 'text',
  required = false,
  disabled = false,
  index = 0,
  children,
}: FormFieldProps) {
  const delay = ANIMATION.delay.base + index * ANIMATION.delay.stagger

  return (
    <motion.div
      initial={{opacity: 0, y: 10, scale: 0.9}}
      animate={{opacity: 1, y: 0, scale: 1}}
      exit={{opacity: 0, y: 10, scale: 0.9}}
      transition={{duration: ANIMATION.duration.medium, delay}}
      className='space-y-2'
    >
      <label htmlFor={id} className='block text-gray-500'>
        {label}
      </label>
      {children ? (
        children
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className='bg-white w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none'
          required={required}
          disabled={disabled}
        />
      )}
    </motion.div>
  )
}
