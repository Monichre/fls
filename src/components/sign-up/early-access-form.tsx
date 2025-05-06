'use client'

import type React from 'react'

import {memo} from 'react'
import {motion} from 'motion/react'
import {ArrowLeft} from 'lucide-react'
import {FormField} from '@/components/ui/form-field'
import {Button} from '@/components/ui/button'
import {ANIMATION} from './constants'
import type {SubmissionStatus} from '@/components/sign-up/signup-form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface EarlyAccessFormProps {
  onBack: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  submissionStatus: SubmissionStatus
  variant?: 'default' | 'footer'
}

function EarlyAccessFormComponent({
  onBack,
  onSubmit,
  submissionStatus,
  variant = 'default',
}: EarlyAccessFormProps) {
  const isSubmitting = submissionStatus === 'submitting'
  const isFooter = variant === 'footer'

  return (
    <>
      <motion.button
        layoutId={isFooter ? 'footer-return' : 'return-1'}
        onClick={onBack}
        className={`p-1 rounded-full ${isFooter ? 'hover:bg-zinc-700 text-zinc-400' : 'hover:bg-gray-100 text-gray-500'}`}
        disabled={isSubmitting}
      >
        <ArrowLeft className={`${isFooter ? 'size-4' : 'size-5'}`} />
      </motion.button>
      <motion.h2
        layoutId={isFooter ? 'footer-text' : 'text-1'}
        className={`text-xl font-semibold my-4 ${isFooter ? 'text-white' : 'text-gray-800'}`}
      >
        {isFooter ? 'Request Early Access' : 'Early Access Sign Up'}
      </motion.h2>

      <motion.p
        initial={{opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        // exit={{opacity: 0, y: 10}}
        transition={{
          duration: ANIMATION.duration.medium,
          delay: ANIMATION.delay.base,
        }}
        className={`mb-6 ${isFooter ? 'text-zinc-400 text-sm' : 'text-gray-600'}`}
      >
        {isFooter
          ? 'For distributors and wholesalers'
          : 'For distributors and wholesalers. Get priority access to our platform.'}
      </motion.p>
      <form
        className={`w-full mx-auto space-y-${isFooter ? '2' : '3'} ${isFooter ? 'text-white' : 'text-black'}`}
        onSubmit={onSubmit}
      >
        <FormField
          label='Your Name'
          id='name'
          required
          disabled={isSubmitting}
          index={0}
          variant={variant}
        />
        <FormField
          label='Company Name'
          id='companyName'
          required
          disabled={isSubmitting}
          index={1}
          variant={variant}
        />
        <FormField
          label='Company Email'
          id='businessEmail'
          type='email'
          required
          disabled={isSubmitting}
          index={2}
          variant={variant}
        />

        <FormField
          label='Business Type'
          id='businessType'
          required
          disabled={isSubmitting}
          index={3}
          variant={variant}
        >
          <Select disabled={isSubmitting} name='businessType'>
            <SelectTrigger
              className={`w-full px-4 py-${isFooter ? '4' : '6'} rounded-${isFooter ? 'xl' : '2xl'} border-2 ${
                isFooter
                  ? 'bg-zinc-700 border-zinc-600 focus:border-zinc-500 text-white'
                  : 'bg-white border-gray-200 focus:border-gray-300 text-black'
              } focus:outline-none mb-4`}
            >
              <SelectValue placeholder='Select business type' />
            </SelectTrigger>
            <SelectContent
              className={
                isFooter ? 'bg-zinc-800 text-white border-zinc-700' : ''
              }
            >
              <SelectGroup>
                <SelectLabel className={isFooter ? 'text-zinc-400' : ''}>
                  Business Type
                </SelectLabel>
                <SelectItem value='distributor'>Distributor</SelectItem>
                <SelectItem value='wholesaler'>Wholesaler</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
        {/* 
        <FormField
          label='Industry'
          id='industry'
          disabled={isSubmitting}
          index={4}
        >
          <Select disabled={isSubmitting} name='industry'>
            <SelectTrigger className='w-full bg-white px-4 py-6 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none text-black mb-4'>
              <SelectValue placeholder='Select industry' />
            </SelectTrigger>
          </Select>
        </FormField> */}

        <motion.div
          initial={{opacity: 0, y: 10, scale: 0.9}}
          animate={{opacity: 1, y: 0, scale: 1}}
          // exit={{opacity: 0, y: 10, scale: 0.9}}
          transition={{
            duration: ANIMATION.duration.medium,
            delay: ANIMATION.delay.base + 4 * ANIMATION.delay.stagger,
          }}
        >
          <Button
            type='submit'
            isLoading={isSubmitting}
            className={
              isFooter ? 'bg-yellow-400 hover:bg-yellow-500 text-black' : ''
            }
            size={isFooter ? 'sm' : 'default'}
          >
            Request Early Access
          </Button>
        </motion.div>
      </form>
    </>
  )
}

export const EarlyAccessForm = memo(EarlyAccessFormComponent)
