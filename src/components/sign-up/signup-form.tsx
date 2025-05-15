'use client'

import type React from 'react'
import type {JSX} from 'react'

import {useState, useCallback} from 'react'
import {motion, AnimatePresence} from 'motion/react'
import {Mail} from 'lucide-react'

// Components
import {FormContainer} from './form-container'
import {OptionsPanel} from './options-panel'
import {EarlyAccessForm} from './early-access-form'
import {NewsletterForm} from './newsletter-form'
import {SuccessMessage} from './success-message'

// Hooks and utilities
import {useFormSubmission} from '@/hooks/useFormSubmission'

import {SIGN_UP_OPTIONS} from './constants'

export type SignUpOption = {
  id: number
  icon: JSX.Element
  title: string
  description: string
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export type FormType = null | 'earlyAccess' | 'newsletter'

/**
 * SignUpForm - A component that provides two sign-up options:
 * 1. Early Access Sign Up for distributors and wholesalers
 * 2. Newsletter Sign Up for general users
 *
 * Features:
 * - Animated transitions between states
 * - Form validation
 * - Loading states during submission
 * - Success message after submission
 */
export function SignUpForm() {
  // State for controlling the visibility of different panels
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType>(null)
  const [submitted, setSubmitted] = useState(false)
  // Reset form state
  const resetForm = useCallback(() => {
    setFormType(null)
  }, [])

  // Form submission handling
  const {submissionStatus, successMessage, handleSubmit} = useFormSubmission({
    onReset: resetForm,
  })

  // Event handlers
  const handleOpenOptions = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleCloseOptions = useCallback(() => {
    setIsOpen(false)
    setFormType(null)
  }, [])

  const handleSelectOption = useCallback((selectedFormType: FormType) => {
    setIsOpen(false)
    setFormType(selectedFormType)
  }, [])

  const handleBackToOptions = useCallback(() => {
    setFormType(null)
    setIsOpen(true)
  }, [])

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      handleSubmit(e, formType)
      setSubmitted(true)
    },
    [handleSubmit, formType]
  )

  return (
    <section className='relative w-full flex items-start md:items-center justify-center md:justify-center px-4 md:py-10 z-50'>
      <div className='flex items-center justify-center relative z-50 w-full'>
        {/* Main Sign Up Button */}
        <div className='flex items-center justify-center mt-8 mx-auto hero-buttons'>
          <motion.button
            onClick={handleOpenOptions}
            type='button'
            layoutId='signup-button'
            className='flex items-center gap-2 px-6 py-3 bg-yellow-400 button mx-auto text-black button'
            id='sign-up-button'
            disabled={submitted}
            style={{
              borderRadius: 40,
            }}
          >
            <span className='flex items-center justify-center text-black'>
              <Mail className='h-4 w-4 block text-black' />
            </span>
            <span className='!text-black block ml-2 font-medium'>
              {submitted ? 'Thank You!' : 'Lock In Your Pricing!'}
            </span>
          </motion.button>
        </div>

        {/* Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <div className='absolute flex items-center justify-center z-50'>
              <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.3}}
                className='w-full md:w-[440px] bg-white shadow-sm p-6 border'
                style={{borderRadius: 30}}
              >
                <OptionsPanel
                  options={SIGN_UP_OPTIONS}
                  onClose={handleCloseOptions}
                  onSelectOption={handleSelectOption}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Early Access Form */}
        <AnimatePresence>
          {formType === 'earlyAccess' && submissionStatus !== 'success' && (
            <div className='absolute  flex items-center justify-center z-50'>
              <FormContainer>
                <EarlyAccessForm
                  onBack={handleBackToOptions}
                  onSubmit={handleFormSubmit}
                  submissionStatus={submissionStatus}
                />
              </FormContainer>
            </div>
          )}
        </AnimatePresence>

        {/* Newsletter Form
        <AnimatePresence>
          {formType === 'newsletter' && submissionStatus !== 'success' && (
            <div className='absolute flex items-center justify-center'>
              <FormContainer>
                <NewsletterForm
                  onBack={handleBackToOptions}
                  onSubmit={handleFormSubmit}
                  submissionStatus={submissionStatus}
                />
              </FormContainer>
            </div>
          )}
        </AnimatePresence> */}

        {/* Success Message */}
        <AnimatePresence>
          {submissionStatus === 'success' && (
            <div className='absolute flex items-center justify-center z-50'>
              <motion.div
                layoutId='signup-button'
                className='w-full md:w-[440px] bg-white shadow-sm p-6 border'
                style={{
                  borderRadius: 30,
                }}
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9, y: 10}}
                transition={{duration: 0.4, delay: 0.1}}
              >
                <SuccessMessage message={successMessage} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
