import React from 'react'

export default function NavBar() {
  return (
    <div className='w-full flex justify-between py-10 px-16 h-[120px] text-typography-300'>
      <div className='flex w-full justify-between'>
        <p className='text-start'>
          Guilherme Galeno
        </p>
        <p className='text-start'>
          São Paulo,<br />
          Brazil
        </p>
        <p className='text-start'>
          Currently Web Developer <br />
          in Clear Cloud Software
        </p>
      </div>
      <div className='flex w-[70%] justify-end gap-10'>
        <p className='text-start'>
          About
        </p>
        <p className='text-start'>
          Skills
        </p>
        <p className='text-start'>
          Portifólio
        </p>
      </div>
    </div>
  )
}
