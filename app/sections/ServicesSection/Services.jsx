"use client"

import Image from 'next/image'
import React from 'react'
import ServiceCard from './ServiceCard'
import { servicesData } from './ServicesContent'

const Services = () => {

  return (
    <section id="services" className="  relative  md:h-screen  w-full min-h-screen max-w-screen overflow-hidden">
      <Image
        src="/assets/servicesBg4.png"
        alt="Background Gradient"
        fill
        style={{ objectFit: 'cover', objectPosition: 'left center' }}
        quality={100}
        sizes='100vw'
        className='-z-10'

      />
      <div className="flex flex-col w-full h-full items-center justify-end  py-16">
        <div className='flex flex-col justify-end items-end bg-[#040404] place-self-end p-8 md:px-16 rounded-l-[6px] '>
          <div className='flex w-full justify-end gap-4 items-center '>
            <div className='h-[7px] w-[70px] md:w-[145px] rounded-[1.5px] bg-[#4991EB]' />
            <h3 className="text-[35px] md:text-[40px] font-semibold text-[#EB9948] tracking-tight uppercase">Nossos</h3>

          </div>
          <h2 className="text-[68px] md:text-[70px] lg:text-[95px] tracking-[-0.08em]  font-extralight leading-14  mb-6 text-[#6b6b6b] ">
            Serviços
          </h2>
        </div>


        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-0  py-10 lg:py-20 text-[#cecece]">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
            
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconColor ="rgb(130, 130, 130)"
              iconSize={50}

            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services