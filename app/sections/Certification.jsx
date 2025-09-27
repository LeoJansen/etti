// components/CertificationSection.js

import Image from "next/image";


const Certification = () => {
  return (
  <section className="py-16 bg-[#F1F2F2] lg:h-screen w-full" id="certification">
      <div className="flex flex-col  w-full ">
      
  
        <div className="flex flex-col w-full text-center mb-12 ">
          <div className="flex flex-col items-end justify-center self-end">
            <div className="bg-[#EB9948] px-4 py-2 rounded-l-md">
              <h2 className="font-extralight tracking-[-0.02em] text-[#FFFFFF] text-[50px] xl:text-[90px] leading-[0.9]">
            Certificação
          </h2>

            </div>
            
          <h2 className="font-extralight tracking-[-0.02em] text-[50px] xl:text-[90px] leading-[1.2]">
            e Vistoria
          </h2>

          </div>
          
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Garantimos a qualidade e a conformidade das suas instalações elétricas com serviços de certificação e vistoria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certificação de Instalações Elétricas */}
          <div className="flex flex-col items-center text-center p-8  rounded-[2px]  border-2 border-t-[#000000]  ">
            <h3 className="text-2xl font-bold text-[#000000]  mb-2">
              Certificação de Instalações Elétricas
            </h3>
            <p className="text-[#000000]">
              Realizamos a certificação oficial das instalações elétricas, garantindo a conformidade com as normas técnicas nacionais e europeias em vigor.
            </p>
          </div>
          {/* Vistorias e Fiscalização */}
          <div className="flex flex-col items-center text-center p-8 rounded-lg ">
            <h3 className="text-2xl font-bold text-gray-900 border-2 border-dashed p-2  mb-2">
              Vistorias e Fiscalização
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Oferecemos serviços de vistoria técnica e fiscalização para assegurar a qualidade e a segurança em todas as fases do projeto. Nossos técnicos realizam inspeções rigorosas, identificando não conformidades e propondo soluções eficazes.
            </p>
          </div>
        </div>
      
      
      </div>
    </section>
  );
};

export default Certification;