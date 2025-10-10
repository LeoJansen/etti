"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import DocCard from "./DocCard";
import { documentationCards } from "./DocumentationContent";
import DocumentationMobile from "./mobile/DocumentationMobile";
import { useDocumentAnimation } from "./documentAnimation";

const Documentation = () => {
   const [isMounted, setIsMounted] = useState(false);
   const isMobile = useMediaQuery({ query: "(max-width: 764px)" });
   const desktopContainerRef = useRef(null);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   const showMobile = isMounted && isMobile;

   useDocumentAnimation(desktopContainerRef);

   return (
      <section
         className="relative flex flex-col w-full overflow-hidden z-10 bg-white"
         id="documentation"
      >
         {showMobile ? (
            <DocumentationMobile cards={documentationCards} />
         ) : (
            <>
               <div className="absolute w-full h-[80vh] doc-bg">
                  <Image
                     alt="background"
                     src="/assets/doc-bg22.png"
                     quality={100}
                     fill
                     sizes="100vw"
                     style={{ objectFit: "cover", objectPosition: "bottom center" }}
                     className="-z-10"
                  />
               </div>
               <div className="absolute w-full mt-[80vh] bg-gradient-to-r from-[hsl(0,0%,98%)] to-[hsl(0,0%,97.5%)] h-[25vh] -z-10" />
               <div
                  ref={desktopContainerRef}
                  className="px-6 flex flex-col justify-between gap-[10px] md:gap-[40px] z-20"
               >
                  <div className="flex w-full  md:h-[50vh]  z-20">
                     <div className="flex flex-col justify-start items-end backdrop-blur-[1px] h-fit z-30">
                        <h2 className="documentation-heading z-40 mt-5 text-start">
                           Documentação Técnica
                        </h2>

                        <div className="flex gap-4 items-center w-full">
                           <div className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197] doc-highlight-line" />
                           <h3 className="documentation-subheading">
                              Completa
                           </h3>
                           
                        </div>
                     </div>
                     <div className="flex w-full h-full  justify-end items-end z-20">
                        <div className="flex w-[50%] md:bg-[#464646] md:mr-[-24px] px-2 md:px-12 rounded-l-[4px] ">
                           <p className="text-md md:text-[#c4c4c4] my-12 leading-snug text-justify doc-description">
                              A <strong className="text-[#EB9948]">Etti Engenharia</strong> oferece uma documentação técnica completa para garantir que cada projeto esteja em total conformidade com as normas regulamentares. Nossos documentos detalhados e técnicos são essenciais para licenciamentos e garantem a segurança e a qualidade das instalações elétricas.
                           </p>
                        </div>
                       
                     </div>
                  </div>
                  <div className="grid h-[50vh] content-center pb-10 grid-cols-1 md:grid-cols-3 gap-9 xl:px-[4%]">
                     {documentationCards.map((card, index) => (
                        <DocCard
                           key={index}
                           title={card.title}
                           description={card.description}
                           className={`doc-card ${card.className ?? ""}`.trim()}
                           titleClassName={card.titleClassName}
                           icon={card.icon}
                           iconSize={card.iconSize}
                        />
                     ))}
                  </div>
               </div>
            </>
         )}
      </section>
   );
};

export default Documentation;