
import React from 'react'
import { Socials } from "../constants"
const Bottom = () => {
    return(
        <div className="w-full h-[70px] relative  flex justify-center px-10 items-center ">
      <div className="flex flex-row gap-44 px-[20px] py-[10px] border-[#7042f861] rounded-full border sm-phone5">
      
        {Socials.map((social) => (
                <img
                src={social.src}
                alt={social.name}
                key={social.name}
                className='cursor-pointer hover:bg-purple-600 rounded-[50%] object-contain'
                onClick={()=>window.location.href=social.link}
                width={24}
                height={24}
                />
            ))}
        
        </div>
      </div>
    );
}
export default Bottom;