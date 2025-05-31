import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type AnimateOnScrollProps = {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

const getVariants = (direction: AnimateOnScrollProps['direction']) => {
  const distance = 50

  switch (direction) {
    case 'up':
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 }
      }
    case 'down':
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 }
      }
    case 'left':
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 }
      }
    case 'right':
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 }
      }
    default:
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 }
      }
  }
}

export function AnimateOnScroll({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = ''
}: AnimateOnScrollProps) {  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-100px',
    amount: 0.3 // Only trigger when 30% of the element is in view
  })

  const variants = getVariants(direction)

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
