"use client";
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";

import { useDictionary } from '@/src/site/context/DictionaryContext';

import AutomationCard from './AutomationCard';
import { useCircuitBorderAnimation } from "./useCircuitBorderAnimation";
import { useAutomationAnimation } from "./useAutomationAnimation";

const AutomationMobile = dynamic(() => import('./mobile/AutomationMobile'), { ssr: false });

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

const Automation = () => {
   const isMobile = useIsMobile();
   const cardsContainerRef = useRef(null);
   const sectionRef = useRef(null);
   const { dictionary } = useDictionary();
   const automationContent = dictionary.automation;
   const headingLines = automationContent.headingLines ?? [automationContent.heading];

   useCircuitBorderAnimation(cardsContainerRef);
   useAutomationAnimation(sectionRef, isMobile);
   if (isMobile) {
      return <AutomationMobile />;
   }
   return (
      <section ref={sectionRef} className="relative  w-full overflow-hidden min-h-screen" id="automation">
         <div className='flex flex-col bg-black'>
            <div className="text-center ">
              
               <div className='flex flex-col w-fit items-start justify-center p-12'>
                  {headingLines.map((line) => (
                     <h2 key={line} className="automation-heading" data-automation-heading>
                        {line}
                     </h2>
                  ))}
                  <div className='flex w-full justify-center items-center gap-4 self-end'>
                     <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' data-automation-accent />
                     <h3 className="automation-subheading" data-automation-subheading>
                        {automationContent.subheading}
                     </h3>

                  </div>


               </div>

               <p className="mt-4 text-xl text-gray-600 dark:text-gray-400" data-automation-description>
                  {automationContent.description}
               </p>
            </div>


            <div className='flex w-full h-[20vh] bg-black'>
            </div>
            <div ref={cardsContainerRef} className="relative  w-full h-[80vh]  z-200">
               <Image
                  src="/assets/automation-bg.png"
                  alt={automationContent.backgroundAlt ?? ""}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  quality={100}
                  className=''
               />

               <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 p-12">
                  {automationContent.cards.map((item, index) => (
                     <div
                        key={item.title ?? index}
                        data-automation-card
                        className="automation-card-wrapper"
                     >
                        <AutomationCard
                           title={item.title}
                           description={item.description}
                           icon={item.icon}
                           className=''
                        />
                     </div>
                  ))}
               </div>
            </div>

         </div>


      </section>
   );
};

export default Automation;