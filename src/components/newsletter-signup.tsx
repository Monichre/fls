'use client'

import {useState} from 'react'
import {motion} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {toast} from 'sonner'

import {CheckCircle2, Loader2, Plus} from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      toast('Invalid email', {
        description: 'Please enter a valid email address',
        className: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      toast('Successfully subscribed!', {
        description: 'Thank you for joining our newsletter',
      })
    } catch (error) {
      toast('Something went wrong', {
        description: 'Please try again later',
        className: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full'>
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
          <div className='flex flex-col md:flex-row gap-3'>
            <Input
              type='email'
              placeholder='Enter your email'
              className='bg-white border-zinc-700 focus-visible:ring-yellow-400 rounded-full'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type='submit'
              size='sm'
              className='bg-yellow-400 hover:bg-yellow-500 text-black rounded-full'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className='h-4 w-4 animate-spin mr-2' />
              ) : null}
              <Plus className='h-4 w-4' />
            </Button>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          className='bg-white p-6 rounded-lg text-center'
        >
          <CheckCircle2 className='h-12 w-12 text-green-500 mx-auto mb-4' />
          <h3 className='text-xl text-black font-medium mb-4'>
            Thanks for subscribing!
          </h3>
          <p className='text-black'>
            We've sent a confirmation email to{' '}
            <span className='text-black font-medium'>{email}</span>
          </p>
        </motion.div>
      )}
    </div>
  )
}
