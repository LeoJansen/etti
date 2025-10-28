"use client";

import Image from "next/image";
import { whyEttiData } from "../WhyEttiContent";

const WhyEttiMobile = () => {
   return (
      <section
         className="relative min-h-screen bg-[#ffffff] p-6 pb-20 -z-10 md:hidden"
      >
         {/* Background Image - Mobile optimized */}
         <Image
            src="/assets/whyEtti/interrogation.png"
            alt="Background Pattern"
            fill
            sizes="100vw"
            style={{
               objectFit: "contain",
               objectPosition: "center",
               paddingTop: "10%",
               paddingBottom: "10%",
            }}
            className="-z-10"
         />

         <div className="flex flex-col w-full justify-center items-center relative z-10">
            {/* Mobile Header */}
            <div className='flex flex-col w-full'>
               <div className="flex flex-col w-fit">
                  <div className='flex w-full items-center gap-2 '>
                     <div className='h-[3px] w-full rounded-[1.5px] bg-[#EBC197]' />
                     <h3 className="why-etti-subheading">
                        Porque somos a
                     </h3>
                  </div>

                  <div className=''>
                     <h2 className="why-etti-heading">
                        Escolha Certa
                     </h2>
                  </div>
               </div>

               <div className="ml-2">
                  <p className="text-base text-gray-600 mb-8">
                     As nossas vantagens competitivas.
                  </p>
               </div>
            </div>

            {/* Mobile Cards Grid - Single column with spacing */}
            <div className="flex flex-col gap-6 w-full max-w-md">
               {whyEttiData.map((item, index) => (
                  <div
                     key={item.id}
                     className="p-6 rounded-[3px] shadow-[0_4px_12px_rgba(20,20,20,0.1)] border border-gray-100 transform transition duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(235,153,72,0.15)]"
                  >
                     <div className="flex flex-col items-start text-left">
                        {/* Card number indicator */}
                        <div className="flex items-center gap-3 mb-3">
                           <div className="w-8 h-8 rounded-full bg-[#EB9948] flex items-center justify-center">
                              <span className="text-white font-bold text-sm">
                                 {index + 1}
                              </span>
                           </div>
                           <h3 className="text-lg font-semibold text-[#EB9948]">
                              {item.title}
                           </h3>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                           {item.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default WhyEttiMobile;
