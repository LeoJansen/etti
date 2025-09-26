// components/About.jsx
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen max-w-screen overflow-hidden z-120" id="about">
      <div className="flex flex-col w-full h-full px-4 md:px-8 lg:px-16 text-[#313131] ">
        <div className='p-4 rounded-[4px]    mb-16 flex flex-col justify-start w-full'>
          <h3 className="text-[30px] md:text-[40px] font-medium   text-[#313131] tracking-tight uppercase">Sobre a Etti</h3>
          <h2 className="text-[48px] md:text-[70px] tracking-[-0.05em]  font-extralight leading-10  mb-6 text-[#a8a8a8] ">Quem somos e a nossa missão</h2>
        </div>
        <div className="flex flex-col md:flex-row w-full h-full justify-center items-center md:space-x-12">

          <div className="w-full h-full md:w-1/2 flex items-center mb-8 md:mb-0">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/about3.png"
                alt="Equipe da Etti Project em reunião"
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="md:w-1/2 h-full flex flex-col justify-center items-center">


            <p className="text-xl  mb-6">Quem somos e a nossa missão</p>
            <p className=" leading-relaxed mb-4 text-justify">
              Etti Project é uma empresa especializada em <strong>soluções elétricas e automação</strong>. Nossa missão é transformar espaços através de tecnologia avançada e instalações seguras, oferecendo soluções inovadoras e sustentáveis que melhoram a qualidade de vida dos nossos clientes.
            </p>
            <p className=" leading-relaxed text-justify">
              Com uma equipe experiente e certificada, oferecemos um serviço completo, desde o projeto inicial até a certificação final. Isso garante a qualidade e a conformidade em cada instalação que realizamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;