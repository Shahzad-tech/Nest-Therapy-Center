import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

type AnimatedButtonProps = {
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export function AnimatedButton({ 
  to, 
  onClick, 
  children, 
  variant = 'primary',
  className = ''
}: AnimatedButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold transition-shadow duration-200'
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg shadow-secondary-600/20',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
  }

  const buttonContent = (
    <motion.span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={false}
      animate={{ 
        boxShadow: variant !== 'outline' ? '0 10px 30px -10px currentColor' : 'none'
      }}
      transition={{ 
        duration: 0.2,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.span>
  )

  if (to) {
    return <Link to={to}>{buttonContent}</Link>
  }

  return (
    <button onClick={onClick} type="button">
      {buttonContent}
    </button>
  )
}
