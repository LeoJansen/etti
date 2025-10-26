"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import DocCard from "./DocCard";
import { documentationCards } from "./DocumentationContent";
import { useDocumentAnimation } from "./documentAnimation";
import dynamic from "next/dynamic";

const DocumentationMobile = dynamic(
   () => import("./mobile/DocumentationMobile"),
   { ssr: false }
);

function useIsMobile() {
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => window.removeEventListener("resize", checkMobile);
   }, []);

   return isMobile;
}


const Documentation = () => {
   const isMobile = useIsMobile();
   const sectionRef = useRef(null);

   useDocumentAnimation(sectionRef);

   if (isMobile) {
      return <DocumentationMobile cards={documentationCards} />;
   }



   return (
      <section
         ref={sectionRef}
         className="relative flex flex-col w-full overflow-hidden z-10 bg-white"
         id="documentation"
      >
     
        
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
               <div className="absolute w-full mt-[80vh] bg-gradient-to-r from-[hsl(0,0%,95%)] to-[hsl(0,0%,92%)] h-[25vh] " />
               <div className="p-6 md:p-12 flex flex-col justify-between gap-[10px] md:gap-[40px] z-20">
                  <div className="flex flex-col w-full    z-20">
                     <div className="flex flex-col justify-start items-end w-fit backdrop-blur-[1px] h-fit z-30">
                        <h2 data-doc-heading className="documentation-heading z-40  text-start">
                           Documentação <br /> Técnica
                        </h2>

                        <div className="flex gap-4 items-center w-full">
                           <div
                              data-doc-heading
                              className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197] doc-highlight-line"
                           />
                           <h3 data-doc-heading className="documentation-subheading">
                              Completa
                           </h3>
                           
                        </div>
                     </div>
                     <div className="flex w-full h-full  justify-end items-end z-20">
                        <div
                           data-doc-content
                           className="flex w-[50%] md:bg-[#464646] md:mr-[-24px] px-2 md:px-12 rounded-l-[4px] p-4"
                        >
                           <p className="text-[#d1d1d1] tracking-tighter font-light md:text-xl xl:text-2xl text-justify">
                              A <strong className="text-[#EB9948]">Etti Engenharia</strong> oferece uma documentação técnica completa para garantir que cada projeto esteja em total conformidade com as normas regulamentares. Nossos documentos detalhados e técnicos são essenciais para licenciamentos e garantem a segurança e a qualidade das instalações elétricas.
                           </p>
                        </div>
                       
                     </div>
                  </div>
                  <div className="grid h-[50vh] content-center pb-10 grid-cols-1 md:grid-cols-3 gap-9 xl:px-[4%]">
                     {documentationCards.map((card, index) => (
                        <DocCard
                           data-doc-card
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
       
       
      </section>
   );
};

export default Documentation;