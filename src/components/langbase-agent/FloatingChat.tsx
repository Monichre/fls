'use client'

import {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {LangbaseChat} from './LangbaseChat'
import {MessageCircle, X} from 'lucide-react'

export interface FloatingChatProps {
  buttonLabel?: string
  initialMessage?: string
  mobile?: boolean
}

export function FloatingChat({
  buttonLabel = 'Chat with us',
  initialMessage = 'Hi there! How can I help you today?',
  mobile = false,
}: FloatingChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Wait for client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close chat on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  if (!mounted) return null

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <AnimatePresence mode='wait'>
        {isOpen ? (
          <motion.div
            key='chat-window'
            initial={{opacity: 0, y: 50, scale: 0.9}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 20, scale: 0.9}}
            transition={{duration: 0.3, ease: 'easeOut'}}
            className={`bg-white rounded-lg shadow-xl overflow-hidden ${
              mobile ? 'w-[calc(100vw-32px)]' : 'w-full max-w-sm'
            }`}
            role='dialog'
            aria-modal='true'
            aria-labelledby='chat-title'
          >
            <div className='bg-blue-600 text-white p-3 flex justify-between items-center'>
              <h3 id='chat-title' className='font-medium'>
                FLS Assistant
              </h3>
              <button
                onClick={toggleChat}
                className='text-white hover:bg-blue-700 rounded-full p-1 transition-colors'
                aria-label='Close chat'
              >
                <X size={18} />
              </button>
            </div>
            <div className='p-4'>
              <LangbaseChat
                placeholder='Ask about our products...'
                buttonText='Send'
              />
            </div>
          </motion.div>
        ) : (
          <motion.button
            key='chat-button'
            onClick={toggleChat}
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.8}}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className={`bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center ${
              mobile ? 'p-2.5' : 'p-3'
            }`}
            aria-label={buttonLabel}
          >
            <MessageCircle
              size={mobile ? 20 : 24}
              className={mobile ? 'mr-1.5' : 'mr-2'}
            />
            <span className={`font-medium ${mobile ? 'text-sm' : 'text-base'}`}>
              {buttonLabel}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
