import React,{useEffect, useState} from 'react'

import { navLinks,Socials } from '../constants';

const Navbar = () => {
  const [Active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <div className="w-full h-[70px] fixed top-0 shadow-lg flex justify-center shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 items-center">
      <div className="w-[500px] h-full flex flex-row items-center justify-between">
        <div className={`flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200`}>
        <ul className='list-none flex flex-row justify-between items-start flex-1 gap-4'>
                    {navLinks.map((Link)=>(
                      <li
                        key={Link.id}
                        className={`${
                      
                          Active === Link.title 
                          ? "text-white"
                          : "text-slate-400"

                        } font-semibold text-[16px] cursor-pointer hover:text-white`}
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

  )
}

export default Navbar