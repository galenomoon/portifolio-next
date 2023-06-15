import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundText({ children, className, lines, white }) {
  const text = children?.split(" ") || lines
  
  return (
    <div className={`items-center justify-center font-bold self-center leading-[12vw] inline-block bg-clip-text text-transparent bg-gradient-to-b ${white ? 'from-typography-white-800 via-typography-white-900  to-transparent' : 'from-typography-600 via-typography-700  to-typography-800'} ${className}`}>
      <motion.p
        initial="hidden"
        animate="visible"
        className='text-[14.55vw] uppercase'
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.9 } }
        }}
      >
        {text[0]}
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        className='text-[14.55vw] uppercase'
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 1.3 } }
        }}
        >
        {text[1]}
      </motion.p>
    </div>
  )
}
