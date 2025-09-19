// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-start overflow-hidden">
      {/* Background Image/Video - Use a imagem da primeira página */}

      {/* Conteúdo da Seção Hero */}
      <div className="relative z-10 text-center w-1/2 h-full flex flex-col justify-center items-center bg-[#10151ba1] backdrop-blur-[1px] p-8 ">
        {/* Título Principal */}
        <h1 className="font-title text-4xl md:text-6xl font-bold mb-4">
          Etti Project
        </h1>

        {/* Proposta de Valor */}
        <p className="text-lg md:text-2xl mb-8">
          Soluções completas em instalações elétricas e automação
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/orcamento"
            className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300"
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