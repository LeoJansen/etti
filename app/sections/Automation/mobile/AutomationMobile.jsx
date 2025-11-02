"use client";

import React from 'react';
import Image from "next/image";

import { useDictionary } from '@/src/site/context/DictionaryContext';

import AutomationCardMobile from './AutomationCardMobile';
import { useCircuitBorderAnimation } from "../useCircuitBorderAnimation";
import { useAutomationAnimation } from "../useAutomationAnimation";

const AutomationMobile = () => {
   const cardsContainerRef = React.useRef(null);
   const sectionRef = React.useRef(null);
   const { dictionary } = useDictionary();
   const automationContent = dictionary.automation;
   const headingLines = automationContent.headingLines ?? [automationContent.heading];

   useCircuitBorderAnimation(cardsContainerRef);
   useAutomationAnimation(sectionRef);
   return (
      <section ref={sectionRef} className="relative  w-full overflow-hidden min-h-screen md:hidden p-6 pb-20" id="automation-mobile">
         <div className='absolute w-full h-[20vh] bg-black -m-4  -z-10' />
         <Image
            src="/assets/automation-bg.png"
            alt={automationContent.backgroundAlt ?? ""}
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
            quality={100}
            className='-z-10 mt-[20vh]'
         />
         <div className='flex flex-col w-full items-start justify-center  my-8'>
            <div className='flex flex-col w-fit items-start justify-center '>
               <div className='flex flex-col'>
                  {headingLines.map((line) => (
                     <h2 key={line} className="automation-heading" data-automation-heading>
                        {line}
                     </h2>
                  ))}

               </div>

               <div className='flex w-full justify-center items-center gap-4 self-end'>
                  <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' data-automation-accent />
                  <h3 className="automation-subheading" data-automation-subheading>
                     {automationContent.subheading}
                  </h3>
               </div>
            </div>
            <p className="mt-2 text-xl  text-justify text-gray-400" data-automation-description>
               {automationContent.description}
            </p>
         </div>

         <div ref={cardsContainerRef} className="flex flex-col gap-6 px-5">
            {automationContent.cards.map((item, index) => (
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
