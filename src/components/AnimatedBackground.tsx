import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <>
      {/* Base gradient with more color */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-100 via-white to-purple-100" />
      
      {/* Animated gradient overlay with increased opacity */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(120deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25))',
          backgroundSize: '200% 200%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Animated floating shapes with increased size and opacity */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Top-left shape */}
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-300/40 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Center shape */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-[800px] h-[800px] rounded-full bg-purple-300/40 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 60, 0],
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />

        {/* Bottom-right shape */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-300/40 blur-3xl"
          animate={{
            x: [-40, -80, -40],
            y: [-40, -80, -40],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Floating particles with increased size and opacity */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 rounded-full bg-primary-400/40 blur-md"
            style={{
              left: `${5 + i * 15}%`,
              top: `${15 + i * 8}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </>
  )
}
