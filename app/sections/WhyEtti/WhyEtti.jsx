"use client"
// components/WhyEttiSection.js

import Image from "next/image";
import WhyEttiCard from "./WhyEttiCard";
import { whyEttiData } from "./WhyEttiContent";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import useWhyAnimation from "./useWhyAnimation";

const WhyEttiMobile = dynamic(() => import("./mobile/WhyEttiMobile"), {
   ssr: false,
});

function useIsMobile() {
   const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
   }, []);
   return isMobile;
}





const WhyEtti = () => {
   const isMobile = useIsMobile();
   const sectionRef = useRef(null);

   useWhyAnimation(sectionRef, isMobile);
   
   if (isMobile) {
      return <WhyEttiMobile />;
   }

   return (
      <section
         ref={sectionRef}
         className="relative min-h-screen bg-[#ffffff] hidden md:block"
      >

         <Image
            src="/assets/whyEtti/interrogation.png"
            alt="Background Pattern"
            fill
            sizes="100vw"
            style={{ objectFit: "contain", objectPosition: "center", paddingTop: "5%", paddingBottom: "5%" }}
            className="z-10" />



         <div
            className="flex flex-col w-full justify-center items-center p-12"
            data-why-content
         >
           <div className='flex flex-col w-fit self-start '>
                  <div
                     className='flex w-full items-center gap-4'
                  >
                     
                     <div
                        className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]'
                        data-why-accent
                     />
                     <h3 className="why-etti-subheading" data-why-subheading>Porque somos a</h3>

                  </div>
                  <div className='flex ml-4'>
                  <h2 className="why-etti-heading" data-why-heading>Escolha Certa</h2>   
                     </div>

                  
               </div>
               <div className="self-start ml-4">
                  <p
                     className="mt-4 text-xl text-gray-600 dark:text-gray-400"
                     data-why-description
                  >
               As nossas vantagens competitivas.
            </p>

               </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 max-w-7xl justify-items-center">
               {whyEttiData.map((item, index) => (
                  <WhyEttiCard
                     key={item.id}
                     title={item.title}
                     description={item.description}
                     index={index}  
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default WhyEtti;