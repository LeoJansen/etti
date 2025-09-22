// components/AutomationSection.js
import React from 'react';

const Automation = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] w-screen max-w-screen overflow-hidden" id="automation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Automação Residencial com KNX
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Transforme sua casa em uma habitação inteligente com nossa expertise em domótica e protocolo KNX, o padrão mundial para automação predial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Iluminação Inteligente */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Iluminação Inteligente
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Controle total da iluminação com cenários personalizados e eficiência energética otimizada.
            </p>
          </div>
          {/* Climatização */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Climatização
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Gestão automática de aquecimento, ventilação e ar condicionado para o máximo conforto.
            </p>
          </div>
          {/* Controle de Acessos */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Controle de Acessos
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sistemas de segurança integrados com controle remoto e monitoramento em tempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;