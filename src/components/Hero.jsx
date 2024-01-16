import React from 'react'
import {styles} from '../styles'
import { AstroCanvas } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-41%]  h-full w-full left-0 z-[-10] object-contain sm-phone6"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pt-14 sm-phone mb-12`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        <div className='w-full mt-24 sm-phone2'>
          <h1 className={`${styles.heroSubText} text-white`}>
           Hi, I'm a
          </h1>
          <p className={`${styles.heroHeadText} mt-2 text-white-100`}>
          <span className='text-purple-600'>DEV</span>ELOPER<br className='sm:block hidden' />
          </p>
          <button className="Btn mt-4" onClick={()=>window.location.href='https://www.overleaf.com/read/kymgdhvzfqyg#a6ccd7'}>
            <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
            <span className="icon2"></span>
            <span className="tooltip">View CV</span>
          </button>
        </div>
        <div className='h-full w-3/5 relative sm-phone3'>
        {/* <div className='absolute w-10 h-10 justify-center items-center' ></div> */}
        <AstroCanvas/>
        </div>
       
        </div>
        
       
     </section>
  )
}

export default Hero