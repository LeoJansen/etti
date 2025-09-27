// components/DocumentationSection.js

import Image from "next/image";
import DocCard from "./DocCard";
import { documentationCards } from "./DocumentationContent";
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
        className="-z-10 "
      />

      <div className=" px-6">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-[80px] tracking-[-0.05em] font-light  text-[#929292] mb-4">
              Documentação Técnica
            </h2>
            <h3>Completa</h3>

          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            A Etti Engenharia oferece uma documentação técnica completa para garantir que cada projeto esteja em total conformidade com as normas regulamentares. Nossos documentos detalhados e técnicos são essenciais para licenciamentos e garantem a segurança e a qualidade das instalações elétricas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documentationCards.map((card, index) => (
            <DocCard
              key={index}
              title={card.title}
              description={card.description}
              className={card.className}
              titleClassName={card.titleClassName}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Documentation;