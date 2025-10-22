"use client";

import Image from "next/image";
import { useRef } from "react";

import DocCardMobile from "./DocCardMobile";
import { useDocAnimationMobile } from "./DocAnimationMobile";

const DocumentationMobile = ({ cards }) => {
   const containerRef = useRef(null);

   useDocAnimationMobile(containerRef);

   return (
      <div
         ref={containerRef}
         className="relative p-6 md:p-12 flex flex-col gap-12  overflow-hidden"
      >

         <Image
            alt="background"
            src="/assets/doc-bg-mobile.png"
            quality={100}
            fill
            sizes="100vw"
            className="doc-bg-mobile object-cover object-bottom"
            priority
         />


         <div className="flex flex-col  z-10">
            <div className="flex flex-col w-fit ">
               <div className="flex flex-col">
                  <h2 className="documentation-heading">Documentação</h2>
                  <h2 className="documentation-heading">Técnica</h2>

               </div>
               <div className="flex gap-4 items-center">
                  <div className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197]" />
                  <h3 className="documentation-subheading">Completa</h3>
               </div>
            </div>


            <p className="text-xl xl:text-2xl font-light leading-snug text-justify text-[#5c5c5c] mt-4">
               A <strong className="text-[#EB9948]">Etti Engenharia</strong> oferece uma documentação técnica completa para garantir que cada projeto esteja em total conformidade com as normas regulamentares. Nossos documentos detalhados e técnicos são essenciais para licenciamentos e garantem a segurança e a qualidade das instalações elétricas.
            </p>
         </div>

         <div className="grid grid-cols-1 gap-9 z-10">
            {cards.map((card, index) => (
               <DocCardMobile
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
   );
};

export default DocumentationMobile;