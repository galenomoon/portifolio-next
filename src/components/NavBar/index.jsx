import React from 'react'

//styles
import { motion } from "framer-motion"
import { IoClose, IoLogoFigma } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };


  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className='w-full sm:flex fixed z-[100] md:hidden justify-between px-4 h-[90px] items-center  text-typography-400'
      >
        <motion.button
          whileTap={{ scale: .8 }}
          onClick={() => setIsOpen(!isOpen)}
          className='text-2xl p-3 text-typography-100 bg-white flex items-center justify-center rounded-full z-[101]'
        >
          {isOpen ? <IoClose size={40} /> : <GiHamburgerMenu />}
        </motion.button>
        <motion.p variants={item} className='text-start text-xl'>
          Guilherme Galeno
        </motion.p>
        <motion.article
          className='flex flex-col items-center top-0 left-0 fixed bg-white justify-center gap-4 text-4xl z-[100] overflow-hidden'
          initial={{ width: '0px', height: '0px', top: '30px', left: '30px', position: 'absolute' }}
          animate={{
            width: isOpen ? '100dvw' : '0px',
            height: isOpen ? '100dvh' : '0px',
            top: isOpen ? '0px' : '30px',
            left: isOpen ? '0px' : '30px',
            borderRadius: isOpen ? '0px' : '25%',
          }}
        >
          {isOpen &&
            <>
              <motion.div variants={container} className='flex flex-col items-center justify-center gap-7'>
                <motion.p variants={item} className='text-start'>
                  About
                </motion.p>
                <motion.p variants={item} className='text-start'>
                  Skills
                </motion.p>
                <motion.p variants={item} className='text-start'>
                  Portifólio
                </motion.p>
              </motion.div>
              <motion.div variants={container} className='flex w-full h-fit absolute bottom-0 text-white bg-typography-100 items-center justify-between py-8 px-4'>
                <motion.p variants={item} className='text-md'>
                  Let&apos;s talk!
                </motion.p>
                <motion.div variants={container} className='flex items-center gap-2'>
                  {[BsLinkedin, BsGithub, IoLogoFigma].map((Icon, index) =>
                    <motion.div key={index} variants={item}>
                      <Icon key={index} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </>
          }
        </motion.article>
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
