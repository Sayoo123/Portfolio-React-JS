import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { styles } from '../styles';
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets';
const Navbar = () => {
  const [Active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
   <nav className={`${styles.paddingX} px-10 w-full flex items-center py-5 fixed top-0 z-20`} >
      <div className='w-full flex justify-between items-center ma-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2'
        onClick={()=>{  
          setActive("");
        window.scrollTo(0,0)
        }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link)=>(
            <li
              key={Link.id}
              className={`${
                Active === Link.title 
                ? "text-white"
                : "text-slate-400"

              } hover:text-white text-[18px] font-medium`}
              onClick={()=>setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
              <img src={toggle ? close : menu}
              alt="menu"
              className='w-[28px] h-[28px] object-contain'
              onClick={()=>setToggle(!toggle)}/>
              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl black-gradient`}>
                  <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                    {navLinks.map((Link)=>(
                      <li
                        key={Link.id}
                        className={`${
                          Active === Link.title 
                          ? "text-white"
                          : "text-slate-400"

                        }  font-medium text-[14px] cursor-pointer`}
                        onClick={()=>{
                          setToggle(!toggle)
                          setActive(Link.title)}}
                      >
                        <a href={`#${Link.id}`}>{Link.title}</a>
                      </li>
                    ))}
                  </ul>
              </div>
         </div>
      </div>
    </nav>
  )
}

export default Navbar