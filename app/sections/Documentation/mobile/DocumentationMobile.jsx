"use client";

import Image from "next/image";
import { useRef } from "react";

import DocCardMobile from "./DocCardMobile";
import { useDocAnimationMobile } from "./docAnimationMobile";

const DocumentationMobile = ({ cards = [] }) => {
   const sectionRef = useRef(null);

   useDocAnimationMobile(sectionRef);

   return (
      <div
         ref={sectionRef}
         id="documentation"
         className="relative flex flex-col gap-12  overflow-hidden pb-20"
      >

         <div className="absolute w-full h-full doc-bg">
            <Image
               alt="background"
               src="/assets/doc-bgm.png"
               quality={100}
               fill
               sizes="100vw"
               style={{ objectFit: "cover", objectPosition: "bottom center" }}
               className="z-10"
            />
         </div>

         <div className="flex flex-col p-6">


            <div className="flex flex-col  z-10">
               <div className="flex flex-col w-fit ">
                  <div className="flex flex-col">
                     <h2 data-doc-mobile-heading className="documentation-heading">Documentação</h2>
                     <h2 data-doc-mobile-heading className="documentation-heading">Técnica</h2>

                  </div>
                  <div className="flex gap-4 items-center">
                     <div
                        data-doc-mobile-highlight
                        className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197]"
                     />
                     <h3 data-doc-mobile-heading className="documentation-subheading">Completa</h3>
                  </div>
               </div>


               <p
                  data-doc-mobile-paragraph
                  className="text-xl xl:text-2xl font-light leading-snug text-justify text-[#5c5c5c] mt-4"
               >
                  A <strong className="text-[#EB9948]">Etti Engenharia</strong> oferece uma documentação técnica completa para garantir que cada projeto esteja em total conformidade com as normas regulamentares. Nossos documentos detalhados e técnicos são essenciais para licenciamentos e garantem a segurança e a qualidade das instalações elétricas.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-9 mt-[30px] z-10">
               {cards.map((card, index) => (
                  <DocCardMobile
                     data-doc-mobile-card
                     key={index}
                     title={card.title}
                     description={card.description}
                     className={card.className}
                     titleClassName={card.titleClassName}
                     icon={card.icon}
                     iconSize={card.iconSize}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default DocumentationMobile;