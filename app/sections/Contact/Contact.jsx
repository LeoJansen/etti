"use client";
// components/ContactSection.js
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { initContactAnimation } from "./contactAnimation";
import "./contact.css";
import { whatsAppLink } from "@/app/constants";

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
      <section className="relative bg-[#000F1E]  w-full h-full " id="contact">
         <Image
            src="/assets/contact/footer-bg6.png"
            alt="Background Pattern"
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className=" bg-image" />
         <div className="absolute z-20 top-[-50px] h-[190px] w-full flex justify-center items-end backdrop-blur-[6px] ">
            <h2 className="contact-title text-[#ffffff63] text-[110px] leading-[100px] font-thin  tracking-[-0.04em] mt-5">Vamos iniciar o seu?</h2>
         </div>


         <div className="flex flex-col h-full gap-12 justify-center items-center   text-center">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 h-full mt-90 px-6">
               {/* Card: Orçamento Gratuito */}
               <div className="contact-card flex flex-col gap-8 backdrop-blur-md p-8 rounded-[3px] shadow-md h-fit ">
                  <h3 className="text-2xl  text-[#ff7919] mb-2">
                     Orçamento Gratuito
                  </h3>
                  <p className="text-gray-400">
                     Oferecemos consultoria inicial gratuita e orçamentos detalhados sem compromisso para todos os nossos serviços.
                  </p>
               </div>
               {/* Card: Resposta Rápida */}
               <div className="contact-card flex flex-col  gap-8 backdrop-blur-md p-8 rounded-[3px] shadow-md h-fit">
                  <h3 className="text-2xl  text-[#ff7919] mb-2">
                     Resposta Rápida
                  </h3>
                  <p className="text-gray-400">
                     Garantimos resposta em 24 horas e disponibilidade para reuniões presenciais ou virtuais conforme a sua preferência.
                  </p>
               </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-12 mb-12">
               <button onClick={() => window.open(whatsAppLink, "_blank")} className="contact-button border-4 border-[#ff7919] w-70 text-white font-bold py-3 rounded-[3px] shadow-lg bg-[#ff7919] hover:text-white transition duration-300">
                  Fale com um especialista
               </button>
               <button className="contact-button bg-[rgb(5,11,5)] w-70  text-white font-bold py-3  rounded-[3px] shadow-lg hover:bg-transparent hover:text-[#ff7919]  transition duration-300 ">
                  Agendar Reunião
               </button>
            </div>
            <div className="contact-footer flex flex-col  gap-2 w-full  justify-between items-between   bg-[#000F1E] p-4 ">
               <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-4 ml-6 mt-2">
                     <div className="flex  gap-4  items-center m">
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
                  <div>
                     <p className="text-[#797979] text-lg font-light">© 2025 Etti. Todos os direitos reservados.</p>
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
               <div className="flex flex-col w-full items-end">
                  <p className="text-[#636363]">Desenvolvido por <a href="https://www.etti.pt" className="text-[#949494]">Leonardo Jansen</a></p>
                  <a href="https://www.leonardojansen.com" className="text-[#636363]">www.leonardojansen.com</a>

               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;