// components/SystemsSection.js
import React from 'react';

const SystemsSection = () => {
  return (
    <section className="py-16 bg-[rgb(15,15,15)] min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Sistemas de Incêndio e Segurança
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Proteção total para o seu espaço com nossos sistemas avançados de segurança e combate a incêndio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Deteção Precoce */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Deteção Precoce
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sistemas avançados de deteção de incêndios com sensores de última geração para alerta imediato.
            </p>
          </div>
          {/* Supressão Automática */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Supressão Automática
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Instalamos sistemas de extinção automática com sprinklers e gases limpos para proteção eficaz[cite: 84, 85].
            </p>
          </div>
          {/* Monitorização Contínua */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Monitorização Contínua
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sistemas integrados de segurança com vigilância 24/7 e resposta automática a emergências[cite: 86, 87].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;