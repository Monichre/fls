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

  // Reset form state
  const resetForm = useCallback(() => {
    setFormType(null)
  }, [])

  // Form submission handling
  const {submissionStatus, successMessage, handleSubmit} = useFormSubmission({
    onReset: resetForm,
  })

  console.log('🚀 ~ SignUpForm ~ submissionStatus:', submissionStatus)

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
    },
    [handleSubmit, formType]
  )

  return (
    <section className='relative w-full h-full flex items-start md:items-center justify-center px-4 py-10 z-50'>
      <div className='flex items-center justify-center relative z-50'>
        {/* Main Sign Up Button */}
        <motion.div
          layout
          className='flex items-center justify-center text-white hero-buttons fade-in'
        >
          <motion.button
            onClick={handleOpenOptions}
            layoutId='signup-button'
            className='flex items-center gap-2 px-6 py-3 bg-[#F7CB00] !text-white transition-all duration-300 button'
            id='sign-up-button'
            style={{
              borderRadius: 40,
            }}
          >
            <motion.span
              layoutId='mail-icon'
              // layoutId='sign-up'
              className='flex items-center justify-center text-white'
            >
              <Mail className='h-4 w-4 block text-white' />
            </motion.span>
            <motion.span
              layout
              // layoutId='sign-up'
              className='!text-white block ml-4 opacity-100'
            >
              Early Access
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <div className='absolute flex items-center justify-center'>
              <FormContainer>
                <OptionsPanel
                  options={SIGN_UP_OPTIONS}
                  onClose={handleCloseOptions}
                  onSelectOption={handleSelectOption}
                />
              </FormContainer>
            </div>
          )}
        </AnimatePresence>

        {/* Early Access Form */}
        <AnimatePresence>
          {formType === 'earlyAccess' && submissionStatus !== 'success' && (
            <div className='absolute flex items-center justify-center'>
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

        {/* Newsletter Form */}
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
        </AnimatePresence>

        {/* Success Message */}
        <AnimatePresence mode='popLayout' initial={false}>
          {submissionStatus === 'success' && (
            <div className='absolute flex items-center justify-center'>
              <motion.div
                layoutId='signup-button'
                className='w-[440px] bg-white shadow-sm p-6 border'
                style={{
                  borderRadius: 30,
                }}
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9, y: 10}}
                transition={{duration: 0.4}}
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
