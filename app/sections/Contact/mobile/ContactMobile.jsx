"use client";
import Image from "next/image";

const ContactMobile = () => {
   return (
      <section className="relative py-8 w-full min-h-screen overflow-hidden" id="contact">
         <Image
            src="/assets/contact/footer-bg-mobile.png"
            alt="Background Pattern"
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="-z-10"
         />

         <div className="flex flex-col h-full gap-8 justify-between items-center px-4 text-center">
            {/* Mobile Title */}
          
               <span className="text-[#ff7919] block mt-2">
                  Vamos iniciar a sua?
               </span>
          
            {/* Mobile Cards */}
            <div className="flex flex-col gap-6 w-full max-w-sm">
               {/* Card: Orçamento Gratuito */}
               <div className="flex flex-col gap-4 backdrop-blur-md p-6 rounded-lg shadow-md">
                  <h3 className="text-xl text-[#ff7919] mb-2">
                     Orçamento Gratuito
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     Oferecemos consultoria inicial gratuita e orçamentos detalhados sem compromisso para todos os nossos serviços.
                  </p>
               </div>

               {/* Card: Resposta Rápida */}
               <div className="flex flex-col gap-4 backdrop-blur-md p-6 rounded-lg shadow-md">
                  <h3 className="text-xl text-[#ff7919] mb-2">
                     Resposta Rápida
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     Garantimos resposta em 24 horas e disponibilidade para reuniões presenciais ou virtuais conforme a sua preferência.
                  </p>
               </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-4 w-full max-w-xs pb-8">
               <button className="border-2 border-[#ff7919] text-white backdrop-blur-md font-bold py-3 px-6 rounded-[6px] shadow-lg bg-[#ff7919] hover:text-white transition duration-300 text-sm">
                  Fale com um especialista
               </button>
               <button className="bg-[rgb(5,11,5)] text-white font-bold py-3 px-6 rounded-[6px] shadow-lg hover:bg-transparent hover:text-[#ff7919] backdrop-blur-md transition duration-300 text-sm">
                  Agendar Reunião
               </button>
            </div>
         </div>
      </section>
   );
};

export default ContactMobile;