
"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import AutomationCard from './AutomationCard';
import { automationContent } from './AutomationContent';
import Image from "next/image";
import { useCircuitBorderAnimation } from "./useCircuitBorderAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
   const sectionRef = React.useRef(null);
   const bgRef = React.useRef(null);
   const [cardsReady, setCardsReady] = React.useState(false);

   useCircuitBorderAnimation(cardsContainerRef, { shouldActivate: cardsReady });

   React.useEffect(() => {
      if (isMobile) {
         setCardsReady(false);
      }
   }, [isMobile]);

   useGSAP(() => {
      if (isMobile || !sectionRef.current) {
         return;
      }

      setCardsReady(false);

      const q = gsap.utils.selector(sectionRef);
      const cards = q('.automation-card');
      const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

      if (bgRef.current) {
         gsap.set(bgRef.current, { opacity: 0 });
         timeline.to(bgRef.current, { opacity: 1, duration: 1.2 }, '+=0.4');
      }

      if (cards.length) {
         gsap.set(cards, { autoAlpha: 0});
         timeline.to(cards, {
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.15
         }, bgRef.current ? '-=0.3' : '+=0.4');
      }

      timeline.call(() => setCardsReady(true));

      return () => {
         timeline.kill();
      };
   }, { scope: sectionRef, dependencies: [isMobile] });

   if (isMobile) {
      return <AutomationMobile />;
   }
   return (
      <section ref={sectionRef} className="relative  w-full overflow-hidden h-screen" id="automation">
         <div className='flex flex-col bg-black'>
            <div className="text-center my-8 px-6">
               <div className='flex flex-col w-fit items-start justify-center '>
                  <h2 className="text-[100px] tracking-[-0.0432em] font-extralight text-[#939393] leading-18">
                     Automação Residencial
                  </h2>
                  <div className='flex justify-center items-center gap-4 self-end'>
                     <div className='h-[6px] w-[70px] md:w-[145px] rounded-[1.5px] bg-[#4991EB]' />
                     <h3 className="text-4xl font-semibold text-[#EB9948] tracking-tight uppercase">
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
               <div ref={bgRef} className="absolute inset-0 -z-10 opacity-0">
                  <Image
                     src="/assets/automation-bg.png"
                     alt="Background"
                     fill
                     style={{ objectFit: "cover", objectPosition: "center" }}
                     quality={100}
                  />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {automationContent.map((item, index) => (
                     <AutomationCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        className='opacity-0 translate-y-6'
                     />
                  ))}
               </div>
            </div>

         </div>


      </section>
   );
};

export default Automation;