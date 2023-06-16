import React from 'react'

//components
import SectionTitle from '../SectionTitle'
import BackgroundText from '../BackgroundText'

export default function ThisProject() {

  return (
    <div className='text-typography-white-100 overflow-hidden pt-20 bg-gradient-to-tr from-[#28272C] to-[#28272C] w-full min-h-screen max-h-fit relative items-center text-center justify-between  flex'>
      <BackgroundText white lines={['Repository', '& Figma']} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
      <article className='flex flex-col w-full h-full '>
        <SectionTitle title='Repository & Figma' emoji='🤯' />
        <section className='flex flex-col w-full h-full text-start text-lg px-28 gap-5'>
          <p>
            — 👨🏽‍💻 Here you can read the code of this project, I used Next + TailwindCSS + Framer Motion
          </p>
          <p>
            — 🎨 You can see how I designed this project on Figma
          </p>
        </section>
      </article>
      <section className='flex flex-col w-full h-full text-start text-lg px-28 gap-5 my-20'>
        <iframe
          width={'90%'}
          height="500px"
          className='z-[100]'
          allowfullscreen
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F30nOw1CBluMcsJv7JYdreo%2FPortifolio%3Ftype%3Ddesign%26node-id%3D222%253A31%26t%3DwuNspwRmeKj49x9Z-1"
        />
      </section>
    </div>
  )
}
