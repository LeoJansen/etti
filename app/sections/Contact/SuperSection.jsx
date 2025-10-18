"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
   if (isMobile) {
      return <SuperSectionMobile />;
   }

   if (isMobile) {
      return <SuperSectionMobile />;
   }
   return (
      <div className="super-section h-screen w-full flex flex-col justify-center items-start gap-12 px-6 ">
         <h2 className="text-[150px] leading-[150px] font-extralight text-[hsl(0,0%,70%)]  tracking-[-0.04em] ">
            Todo         <br />
            <span className="text-[150px]  tracking-[-0.05em]  text-[#ff7919] font-normal uppercase "> grande projeto</span>
            <br /> começa com uma conversa.</h2>
      </div>
   )
}

export default SuperSection