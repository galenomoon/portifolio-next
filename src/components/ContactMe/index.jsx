import React from 'react'

//components
import SectionTitle from '../SectionTitle'
import AnimateInView from '../AnimateInView'
import BackgroundText from '../BackgroundText'

//styles
import { MdEmail } from 'react-icons/md'
import { SiGithub, SiLinkedin } from 'react-icons/si'

//context
import { ScrollContext } from '@/pages'

export default function ContactMe() {
  const { ref_contact } = React.useContext(ScrollContext)

  const contacts = [
    {
      icon: <MdEmail size={30} />,
      label: 'Email',
      value: 'galeno.dev@gmail.com'
    },
    {
      icon: <SiGithub size={30} />,
      label: 'Github',
      value: 'galenomoon'
    }
  ]

  return (
    <div ref={ref_contact} className='flex-col relative text-typography-white-100 overflow-hidden bg-gradient-to-tr from-[#28272C] to-[#28272C] w-full h-screen items-center text-center justify-between  flex'>
      <article className='flex flex-col w-full h-screen relative max-h-fit py-10 gap-5 z-10 mt-8'>
        <BackgroundText white lines={["let's discuss", 'your project']} className='absolute top-1/4 ' />
        <SectionTitle title="Let's Discuss Your Project" emoji='🤩' className={'sm:!w-full md:!w-[400px]'} />
        <div className="flex flex-col sm:w-full md:w-[50vw]">
          {contacts?.map((contact, index) =>
            <AnimateInView key={index} duration={`0.${4 + index}s`} className={'w-full'}>
              <div className='flex py-3 border-y-2 border-typography-white-300 mx-10'>
                <div className='w-[60px] px-16 flex items-center justify-center'>
                  <span className='text-lg font-light uppercase'>{contact.icon}</span>
                </div>
                <div className="flex flex-col text-start justify-center">
                  <p className="text-sm">
                    {contact.label}
                  </p>
                  <span className='text-typography-white-300 font-semibold text-md'>
                    {contact.value}
                  </span>
                </div>
              </div>
            </AnimateInView>
          )}
        </div>
      </article>
      <footer className='flex md:flex-row sm:flex-col-reverse md:gap-0 sm:gap-5 items-center text-center p-10 justify-between border-t-[2px] border-typography-white-400 w-[90vw] mb-1'>
        <p className='w-full flex items-center sm:justify-center md:justify-start'>
          © 2023 All Right Reserved
        </p>
        <p className='w-full flex items-center justify-center'>
          Designed by <a href="https://www.linkedin.com/in/guilherme-galeno-sena/">Guilherme Galeno</a>
        </p>
        <p className='flex gap-3 sm:justify-center md:justify-end items-center w-full'>
          <a href="https://www.linkedin.com/in/guilherme-galeno-sena/">
            <SiLinkedin size={30} />
          </a>
          <a href="https://www.github.com/galenomoon">
            <SiGithub size={30} />
          </a>
        </p>
      </footer>
    </div>
  )
}
