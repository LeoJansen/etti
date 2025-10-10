"use client"

import Image from 'next/image'
import React from 'react'
import ServiceCard from './ServiceCard'
import { servicesData } from './ServicesContent'

const Services = () => {

   return (
      <section id="services" className=" hidden md:flex relative   w-full min-h-screen lg:h-screen max-w-screen overflow-hidden">
         <Image
            src="/assets/servicesBgDesk2.png"
            alt="Background Gradient"
            fill
            style={{ objectFit: 'cover', objectPosition: 'left center' }}
            quality={100}
            sizes='100vw'
            className='-z-10'

         />
         <div className="flex flex-col w-full h-full  ">
            <div className='flex w-full h-1/3 justify-end items-center  '>
               <div className='flex flex-col justify-end items-end  bg-[#00000091] backdrop-blur-[40px] shadow-[0_2px_2px_2px_rgba(20,20,20,0.4)] place-self-end  p-8 px-16 rounded-l-[6px] '>
                  <div className='flex w-full justify-end gap-4 items-center '>
                     <div className='h-[6px] w-[70px] md:w-[145px] rounded-[1.5px] ' />
                     <h3 className="services-subheading">Nossos</h3>

                  </div>
                  <h2 className="services-heading">
                     Serviços
                  </h2>
               </div>
            </div>




            <div id="services-grid" className="w-full h-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  px-10  py-20 text-[#cecece]  border-purple-500">
               {servicesData.map((service, index) => (
                  <ServiceCard
                     key={index}

                     title={service.title}
                     description={service.description}
                     icon={service.icon}
                     iconPath={service.icon.path}
                     iconColor="#EB9948"
                     iconWidth={service.icon.iconWidth}
                     iconHeight={service.icon.iconHeight}
                     pulseOffset={index}

                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default Services