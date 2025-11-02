"use client"

import Image from 'next/image';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

import { useDictionary } from '@/src/site/context/DictionaryContext';

import ServicesCarousel from './ServicesCarousel';
import useServiceAnimation from './useServiceAnimation';

const ServicesMobile = dynamic(() => import('./mobile/ServicesMobile'), {
   ssr: false,
   loading: () => <p>Loading...</p>,
});

function useIsMobile() {
   const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);
   return isMobile;
}

const Services = () => {
   const isMobile = useIsMobile();
   const sectionRef = useRef(null);
   const { dictionary } = useDictionary();
   const servicesContent = dictionary.services;

   useServiceAnimation(sectionRef);
   if (isMobile) {
      return <ServicesMobile />;
   }

   return (
      <section ref={sectionRef} id="services" className=" hidden md:flex relative   w-full min-h-screen lg:h-screen max-w-screen overflow-hidden z-40">
         <Image
            src="/assets/servicesBgDesk2.png"
            alt="Background Gradient"
            fill
            style={{ objectFit: 'cover', objectPosition: 'left center' }}
            quality={100}
            sizes='100vw'
            className='-z-10'

         />
         <div className="flex flex-col w-full h-full  justify-start  p-12">
            <div className='flex w-full h-1/3 justify-end items-start   '>
               <div className='flex flex-col justify-end items-end  bg-[#00000091] backdrop-blur-[40px] shadow-[0_2px_2px_2px_rgba(20,20,20,0.4)]   p-8  rounded-l-[6px] '>
                  <div className='flex flex-col justify-end w-fit '>
                     <div className='flex w-full justify-end gap-4 items-center '>
                           <h3 data-service-item className="services-subheading">{servicesContent.eyebrow}</h3>
                        <div data-service-item className='h-[6px] w-full rounded-[1.5px] bg-[#EBC197]' />
                     </div>
                     <div className='flex w-fit'>
                           <h2 data-service-item className="services-heading">
                              {servicesContent.heading}
                           </h2>
                     </div>
                  </div>
               </div>
            </div>




            <ServicesCarousel data-service-item />
         </div>
      </section>
   )
}

export default Services