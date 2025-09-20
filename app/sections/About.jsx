// components/About.jsx
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-16 bg-gray-50 h-screen max-w-screen" id="about">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/about.png"
                alt="Equipe da Etti Project em reunião"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Sobre a Etti Project</h2>
            <p className="text-xl text-gray-600 mb-6">Quem somos e a nossa missão</p>
            <p className="text-gray-700 leading-relaxed mb-4">
               Etti Project é uma empresa especializada em **soluções elétricas e automação**. Nossa missão é transformar espaços através de tecnologia avançada e instalações seguras, oferecendo soluções inovadoras e sustentáveis que melhoram a qualidade de vida dos nossos clientes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com uma equipe experiente e certificada, oferecemos um serviço completo, desde o projeto inicial até a certificação final. Isso garante a qualidade e a conformidade em cada instalação que realizamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;