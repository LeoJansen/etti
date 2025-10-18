"use client";
// components/ContactSection.js
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const ContactMobile = dynamic(() => import("./mobile/ContactMobile"), {
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


const Contact = () => {
   const isMobile = useIsMobile();
   if (isMobile) {
      return <ContactMobile />;
   }

   return (
      <section className="relative py-8  w-full h-screen overflow-hidden" id="contact">
         <Image
            src="/assets/contact/footer-bg6.png"
            alt="Background Pattern"
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="-z-10" />

         <div className="flex flex-col h-full gap-12 justify-between items-center  px-6 text-center hidden">
           <span className="text-[#ff7919]">Vamos iniciar a sua?</span>  

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               {/* Card: Orçamento Gratuito */}
               <div className="flex flex-col gap-8 backdrop-blur-md p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl  text-[#ff7919] mb-2">
                     Orçamento Gratuito
                  </h3>
                  <p className="text-gray-400">
                     Oferecemos consultoria inicial gratuita e orçamentos detalhados sem compromisso para todos os nossos serviços.
                  </p>
               </div>
               {/* Card: Resposta Rápida */}
               <div className="flex flex-col gap-8 backdrop-blur-md p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl  text-[#ff7919] mb-2">
                     Resposta Rápida
                  </h3>
                  <p className="text-gray-400">
                     Garantimos resposta em 24 horas e disponibilidade para reuniões presenciais ou virtuais conforme a sua preferência.
                  </p>
               </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-12 mb-12">
               <button className="border-4 border-[#ff7919] w-70 text-white backdrop-blur-md font-bold py-3 rounded-[6px] shadow-lg bg-[#ff7919] hover:text-white transition duration-300">
                  Fale com um especialista         
                   </button>
               <button className="bg-[rgb(5,11,5)] w-70  text-white font-bold py-3  rounded-[6px] shadow-lg hover:bg-transparent hover:text-[#ff7919] backdrop-blur-md transition duration-300">
                  Agendar Reunião
               </button>
            </div>
         </div>
      </section>
   );
};

export default Contact;