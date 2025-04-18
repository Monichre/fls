import {motion} from 'motion/react'
import {CheckCircle} from 'lucide-react'
import {ANIMATION, COLORS} from '@/components/sign-up/constants'

interface SuccessMessageProps {
  message: string
}

export function SuccessMessage({message}: SuccessMessageProps) {
  return (
    <div className='flex flex-col items-center justify-center text-center py-6'>
      <motion.div
        initial={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={ANIMATION.spring.default}
        className={`mb-6 text-[${COLORS.primary}]`}
      >
        <CheckCircle size={80} strokeWidth={1.5} />
      </motion.div>

      <motion.h2
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: ANIMATION.duration.long,
          delay: ANIMATION.delay.base * 2,
        }}
        className='text-2xl font-semibold text-gray-800 mb-3'
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
        className='text-gray-600 max-w-[320px]'
      >
        {message}
      </motion.p>
    </div>
  )
}
