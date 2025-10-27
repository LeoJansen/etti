"use client";

import React from 'react';
import { automationContent } from '../AutomationContent';
import Image from "next/image";
import AutomationCardMobile from './AutomationCardMobile';
import { useCircuitBorderAnimation } from "../useCircuitBorderAnimation";
import { useAutomationAnimation } from "../useAutomationAnimation";

const AutomationMobile = () => {
   const cardsContainerRef = React.useRef(null);
   const sectionRef = React.useRef(null);

   useCircuitBorderAnimation(cardsContainerRef);
   useAutomationAnimation(sectionRef);
   return (
      <section ref={sectionRef} className="relative  w-full overflow-hidden min-h-screen md:hidden p-6 pb-20" id="automation-mobile">
         <div className='absolute w-full h-[20vh] bg-black -m-4  -z-10' />
         <Image
            src="/assets/automation-bg.png"
            alt="Background"
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
            quality={100}
            className='-z-10 mt-[20vh]'
         />
         <div className='flex flex-col w-full items-start justify-center  my-8'>
            <div className='flex flex-col w-fit items-start justify-center '>
               <div className='flex flex-col'>
                  <h2 className="automation-heading" data-automation-heading>
                     Automação
                  </h2>
                  <h2 className="automation-heading" data-automation-heading>
                     Residencial
                  </h2>

               </div>

               <div className='flex w-full justify-center items-center gap-4 self-end'>
                  <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' data-automation-accent />
                  <h3 className="automation-subheading" data-automation-subheading>
                     com KNX
                  </h3>
               </div>
            </div>
            <p className="mt-2 text-xl  text-justify text-gray-400" data-automation-description>
               Transforme sua casa em uma habitação inteligente com nossa expertise em domótica e protocolo KNX, o padrão mundial para automação predial.
            </p>
         </div>

         <div ref={cardsContainerRef} className="flex flex-col gap-6 px-5">
            {automationContent.map((item, index) => (
               <div
                  key={item.title ?? index}
                  data-automation-card
                  className="automation-card-wrapper"
               >
                  <AutomationCardMobile
                     title={item.title}
                     description={item.description}
                     icon={item.icon}
                     className=''
                  />
               </div>
            ))}
         </div>

      </section>
   );
};

export default AutomationMobile;
