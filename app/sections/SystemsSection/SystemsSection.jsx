// components/SystemsSection.js
import React from 'react';
import SystemCard from './SystemCard';
import { systemsContent } from './SystemsContent';

const SystemsSection = () => {
  return (
    <section className="relative min-h-screen h-full md:h-screen w-full flex items-stretch">
      <div className="text-center mb-12 absolute">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Sistemas de Incêndio e Segurança
        </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Proteção total para o seu espaço com nossos sistemas avançados de segurança e combate a incêndio.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch w-full h-full">
          {systemsContent.map(({ title, description }, idx) => (
            <SystemCard key={idx} index={idx} title={title} description={description} />
          ))}
        </div>
      
    </section>
  );
};

export default SystemsSection;