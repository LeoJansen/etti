import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section id="services" className="bg-[#141414] py-16 h-screen w-full max-w-screen">

      <div className=" flex flex-col w-full h-full items-center justify-center  px-4 md:px-8 lg:px-16">
        <h3 className="text-4xl font-bold text-center text-[#b1b1b1] mb-4">
          Nossos Serviços Especializados
        </h3>
        <p className="text-center text-lg text-[#b1b4b9] mb-12">
          Transforme seu projeto com tecnologia e segurança.
        </p>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 lg:px-10 lg:py-20 text-[#b1b4b9] ">

          {/* Cartão de Instalações Elétricas */}
          <div className="metalicCards flex p-6  items-center h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] ">
            <div className='flex w-full xl:w-1/4 justify-center items-start '>
              <Image src="/assets/services1.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
            <div className='w-full h-full xl:w-3/4 flex flex-col gap-8   justify-center items-center bg-[#151618] rounded-[8px] terminal-text p-8'>
              <div className='h-10 w-full flex justify-center '>
                <h3 className="text-2xl font-medium ">Instalações Elétricas</h3>
              </div>
              <div className='flex w-full h-full'>
                <p className=" text-justify text-[22px] tracking-wide">
                  Projetos completos para habitação, edifícios e comércios com as mais recentes normas de segurança.
                </p>

              </div>

            </div>
          </div>

          {/* Cartão de Sistemas de Segurança */}
          <div className="metalicCards flex p-6  items-center  h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] ">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services2.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
             <div className='w-full xl:w-3/4 flex flex-col gap-8  h-full justify-stretch bg-[#151618] rounded-[8px]  p-8 terminal-text'>
             <div className='h-10 w-full flex justify-center '>
                <h3 className="text-2xl font-medium  tracking-wide">Sistemas de Segurança</h3>
              </div>
              <div className=' flex w-full h-full rounded-[8px]  '>
                <p className="text-justify text-[22px] tracking-wide">
                  Proteção contra incêndios e sistemas de segurança integrados para máxima tranquilidade.
                </p>
              </div>

            </div>
          </div>

          {/* Cartão de Automação Residencial */}
          <div className="metalicCards flex  p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33]">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services3.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
             <div className='w-full xl:w-3/4 flex flex-col gap-8  h-full justify-stretch bg-[#151618] rounded-[8px]  p-8 terminal-text '>
              <div className='h-10 w-full flex justify-center'>
                <h3 className="text-2xl font-semibold tracking-wide ">Automação Residencial</h3>
              </div>
              <div className='flex w-full h-full '>
                <p className="text-justify text-[22px] tracking-wide">
                  Domótica avançada com protocolo KNX para controle inteligente de toda a habitação.
                </p>
              </div>
            </div>
          </div>

          {/* Cartão de Certificação Técnica */}
          <div className="metalicCards flex p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33]">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services4.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
               <div className='w-full xl:w-3/4 flex flex-col gap-8  h-full justify-stretch bg-[#151618] rounded-[8px]  p-8 terminal-text'>
              <div className='h-10 w-full flex justify-center'>
                <h3 className="text-2xl font-semibold tracking-wide">Certificação Técnica</h3>
              </div>
              <div className='flex w-full h-full '>
                <p className="text-justify text-[22px] tracking-wide">
                  Documentação completa, certificações e vistorias para garantir conformidade regulamentar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services