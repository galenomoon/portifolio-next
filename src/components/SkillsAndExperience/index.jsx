import React from 'react'
import BackgroundText from '../BackgroundText'

export default function SkillsAndExperience() {
  return (
    <div className='bg-gradient-to-tr from-[#28272C] to-[#28272C] w-full h-screen max-h-screen relative items-center text-center justify-between overflow-hidden flex flex-col'>
      <BackgroundText
        white
        lines={['Skills &', 'Experience']}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      />
    </div>
  )
}
