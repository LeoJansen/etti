"use client";
import Image from 'next/image';
import Link from 'next/link';
import HeroMobile from './mobile/HeroMobile';
import { useRef } from 'react';
import { useHeroAnimantion } from './useHeroAnimation';
import { useHeroSectionAnimation } from './useHeroSectionAnimation';

export default function Hero() {
  const glowRef = useRef(null);
  const sectionRef = useRef(null);
  useHeroAnimantion(glowRef, '#F1CFAD');
  useHeroSectionAnimation(sectionRef);
  return (
    <>
      {/* Versão Desktop - visível apenas em md e acima */}
  <section ref={sectionRef} className="relative w-full h-screen bg-black text-white hidden md:flex items-center justify-start overflow-hidden">
        
        <div className='w-full h-full flex flex-col justify-around items-center z-40'>

          <div data-hero-box className='ml-[50%] border-2 border-[#F1CFAD] p-8 w-1/2 flex justify-center items-center  z-140'>
            <h2 data-hero-heading className='relative inline-block text-7xl text-[#F1CFAD] leading-tight z-120'>
              <span className='relative z-10'>
                O futuro do seu espaço começa com um projeto inteligente.
              </span>
              {/* Neon glow overlay behind the text */}
              <span
                aria-hidden='true'
                ref={glowRef}
                className='pointer-events-none select-none absolute inset-0 z-0 text-[#F1CFAD]'
              >
                O futuro do seu espaço começa com um projeto inteligente.
              </span>
            </h2>


          </div>
          {/* Botões de Ação */}
          <div data-hero-cta className="flex flex-row justify-center gap-4 z-80">
            <Link
              href="/orcamento"
              className="bg-[#0D0D0D] text-[#e9e9e9] font-semibold py-3 px-8 rounded-[3px] hover:bg-gray-200 hover:text-[#0D0D0D] transition-colors duration-300 text-center"
            >
              Solicitar Orçamento
            </Link>
            <Link
              href="/servicos"
              className="bg-transparent text-[#FFFFFF] border border-[#ffffff] font-semibold py-3 px-8 rounded-[3px] hover:bg-[#EB9948] hover:text-white transition-colors duration-300 text-center"
            >
              Conhecer Serviços
            </Link>
          </div>
        </div>
        
        {/* Background Image para Desktop (inicia invisível; aparece com a animação) */}
  <div data-hero-bg className='fixed w-full h-full top-0 '>
          <Image
            src="/assets/hero-bg4.png"
            alt="Hero Image"
            quality={100}
            fill
            sizes="100vw"
            className="object-cover object-[25%_100%] md:object-center lg:object-bottom "
          />
        </div>

      </section>

      {/* Versão Mobile - visível apenas em telas menores que md */}
      <div className="md:hidden">
        <HeroMobile />
      </div>
    </>
  );
}