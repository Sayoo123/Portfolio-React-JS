
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { SectionWrapper } from '../hoc';
import {styles} from '../styles'
// import backend from'../assets/youngman.png'
// import { head } from '../constants';
import { youngman } from '../assets';

const Works = () => {
  const slides = [
    {
     heading:'STUACADEMICS',
     content: 'A complete student academic\'s Trackeing App developed in Android Studio. Modules implemented so far include a Geofenced Qr Code Attendance System. Which uses FusedLocation API to gather location of the user and to mark the attendence.',
     frontend:'XML',
     backend:'Java',
     database:'Firebase',
     image:youngman,
    },
    {
      heading:'Stock Market Prediction Web-App',
      content: 'A Supervised Machine-Learning web-app developed using flask framework of python. Within the User module an prediction page is placed which predicts the upcoming trend of the market using RandomForest and SVM machine learning algorithms.',
      frontend:'HTML,BOOTSTRAP',
      backend:'Python&Flask',
      database:'MYSQL',
    },
    {
      heading:'EdCrypt',
     content: 'Cross-Platform Comatible Mobile-App developed using react-native. which implements the traditional encryption algorithms of playfair and caesar cipher. Every step of the Encryption process is followed.',
     frontend:'React-Native',
     backend:'Javascript',
      database:'Not Required',
    },

    {
      heading:'Contact Card',
     content: 'A small card layout of personal info for contacting , containing DataBase to store details of who wish to contact',
     frontend:'Html&Bootstrap',
     backend:'Django',
     database:'MYSQL'
    },
    {
      heading:'Employee-CRUD',
     content: 'A Bootstrap page conatining four buttons to Implement CRUD operations using STRUTS and Hibernate. Studied how to connect b/w Struts and Hibernate and about HQL.',
     frontend:'Struts',
     backend:'Hibernate',
     database:'MYSQL'
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
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group '>
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        style={{backgroundColor:'orange'}}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 flex flex-col'
      >
          <div className='flex justify-center py-2 bottom-0'>
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
          <div className={`${currentIndex===1?'mt-0':'mt-16'} flex flex-row`}>
            <div className='w-6/12 ml-5 mt-10'>
              <p className={`${styles.sectionHeadText}`}>{slides[currentIndex].heading}</p>
              <p className={`text-secondary text-[17px] max-w-3xl leading-[30px] text-white`}>{slides[currentIndex].content}<br/><strong>Frontend :{slides[currentIndex].frontend}</strong><br/><strong>Backend :{slides[currentIndex].backend}</strong><br/><strong>Database :{slides[currentIndex].database}</strong></p>
            </div>
            <div className='w-6/12 mr-5 justify-center flex items-center'>
              <img src={slides[currentIndex].image} className='max-h-96'/>
            </div>
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
      
    </div>
  );
}

export default SectionWrapper(Works,"Works")