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
      <div className="grid grid-cols-2 gap-4">
     
     <div className="p-6 border border-[#ffff] rounded-[12px] flex flex-col gap-1 row-span-2 col-span-1">
     <motion.div variants={textVariant()}>
      <p className={styles.sectionHeadText}>Hello, <br/> I'm Sayooj</p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        style={{color:"white"}}
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      </motion.div>
     </div>
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
     <div className="p-6 rounded-[12px] flex flex-col gap-1 row-span-2 col-span-1 bg-white">
      <Player
      src={"./rocket.json"}className="player" loop autoplay/>
     </div>
     <div className="px-6 rounded-[12px]  gap-16 row-span-1 col-span-1">
     {services.slice(3,4).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
     </div>
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");