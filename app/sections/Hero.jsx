"use client";
// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

export default function Hero() {
  // Responsive breakpoints (client-only)
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });


  return (
    <section className="relative max-w-screen w-screen h-screen  text-white flex items-center justify-start overflow-hidden">


      
     

      

<div className='absolute top-2/3 left-1/2 flex flex-col items-center'>
 {/* Proposta de Valor */}
       
        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/orcamento"
            className="bg-[#cfcfd8] text-[#131313] font-semibold py-3 px-8 rounded-[3px] hover:bg-gray-200 transition-colors duration-300"
          >
            Solicitar Orçamento
          </Link>
          <Link
            href="/servicos"
            className="bg-transparent text-white border border-white font-semibold py-3 px-8 rounded-[3px] hover:bg-white hover:text-black transition-colors duration-300"
          >
            Conhecer Serviços
          </Link>
        </div>
</div>
       


     
     
     
     <div className='fixed w-full h-full top-0 -z-10'>
      <Image
        src="/assets/hero-bg.png"
        alt="Hero Image"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'bottom',
      
        }}
      />


     </div>
      

    </section>
  );
}