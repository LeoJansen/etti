"use client";
import Image from 'next/image';
import Link from 'next/link';
import HeroMobile from './mobile/HeroMobile';

export default function Hero() {
  return (
    <>
      {/* Versão Desktop - visível apenas em md e acima */}
      <section className="relative w-full h-screen text-white hidden md:flex items-center justify-start overflow-hidden">
        
        <div className='absolute top-3/4 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center'>
          {/* Botões de Ação */}
          <div className="flex flex-row justify-center gap-4">
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
        
        {/* Background Image para Desktop */}
        <div className='fixed w-full h-full top-0 -z-10'>
          <Image
            src="/assets/hero-bg4.png"
            alt="Hero Image"
            quality={100}
            fill
            sizes="100vw"
            className="object-cover object-[25%_100%] md:object-center lg:object-bottom"
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