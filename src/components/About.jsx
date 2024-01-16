import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Player } from '@lottiefiles/react-lottie-player';
let x=0;
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full'>
    <motion.div
      variants={title=='Web-App Developer'||title=='Mobile App Developer'?fadeIn("left", "spring", x+=index * 0.1, x+=0.35):fadeIn("right", "spring", x+=index * 0.1, x+=0.35)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card lightup'
    >
      <div
        options={{
          max: 45,
          scale: 0.5,
          speed: 250,
        }}
        className='rounded-[20px] py-5 px-12 min-h-[210px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm-phone4">
     
     <motion.div className="p-6 border border-[#9333ea] rounded-[12px] flex flex-col gap-1 row-span-2 col-span-1" variants={textVariant()}>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionHeadText}>Hello, <br/> I'm Say<span className="text-purple-600">ooj</span></p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        style={{color:"white"}}
      >
        I'm a skilled software developer with experience in Java and
        JavaScript, and expertise in frameworks like React, Django, and
        Three.js. Whether you're looking to collaborate on exciting projects, 
        seeking a dedicated developer 
        I'm here! Explore my portfolio, dive into my projects,
         and let's embark on a journey of digital excellence together.
      </motion.p>
      </motion.div>
     </motion.div>
     <div className="px-6 pb-1 gap-16 row-span-1 col-span-1">
     {services.slice(0,1).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
     </div>
     <div className="px-6  rounded-[12px]  gap-16 row-span-1 col-span-1">
       {services.slice(1,2).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
     </div>
     <div className="px-6 py-1 rounded-[12px]  gap-16 row-span-1 col-span-1">
     {services.slice(2,3).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
     </div>
     <div className="p-6 rounded-[12px] flex flex-col gap-1 row-span-2 col-span-1 border border-[#ffff] items-center justify-center">
      <Player
      src={"./rocket.json"}className="player" loop autoplay style={{height:'300px',width:'300px'}}></Player>
     </div>
     <div className="px-6 rounded-[12px]  gap-16 row-span-1 col-span-1 ">
     {services.slice(3,4).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
     </div>
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");