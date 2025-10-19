"use client";
// components/ContactSection.js
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { initContactAnimation } from "./contactAnimation";
import "./contact.css";

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
   const animationRef = useRef(null);

   useEffect(() => {
      if (!isMobile) {
         animationRef.current = initContactAnimation();
      }

      return () => {
         if (animationRef.current) {
            animationRef.current.kill();
         }
      };
   }, [isMobile]);

   if (isMobile) {
      return <ContactMobile />;
   }

   return (
      <section className="relative bg-[#000F1E] py-8  w-full h-screen " id="contact">
         <Image
            src="/assets/contact/footer-bg6.png"
            alt="Background Pattern"
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className=" bg-image" />
         <div className="absolute z-20 top-[-55px] h-[150px] w-full flex justify-center items-center backdrop-blur-[2px]">
            <h2 className="contact-title text-[#ffffff63] text-[110px]  font-extralight  tracking-[-0.04em] ">Vamos iniciar o seu?</h2>
         </div>


         <div className="flex flex-col h-full gap-12 justify-center items-center  px-6 text-center ">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               {/* Card: Orçamento Gratuito */}
               <div className="contact-card flex flex-col gap-8 backdrop-blur-md p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl  text-[#ff7919] mb-2">
                     Orçamento Gratuito
                  </h3>
                  <p className="text-gray-400">
                     Oferecemos consultoria inicial gratuita e orçamentos detalhados sem compromisso para todos os nossos serviços.
                  </p>
               </div>
               {/* Card: Resposta Rápida */}
               <div className="contact-card flex flex-col gap-8 backdrop-blur-md p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl  text-[#ff7919] mb-2">
                     Resposta Rápida
                  </h3>
                  <p className="text-gray-400">
                     Garantimos resposta em 24 horas e disponibilidade para reuniões presenciais ou virtuais conforme a sua preferência.
                  </p>
               </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-12 mb-12">
               <button className="contact-button border-4 border-[#ff7919] w-70 text-white backdrop-blur-md font-bold py-3 rounded-[6px] shadow-lg bg-[#ff7919] hover:text-white transition duration-300">
                  Fale com um especialista
               </button>
               <button className="contact-button bg-[rgb(5,11,5)] w-70  text-white font-bold py-3  rounded-[6px] shadow-lg hover:bg-transparent hover:text-[#ff7919] backdrop-blur-md transition duration-300">
                  Agendar Reunião
               </button>
            </div>
         </div>
      </section>
   );
};

export default Contact;