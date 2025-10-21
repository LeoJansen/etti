"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useHeroAnimantion } from '../useHeroAnimation';
import { useHeroSectionAnimation } from '../useHeroSectionAnimation';

export default function HeroMobile() {
  const glowRef = useRef(null);
  const sectionRef = useRef(null);

  // Reutiliza os mesmos hooks de animação da versão desktop
  useHeroAnimantion(glowRef, '#F38B23');
  useHeroSectionAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen text-white flex items-center justify-start overflow-hidden"
    >
      {/* Heading/Box */}
      <div className="w-full flex justify-center px-4 z-20">
        <div
          data-hero-box
          className="border-2 border-[#F38B23] p-4 w-full max-w-[700px] backdrop-blur-[1px]"
        >
          <h2
            data-hero-heading
            className="relative text-3xl sm:text-4xl text-[#fd810441] font-medium leading-snug"
          >
            <span className="relative z-10 block text-white">
              O futuro do seu espaço começa com um projeto inteligente.
            </span>
            {/* Neon glow overlay behind the text */}
            <span
              aria-hidden="true"
              ref={glowRef}
              className="pointer-events-none select-none absolute inset-0 z-0 text-[#ffffff59]"
            >
              O futuro do seu espaço começa com um projeto inteligente.
            </span>
          </h2>
        </div>
      </div>

      {/* Botões de Ação */}
      <div
        data-hero-cta
        className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30 pointer-events-auto"
      >
        <div className="flex flex-col justify-center gap-4">
          <Link
            href="#contact"
            className="bg-[#0D0D0D] text-[#e9e9e9] font-semibold py-3 px-8 rounded-[3px] hover:bg-gray-200 hover:text-[#0D0D0D] transition-colors duration-300 text-center"
          >
            Solicitar Orçamento
          </Link>
          <Link
            href="#services"
            className="bg-transparent text-[#FF7919] border-2 border-[#FF7919] font-semibold py-3 px-8 rounded-[3px] hover:bg-[#EB9948] hover:text-white transition-colors duration-300 text-center"
          >
            Conhecer Serviços
          </Link>
        </div>
      </div>

      {/* Background Image para Mobile (animável) */}
      <div data-hero-bg className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/heroMobile.png"
          alt="Hero Image"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-[25%_100%]"
        />
      </div>
    </section>
  );
}
