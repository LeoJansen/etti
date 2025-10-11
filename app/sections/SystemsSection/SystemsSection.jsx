// components/SystemsSection.js
import React from 'react';
import SystemCard from './SystemCard';
import { systemsContent } from './SystemsContent';

const SystemsSection = () => {
   return (
      <section className="hidden md:flex relative w-full min-h-screen items-stretch bg-white py-24">
         <div className=" flex w-full  flex-col gap-12 ">
            <div className="flex flex-col text-left">
               <div className='flex flex-col w-fit'>
                  <div className='flex w-full items-center'>
                     
                     <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' />
                     <h3 className="systems-subheading">Sistemas de</h3>

                  </div>
                  <div className='flex'>
                  <h2 className="systems-heading">Incêndio e Segurança</h2>   
                     </div>

                  
               </div>
               
               
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