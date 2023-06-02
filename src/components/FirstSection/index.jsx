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

export default function FirstSection() {
  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const stacks = [
    {
      Icon: FaReact,
      style: 'md:hover:text-[#61DBFB]',
      href: 'https://reactjs.org/',
    },
    {
      Icon: SiRedux,
      style: 'md:hover:text-[#764ABC]',
      href: 'https://redux.js.org/',
    },
    {
      Icon: SiNextdotjs,
      style: 'md:hover:text-[#000000]',
      href: 'https://nextjs.org/',
    },
    {
      Icon: SiJavascript,
      style: 'md:hover:text-[#F7DF1E]',
      href: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    },
    {
      Icon: SiTypescript,
      style: 'md:hover:text-[#007ACC]',
      href: 'https://www.typescriptlang.org/',
    },
    {
      Icon: SiRuby,
      style: 'md:hover:text-[#CC342D]',
      href: 'https://www.ruby-lang.org/pt/',
    },
    {
      Icon: BsGit,
      style: 'md:hover:text-[#F05032]',
      href: 'https://git-scm.com/',
    },
    {
      Icon: SiTailwindcss,
      style: 'md:hover:text-[#38B2AC]',
      href: 'https://tailwindcss.com/',
    },
  ]


  return (
    <div className='w-full h-screen relative text-center overflow-hidden flex flex-col'>
      <NavBar />
      <section className='sm:mt-[12vh] md:m-0'>
        <div className='flex flex-col select-none items-center font-bold justify-center text-center text-typography-600 leading-[12vw]'>
          <motion.p
            initial="hidden"
            animate="visible"
            className='text-[14.55vw]'
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.9 } }
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
              visible: { opacity: 1, transition: { delay: 1.3 } }
            }}
          >
            DEVELOPER
          </motion.p>
          <div className='w-[90vw] flex text-typography-500 items-center justify-between sm:text-xl md:text-4xl'>
            <motion.div
              initial="hidden"
              animate="visible"
              className='flex sm:justify-around md:w-auto sm:w-full md:m-0 sm:my-1 items-center gap-2'
              variants={container}
            >
              {stacks.map(({ Icon, style, href }, index) =>
                <motion.a key={index} variants={item} href={href} target='_blank' rel={"norrefer"}>
                  <Icon key={index} className={`${style} duration-200 hover:drop-shadow-xl`} />
                </motion.a>
              )}
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className='flex items-baseline gap-2 sm:hidden md:flex'
            >
              <motion.p variants={item} className='font-normal  md:text-3xl mx-2 leading-[1] self-end'>
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
      <motion.section
        className='w-full absolute sm:top-[265px] md:top-auto md:bottom-10 md:px-16 sm:text-xl'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 2 } }
        }}
      >
        <p className='md:text-start sm:text-center text-typography-300'>
          I&apos;m currently focused in improve my <br className='md:block sm:hidden' />
          knowledges, challeging myself and <br className='md:block sm:hidden' />
          exploring the amazing technology world
        </p>
      </motion.section>
      <motion.div
        initial="hidden"
        animate="visible"
        className='absolute sm:w-[90%] md:w-[34%] bottom-0 self-center'
        variants={{
          hidden: { y: 120, opacity: 0 },
          visible: { y: 35, opacity: 1, transition: { delay: 1.5 } }
        }}
      >
        <Image src={galeno} className='object-contain' />
      </motion.div>
    </div >
  )
}