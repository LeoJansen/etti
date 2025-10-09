"use client";

import React from "react";
import dynamic from "next/dynamic";
import CertificationCard from "./CertificationCard";
import { certificationCards } from "./CertificationContent";

const CertificationMobile = dynamic(() => import("./mobile/CertificationMobile"), {
   ssr: false,
});

function useIsMobile() {
   const [isMobile, setIsMobile] = React.useState(false);

   React.useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
   }, []);

   return isMobile;
}

const Certification = () => {
   const isMobile = useIsMobile();

   if (isMobile) {
      return <CertificationMobile />;
   }

   return (
      <section className=" bg-white py-24 relative min-h-screen w-full z-10" id="certification">
         <div className="flex flex-col w-full relative z-10">
            <div className="flex flex-col w-full text-center mb-16">
               <div className="flex flex-col items-end justify-center self-end px-6">

                  <h2 className="section-heading3">
                     Certificação
                  </h2>

                  <div className="flex gap-4 justify-center items-center">
                     <div className='h-[5px] w-15 md:w-20 bg-[#4991EB] ' />
                     <h2 className=" text-[56px] xl:text-[40px] leading-[1.2] font-semibold  tracking-tight text-[#EB9948]">
                        e Vistoria
                     </h2>
                  </div>

               </div>
            </div>

            <div className="flex flex-col gap-16 w-full">
               <div className="flex justify-center">
                  <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300 px-10 text-center">
                     Garantimos a qualidade e a conformidade das suas instalações elétricas com serviços de certificação e vistoria.
                  </p>
               </div>

               <div className="grid grid-cols-1  gap-12 px-10 lg:px-[10%]">
                  {certificationCards.map((card, index) => (
                     <CertificationCard key={card.title} index={index} title={card.title} description={card.description} image={card.image} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Certification;