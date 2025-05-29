'use client'

import React, {forwardRef, useCallback, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Mail} from 'lucide-react'

import {SIGN_UP_OPTIONS} from './constants'
import {OptionsPanel} from './options-panel'
import {EarlyAccessForm} from './early-access-form'
import {NewsletterForm} from './newsletter-form'
import {SuccessMessage} from './success-message'
import {MagicLockPricingButton} from './magic-lock-pricing-button'

export interface SignUpFormProps {
  variant?: 'default' | 'footer'
}

export type FormType = 'earlyAccess' | 'newsletter'
export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

/**
 * SignUpForm - A component that provides two sign-up options:
 * 1. Early Access Sign Up for distributors and wholesaler
 * s
 * 2. Newsletter Sign Up for general users
 *
 * Features:
 * - Animated transitions between states
 * - Form validation
 * - Loading states during submission
 * - Success message after submission
 */
export const SignUpForm = () => {
  // State for controlling the visibility of different panels
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType | null>(null)
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>('idle')
  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  // Event handlers
  const handleOpenOptions = useCallback(() => {
    if (!submitted) {
      setIsOpen(true)
    }
  }, [submitted])

  const handleCloseOptions = () => {
    setIsOpen(false)
    setFormType(null)
  }

  const handleSelectOption = (option: FormType) => {
    setIsOpen(false)
    setFormType(option)
  }

  const handleBack = () => {
    setFormType(null)
    setIsOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionStatus('submitting')

    try {
      const formData = new FormData(e.currentTarget)
      const apiEndpoint =
        formType === 'earlyAccess'
          ? '/api/send/wholesalers'
          : '/api/send/newsletter'

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmissionStatus('success')
        setSubmitted(true)

        // Set success message based on form type
        const message =
          formType === 'earlyAccess'
            ? "We've received your request for early access. Our team will contact you soon with exclusive pricing details!"
            : "Thank you for subscribing! You'll receive our latest updates and exclusive offers directly in your inbox."

        setSuccessMessage(message)

        setTimeout(() => {
          setFormType(null)
          setSubmissionStatus('idle')
        }, 3000)
      } else {
        setSubmissionStatus('error')
        setTimeout(() => setSubmissionStatus('idle'), 3000)
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmissionStatus('error')
      setTimeout(() => setSubmissionStatus('idle'), 3000)
    }
  }

  return (
    <section className='relative w-full flex items-start md:items-center justify-center md:justify-center px-4 md:py-10 z-50'>
      <div className='flex items-center justify-center relative z-50 w-full'>
        {/* Main Sign Up Button */}
        <div className='flex items-center justify-center mt-12 mx-auto hero-buttons'>
          <MagicLockPricingButton
            onClick={handleOpenOptions}
            disabled={submitted}
            submitted={submitted}
          />
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
            <div className='absolute flex items-center justify-center z-50'>
              <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.3}}
                className='w-full md:w-[440px] bg-white shadow-sm p-6 border'
                style={{borderRadius: 30}}
              >
                <EarlyAccessForm
                  onBack={handleBack}
                  onSubmit={handleSubmit}
                  submissionStatus={submissionStatus}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Newsletter Form */}
        <AnimatePresence>
          {formType === 'newsletter' && submissionStatus !== 'success' && (
            <div className='absolute flex items-center justify-center z-50'>
              <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.3}}
                className='w-full md:w-[440px] bg-white shadow-sm p-6 border'
                style={{borderRadius: 30}}
              >
                <NewsletterForm
                  onBack={handleBack}
                  onSubmit={handleSubmit}
                  submissionStatus={submissionStatus}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Success Message */}
        <AnimatePresence>
          {submissionStatus === 'success' && (
            <div className='absolute flex items-center justify-center z-50'>
              <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                transition={{duration: 0.3}}
                className='w-full md:w-[440px] bg-white shadow-sm p-6 border'
                style={{borderRadius: 30}}
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
