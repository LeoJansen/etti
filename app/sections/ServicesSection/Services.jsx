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
      <div className="flex flex-col w-full h-full items-center justify-center  py-16">
        <div className='bg-[#040404] place-self-end'>
          <div className='flex gap-4 items-center'>
            <div className='h-[8px] w-[165px] bg-[#4991EB]' />
            <h3 className="text-[30px] md:text-[40px] font-bold text-[#EB9948] tracking-tight uppercase">Nossos</h3>

          </div>
          <h2 className="text-[48px] md:text-[70px] lg:text-[95px] tracking-[-0.08em]  font-regular leading-14  mb-6 text-[#565555] ">
            Serviços
          </h2>
        </div>


        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-0  lg:py-20 text-[#cecece]">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services