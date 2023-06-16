import React from 'react'

export default function SectionTitle({ title, emoji, dark }) {

  const color = dark ? 'from-[#28272C] to-[#28272C]' : 'from-[#A193B9] via-[#8A9EC0] to-[#709F9E]'
  
  return (
    <div className='flex gap-4 place-items-baseline mx-10 relative font-semibold mb-10'>
      <figure className={`w-[60px] h-[60px] -translate-y-4 rounded-2xl bg-gradient-to-br ${color} text-3xl flex justify-center items-center`}>
        {emoji}
      </figure>
      <h1 className='flex flex-wrap w-[400px] text-7xl text-start'>
        {title}
      </h1>
      <div className='w-[10vw] h-[5px] rounded bg-[#6A5BAA] absolute -bottom-6 -left-10'/>
    </div>
  )
}
