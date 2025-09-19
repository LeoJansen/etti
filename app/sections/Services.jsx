import React from 'react'

const Services = () => {
  return (
      <section id="services" className="bg-[#141414] py-16 h-screen w-full">
      <div className="flex flex-col w-full h-full items-center justify-center  px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-[#b1b1b1] mb-4">
          Nossos Serviços Especializados
        </h2>
        <p className="text-center text-lg text-[#b1b4b9] mb-12">
          Transforme seu projeto com tecnologia e segurança.
        </p>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 lg:px-30 lg:py-20 text-[#b1b4b9]">
          {/* Cartão de Instalações Elétricas */}
          <div className="flex flex-col h-full p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] ">
            <h3 className="text-2xl font-semibold  mb-2 text-[#81848a]">Instalações Elétricas</h3>
            <p className="text-justify">
              Projetos completos para habitação, edifícios e comércios com as mais recentes normas de segurança.
            </p>
          </div>

          {/* Cartão de Sistemas de Segurança */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33]">
            <h3 className="text-2xl font-semibold  mb-2 text-[#81848a]">Sistemas de Segurança</h3>
            <p className="text-justify">
              Proteção contra incêndios e sistemas de segurança integrados para máxima tranquilidade.
            </p>
          </div>

          {/* Cartão de Automação Residencial */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33]">
            <h3 className="text-2xl font-semibold  mb-2 text-[#81848a]">Automação Residencial</h3>
            <p className="text-justify">
              Domótica avançada com protocolo KNX para controle inteligente de toda a habitação.
            </p>
          </div>

          {/* Cartão de Certificação Técnica */}
          <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33]">
            <h3 className="text-2xl font-semibold  mb-2 text-[#81848a]">Certificação Técnica</h3>
            <p className="text-justify">
              Documentação completa, certificações e vistorias para garantir conformidade regulamentar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services