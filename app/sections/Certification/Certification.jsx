"use client";

import React from "react";
import dynamic from "next/dynamic";
import CertificationCarousel from "./CertificationCarousel";

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
                  <div className="flex">
                     <h2 className="certification-heading">
                     Certificação
                  </h2>

                  </div>


                  

                  <div className="flex gap-4 w-full justify-center items-center">
                     
                     <h2 className="certification-subheading">
                        e Vistoria
                     </h2>
                     <div className='h-[5px] w-full bg-[#EBC197] ' />
                  </div>

               </div>
            </div>

            <div className="flex flex-col gap-16 w-full">
               <div className="flex justify-center">
                  <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300 px-10 text-center">
                     Garantimos a qualidade e a conformidade das suas instalações elétricas com serviços de certificação e vistoria.
                  </p>
               </div>

               <div id="certification-carousel" className="flex w-full px-4 lg:px-[10%] h-[60vh]">
                  <CertificationCarousel />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Certification;