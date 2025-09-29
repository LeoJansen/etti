"use client"

import Image from 'next/image'
import React from 'react'
import IconServices1 from '../../components/icons/IconServices1'
import IconServices2 from '../../components/icons/IconServices2'
import IconServices3 from '../../components/icons/IconServices3'
import IconServices4 from '../../components/icons/IconServices4'

const ICON_COMPONENTS = {
  services1: IconServices1,
  services2: IconServices2,
  services3: IconServices3,
  services4: IconServices4
}

const ServiceCard = ({  title, description, icon, iconColor, iconSize }) => {
  const IconComponent = icon?.name ? ICON_COMPONENTS[icon.name] : null

  return (
    <div className="service-card flex flex-col  items-center h-full self-end pb-8 md:h-3/4 w-full  rounded-[2px]  duration-300  gap-2 md:gap-0  bg-[#00000095] backdrop-blur-[40px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.5)] z-10 ">
      <div className='flex w-full justify-start items-end  mt-6'>
        <div className='bg-[#888888] h-[6px] w-full rounded-r-[2px]'/>
        <div className='flex w-15 h-15  mb-3 mx-4 justify-center  items-end '>
          <IconComponent
            color={iconColor}
            size={iconSize ?? 72}
            title={icon?.title}
            className='drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)]'
          />

        </div>
          
       
      </div>
      <div className='w-full h-full flex flex-col  gap-8 justify-center items-center  rounded-[6px]  px-8'>
        <div className='h-10 w-full flex flex-col justify-center text-[20px] text-[#EB7D49] font-medium text-center  leading-6  pt-6'>
          {title.map((line, index) => (
            <h3 key={index} className="">
              {line}
            </h3>
          ))}
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

export default ServiceCard