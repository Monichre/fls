'use client'

import type React from 'react'

import {memo} from 'react'
import {motion} from 'motion/react'
import {ArrowLeft} from 'lucide-react'
import {FormField} from '@/components/ui/form-field'
import {Button} from '@/components/ui/button'
import type {SubmissionStatus} from '@/components/sign-up/signup-form'
import {ANIMATION} from '@/components/sign-up/constants'

interface NewsletterFormProps {
  onBack: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  submissionStatus: SubmissionStatus
}

function NewsletterFormComponent({
  onBack,
  onSubmit,
  submissionStatus,
}: NewsletterFormProps) {
  const isSubmitting = submissionStatus === 'submitting'

  return (
    <>
      <motion.button
        layoutId='return-2'
        onClick={onBack}
        className='p-1 rounded-full hover:bg-gray-100'
        disabled={isSubmitting}
      >
        <ArrowLeft className='size-5 text-gray-500' />
      </motion.button>
      <motion.h2
        layoutId={`text-2`}
        className='text-xl font-semibold text-gray-800 my-4'
      >
        Newsletter Sign Up
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
        Stay updated with our latest news, product updates, and exclusive
        offers.
      </motion.p>
      <form className='w-full mx-auto space-y-3' onSubmit={onSubmit}>
        <FormField
          label='Name'
          id='name'
          required
          disabled={isSubmitting}
          index={0}
        />
        <FormField
          label='Email'
          id='email'
          type='email'
          required
          disabled={isSubmitting}
          index={1}
        />

        <motion.div
          initial={{opacity: 0, y: 10, scale: 0.9}}
          animate={{opacity: 1, y: 0, scale: 1}}
          exit={{opacity: 0, y: 10, scale: 0.9}}
          transition={{
            duration: ANIMATION.duration.medium,
            delay: ANIMATION.delay.base + 2 * ANIMATION.delay.stagger,
          }}
          className='flex items-center gap-2 mt-2'
        >
          <input
            type='checkbox'
            id='consent'
            name='consent'
            className='rounded border-gray-300'
            required
            disabled={isSubmitting}
          />
          <label htmlFor='consent' className='text-sm text-gray-500'>
            I agree to receive marketing communications
          </label>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 10, scale: 0.9}}
          animate={{opacity: 1, y: 0, scale: 1}}
          exit={{opacity: 0, y: 10, scale: 0.9}}
          transition={{
            duration: ANIMATION.duration.medium,
            delay: ANIMATION.delay.base + 3 * ANIMATION.delay.stagger,
          }}
        >
          <Button type='submit' isLoading={isSubmitting}>
            Subscribe
          </Button>
        </motion.div>
      </form>
    </>
  )
}

export const NewsletterForm = memo(NewsletterFormComponent)
