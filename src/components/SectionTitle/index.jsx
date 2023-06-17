import React, { useRef } from 'react'
import { useInView } from "framer-motion";

export default function SectionTitle({ title, emoji, dark }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const color = dark ? 'from-[#28272C] to-[#28272C]' : 'from-[#A193B9] via-[#8A9EC0] to-[#709F9E]'

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
      }}
      className='flex gap-4 place-items-baseline mx-10 relative font-semibold mb-10'
    >
      <figure className={`sm:w-[40px] md:w-[60px] sm:h-[40px] md:h-[60px] sm:text-xl md:text-3xl flex-shrink-0 -translate-y-4 rounded-2xl bg-gradient-to-br ${color} flex justify-center items-center`}>
        {emoji}
      </figure>
      <h1
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}
        className='flex flex-wrap w-[400px] sm:text-5xl md:text-7xl text-start'>
        {title}
      </h1>
      <div className='w-[10vw] h-[5px] rounded bg-[#6A5BAA] absolute -bottom-6 -left-10' />
    </div>
  )
}
