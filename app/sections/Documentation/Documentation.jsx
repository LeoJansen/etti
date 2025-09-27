// components/DocumentationSection.js

import Image from "next/image";
import DocCard from "./DocCard";
// Use DocCard to add new documentation items. You can override container styles via `className`
// and title color via `titleClassName`.


const Documentation = () => {
  return (
  <section className="relative py-16 w-full h-full lg:h-screen overflow-hidden " id="documentation">
      <Image
        src="/assets/doc-bg2.png"
        alt="Background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        quality={100}
        priority
        className="-z-10 "
      />
    
      <div className=" px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Documentação Técnica Completa
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            A Etti Engenharia oferece uma documentação técnica completa para garantir que cada projeto esteja em total conformidade com as normas regulamentares. Nossos documentos detalhados e técnicos são essenciais para licenciamentos e garantem a segurança e a qualidade das instalações elétricas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ficha Eletrotécnica */}
          <DocCard
            title="Ficha Eletrotécnica"
            description={
              "Documento oficial com especificações técnicas detalhadas da instalação elétrica[cite: 44, 45, 46]. Essencial para licenciamentos[cite: 47]."
            }
            className="bg-[#E7E7E7]"
            titleClassName="text-[#a7a7a7]"
          />

          {/* Memória Descritiva */}
          <DocCard
            title="Memória Descritiva"
            description={
              "Contém cálculos de dimensionamento pormenorizados e justificação técnica de todas as soluções implementadas[cite: 49, 50, 55]."
              
            }
            className="bg-[#EFEFEF]"
          />

          {/* Termo de Responsabilidade */}
          <DocCard
            title="Termo de Responsabilidade"
            description={
              "Emissão de termo de responsabilidade técnica pelo projeto, garantindo conformidade regulamentar[cite: 52, 53, 56]."
            }
            className="bg-[#EFEFEF]"
          />
        </div>
      </div>
    </section>
  );
};

export default Documentation;