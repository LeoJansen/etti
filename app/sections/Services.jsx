import React from 'react'

const Services = () => {
  return (
      <section id="services" className="bg-[#141414] py-16 h-screen w-full">
      <div className="flex flex-col items-center justify-center  mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-[#b1b1b1] mb-4">
          Nossos Serviços Especializados
        </h2>
        <p className="text-center text-lg text-[#b1b4b9] mb-12">
          Transforme seu projeto com tecnologia e segurança.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cartão de Instalações Elétricas */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#2c2c2c] mb-2">Instalações Elétricas</h3>
            <p className="text-[#374151]">
              Projetos completos para habitação, edifícios e comércios com as mais recentes normas de segurança.
            </p>
          </div>

          {/* Cartão de Sistemas de Segurança */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#4b5563] mb-2">Sistemas de Segurança</h3>
            <p className="text-[#374151]">
              Proteção contra incêndios e sistemas de segurança integrados para máxima tranquilidade.
            </p>
          </div>

          {/* Cartão de Automação Residencial */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#4b5563] mb-2">Automação Residencial</h3>
            <p className="text-[#374151]">
              Domótica avançada com protocolo KNX para controle inteligente de toda a habitação.
            </p>
          </div>

          {/* Cartão de Certificação Técnica */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#4b5563] mb-2">Certificação Técnica</h3>
            <p className="text-[#374151]">
              Documentação completa, certificações e vistorias para garantir conformidade regulamentar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services