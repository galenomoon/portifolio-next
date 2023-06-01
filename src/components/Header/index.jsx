import React from 'react'

//assets
import Image from 'next/image'
import galeno from '../../assets/galeno_img.png'

//components
import NavBar from '../NavBar'

//styles
import { motion } from "framer-motion"
import { FaReact } from 'react-icons/fa'
import { IoLogoFigma } from 'react-icons/io5'
import { BsGit, BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiRedux, SiNextdotjs, SiJavascript, SiTailwindcss, SiTypescript, SiRuby } from 'react-icons/si'

export default function Header() {
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
    <div className='w-full h-screen relative text-center overflow-hidden flex flex-col'>
      <NavBar />
      <section className=''>
        <div className='flex flex-col  select-none items-center font-bold justify-center text-center text-typography-600 leading-[12vw]'>
          <motion.p
            initial="hidden"
            animate="visible"
            className='text-[14.55vw]'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.9 }
              }
            }}
          >
            FULLSTACK
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            className='text-[14.55vw]'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 1.3 }
              }
            }}
          >
            DEVELOPER
          </motion.p>
          <div className='w-[90vw] flex text-typography-500 items-center justify-between text-4xl'>
            <motion.div
              initial="hidden"
              animate="visible"
              className='flex items-center gap-2'
              variants={container}
            >
              {[FaReact, SiRedux, SiTypescript, SiNextdotjs, SiJavascript, SiRuby, SiTailwindcss, BsGit].map((Icon, index) =>
                <motion.div key={index} variants={item}>
                  <Icon key={index} />
                </motion.div>
              )}
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className='flex items-center gap-2 text-4xl'
            >
              <motion.p variants={item} className='font-normal text-2xl mx-2 leading-[1] self-end'>
                see more:
              </motion.p>
              {[BsLinkedin, BsGithub, IoLogoFigma].map((Icon, index) =>
                <motion.div key={index} variants={item}>
                  <Icon key={index} />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <section className='w-full absolute bottom-10 px-16 flex'>
        <p className='text-start text-typography-300'>
          I&apos;m currently focused in improve my <br /> knowledges, challeging myself and <br /> exploring the amazing technology world
        </p>
      </section>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { y: 120, opacity: 0 },
          visible: {
            y: 35,
            opacity: 1,
            transition: { delay: 1.5 }
          }
        }}
        className='absolute w-[34%] bottom-0 self-center'
      >
        <Image src={galeno} className='object-contain' />
      </motion.div>
    </div >
  )
}