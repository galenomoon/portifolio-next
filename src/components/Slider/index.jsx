import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import BackgroundText from "../BackgroundText";

const variants = {
  center: { zIndex: 1, x: 0, opacity: 1 },
  enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
};

export default function Slider({ projects = [] }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = page % projects.length;
  const paginate = (newDirection) => setPage([page + newDirection, newDirection]);

  return (
    <div className="w-full h-full flex flex-1 items-center justify-center z-20">
      <button className="p-2 text-4xl text-typography-100 z-30" onClick={() => paginate(1)}>
        <SlArrowLeft />
      </button>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          key={page}
          exit="exit"
          initial="enter"
          dragElastic={1}
          animate="center"
          custom={direction}
          variants={variants}
          dragConstraints={{ left: 0, right: 0 }}
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="flex flex-col items-center justify-center"
        >
          <BackgroundText lines={[projects?.[imageIndex]?.title]} className='absolute' />
          <motion.div className="flex flex-col items-center justify-center mb-4 z-20">
            <AnimatePresence initial={false} custom={direction}>
              <h2 className="font-semibold text-5xl uppercase">
                {projects?.[imageIndex]?.title}
              </h2>
              <p className="text-xl">
                {projects?.[imageIndex]?.description}
              </p>
            </AnimatePresence>
          </motion.div>
          <motion.div className="w-full h-full flex gap-10 items-center justify-center z-20" >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                className="w-[65%] object-contain"
                src={projects?.[imageIndex]?.desktop_image?.src}
              />
              <motion.img
                className="h-[65%] object-contain"
                src={projects?.[imageIndex]?.mobile_image?.src}
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      <button className="p-2 text-4xl text-typography-100 z-30" onClick={() => paginate(-1)}>
        <SlArrowRight />
      </button>
    </div>
  );
};
