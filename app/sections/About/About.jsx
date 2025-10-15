// components/About.jsx
import Image from 'next/image';

const About = () => {
   return (
      <section className="py-16 bg-gray-50 min-h-screen max-w-screen overflow-hidden z-120" id="about">
         <div className="flex flex-col w-full h-full px-4 md:px-8 lg:px-16 text-[#313131] ">
            <div className='p-4 rounded-[4px]    mb-4 md:mb-8 flex flex-col justify-start w-fit'>
               <div id="etti-header" className='flex gap-5 md:gap-8 items-center'>
                    <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' />
                  <div className='flex'>
                     <h3 className="about-subheading ">Sobre a Etti</h3>
                  </div>

                 
               </div>
               <div id="etti-subheader" className='flex w-fit'>
                  <h2 className="about-heading">Quem somos</h2>
               </div>

            </div>
            <div className="flex flex-col md:flex-row w-full h-full justify-center items-center md:space-x-12">
               <div className="w-full h-full md:w-1/2 flex items-center mb-8 rounded-sm overflow-hidden md:mb-0">
                  <Image
                     src="/assets/about.png"
                     alt="Equipe da Etti Project em reunião"
                     quality={100}
                     width={864}
                     height={1184}
                  />
               </div>
               <div className="md:w-1/2 h-full flex flex-col justify-center items-center text-[#9e9e9e] tracking-tighter font-light text-xl xl:text-2xl ">
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