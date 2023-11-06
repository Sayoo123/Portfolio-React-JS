import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles'
import { AstroCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div
        className={`absolute inset-0 top-[120px]  max-w-8xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pt-14 sm-phone`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='w-10/12'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sayooj</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Mobile apps, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
        <div className='w-full h-full relative sm-phone'>
        <AstroCanvas/>
        </div>
        </div>
        
       
     </section>
  )
}

export default Hero