// components/About.jsx
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen max-w-screen overflow-hidden z-120" id="about">
      <div className="flex flex-col w-full h-full px-4 md:px-8 lg:px-16 text-[#313131] ">
        <div className='p-4 rounded-[4px]    mb-4 md:mb-8 flex flex-col justify-start w-full'>

          <div className='flex gap-5 md:gap-8 items-center'>
            <h3 className="text-[32px] md:text-[40px]  text-[#EB9948] leading-10 md:leading-14 font-semibold tracking-tight uppercase">Sobre a Etti</h3>
            <div className='h-[6px] w-[70px] md:w-[165px] rounded-[1.5px] bg-[#4991EB]' />
          </div>

          <h2 className="text-[48px] md:text-[70px] lg:text-[95px] tracking-[-0.08em]  font-extralight leading-11 md:leading-14  mb-6 text-[#929292] ">Quem somos e a nossa missão</h2>
        </div>
        <div className="flex flex-col md:flex-row w-full h-full justify-center items-center md:space-x-12">

          <div className="w-full h-full md:w-1/2 flex items-center mb-8 md:mb-0">
            
              <Image
                src="/assets/about4.png"
                alt="Equipe da Etti Project em reunião"
               
                quality={100}
                width={864}
                height={1184}
              />
            
          </div>
          <div className="md:w-1/2 h-full flex flex-col justify-center items-center">



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