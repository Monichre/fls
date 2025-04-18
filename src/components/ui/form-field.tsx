'use client'

import type React from 'react'
import {motion} from 'framer-motion'
import {ANIMATION} from '@/components/sign-up/constants'
import {
  FormControl,
  FormDescription,
  FormField as FormFieldComponent,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useFormContext} from 'react-hook-form'

interface FormFieldProps {
  label: string
  id: string
  type?: string
  required?: boolean
  disabled?: boolean
  index?: number
  children?: React.ReactNode
  description?: string
}

export function FormField({
  label,
  id,
  type = 'text',
  required = false,
  disabled = false,
  index = 0,
  children,
  description,
}: FormFieldProps) {
  const delay = ANIMATION.delay.base + index * ANIMATION.delay.stagger
  const form = useFormContext()

  if (!form) {
    // Fallback for when not used within a form context
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

  return (
    <motion.div
      initial={{opacity: 0, y: 10, scale: 0.9}}
      animate={{opacity: 1, y: 0, scale: 1}}
      exit={{opacity: 0, y: 10, scale: 0.9}}
      transition={{duration: ANIMATION.duration.medium, delay}}
    >
      <FormFieldComponent
        control={form.control}
        name={id}
        render={({field}) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              {children ? (
                children
              ) : (
                <Input
                  type={type}
                  required={required}
                  disabled={disabled}
                  className='bg-white w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none'
                  {...field}
                />
              )}
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </motion.div>
  )
}
