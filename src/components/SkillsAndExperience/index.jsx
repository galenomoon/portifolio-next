import React from 'react'

//components
import SectionTitle from '../SectionTitle'
import AnimateInView from '../AnimateInView'
import BackgroundText from '../BackgroundText'

//icons
import { FaLightbulb } from 'react-icons/fa'
import { IoMdColorPalette, IoMdThumbsUp } from 'react-icons/io'
import { IoExtensionPuzzleSharp, IoPeopleCircle, IoSearch } from 'react-icons/io5'

export default function SkillsAndExperience() {

  const skills = [
    {
      label: "Artistic vision",
      Icon: () => <IoMdColorPalette size={30} />
    },
    {
      label: "Creativity",
      Icon: () => <FaLightbulb size={27} />
    },
    {
      label: "Leadership",
      Icon: () => <IoPeopleCircle size={35} />
    },
    {
      label: "Lorem ipsum",
      Icon: () => <IoSearch size={26} />
    },
    {
      label: 'Good Practices',
      Icon: () => <IoMdThumbsUp size={30} />
    },
    {
      label: "Problem solving",
      Icon: () => <IoExtensionPuzzleSharp size={26} />
    },
  ]

  const experiences = [
    {
      title: 'IM | Mix Institute',
      subtitle: 'Smartphone software repair teacher',
      period: '2021',
    },
    {
      title: 'System Developer - Technical Course',
      subtitle: 'Full Stack Developer - Etec Drª Ruth Cardoso, São Vicente - SP',
      period: '2022',
    },
    {
      title: 'Clear Cloud Software',
      subtitle: 'Front-end Developer, Team Leader and UI/UX Designer',
      period: 'now'
    }
  ]

  return (
    <div className='md:flex-row sm:flex-col text-typography-white-100 overflow-hidden pt-20 bg-gradient-to-tr from-[#28272C] to-[#28272C] w-full min-h-screen max-h-fit relative items-center text-center justify-between  flex'>
      <BackgroundText white lines={['Skills &', 'Experience']} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
      <article className='flex flex-col w-full h-full z-10'>
        <SectionTitle title='Skills & Experience' emoji='👨🏽‍💻' />
        <section className='flex flex-col w-full h-full text-start text-lg sm:px-12 md:px-28 gap-5'>
          <AnimateInView>
            <p>
              — 🦋 A creative developer, my passion is solve <br /> problems and improve my self every day.
            </p>
          </AnimateInView>
          <AnimateInView duration={'0.6s'}>
            <p>
              — 🎨 Artistic vision and the creativity are ones <br /> of my best qualities.
            </p>
          </AnimateInView>
        </section>
        <section className='flex flex-col w-full h-full text-start text-lg sm:px-12 md:px-28 gap-5 my-20'>
          <AnimateInView direction='Y' inverse>
            <h2 className="text-5xl font-semibold">
              Skills
            </h2>
          </AnimateInView>
          <article className='grid md:grid-cols-3 sm:grid-cols-2 gap-3 w-fit'>
            {skills?.map(({ label, Icon }, index) =>
              <AnimateInView direction='Y' duration={`0.${4 + index}s`} className={'w-auto'}>
                <div key={index} className='flex sm:items-center md:items-start flex-col sm:w-full md:w-fit justify-center gap-2'>
                  <div className='text-typography-100 flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-br from-[#A193B9] via-[#8A9EC0] to-[#709F9E] rounded-full'>
                    {Icon ? Icon() : null}
                  </div>
                  <span className='text-md'>{label}</span>
                </div>
              </AnimateInView>
            )}
          </article>
        </section>
      </article>
      <article className='flex flex-col jusify-between w-full h-fit relative'>
        <div className="justify-around flex flex-col h-fit ">
          <AnimateInView direction='Y' inverse className={'self-center'}>
            <h2 className="text-5xl font-semibold mb-10">
              Experience
            </h2>
          </AnimateInView>
          {experiences?.map((experience, index) =>
            <AnimateInView duration={`0.${4 + index}s`} className={'w-full'}>
              <div key={index} className='flex py-3 border-y-2 border-typography-white-300 mx-10'>
                <div className='w-[60px] px-16 flex items-center justify-center'>
                  <span className='text-lg font-light uppercase'>{experience.period}</span>
                </div>
                <div className="flex flex-col text-start justify-center">
                  <p className="text-xl font-semibold">
                    {experience.title}
                  </p>
                  <span className='text-typography-white-300 text-md'>
                    {experience.subtitle}
                  </span>
                </div>
              </div>
            </AnimateInView>
          )}
        </div>
      </article>
    </div>
  )
}
