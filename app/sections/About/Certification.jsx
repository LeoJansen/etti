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
      <section className=" bg-gradient-to-r from-[#FAFAFA] to-[#F9F9F9] py-12 relative min-h-screen w-full" id="certification">
         <div className="flex flex-col w-full relative ">
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
                  <p className="text-[#b6b6b6] tracking-tight font-light text-2xl">
                     Garantimos a qualidade e a conformidade das suas instalações elétricas com serviços de certificação e vistoria.
                  </p>
               </div>

               <div id="certification-carousel" className="flex w-full h-[50vh] xl:h-[60vh] z-80">
                  <CertificationCarousel />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Certification;