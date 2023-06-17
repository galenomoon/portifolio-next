import React from 'react'
import { motion } from 'framer-motion'
import AnimateInView from '../AnimateInView'

export default function BackgroundText({ children, className, lines, white }) {
  const text = children?.split(" ") || lines

  return (
    <AnimateInView direction='Y' inverse className={`z-0 w-auto items-center select-none justify-center font-bold self-center leading-[12vw] inline-block bg-clip-text text-transparent bg-gradient-to-b ${white ? 'from-typography-white-800/5 via-typography-white-900  to-transparent' : 'from-typography-600 via-typography-700  to-typography-800'} ${className}`}>
      <motion.p className='text-[14.55vw] uppercase z-0'>
        {text[0]}
      </motion.p>
      <motion.p className='text-[14.55vw] uppercase z-0'>
        {text[1]}
      </motion.p>
    </AnimateInView>
  )
}
