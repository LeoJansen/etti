// components/ContactSection.js

import Image from "next/image";


const Contact = () => {
   return (
      <section className="relative py-8  w-full h-screen overflow-hidden" id="contact">
         <Image
            src="/assets/contact/footer-bg3.png"
            alt="Background Pattern"
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="-z-10" />

         <div className="flex flex-col h-full gap-12 justify-between items-center  px-6 text-center">
            <h2 className="text-7xl font-extralight text-[hsl(0,0%,90%)]  tracking-[-0.05em] ">
               Todo grande projeto começa com uma conversa. <span className="text-[#ff7919]">Vamos iniciar a sua?</span>          </h2>

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
               <button className="border-4 border-[#ff7919] text-[#ff7919] backdrop-blur-md font-bold py-3 px-8 rounded-[6px] shadow-lg hover:bg-[#ff7919] hover:text-white transition duration-300">
                  Fale com um especialista         
                   </button>
               <button className="bg-[#ff7919] border-4 border-[#ff7919] text-white font-bold py-3 px-8 rounded-[6px] shadow-lg hover:bg-transparent hover:text-[#ff7919] backdrop-blur-md transition duration-300">
                  Agendar Reunião
               </button>
            </div>
         </div>
      </section>
   );
};

export default Contact;