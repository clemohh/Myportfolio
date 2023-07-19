import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10  sm:flex flex  gap-5  xl:flex flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='border rounded-lg bg-gradient-brown-100 cursor-pointer w-[3em] h-fit  sm:w-[3em]  md:w-[5em]  xl:w-20 h-20' key={technology.name}>
          <img src={technology.icon}  />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
