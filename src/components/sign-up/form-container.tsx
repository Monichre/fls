import {memo, type ReactNode} from 'react'
import {motion} from 'motion/react'

interface FormContainerProps {
  children: ReactNode
  className?: string
  skipLayoutId?: boolean
}

function FormContainerComponent({
  children,
  className = '',
  skipLayoutId = false,
}: FormContainerProps) {
  const motionProps = skipLayoutId ? {} : {layoutId: 'signup-button'}

  return (
    <motion.div
      {...motionProps}
      className={`w-[440px] bg-white shadow-sm p-6 border ${className}`}
      style={{
        borderRadius: 30,
      }}
    >
      {children}
    </motion.div>
  )
}

export const FormContainer = memo(FormContainerComponent)
