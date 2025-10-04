"use client"

import Image from 'next/image'
import React from 'react'




const DocCard = ({  title, description, icon,  iconSize, className }) => {

  return (
    <div className={`flex flex-col  items-center h-full self-end max-w-[500px]  w-full  rounded-[2px]  duration-300 py-4  gap-2 md:gap-0 p-4 ${className} backdrop-blur-[40px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.15)] z-10 `}>
      <div className='flex w-full justify-start items-center   '>
        <div className='flex  gap-2 w-full h-full justify-center items-end  '>
          
       
        <Image
            src={`/assets/${icon.name}.svg`}
            alt={icon.title}
            width={iconSize?.width || 70}
            height={iconSize?.height || 70}
            className='mx-auto brightness-0 opacity-[0.42] '
          />
           <div className='bg-[#bebebe] h-[7px] w-full rounded-l-[2.3px] mr-[-16px] '/>
        
       

        </div>
        
          
       
      </div>
      <div className='w-full h-full flex flex-col  gap-8 justify-center items-center  rounded-[6px]  px-8 mt-4'>
        <div className='h-10 w-full flex flex-col justify-center text-[20px] text-[#686868] font-medium text-center  leading-6  tracking-tight '>
       
            <h3 className="">
              {title}
            </h3>
    
        </div>
        <div className='flex w-full h-full'>
          <p className=" text-[14px] md:text-[16px] tracking-wide text-[#8d8d8d]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DocCard