// components/CertificationSection.js

import Image from "next/image";
import CertificationCard from "./CertificationCard";
import { certificationCards } from "./CertificationContent";

const Certification = () => {
   return (
      <section className="py-16 relative bg-[#FBFBFB] lg:h-screen w-full -z-10 " id="certification">
          <Image
                        src="/assets/certBG2.png"
                        alt="Background"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        quality={100}
                        className='-z-10'
                     />

         <div className="flex flex-col  w-full ">


            <div className="flex flex-col w-full text-center mb-12 ">
               <div className="flex flex-col items-end justify-center self-end">
                  <div className="bg-[#EB9948] px-4 py-2 rounded-l-md">
                     <h2 className="font-extralight tracking-[-0.02em] text-[#FFFFFF] text-[50px] xl:text-[90px] leading-[0.9]">
                        Certificação
                     </h2>

                  </div>

                  <h2 className="font-extralight tracking-[-0.032em] text-[50px] xl:text-[90px] leading-[1.2]">
                     e Vistoria
                  </h2>

               </div>

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
      </section>
   );
};

export default Certification;