"use client";
// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  // No runtime media-query logic; use responsive CSS classes to avoid hydration mismatches


  return (
    <section className="relative max-w-screen w-screen h-screen  text-white flex items-center justify-start overflow-hidden">


      
     

      

<div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 flex flex-col items-center'>
 {/* Proposta de Valor */}
       
        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/orcamento"
            className="bg-[#0f0f11] text-[#e9e9e9] font-semibold py-3 px-8 rounded-[3px] hover:bg-gray-200 transition-colors duration-300 text-center"
          >
            Solicitar Orçamento
          </Link>
          <Link
            href="/servicos"
            className="bg-transparent text-white border border-white font-semibold py-3 px-8 rounded-[3px] hover:bg-white hover:text-black transition-colors duration-300 text-center"
          >
            Conhecer Serviços
          </Link>
        </div>
</div>
       


     
     
     
     <div className='fixed w-full h-full top-0 -z-10'>
      <Image
        src="/assets/hero-bg4.png"
        alt="Hero Image"
        quality={100}
        fill
        sizes="100vw"
        className="object-cover object-[25%_100%] md:object-center lg:object-bottom hidden md:block"
      />
       <Image
        src="/assets/hero-bg4.png"
        alt="Hero Image"
        quality={100}
        fill
        sizes="100vw"
        className="object-cover object-[25%_100%] md:object-center lg:object-bottom md:hidden"
      />


     </div>
      

    </section>
  );
}