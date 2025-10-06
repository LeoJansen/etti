// components/CertificationSection.js

import Image from "next/image";
import CertificationCard from "./CertificationCard";
import { certificationCards } from "./CertificationContent";

const Certification = () => {
   return (
      <section className="certification-background py-16 relative lg:h-screen w-full -z-10 bg-[#F2F2F2]" id="certification">
    



         <div className="flex flex-col w-full relative z-10 ">


            <div className="flex flex-col w-full text-center mb-12 ">
               <div className="flex flex-col items-end justify-center self-end">
                  <div className="bg-[#EB9948] px-4 py-2 rounded-l-md">
                     <h2 className="font-extralight tracking-[-0.02em] text-[#FFFFFF] text-[50px] xl:text-[90px] leading-[0.9]">
                        Certificação
                     </h2>

                  </div>

                  <h2 className="font-extralight tracking-[-0.032em] text-[50px] xl:text-[90px] leading-[1.2] text-[#EB9948]">
                     e Vistoria
                  </h2>

               </div>


            </div>
      
            
            <div className="flex flex-col justify-around w-full h-full">
               <div className="flex h-[200px]">
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 px-10">
                  Garantimos a qualidade e a conformidade das suas instalações elétricas com serviços de certificação e vistoria.
               </p>

               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12  px-10 md:px-[10%]">
                  {certificationCards.map((card) => (
                     <CertificationCard
                        key={card.title}
                        title={card.title}
                        description={card.description}

                     />
                  ))}
               </div>
            </div>



         </div>
      </section>
   );
};

export default Certification;