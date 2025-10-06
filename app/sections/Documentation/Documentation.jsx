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
               className="px-6 flex flex-col justify-between gap-[10px] md:gap-[40px]"
            >
               <div className="flex flex-col w-full md:h-[50vh] md:flex-row-reverse">
                  <div className="flex flex-col justify-start items-end backdrop-blur-[1px] h-fit ">
                     <h2 className="lg:text-[80px] text-[40px] tracking-[-0.05em] font-light text-[#5c5c5c] doc-heading-title">
                        Documentação
                     </h2>
                     <h2 className="lg:text-[80px] text-[40px] tracking-[-0.05em] font-light text-[#5c5c5c] leading-5 md:leading-10 doc-heading-title">
                        Técnica
                     </h2>
                     <div className="flex gap-4 items-center">
                        <div className="h-[7px] w-[125px] rounded-[1.5px] bg-[#4991EB] doc-highlight-line" />
                        <h3 className="lg:text-[40px] text-[30px] tracking-[-0.03em] font-semibold uppercase text-[#EB9948] md:leading-20 doc-highlight-text">
                           Completa
                        </h3>
                     </div>
                  </div>
                  <div className="flex w-full h-full justify-center md:justify-start md:items-end z-20">
                     <div className="flex w-[50%] md:bg-[#464646] md:ml-[-24px] px-2 md:px-12 rounded-r-[4px]">
                        <p className="text-md md:text-[#c4c4c4] my-12 leading-snug text-justify doc-description">
                           A <strong className="text-[#EB9948]">Etti Engenharia</strong> oferece uma documentação técnica completa para garantir que cada projeto esteja em total conformidade com as normas regulamentares. Nossos documentos detalhados e técnicos são essenciais para licenciamentos e garantem a segurança e a qualidade das instalações elétricas.
                        </p>
                     </div>
                     <div className="flex w-[50%] ">
                        <div className="relative w-full h-full" />
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