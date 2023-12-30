import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles'
import { AstroCanvas } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pt-14 sm-phone mb-12`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        <div className='w-full mt-24 sm-phone2'>
          <h1 className={`${styles.heroSubText} text-white`}>
            I'm a
          </h1>
          <p className={`${styles.heroHeadText} mt-2 text-white-100`}>
          <span className='text-[#ff4a3f]'>DEV</span>ELOPER<br className='sm:block hidden' />
            
          </p>
        </div>
        <div className='w-10/12 h-full relative sm-phone'>
        {/* <div className='absolute w-10 h-10 justify-center items-center' ></div> */}
        <AstroCanvas/>
        </div>
       
        </div>
        
       
     </section>
  )
}

export default Hero