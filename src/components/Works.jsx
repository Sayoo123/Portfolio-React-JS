
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant,zoomIn } from "../utils/motion";
import {styles} from '../styles'
import { youngman,coin,padlock,phone,man } from '../assets';
import { motion } from "framer-motion";

const Works = () => {
 
  const slides = [
    {
     heading:'STUACADEMICS',
     content: 'A complete student academic\'s Trackeing App developed in Android Studio. Modules implemented so far include a Geofenced Qr Code Attendance System. Which uses FusedLocation API to gather location of the user and to mark the attendence.',
     frontend:'XML',
     backend:'Java',
     database:'Firebase',
     image:youngman,
     color:'stu',
     link:'https://github.com/Sayoo123/Stuacademics'
    },
    {
      heading:'Stock Market Prediction Web-App',
      content: 'A Supervised Machine-Learning web-app developed using flask framework of python. Within the User module an prediction page is placed which predicts the upcoming trend of the market using RandomForest and SVM machine learning algorithms.',
      frontend:'HTML,BOOTSTRAP',
      backend:'Python&Flask',
      database:'MYSQL',
      image:coin,
      color:'sto',
      link:'https://github.com/Sayoo123/stock_market_prediction'
    },
    {
      heading:'EdCrypt',
     content: 'Cross-Platform Comatible Mobile-App developed using react-native. which implements the traditional encryption algorithms of playfair and caesar cipher. Every step of the Encryption process is followed.',
     frontend:'React-Native',
     backend:'Javascript',
      database:'Not Required',
      image:padlock,
      color:'pad',
      link:'https://github.com/Sayoo123/EDCRYPT'
    },

    {
      heading:'Contact Card',
     content: 'A small card layout of personal info for contacting , containing DataBase to store details of who wish to contact',
     frontend:'Html&Bootstrap',
     backend:'Django',
     database:'MYSQL',
     image:phone,
      color:'pho',
      link:'https://github.com/Sayoo123/django_about'
    },
    {
      heading:'Employee-CRUD',
     content: 'A Bootstrap page conatining four buttons to Implement CRUD operations using STRUTS and Hibernate. Studied how to connect b/w Struts and Hibernate and about HQL.',
     frontend:'Struts',
     backend:'Hibernate',
     database:'MYSQL',
     image:man,
     color:'man',
     link:'https://github.com/Sayoo123/Structs_Hibernate_Employee_CRED-'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const urrl =(link)=>{
    window.location.href =link ;
  };
  return (
    <motion.div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group ' variants={textVariant()}>
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        style={{}}
        className={`w-full h-full rounded-2xl bg-center bg-cover duration-500 flex flex-col new-gradient ${slides[currentIndex].color}`}
      >
         
          <div className={`${currentIndex===1?'mt-0':'mt-16'} flex flex-row`}>
            <div className='w-6/12 ml-5 mt-10'>
              <motion.p variants={fadeIn("", "", 0.1, 1)}className={`${styles.sectionHeadText}`}>{slides[currentIndex].heading}</motion.p>
              <motion.p variants={fadeIn("", "", 0.1, 1)} className={`text-secondary text-[17px] max-w-3xl leading-[30px] text-white`}>{slides[currentIndex].content}<br/><strong>Frontend :{slides[currentIndex].frontend}</strong><br/><strong>Backend :{slides[currentIndex].backend}</strong><br/><strong>Database :{slides[currentIndex].database}</strong></motion.p>
              <button className="btn mt-4" onClick={()=>urrl(slides[currentIndex].link)}>
                <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                </svg>
              </button>
            </div>
            <motion.div className='w-6/12 mr-5 justify-center flex items-center' variants={textVariant()}>
              <img src={slides[currentIndex].image} className='max-h-96'/>
            </motion.div>
            
          </div>
          <div className={`flex justify-center py-2 absolute bottom-0 self-center `}>
              {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled className='text-white'/>
              </div>
              ))}
          </div>

      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      
    </motion.div>
  );
}

export default SectionWrapper(Works,"Works")