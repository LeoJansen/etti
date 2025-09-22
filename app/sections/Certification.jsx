// components/CertificationSection.js

import Image from "next/image";


const Certification = () => {
  return (
    <section className="py-16 bg-[#ffffff] lg:h-screen w-screen max-w-screen" id="certification">
      <div className="flex flex-col lg:flex-row w-full px-6">
      
        <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 ">
            Certificação e Vistoria
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Garantimos a qualidade e a conformidade das suas instalações elétricas com serviços de certificação e vistoria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certificação de Instalações Elétricas */}
          <div className="flex flex-col items-center text-center p-8  rounded-[2px]  border-2 border-[#000000]  ">
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
          <div className="w-full flex">
            <Image
              src="/assets/certification2.png"
              alt="Certificação e Vistoria"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg mt-12 lg:mt-0 lg:ml-12"
            />
          
        </div>
      </div>
    </section>
  );
};

export default Certification;