
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components';
function App() {

  return (
   <BrowserRouter>
   <div className={`relative z-0 bg-color-hero`}>
    <div className=''>
     <Navbar/>
      <Hero/>
      <StarsCanvas/>
    </div>
    <div>
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
