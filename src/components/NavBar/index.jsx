import React from 'react'
import { motion } from "framer-motion"
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoLogoFigma } from 'react-icons/io5';

export default function NavBar() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className='w-full sm:flex absolute md:hidden justify-between px-4 h-[90px] items-center  text-typography-400'
      >
        <motion.p variants={item} className='text-start text-xl'>
          Guilherme Galeno
        </motion.p>
        <motion.div className='flex items-center justify-center gap-4 text-4xl'>
          {[BsLinkedin, BsGithub].map((Icon, index) =>
            <motion.div key={index} variants={item}>
              <Icon key={index} />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className='w-full sm:hidden md:flex justify-between py-10 px-16 h-[120px] text-typography-300'
      >
        <div className='flex w-full justify-between'>
          <motion.p variants={item} className='text-start'>
            Guilherme Galeno
          </motion.p>
          <motion.p variants={item} className='text-start'>
            São Paulo,<br />
            Brazil
          </motion.p>
          <motion.p variants={item} className='text-start'>
            Currently Web Developer <br />
            in Clear Cloud Software
          </motion.p>
        </div>
        <div className='flex w-[70%] justify-end gap-10' >
          <motion.p variants={item} className='text-start'>
            About
          </motion.p>
          <motion.p variants={item} className='text-start'>
            Skills
          </motion.p>
          <motion.p variants={item} className='text-start'>
            Portifólio
          </motion.p>
        </div>
      </motion.div>
    </>
  )
}
