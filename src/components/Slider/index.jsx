import React from "react";
import BackgroundText from "../BackgroundText";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { Carousel } from 'flowbite-react';


export default function Slider({ projects = [] }) {

  return (
    <Carousel
      indicators={false}
      className="w-full h-full mt-10"
      leftControl={<SlArrowLeft className="sm:text-3xl md:text-5xl text-typography-100" />}
      rightControl={<SlArrowRight className="sm:text-3xl md:text-5xl text-typography-100" />}
    >
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center h-full justify-center mb-4 z-20">
          <BackgroundText lines={[project?.title]} className='absolute' />
          <h2 className="font-semibold text-5xl uppercase">
            {project?.title}
          </h2>
          <p className="text-xl">
            {project?.description}
          </p>
          <div className="flex md:gap-10 sm:gap-4 items-center justify-center z-20 mt-6" >
            <img
              className="sm:w-[55vw] md:w-auto md:h-[40vh] object-contain"
              src={project?.desktop_image?.src}
            />
            <img
              className="sm:h-[16vh] md:w-auto md:h-[40vh] object-contain"
              src={project?.mobile_image?.src}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};
