// components/SystemsSection.js
import React from 'react';
import SystemCard from './SystemCard';
import { systemsContent } from './SystemsContent';

const SystemsSection = () => {
   return (
      <section className="relative w-full min-h-screen items-stretch bg-black py-24 z-80">
         <div className=" flex w-full  flex-col gap-12 px-6 z-40">
            <div className="flex flex-col text-left w-full ">
               <div className='flex flex-col w-fit'>
                  <div className='flex w-full items-center gap-4'>
                     
                     <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' />
                     <h3 className="systems-subheading">Sistemas de</h3>

                  </div>
                  <div className='flex'>
                  <h2 className="systems-heading">Incêndio e Segurança</h2>   
                     </div>

                  
               </div>
               
               
               <p className="mt-6  text-lg text-gray-600 dark:text-gray-400">
                  Proteção total para o seu espaço com nossos sistemas avançados de segurança e combate a
                  incêndio.
               </p>
            </div>

            <div className="w-full gap-8 grid grid-cols-2 min-h-[500px]">
               {systemsContent.map(({ title, description, imagem }, idx) => (
                  <SystemCard
                     key={title}
                     index={idx}
                     title={title}
                     description={description}
                     imagem={imagem}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default SystemsSection;