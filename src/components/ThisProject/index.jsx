import React from 'react'

//components
import SectionTitle from '../SectionTitle'
import BackgroundText from '../BackgroundText'
import BrowserFrame from "react-browser-frame";
import GitHubRepository from '../GitHubRepository';

export default function ThisProject() {

  return (
    <div className='text-typography-white-100 overflow-hidden bg-gradient-to-tr from-[#28272C] to-[#28272C] w-full min-h-screen max-h-fit relative items-center text-center justify-between  flex'>
      <BackgroundText white lines={['Repository', '& Figma']} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
      <article className='flex flex-col w-full h-screen py-10 gap-5'>
        <SectionTitle title='Repository & Figma' emoji='🤯' />
        <section className='flex flex-col w-full text-start text-lg px-28 gap-5'>
          <p>
            — ⚡️ <span className="mx-1 font-medium text-xl">Next.js:</span> <br /> Building powerful web applications with Next.js.
          </p>
          <p>
            — 🌈<span className="mx-1 font-medium text-xl">Tailwind CSS:</span> <br /> Crafting beautiful and responsive designs with Tailwind CSS.
          </p>
          <p>
            — 💫 <span className="mx-1 font-medium text-xl">Framer Motion:</span> <br /> Adding delightful animations and interactions using Framer Motion.
          </p>
        </section>
        <section className='flex flex-col w-full text-start text-lg px-28 gap-5'>
          <p>
            — 🎨 <span className='mx-1 font-medium text-xl'>Figma Mastery: </span> <br /> Leveling up your design skills with Figma!
          </p>
          <p>
            — 🖌️ <span className='mx-1 font-medium text-xl'>UI/UX Magic: </span> <br /> Creating captivating interfaces and experiences with Figma.
          </p>
          <p>
            — 💡 <span className='mx-1 font-medium text-xl'>Design Thinking: </span> <br /> Unleashing creativity and problem-solving with Figma&apos;s design thinking approach.
          </p>
        </section>
      </article>
      <section className='z-[200] flex flex-col w-full h-full items-center justify-center text-lg px-28 gap-5 my-20'>
        <div className='flex flex-col w-full h-full items-center text-lg gap-5'>
          <h1 className='flex text-2xl text-center'>
            🎨 Check out the design on Figma!
          </h1>
          <BrowserFrame url="https://figma.com" >
            <iframe
              width={'100%'}
              className='z-[100] h-[39vh]'
              allowFullScreen
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F30nOw1CBluMcsJv7JYdreo%2FPortifolio%3Ftype%3Ddesign%26node-id%3D222%253A31%26t%3DwuNspwRmeKj49x9Z-1"
            />
          </BrowserFrame>
        </div>
        <div className='flex flex-col w-full h-full items-center text-lg gap-5'>
          <h1 className='flex text-2xl text-center'>
            🖥️ Check out the code on GitHub!
          </h1>
          <GitHubRepository />
        </div>
      </section>
    </div>
  )
}
