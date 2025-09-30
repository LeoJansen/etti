"use client"
// components/DocumentationSection.js

import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import DocCard from "./DocCard";
import { documentationCards } from "./DocumentationContent";
// Use DocCard to add new documentation items. You can override container styles via `className`
// and title color via `titleClassName`.


const Documentation = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 764px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundSrc = isMounted && isMobile
    ? "/assets/doc-bg-mobile.png"
    : "/assets/doc-bg.png";



  return (
    <section className="relative py-16 w-full h-full lg:h-screen overflow-hidden z-10" id="documentation">
      <Image
        src={backgroundSrc}
        alt="Background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        quality={100}
        className="-z-10 "
      />

      <div className=" px-6 ">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-end  self-end ">

            <h2 className="lg:text-[80px] text-[40px] tracking-[-0.05em] font-light  text-[#8f8f8f] ">
              Documentação
            </h2>
            <h2 className="lg:text-[80px] text-[40px] tracking-[-0.05em] font-light  text-[#8f8f8f] leading-5 md:leading-10">
              Técnica
            </h2>
            <div className="flex gap-4 items-center">
              <div className='h-[7px] w-[125px] rounded-[1.5px] bg-[#4991EB]' />
              <h3 className="lg:text-[40px] text-[30px] tracking-[-0.03em] font-semibold uppercase  text-[#EB9948] md:leading-20">Completa {isMobile}</h3>
            </div>

          </div>

          <p className="text-lg text-[#363636] my-12">
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