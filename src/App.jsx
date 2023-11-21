import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components';
function App() {

  return (
   <BrowserRouter>
   <div className={`relative z-0`}>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
     <Navbar/>
      <Hero/>
    </div>
    <div style={{backgroundColor: "#121212"}}>
    <About/>
    <Tech/>
    <Works/>
    <Feedbacks/>
    </div>
    <div className='relative z-0'>
      <Contact/>
      <StarsCanvas/>
    </div>
   </div>
   </BrowserRouter>
  )
}

export default App
