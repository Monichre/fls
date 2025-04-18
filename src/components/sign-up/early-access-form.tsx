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
}

function EarlyAccessFormComponent({
  onBack,
  onSubmit,
  submissionStatus,
}: EarlyAccessFormProps) {
  const isSubmitting = submissionStatus === 'submitting'

  return (
    <>
      <motion.button
        layoutId='return-1'
        onClick={onBack}
        className='p-1 rounded-full hover:bg-gray-100'
        disabled={isSubmitting}
      >
        <ArrowLeft className='size-5 text-gray-500' />
      </motion.button>
      <motion.h2
        layoutId='text-1'
        className='text-xl font-semibold text-gray-800 my-4'
      >
        Early Access Sign Up
      </motion.h2>

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
        For distributors and wholesalers. Get priority access to our platform.
      </motion.p>
      <form className='w-full mx-auto space-y-3' onSubmit={onSubmit}>
        <FormField
          label='Your Name'
          id='name'
          required
          disabled={isSubmitting}
          index={0}
        />
        <FormField
          label='Company Name'
          id='companyName'
          required
          disabled={isSubmitting}
          index={1}
        />
        <FormField
          label='Business Email'
          id='businessEmail'
          type='email'
          required
          disabled={isSubmitting}
          index={2}
        />

        <FormField
          label='Business Type'
          id='businessType'
          required
          disabled={isSubmitting}
          index={3}
        >
          <Select disabled={isSubmitting} name='businessType'>
            <SelectTrigger className='w-full bg-white px-4 py-6 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none text-black mb-4'>
              <SelectValue placeholder='Select business type' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Business Type</SelectLabel>
                <SelectItem value='distributor'>Distributor</SelectItem>
                <SelectItem value='wholesaler'>Wholesaler</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>

        <motion.div
          initial={{opacity: 0, y: 10, scale: 0.9}}
          animate={{opacity: 1, y: 0, scale: 1}}
          exit={{opacity: 0, y: 10, scale: 0.9}}
          transition={{
            duration: ANIMATION.duration.medium,
            delay: ANIMATION.delay.base + 4 * ANIMATION.delay.stagger,
          }}
        >
          <Button type='submit' isLoading={isSubmitting}>
            Request Early Access
          </Button>
        </motion.div>
      </form>
    </>
  )
}

export const EarlyAccessForm = memo(EarlyAccessFormComponent)
