"use client"

import Image from 'next/image'
import React from 'react'

const ServiceCard = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="service-card flex flex-col  p-6 md:p-0 md:py-6 items-center h-full w-full  rounded-[6px]  duration-300  gap-6 md:gap-0  bg-[#141414] ">
      <div className='flex w-full md:ml-8 justify-start items-start'>
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          quality={100} 
          width={500} 
          height={500} 
          className='service-image w-18 h-18 lg:w-15 lg:h-15 rounded-tl-[20px] drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)]' 
        />
      </div>
      <div className='w-full h-full xl:w-3/4 flex flex-col gap-8 justify-center items-center  rounded-[6px] p-8 md:px-0 md:py-2'>
        <div className='h-10 w-full flex flex-col justify-center text-[20px] font-normal text-center drop-shadow-[_1px_1px_2px_rgba(240,240,255,0.55)] leading-6'>
          {title.map((line, index) => (
            <h3 key={index} className="">
              {line}
            </h3>
          ))}
        </div>
        <div className='flex w-full h-full'>
          <p className=" text-[16px] tracking-wide">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard