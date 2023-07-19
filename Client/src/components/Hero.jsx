import React from 'react'
import {styles} from "../styles"
import { SectionWrapper } from '../hoc'


const Hero = () => {
  return (
  <section id="home" className='relative mt-5 w-full mx-auto  sm:h-screen xl:h-screen'>
    <div className={`${styles.paddingX} inset-0 top-[90px]
    max-w-7xl flex flex-row items-start gap-5 xs:relative  sm:relative  top-[80px] xl:absolute`}>
      <div className='flex flex-col justify-center items-center mt-2'>
      <div className='w-5 h-5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 '/>
        <div className='w-1 violet-gradient h-40 xl:h-80 sm:h-40 '/>
      </div>

      <div>
        <h1 className={`${styles.heroHeadText}
        `}
        style={{
          textDecorationColor:"black",
        }}>Hi, I'm <span 
        className='text-[#915eff]'>Clement</span></h1>
        <p className={`${styles.heroSubText}
        text-white-100`}>
          I develop User Interface, <br className='sm:block hidden'/>Web Developments
        </p>
      </div>
   </div>
  </section>
  
  )
}

export default SectionWrapper(Hero, 'hero')