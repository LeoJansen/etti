import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section id="services" className="bg-[#141414] py-16 h-screen w-full max-w-screen">
      <div className=" flex flex-col w-full h-full items-center justify-center  px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-[#b1b1b1] mb-4">
          Nossos Serviços Especializados
        </h2>
        <p className="text-center text-lg text-[#b1b4b9] mb-12">
          Transforme seu projeto com tecnologia e segurança.
        </p>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 lg:px-10 lg:py-20 text-[#b1b4b9] ">

          {/* Cartão de Instalações Elétricas */}
          <div className="metalicCards flex items-center  h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] ">
            <div className='flex w-full xl:w-1/4 justify-center items-start '>
              <Image src="/assets/services1.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25' />
            </div>

            <div className='w-full xl:w-3/4 flex flex-col '>

              <h3 className="text-2xl font-semibold  mb-2 text-[#46464696] text-shadow-[1px_1px_0.78px_rgba(0,0,0,0.121829)]">Instalações Elétricas</h3>
              <p className="text-justify">
                Projetos completos para habitação, edifícios e comércios com as mais recentes normas de segurança.
              </p>
            </div>

          </div>

          {/* Cartão de Sistemas de Segurança */}
          <div className="metalicCards flex  p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] ">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services2.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 mb-4' />
            </div>


            <div className='w-full xl:w-3/4 flex flex-col'>

              <h3 className="text-2xl font-semibold  mb-2 text-[#81848a]">Sistemas de Segurança</h3> <h3 className="text-2xl font-semibold  mb-2 text-[#81848a]">Sistemas de Segurança</h3>
              <p className="text-justify">
                Proteção contra incêndios e sistemas de segurança integrados para máxima tranquilidade.
              </p>

            </div>

          </div>

          {/* Cartão de Automação Residencial */}
          <div className="metalicCards flex  p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33]">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services3.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 mb-4' />
            </div>
            <div className='w-full xl:w-3/4 flex flex-col'>

              <h3 className="text-2xl font-semibold  mb-2 text-[#81848a]">Automação Residencial</h3>
              <p className="text-justify">
                Domótica avançada com protocolo KNX para controle inteligente de toda a habitação.
              </p>

            </div>

          </div>

          {/* Cartão de Certificação Técnica */}
          <div className="metalicCards flex p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33]">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services4.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 mb-4' />
            </div>
            <div className='w-full xl:w-3/4 flex flex-col'>

              <h3 className="text-2xl font-semibold  mb-2 text-[#81848a]">Certificação Técnica</h3>
              <p className="text-justify">
                Documentação completa, certificações e vistorias para garantir conformidade regulamentar.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Services