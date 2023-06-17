import React from 'react'

//components
import SectionTitle from '../SectionTitle'
import BackgroundText from '../BackgroundText'
import BrowserFrame from "react-browser-frame";
import GitHubRepository from '../GitHubRepository';

export default function ThisProject() {

  return (
    <div className='sm:flex-col sm:overflow-hidden md:flex-row text-typography-white-100  bg-gradient-to-tr from-[#28272C] to-[#28272C] w-full min-h-screen max-h-fit relative items-center text-center justify-between  flex'>
      <BackgroundText white lines={['Repository', '& Figma']} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
      <article className='flex flex-col w-full h-fit py-10 gap-5 z-10'>
        <SectionTitle title='Repository & Figma' emoji='🤯' />
        <section className='flex flex-col w-full text-start text-lg md:px-28 sm:px-10 gap-5'>
          <p>
            — ⚡️ <span className="mx-1 font-medium text-xl">Development</span> <br />
            For this project, I utilized an extensive tech stack including React, Next.js, TailwindCSS, and Framer Motion, among others. By leveraging these powerful tools, I was able to deliver a high-quality and dynamic web application.
          </p>
          <p>
            — 🎨 <span className='mx-1 font-medium text-xl'>Design and Prototyping with Figma: </span> <br />
            I employed Figma, a leading design and prototyping tool, to create an intuitive and visually appealing interface. By utilizing Figma, I ensured that the design was meticulously crafted and optimized for user experience. Feel free to explore the embedded Figma prototype below!
          </p>
          <p>
            — 👨🏽‍💻 <span className='mx-1 font-medium text-xl'>Repository: </span> <br />
            To further demonstrate my proficiency, I have also provided a repository where you can delve into the codebase and explore the intricacies of the project's implementation. The repository showcases my disciplined approach to version control and collaborative development.
          </p>
          <p>
          By highlighting these aspects of my portfolio, I aim to showcase my skills in both development and design, providing a comprehensive overview of my capabilities as a web developer
          </p>
        </section>
      </article>
      <section className='z-[200] flex flex-col w-full h-full items-center justify-center text-lg md:px-28 sm:px-10 gap-5 my-20'>
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