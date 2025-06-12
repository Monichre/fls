'use client'

import type React from 'react'

import {useState} from 'react'
import {
  X,
  Mail,
  Users,
  ChevronRight,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react'
import {motion, AnimatePresence} from 'motion/react'
import {Button} from '@/components/ui/button'
const MotionButton = motion(Button)
type SignUpOption = {
  id: number
  icon: JSX.Element
  title: string
  description: string
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

const signUpOptions: SignUpOption[] = [
  {
    id: 1,
    icon: <Users className='size-6 text-gray-600' />,
    title: 'Early Access Sign Up',
    description: 'For distributors and wholesalers',
  },
  {
    id: 2,
    icon: <Mail className='size-6 text-gray-600' />,
    title: 'Newsletter Sign Up',
    description: 'Stay updated with our latest news',
  },
]

export function NewsletterSignup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<null | 'earlyAccess' | 'newsletter'>(
    null
  )
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>('idle')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionStatus('submitting')

    // Simulate form submission with a delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Set success message based on form type
    if (formType === 'earlyAccess') {
      setSuccessMessage(
        "Thank you for your interest in early access! We'll review your application and get back to you soon."
      )
    } else {
      setSuccessMessage(
        "Thank you for subscribing to our newsletter! You'll start receiving updates soon."
      )
    }

    setSubmissionStatus('success')

    // Close the form after showing success message for a few seconds
    setTimeout(() => {
      setIsOpen(false)

      // Reset states after animation completes
      setTimeout(() => {
        setFormType(null)
        setSubmissionStatus('idle')
      }, 500)
    }, 3000)
  }
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AnimatePresence>
      <MotionButton
        onClick={toggleOpen}
        layoutId='signup-button'
        className='flex items-center gap-2 px-6 py-3 hover:gap-3 transition-all duration-300 hover:bg-black hover:text-yellow bg-yellow rounded-full button transition-all duration-300 button fade-in text-white'
        style={{
          borderRadius: 40,
        }}
      >
        <motion.div
          layoutId='mail-icon'
          className='flex items-center justify-center'
        >
          <Mail className='size-5 text-white' />
        </motion.div>
        <motion.span layoutId='sign-up' className='text-white'>
          Sign Up
        </motion.span>
      </MotionButton>

      {isOpen && (
        <div className='absolute flex items-center justify-center'>
          <motion.div
            layoutId='signup-button'
            className='w-[440px] bg-white shadow-sm p-6 border'
            style={{
              borderRadius: 30,
            }}
          >
            <div className='flex justify-between items-center mb-4'>
              <motion.h2
                layoutId='sign-up'
                className='text-xl font-semibold text-gray-800'
              >
                Sign Up
              </motion.h2>
              <motion.button
                layoutId='mail-icon'
                onClick={() => {
                  setIsOpen(false)
                  setFormType(null)
                }}
                className='p-1 rounded-full hover:bg-gray-100'
              >
                <X className='size-5 text-gray-500' />
              </motion.button>
            </div>

            <motion.p
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 10}}
              transition={{duration: 0.3, delay: 0.2}}
              className='text-gray-600 mb-6'
            >
              Choose the sign-up option that best fits your needs.
            </motion.p>

            <div className='space-y-3'>
              {signUpOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  className='flex items-center gap-3 w-full justify-between py-4 px-3 rounded-2xl bg-gray-50/50 hover:bg-gray-50 border border-gray-100 cursor-pointer'
                  initial={{opacity: 0, y: 10, scale: 0.9}}
                  animate={{opacity: 1, y: 0, scale: 1}}
                  exit={{opacity: 0, y: 10, scale: 0.9}}
                  transition={{duration: 0.3, delay: index * 0.1 + 0.3}}
                  onClick={() => {
                    setIsOpen(false)
                    setFormType(option.id === 1 ? 'earlyAccess' : 'newsletter')
                  }}
                >
                  <div className='p-3 bg-white rounded-full border'>
                    {option.icon}
                  </div>
                  <div className='w-full flex flex-col items-start'>
                    <motion.div
                      layoutId={`text-${option.id}`}
                      className='font-medium text-gray-800'
                    >
                      {option.title}
                    </motion.div>
                    <div className='text-sm text-gray-500'>
                      {option.description}
                    </div>
                  </div>
                  <motion.div
                    layoutId={`return-${option.id}`}
                    className='flex items-center'
                  >
                    <ChevronRight className='size-6 text-gray-400' />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {formType === 'earlyAccess' && submissionStatus !== 'success' && (
        <div className='absolute flex items-center justify-center'>
          <motion.div
            layoutId='signup-button'
            className='w-[440px] bg-white shadow-sm p-6 border'
            style={{
              borderRadius: 30,
            }}
          >
            <motion.button
              layoutId='return-1'
              onClick={() => {
                setFormType(null)
                setIsOpen(true)
              }}
              className='p-1 rounded-full hover:bg-gray-100'
              disabled={submissionStatus === 'submitting'}
            >
              <ArrowLeft className='size-5 text-gray-500' />
            </motion.button>
            <motion.h2
              layoutId={`text-1`}
              className='text-xl font-semibold text-gray-800 my-4'
            >
              Early Access Sign Up
            </motion.h2>

            <motion.p
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 10}}
              transition={{duration: 0.3, delay: 0.2}}
              className='text-gray-600 mb-6'
            >
              For distributors and wholesalers. Get priority access to our
              platform.
            </motion.p>
            <form className='w-full mx-auto space-y-3' onSubmit={handleSubmit}>
              <motion.div
                initial={{opacity: 0, y: 10, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 10, scale: 0.9}}
                transition={{duration: 0.3, delay: 0.2}}
                className='space-y-2'
              >
                <label htmlFor='name' className='block text-gray-500'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='bg-white w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none'
                  required
                  disabled={submissionStatus === 'submitting'}
                />
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 10, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 10, scale: 0.9}}
                transition={{duration: 0.3, delay: 0.3}}
                className='space-y-2'
              >
                <label htmlFor='company' className='block text-gray-500'>
                  Company Name
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  className='bg-white w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none'
                  required
                  disabled={submissionStatus === 'submitting'}
                />
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 10, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 10, scale: 0.9}}
                transition={{duration: 0.3, delay: 0.4}}
                className='space-y-2'
              >
                <label htmlFor='email' className='block text-gray-500'>
                  Business Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='bg-white w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none'
                  required
                  disabled={submissionStatus === 'submitting'}
                />
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 10, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 10, scale: 0.9}}
                transition={{duration: 0.3, delay: 0.5}}
                className='space-y-2'
              >
                <label htmlFor='businessType' className='block text-gray-500'>
                  Business Type
                </label>
                <select
                  id='businessType'
                  name='businessType'
                  className='bg-white w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none'
                  required
                  disabled={submissionStatus === 'submitting'}
                >
                  <option value=''>Select business type</option>
                  <option value='distributor'>Distributor</option>
                  <option value='wholesaler'>Wholesaler</option>
                  <option value='other'>Other</option>
                </select>
              </motion.div>

              <motion.button
                initial={{opacity: 0, y: 10, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 10, scale: 0.9}}
                transition={{duration: 0.3, delay: 0.6}}
                type='submit'
                className='px-8 py-3 bg-[#F7CB00] text-white w-full rounded-full font-medium relative hover:bg-[#e6bc00] transition-colors'
                disabled={submissionStatus === 'submitting'}
              >
                {submissionStatus === 'submitting' ? (
                  <span className='flex items-center justify-center'>
                    <motion.svg
                      className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <motion.circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      />
                      <motion.path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      />
                    </motion.svg>
                    Processing...
                  </span>
                ) : (
                  'Request Early Access'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}

      {formType === 'newsletter' && submissionStatus !== 'success' && (
        <div className='absolute flex items-center justify-center'>
          <motion.div
            layoutId='signup-button'
            className='w-[440px] bg-white shadow-sm p-6 border'
            style={{
              borderRadius: 30,
            }}
          >
            <MotionButton
              layoutId='return-2'
              onClick={() => {
                setFormType(null)
                setIsOpen(true)
              }}
              className='p-1 rounded-full hover:bg-gray-100'
              disabled={submissionStatus === 'submitting'}
            >
              <ArrowLeft className='size-5 text-gray-500' />
            </MotionButton>
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
              transition={{duration: 0.3, delay: 0.2}}
              className='text-gray-600 mb-6'
            >
              Stay updated with our latest news, product updates, and exclusive
              offers.
            </motion.p>
            <form className='w-full mx-auto space-y-3' onSubmit={handleSubmit}>
              <motion.div
                initial={{opacity: 0, y: 10, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 10, scale: 0.9}}
                transition={{duration: 0.3, delay: 0.2}}
                className='space-y-2'
              >
                <label htmlFor='name' className='block text-gray-500'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='bg-white w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none'
                  required
                  disabled={submissionStatus === 'submitting'}
                />
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 10, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 10, scale: 0.9}}
                transition={{duration: 0.3, delay: 0.3}}
                className='space-y-2'
              >
                <label htmlFor='email' className='block text-gray-500'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='bg-white w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-gray-300 focus:outline-none'
                  required
                  disabled={submissionStatus === 'submitting'}
                />
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 10, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 10, scale: 0.9}}
                transition={{duration: 0.3, delay: 0.4}}
                className='flex items-center gap-2 mt-2'
              >
                <input
                  type='checkbox'
                  id='consent'
                  name='consent'
                  className='rounded border-gray-300'
                  required
                  disabled={submissionStatus === 'submitting'}
                />
                <label htmlFor='consent' className='text-sm text-gray-500'>
                  I agree to receive marketing communications
                </label>
              </motion.div>

              <MotionButton
                initial={{opacity: 0, y: 10, scale: 0.9}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, y: 10, scale: 0.9}}
                transition={{duration: 0.3, delay: 0.5}}
                type='submit'
                className='px-8 py-3 bg-[#F7CB00] text-white w-full rounded-full font-medium relative hover:bg-[#e6bc00] transition-colors'
                disabled={submissionStatus === 'submitting'}
              >
                {submissionStatus === 'submitting' ? (
                  <span className='flex items-center justify-center'>
                    <svg
                      className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Subscribe'
                )}
              </MotionButton>
            </form>
          </motion.div>
        </div>
      )}

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
            <div className='flex flex-col items-center justify-center text-center py-6'>
              <motion.div
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.2,
                }}
                className='mb-6 text-[#F7CB00]'
              >
                <CheckCircle size={80} strokeWidth={1.5} />
              </motion.div>

              <motion.h2
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.4}}
                className='text-2xl font-semibold text-gray-800 mb-3'
              >
                Thank You!
              </motion.h2>

              <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.5}}
                className='text-gray-600 max-w-[320px]'
              >
                {successMessage}
              </motion.p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
