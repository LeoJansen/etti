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
    <div className="service-card flex flex-col  items-center h-full w-full  rounded-[6px]  duration-300  gap-2 md:gap-0  bg-[#040404] z-10 ">
      <div className='flex w-full md:ml-8 justify-start items-start px-6 mt-6'>
          <IconComponent
            color={iconColor}
            size={iconSize ?? 72}
            title={icon?.title}
            className='drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)]'
          />
       
      </div>
      <div className='w-full h-full xl:w-3/4 flex flex-col  md:gap-8 justify-center items-center  rounded-[6px]  '>
        <div className='h-10 w-full flex flex-col justify-center text-[20px] text-[hsl(28,80%,60%)] font-normal text-center  leading-6'>
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