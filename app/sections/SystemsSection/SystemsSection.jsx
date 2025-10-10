// components/SystemsSection.js
import React from 'react';
import SystemCard from './SystemCard';
import { systemsContent } from './SystemsContent';

const SystemsSection = () => {
   return (
      <section className="hidden md:flex relative w-full min-h-screen items-stretch bg-white py-24">
         <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-10">
            <div className="flex flex-col text-left">
               <h3 className="systems-subheading">Sistemas de</h3>
               <h2 className="systems-heading">Incêndio e Segurança</h2>
               <p className="mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                  Proteção total para o seu espaço com nossos sistemas avançados de segurança e combate a
                  incêndio.
               </p>
            </div>

            <div className="h-full w-full gap-8 grid grid-cols-2">
               {systemsContent.map(({ title, description }, idx) => (
                  <SystemCard
                     key={title}
                     index={idx}
                     title={title}
                     description={description}
                     className="flex-1 rounded-2xl shadow-xl"
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default SystemsSection;