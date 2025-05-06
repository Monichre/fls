'use client'

import type React from 'react'
import type {JSX} from 'react'

import {useState, useCallback} from 'react'
import {motion, AnimatePresence} from 'motion/react'
import {Mail} from 'lucide-react'

// Components
import {FormContainer} from './form-container'
import {EarlyAccessForm} from './early-access-form'
import {SuccessMessage} from './success-message'

// Hooks and utilities
import {useFormSubmission} from '@/hooks/useFormSubmission'

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

/**
 * FooterSignUpForm - A simplified version of SignUpForm for the footer
 * Features:
 * - Skips the options panel and goes directly to the early access form
 * - Uses the same styling as the original SignUpForm without GSAP animations
 * - Animated transitions between states
 * - Success message after submission
 */
export function FooterSignUpForm() {
  // State for controlling the visibility of different panels
  const [formVisible, setFormVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Form submission handling
  const {submissionStatus, successMessage, handleSubmit} = useFormSubmission({
    onReset: () => setFormVisible(false),
  })

  // Event handlers
  const handleOpenForm = useCallback(() => {
    setFormVisible(true)
  }, [])

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      handleSubmit(e, 'earlyAccess')
      setSubmitted(true)
    },
    [handleSubmit]
  )

  const handleBackClick = useCallback(() => {
    setFormVisible(false)
  }, [])

  return (
    <div className='relative w-full flex items-center justify-center z-50'>
      <div className='flex items-center justify-start relative z-50'>
        {/* Main Sign Up Button */}
        {/* <div className='flex items-center justify-center'> */}
        <button
          onClick={handleOpenForm}
          type='button'
          className='flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black'
          id='footer-sign-up-button'
          disabled={submitted}
          style={{
            borderRadius: 40,
          }}
        >
          <span className='flex items-center justify-center text-black'>
            <Mail className='h-4 w-4 block text-black' />
          </span>
          <span className='text-black block ml-2 font-medium'>
            {submitted ? 'Thank You!' : 'Lock In Your Pricing!'}
          </span>
        </button>
        {/* </div> */}

        {/* Early Access Form */}
        <AnimatePresence>
          {formVisible && submissionStatus !== 'success' && (
            <div className='absolute bottom-full mb-4 flex items-center justify-center'>
              <motion.div
                layoutId='footer-form-container'
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.3}}
              >
                <FormContainer skipLayoutId={true}>
                  <EarlyAccessForm
                    onBack={handleBackClick}
                    onSubmit={handleFormSubmit}
                    submissionStatus={submissionStatus}
                  />
                </FormContainer>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Success Message */}
        <AnimatePresence>
          {submissionStatus === 'success' && (
            <div className='absolute bottom-full mb-4 flex items-center justify-center'>
              <motion.div
                layoutId='footer-signup-button'
                className='w-[440px] bg-white shadow-sm p-6 border'
                style={{
                  borderRadius: 30,
                }}
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.4}}
              >
                <SuccessMessage message={successMessage} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
