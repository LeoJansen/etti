"use client";

import Image from "next/image";
import React from "react";
import { useAboutAnimation } from "./useAboutAnimation";

const AboutDesktop = () => {
  const sectionRef = React.useRef(null);

  useAboutAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative hidden min-h-screen w-full max-w-screen overflow-hidden bg-gray-50 p-12 text-[#313131] md:block"
      id="about"
    >
      <div className="flex h-full w-full flex-col">
        <div className="mb-8 flex w-fit flex-col justify-start rounded-[4px]">
          <div
            id="etti-header"
            className="about-animate-item flex items-center gap-8"
          >
            <div className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197]" />
            <div className="flex">
              <h3 className="about-subheading">Sobre a Etti</h3>
            </div>
          </div>
          <div id="etti-subheader" className="about-animate-item flex w-fit">
            <h2 className="about-heading">Quem somos</h2>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center md:flex-row md:space-x-12">
          <div className="about-animate-item mb-0 flex h-full w-full items-center overflow-hidden rounded-[3px] md:w-1/2">
            <Image
              src="/assets/about.png"
              alt="Equipe da Etti Project em reunião"
              quality={100}
              width={864}
              height={1184}
            />
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center text-xl font-light tracking-tighter text-[#9e9e9e] md:w-1/2 xl:text-2xl">
            <p className="about-animate-item mb-4 text-justify leading-relaxed">
              A Etti é uma empresa especializada em <strong className="font-medium text-[#EB9948]">soluções elétricas e automação</strong>. Nossa missão é transformar espaços através de tecnologia avançada e instalações seguras, oferecendo soluções inovadoras e sustentáveis que melhoram a qualidade de vida dos nossos clientes.
            </p>
            <p className="about-animate-item text-justify leading-relaxed">
              Com uma equipe experiente e certificada, oferecemos um serviço completo, desde o projeto inicial até a certificação final. Isso garante a qualidade e a conformidade em cada instalação que realizamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDesktop;
