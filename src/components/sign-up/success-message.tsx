import {motion} from 'motion/react'
import {CheckCircle} from 'lucide-react'
import {ANIMATION, COLORS} from '@/components/sign-up/constants'

interface SuccessMessageProps {
  message: string
  variant?: 'default' | 'footer'
}

export function SuccessMessage({
  message,
  variant = 'default',
}: SuccessMessageProps) {
  const isFooter = variant === 'footer'

  return (
    <div className='flex flex-col items-center justify-center text-center py-6'>
      <motion.div
        initial={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={ANIMATION.spring.default}
        className={`mb-6 ${isFooter ? 'text-yellow-400' : `text-[${COLORS.primary}]`}`}
      >
        <CheckCircle size={isFooter ? 60 : 80} strokeWidth={1.5} />
      </motion.div>

      <motion.h2
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: ANIMATION.duration.long,
          delay: ANIMATION.delay.base * 2,
        }}
        className={`text-2xl font-semibold mb-3 ${isFooter ? 'text-white' : 'text-gray-800'}`}
      >
        Thank You!
      </motion.h2>

      <motion.p
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: ANIMATION.duration.long,
          delay: ANIMATION.delay.base * 2.5,
        }}
        className={`max-w-[320px] ${isFooter ? 'text-zinc-300 text-sm' : 'text-gray-600'}`}
      >
        {message}
      </motion.p>
    </div>
  )
}
