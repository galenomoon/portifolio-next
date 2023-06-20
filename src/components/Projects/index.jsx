import React from 'react'

//components
import Slider from '../Slider';
import SectionTitle from '../SectionTitle'

//assets
import lifecell_desktop from '../../assets/projects/lifecell/desktop.png'
import lifecell_mobile from '../../assets/projects/lifecell/mobile.png'
import obraminha_desktop from '../../assets/projects/obraminha/desktop.png'
import obraminha_mobile from '../../assets/projects/obraminha/mobile.png'

export default function Projects() {

  const projects = [
    {
      title: 'Obraminha',
      description: 'The project boasts a user base exceeding 500, demonstrating its popularity and impact.',
      desktop_image: obraminha_desktop,
      mobile_image: obraminha_mobile
    },
    {
      title: 'Life Cell',
      description: 'Developed a captivating Landing Page to promote and sell a Smartphone Repair Course.',
      desktop_image: lifecell_desktop,
      mobile_image: lifecell_mobile
    },
  ]

  return (
    <div className='sm:flex-col sm:overflow-hidden md:flex-row text-typography-100 bg-background-main w-full min-h-screen max-h-fit relative items-center text-center justify-center  flex'>
      <article className='flex flex-col w-full h-screen py-10 gap-5 z-10'>
        <div className='absolute'>
          <SectionTitle title='Latest Projects' emoji='🤯' className='absolute' />
        </div>
        <section className='z-[200] flex flex-col w-full h-full items-center justify-center text-lg md:px-28 sm:px-10 gap-5'>
          <Slider projects={projects} />
        </section>
      </article>
    </div >
  )
}