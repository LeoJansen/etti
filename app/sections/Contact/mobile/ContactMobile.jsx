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

         <div id="contact-info" className="flex flex-col h-full  gap-12 justify-end items-center  text-center z-40">
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
            <div className="contact-footer flex-col  gap-2 w-full  justify-center items-between   bg-[#000F1E] ">
               <div className="flex flex-col justify-between items-center p-4 py-8 gap-6">
                  <div className="flex w-full justify-between">
                     <div className="flex flex-col gap-4">
                        <div className="flex  gap-4  items-center">
                           <Image
                              src="/assets/contact/phone.svg"
                              alt="Etti Logo"
                              width={22}
                              height={22}
                           />
                           <p className="text-[#aaaaaa] text-xl font-light">+351 927 553 947</p>

                        </div>
                        <div className="flex  gap-4  items-center">
                           <Image
                              src="/assets/contact/mail.svg"
                              alt="Etti Logo"
                              width={30}
                              height={30}
                           />
                           <p className="text-[#aaaaaa] text-xl font-light">geral@etti.pt</p>

                        </div>
                     </div>
                     <div className="flex gap-6">
                        <Image
                           src="/assets/contact/instagram.svg"
                           alt="Etti Logo"
                           width={30}
                           height={30}
                        />
                        <Image
                           src="/assets/contact/whatsapp.svg"
                           alt="Etti Logo"
                           width={30}
                           height={30}
                        />
                        <Image
                           src="/assets/contact/linkedin.svg"
                           alt="Etti Logo"
                           width={30}
                           height={30}
                        />
                     </div>

                  </div>

                  <div>
                     <p className="text-[#797979] text-lg font-light">© 2025 Etti. Todos os direitos reservados.</p>
                  </div>
                  <div className="flex flex-col w-full items-end">
                     <p className="text-[#636363]">Desenvolvido por <a href="https://www.etti.pt" className="text-[#949494]">Leonardo Jansen</a></p>
                     <a href="https://www.leonardojansen.com" className="text-[#636363]">www.leonardojansen.com</a>

                  </div>

               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactMobile;