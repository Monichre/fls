import { memo, type ReactNode } from "react"
import { motion } from "motion/react"

interface FormContainerProps {
  children: ReactNode
}

function FormContainerComponent({ children }: FormContainerProps) {
  return (
    <motion.div
      layoutId="signup-button"
      className="w-[440px] bg-white shadow-sm p-6 border"
      style={{
        borderRadius: 30,
      }}
    >
      {children}
    </motion.div>
  )
}

export const FormContainer = memo(FormContainerComponent)
