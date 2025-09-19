// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-start overflow-hidden">


      
      <div className="relative z-10 text-center w-full md:w-1/2 h-full flex flex-col justify-around items-center bg-[#0f141a94] backdrop-blur-[1px] md:p-8 ">
      <div className='flex flex-col items-center bg-[#0f141a94] rounded-[220px]'>
        <Image
          src="/assets/ettiColor.png"
          alt="Hero Image"
          quality={100}
          width={683}
          height={683}
          className="mb-4 w-50 h-50 md:w-65 md:h-65 "
        />

      </div>
        
        

<div className='flex flex-col items-center'>
 {/* Proposta de Valor */}
        <p className="text-lg md:text-2xl mb-8 text-[#b9b9b9] font-light tracking-wide">
          Soluções completas em instalações elétricas e automação
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/orcamento"
            className="bg-[#cfcfd8] text-[#131313] font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Solicitar Orçamento
          </Link>
          <Link
            href="/servicos"
            className="bg-transparent text-white border border-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            Conhecer Serviços
          </Link>
        </div>
</div>
       
      </div>

      <Image
        src="/assets/hero-image.png"
        alt="Hero Image"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'bottom',
        }}
      />


    </section>
  );
}