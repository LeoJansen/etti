"use client";

import { useRef } from "react";
import CertificationCardMobile from "./CertificationCardMobile";
import { certificationCards } from "../CertificationContent";
import useCertAnimationMobile from "./useCertAnimationMobile";

const CertificationMobile = () => {
   const sectionRef = useRef(null);

   useCertAnimationMobile(sectionRef);

   return (
      <section
         ref={sectionRef}
         className="relative w-full md:hidden p-6 pb-20 bg-gradient-to-r from-[hsl(0,0%,98%)] to-[hsl(0,0%,97.5%)]"
         id="certification"
      >
         <div className="relative z-10 flex flex-col gap-10">
            <div className="flex flex-col items-end text-center">
               <div className="flex flex-col w-fit">

               
               <div className="flex">
                  <h2 className="certification-heading" data-cert-mobile-heading>Certificação</h2>

               </div>
               <div className="flex gap-x-4 w-full items-center">
                  <div className='h-[5px] w-full  bg-[#EBC197] ' data-cert-mobile-divider />

                  <h2 className="certification-subheading" data-cert-mobile-heading>e Vistoria</h2>

               </div>
               </div>




               <p className="text-xl font-light text-gray-600 mt-6" data-cert-mobile-description>
                  Garantimos a qualidade e a conformidade das suas instalações elétricas com serviços de certificação e vistoria.
               </p>
            </div>

            <div className="flex flex-col gap-6">
               {certificationCards.map((card, index) => (
                  <CertificationCardMobile
                     key={card.title}
                     index={index}
                     title={card.title}
                     description={card.description}
                     image={card.image}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default CertificationMobile;
