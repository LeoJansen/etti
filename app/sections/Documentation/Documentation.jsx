"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { useDictionary } from "@/src/site/context/DictionaryContext";

import DocCard from "./DocCard";
import { useDocumentAnimation } from "./documentAnimation";

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
   const { dictionary } = useDictionary();
   const documentationContent = dictionary.documentation;
   const headingLines = documentationContent.headingLines ?? [documentationContent.heading];

   useDocumentAnimation(sectionRef);

   if (isMobile) {
      return <DocumentationMobile />;
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
               <div className="absolute w-full mt-[80vh] bg-gradient-to-r from-[hsl(0,0%,95%)] to-[hsl(0,0%,92%)] flex h-full " />
               <div className="p-6 md:p-12 flex flex-col justify-between gap-[10px] md:gap-[40px] z-20">
                  <div className="flex flex-col w-full    z-20">
                     <div className="flex flex-col justify-start items-end w-fit backdrop-blur-[1px] h-fit z-30">
                        {headingLines.map((line) => (
                           <h2 key={line} data-doc-heading className="documentation-heading z-40  text-start">
                              {line}
                           </h2>
                        ))}

                        <div className="flex gap-4 items-center w-full">
                           <div
                              data-doc-heading
                              className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197] doc-highlight-line"
                           />
                           <h3 data-doc-heading className="documentation-subheading">
                              {documentationContent.subheading}
                           </h3>
                           
                        </div>
                     </div>
                     <div className="flex w-full h-full  justify-end items-end z-20">
                        <div
                           data-doc-content
                           className="flex w-[50%] md:bg-[#464646] md:mr-[-24px] px-2 md:px-12 rounded-[4px] p-4"
                        >
                           <p className="text-[#d1d1d1] tracking-tighter font-light md:text-xl xl:text-2xl text-justify">
                              {documentationContent.description}
                           </p>
                        </div>
                       
                     </div>
                  </div>
                  <div className="grid min-h-[50vh] content-center pb-10 grid-cols-2 lg:grid-cols-3 gap-9 xl:px-[4%]">
                     {documentationContent.cards.map((card, index) => (
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