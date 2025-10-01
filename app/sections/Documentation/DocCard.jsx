"use client"

import Image from 'next/image'
import React from 'react'




const DocCard = ({  title, description, icon,  iconSize }) => {

  return (
    <div className="flex flex-col  items-center h-full self-end pb-12  w-full  rounded-[2px]  duration-300  gap-2 md:gap-0  bg-[#e4e4e4] backdrop-blur-[40px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.15)] z-10 ">
      <div className='flex w-full justify-start items-center  mt-5'>
        <div className='flex flex-col gap-2 w-full h-full justify-center'>
          
        <div className='bg-[#bebebe] h-[3px] w-full rounded-r-[2px]'/>
        
       

        </div>
        
        <div className='flex w-15 h-15  mb-3 mx-8 justify-center  items-end '>
      

        </div>
          
       
      </div>
      <div className='w-full h-full flex flex-col  gap-8 justify-center items-center  rounded-[6px]  px-8'>
        <div className='h-10 w-full flex flex-col justify-center text-[20px] text-[#7e7e7e] font-medium text-center  leading-6  '>
       
            <h3 className="">
              {title}
            </h3>
    
        </div>
        <div className='flex w-full h-full'>
          <p className=" text-[16px] tracking-wide text-[#8d8d8d]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DocCard