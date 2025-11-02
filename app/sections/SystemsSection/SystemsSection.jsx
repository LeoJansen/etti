"use client"
// components/SystemsSection.js
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

import { useDictionary } from '@/src/site/context/DictionaryContext';

import SystemCard from './SystemCard';
import { useSystemsAnimation } from './useSystemsAnimation';

const SystemsSectionMobile = dynamic(() => import('./mobile/SystemsSectionMobile'), {
   ssr: false,
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


const SystemsSection = () => {
   const isMobile = useIsMobile();
   const sectionRef = useRef(null);
   const { dictionary } = useDictionary();
   const systemsContent = dictionary.systems;
   const headingLines = systemsContent.headingLines ?? [systemsContent.heading];

   useSystemsAnimation(sectionRef);

   if (isMobile) {
      return <SystemsSectionMobile />;
   }
   return (
      <section
         ref={sectionRef}
         id="systems"
         className="relative w-full min-h-screen items-stretch bg-black p-12 z-80 overflow-hidden"
      >
         <video
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
            autoPlay
            muted
            loop
            playsInline
            data-systems-video
         >
            <source src="/assets/systems/systems-bg.mp4" type="video/mp4" />
         </video>
         <div className="relative flex w-full flex-col gap-12 px-6 z-40">
            <div className="flex flex-col text-left w-full ">
               <div className='flex flex-col w-fit'>
                  <div className='flex w-full items-center gap-4'>
                     <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' data-systems-accent />
                        <h3 className="systems-subheading" data-systems-subheading>{systemsContent.eyebrow}</h3>

                  </div>
                  <div className='flex'>
                     {headingLines.map((line) => (
                        <h2 key={line} className="systems-heading" data-systems-heading>{line}</h2>
                     ))}   
                     </div>

                  
               </div>
               
               
               <p className="mt-6  text-2xl text-[#99a1af]" data-systems-description>
                  {systemsContent.description}
               </p>
            </div>

            <div className="w-full gap-8 grid grid-cols-2 min-h-[500px]">
               {systemsContent.cards.map(({ title, description, image }, idx) => (
                  <div
                     key={title ?? idx}
                     data-systems-card
                     className="w-full"
                  >
                     <SystemCard
                        index={idx}
                        title={title}
                        description={description}
                        image={image}
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default SystemsSection;