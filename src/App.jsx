
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Hero,Navbar,Tech,Works,StarsCanvas,Bottom} from './components';
function App() {

  return (
    <BrowserRouter>
    <div className={`relative z-0 bg-color bg-no-repeat`}>
     <div className=''>
      <Navbar/>
       <Hero/>
      </div>
     <div>
     <About/>
     <Tech/>
     <Works/>
     </div>
     <div className=''> 
       <Contact/>
       <Bottom/>
     </div>
     
     <StarsCanvas/>
    </div>
    </BrowserRouter>
   )
}

export default App
