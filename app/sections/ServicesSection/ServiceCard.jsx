"use client"

import Image from 'next/image'
import React from 'react'

const ServiceCard = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="metalicCards flex flex-col md:flex-row p-6 items-center h-full w-full  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] gap-6 md:gap-0">
      <div className='flex w-full xl:w-1/4 justify-center items-start'>
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          quality={100} 
          width={500} 
          height={500} 
          className='w-18 h-18 lg:w-25 lg:h-25 rounded-tl-[20px] drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)]' 
        />
      </div>
      <div className='w-full h-full xl:w-3/4 flex flex-col gap-8 justify-center items-center bg-[#151618] rounded-[8px] p-8'>
        <div className='h-10 w-full flex flex-col justify-center text-2xl font-normal text-center drop-shadow-[_1px_1px_2px_rgba(200,200,255,0.55)]'>
          {title.map((line, index) => (
            <h3 key={index} className="">
              {line}
            </h3>
          ))}
        </div>
        <div className='flex w-full h-full'>
          <p className="text-justify text-[18px] tracking-wide">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard