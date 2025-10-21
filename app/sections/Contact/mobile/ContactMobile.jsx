"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { initContactMobileAnimation } from "./contactMobileAnimation";
import "../contact.css";
import { whatsAppLink } from "@/app/constants";

const ContactMobile = () => {
   const animationRef = useRef(null);

   useEffect(() => {
      animationRef.current = initContactMobileAnimation();

      return () => {
         if (animationRef.current) {
            animationRef.current.kill();
         }
      };
   }, []);

   return (
      <section className="relative w-full flex bg-[#001524] z-20" id="contact">
         <Image
            src="/assets/contact/footer-bg-mobile2.png"
            alt="Background Pattern"
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="bg-image-mobile"
         />
         
            <div className="absolute z-20 top-[-5px] h-[150px] w-full flex justify-center items-end backdrop-blur-[6px] px-[2%]">
            
            </div>

         <div id="contact-info" className="flex flex-col h-full  gap-12 justify-end items-center px-4 text-center z-40">
            {/* Mobile Title */}
   <h2 className="contact-title-mobile text-[#ffffff63] text-[50px] leading-[50px] font-thin tracking-[-0.04em]">Vamos iniciar o seu?</h2>

            {/* Mobile Cards */}
            <div className="flex flex-col gap-4 w-full max-w-sm " >
               {/* Card: Orçamento Gratuito */}
               <div className="contact-card-mobile flex flex-col gap-2 backdrop-blur-[4px] p-4 rounded-lg shadow-md">
                  <h3 className="text-xl text-[#ff7919] ">
                     Orçamento Gratuito
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                     Oferecemos consultoria inicial gratuita e orçamentos detalhados sem compromisso para todos os nossos serviços.
                  </p>
               </div>

               {/* Card: Resposta Rápida */}
               <div className="contact-card-mobile flex flex-col gap-2 backdrop-blur-[4px] p-4 rounded-lg shadow-md">
                  <h3 className="text-xl text-[#ff7919] ">
                     Resposta Rápida
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                     Garantimos resposta em 24 horas e disponibilidade para reuniões presenciais ou virtuais conforme a sua preferência.
                  </p>
               </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-xs pb-8">
               <button onClick={() => window.open(whatsAppLink, "_blank")} className="contact-button-mobile border-2 border-[#ff7919] text-white backdrop-blur-md font-bold py-3 px-2 rounded-[6px] shadow-lg bg-[#ff7919] hover:text-white transition duration-300 text-sm w-50">
                  Fale com um especialista
               </button>
               <button className="contact-button-mobile bg-[rgb(5,11,5)] text-white font-bold py-3 px-2 rounded-[6px] shadow-lg hover:bg-transparent hover:text-[#ff7919] backdrop-blur-md transition duration-300 text-sm w-50">
                  Agendar Reunião
               </button>
            </div>
              <div className="contact-footer flex flex-col gap-2 w-full  justify-center items-end border-t-2 border-[#3b3b3b4f] p-6 backdrop-blur-[2px] ">
               <h5 className="text-[#ff7919] text-[22px] font-light">+351 927 553 947</h5>
               <h5 className="text-[#ff7919] text-[22px] font-light">geral@etti.pt</h5>

            </div>
         </div>
      </section>
   );
};

export default ContactMobile;