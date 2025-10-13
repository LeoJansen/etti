import CertificationCardMobile from "./CertificationCardMobile";
import { certificationCards } from "../CertificationContent";

const CertificationMobile = () => {
   return (
      <section className="relative w-full md:hidden py-16 px-6 bg-gradient-to-r from-[hsl(0,0%,98%)] to-[hsl(0,0%,97.5%)]" id="certification">
         <div className="relative z-10 flex flex-col gap-10">
            <div className="flex flex-col items-end text-center">
               <div className="flex">
                  <h2 className="certification-heading">Certificação</h2>

               </div>
               <div className="flex gap-x-4 w-full items-center">
                  <div className='h-[5px] w-full  bg-[#EBC197] ' />

                  <h2 className="certification-subheading">e Vistoria</h2>

               </div>




               <p className="text-xl font-extralight text-gray-600">
                  Garantimos a qualidade e a conformidade das suas instalações elétricas com serviços de certificação e vistoria.
               </p>
            </div>

            <div className="flex flex-col gap-6">
               {certificationCards.map((card) => (
                  <CertificationCardMobile key={card.title} title={card.title} description={card.description} image={card.image} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default CertificationMobile;
