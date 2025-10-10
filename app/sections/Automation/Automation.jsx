
"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import AutomationCard from './AutomationCard';
import { automationContent } from './AutomationContent';
import Image from "next/image";
import { useCircuitBorderAnimation } from "./useCircuitBorderAnimation";

const AutomationMobile = dynamic(() => import('./mobile/AutomationMobile'), { ssr: false });

function useIsMobile() {
   const [isMobile, setIsMobile] = React.useState(false);
   React.useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);
   return isMobile;
}

const Automation = () => {
   const isMobile = useIsMobile();
   const cardsContainerRef = React.useRef(null);

   useCircuitBorderAnimation(cardsContainerRef);
   if (isMobile) {
      return <AutomationMobile />;
   }
   return (
      <section className="relative  w-full overflow-hidden min-h-screen" id="automation">
         <div className='flex flex-col bg-black'>
            <div className="text-center my-8 px-6">
               <div className='flex flex-col w-fit items-start justify-center '>
                  <h2 className="automation-heading">
                     Automação Residencial
                  </h2>
                  <div className='flex w-full justify-center items-center gap-4 self-end'>
                     <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' />
                     <h3 className="automation-subheading">
                        com KNX
                     </h3>

                  </div>


               </div>

               <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  Transforme sua casa em uma habitação inteligente com nossa expertise em domótica e protocolo KNX, o padrão mundial para automação predial.
               </p>
            </div>


            <div className='flex w-full h-[20vh] bg-black'>
            </div>
            <div ref={cardsContainerRef} className="relative  w-full h-[80vh] px-6 z-200">
               <Image
                  src="/assets/automation-bg.png"
                  alt="Background"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  quality={100}
                  className='-z-10'
               />

               <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                  {automationContent.map((item, index) => (
                     <AutomationCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        className=''
                     />
                  ))}
               </div>
            </div>

         </div>


      </section>
   );
};

export default Automation;