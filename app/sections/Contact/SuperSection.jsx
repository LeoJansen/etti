"use client"
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDictionary } from "@/src/site/context/DictionaryContext";

gsap.registerPlugin(ScrollTrigger);

const SuperSectionMobile = dynamic(() => import("./mobile/SuperSectionMobile"), {
   ssr: false,
});

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


const SuperSection = () => {
   const isMobile = useIsMobile();
   const textRef = useRef(null);
   const { dictionary } = useDictionary();

   const lines = useMemo(() => {
      const fallbackLines = [
         { text: "Todo" },
         { text: "grande projeto", highlight: true },
         { text: "começa com" },
         { text: "uma conversa." },
      ];
      const source = (dictionary.superSection?.lines ?? []).length
         ? dictionary.superSection?.lines
         : fallbackLines;
      return source.map((line, index) => ({
         id: line.id ?? `line-${index}`,
         text: line.text ?? "",
         highlight: Boolean(line.highlight),
      }));
   }, [dictionary.superSection]);

   useEffect(() => {
      const heading = textRef.current;
      if (isMobile || !heading) {
         return undefined;
      }

      const ctx = gsap.context(() => {
         const letters = gsap.utils.toArray(".super-section-letter");
         if (!letters.length) {
            return;
         }

         gsap.set(letters, { opacity: 0 });

         gsap
            .timeline({
               scrollTrigger: {
                  trigger: heading,
                  start: "top 80%",
                  once: true,
               },
            })
            .to(letters, {
               opacity: 1,
               duration: 0.6,
               ease: "power2.out",
               stagger: 0.05,
            });
      }, heading);

      return () => ctx.revert();
   }, [isMobile]);

   if (isMobile) {
      return <SuperSectionMobile />;
   }

   return (
      <div className="super-section relative h-screen w-full flex flex-col justify-center items-start gap-12 p-12 z-20">
         <h2
            ref={textRef}
            className="text-[150px] leading-[150px] font-extralight text-[hsl(0,0%,70%)] tracking-[-0.04em]"
         >
            {lines.map(({ id, text, highlight }) => (
               <span key={id} className={`block ${highlight ? "text-[#EB9948]" : ""}`}>
                  {text.split("").map((char, index) => (
                     <span
                        key={`${id}-${index}`}
                        className="super-section-letter inline-block opacity-0"
                     >
                        {char === " " ? "\u00A0" : char}
                     </span>
                  ))}
               </span>
            ))}
         </h2>
      </div>
   )
}

export default SuperSection