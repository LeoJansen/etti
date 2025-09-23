// components/DocumentationSection.js

import Image from "next/image";


const Documentation = () => {
  return (
    <section className="relative py-16 w-screen max-w-screen h-full lg:h-screen overflow-hidden bg-[#0000002a]" id="documentation">
      <Image
        src="/assets/docBackground.png"
        alt="Background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        quality={100}
        priority
        className="-z-10 brightness-[0.8] saturate-[0.7] contrast-[0.85]"
      />
    
      <div className=" px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Documentação Técnica Completa
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            A Etti Engenharia oferece uma documentação técnica completa para garantir que cada projeto esteja em total conformidade com as normas regulamentares. Nossos documentos detalhados e técnicos são essenciais para licenciamentos e garantem a segurança e a qualidade das instalações elétricas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ficha Eletrotécnica */}
          <div className=" bg-[#111111] vv p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-[#a7a7a7] mb-4">
              Ficha Eletrotécnica
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Documento oficial com especificações técnicas detalhadas da instalação elétrica[cite: 44, 45, 46]. Essencial para licenciamentos[cite: 47].
            </p>
          </div>
          {/* Memória Descritiva */}
          <div className="bg-[#111111] p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Memória Descritiva
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Contém cálculos de dimensionamento pormenorizados e justificação técnica de todas as soluções implementadas[cite: 49, 50, 55].
            </p>
          </div>
          {/* Termo de Responsabilidade */}
          <div className="bg-[#111111] p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Termo de Responsabilidade
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Emissão de termo de responsabilidade técnica pelo projeto, garantindo conformidade regulamentar[cite: 52, 53, 56].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;