'use client'

import {useState} from 'react'
import {useLangbaseAgent} from '../../hooks/useLangbaseAgent'

export interface LangbaseChatProps {
  placeholder?: string
  buttonText?: string
  className?: string
}

export function LangbaseChat({
  placeholder = 'Ask me anything about FLS...',
  buttonText = 'Send',
  className = '',
}: LangbaseChatProps) {
  const [input, setInput] = useState('')
  const {sendMessage, response, isLoading, error} = useLangbaseAgent()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    await sendMessage(input)
    setInput('')
  }

  return (
    <div className={`flex flex-col w-full max-w-md ${className}`}>
      <div className='bg-gray-50 rounded-lg p-4 mb-4 min-h-[200px] max-h-[400px] overflow-y-auto'>
        {error ? (
          <div className='text-red-500 p-2 rounded bg-red-50'>
            Error: {error.message}
          </div>
        ) : response ? (
          <div className='prose'>
            <p>{response.output}</p>
          </div>
        ) : (
          <div className='text-gray-400 italic'>
            I'm your FLS assistant. How can I help you today?
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          disabled={isLoading}
        />
        <button
          type='submit'
          disabled={isLoading || !input.trim()}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isLoading ? 'Sending...' : buttonText}
        </button>
      </form>
    </div>
  )
}
