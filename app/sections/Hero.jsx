// components/HeroSection.js
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Image/Video - Use a imagem da primeira página */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }} // Certifique-se de adicionar a imagem ao diretório /public/images
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Conteúdo da Seção Hero */}
      <div className="relative z-10 text-center px-4">
        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
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
    </section>
  );
}