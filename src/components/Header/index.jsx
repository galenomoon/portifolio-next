import React from 'react'

//assets
import Image from 'next/image'
import galeno from '../../assets/galeno_img.png'

//components
import NavBar from '../NavBar'

//styles
import { FaReact } from 'react-icons/fa'
import { IoLogoFigma } from 'react-icons/io5'
import { BsGit, BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiRedux, SiNextdotjs, SiJavascript, SiTailwindcss } from 'react-icons/si'

export default function Header() {
  return (
    <div className='w-full h-screen relative text-center overflow-hidden flex flex-col'>
      <NavBar />
      <section className='absolute bottom-[28%] place-self-center'>
        <div className='flex flex-col items-center font-bold justify-center text-center text-typography-600 leading-[12vw]'>
          <p className='text-[16vw]'>
            FRONTEND
          </p>
          <p className='text-[14.55vw]'>
            DEVELOPER
          </p>
          <div className='flex text-typography-500 w-full items-center justify-between text-4xl'>
            <div className='flex items-center gap-2'>
              <FaReact />
              <SiRedux />
              <SiNextdotjs />
              <SiJavascript />
              <SiTailwindcss />
              <BsGit />
            </div>
            <div className='flex items-center gap-2 text-4xl'>
              <p className='font-normal text-2xl mx-2 leading-[1] self-end'>
                contact me:
              </p>
              <BsWhatsapp />
              <BsLinkedin />
              <BsGithub />
              <IoLogoFigma />
            </div>

          </div>
        </div>
      </section>
      <section className='w-full absolute bottom-10 px-16 flex'>
        <p className='text-start text-typography-300'>
          I'm currently focused in improve my <br /> knowledges, challeging myself and <br /> exploring the amazing technology world
        </p>
      </section>
      <Image src={galeno} className='absolute bottom-0 left-1/2 h-[45vw] object-contain transform -translate-x-1/2' />
    </div>
  )
}