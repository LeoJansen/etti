"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function HeroMobile() {
  return (
    <section className="relative w-full h-screen text-white flex items-center justify-start overflow-hidden">
      
      <div className='absolute top-3/4 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center'>
        {/* Botões de Ação */}
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
       
      {/* Background Image para Mobile */}
      <div className='fixed w-full h-full top-0 -z-10'>
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
