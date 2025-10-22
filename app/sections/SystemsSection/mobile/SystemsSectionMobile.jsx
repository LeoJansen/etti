"use client"

import SystemCardMobile from './SystemCardMobile';
import { systemsContent } from '../SystemsContent';

/**
 * SystemsSectionMobile
 * Mobile-only rendering for systems section, pairing with the desktop version.
 */
const SystemsSectionMobile = () => {
   return (
      <section className="flex md:hidden w-full items-stretch bg-black p-6">
         <div className="mx-auto flex w-full max-w-xl flex-col gap-10 ">
            <div className="flex flex-col items-center text-center w-fit">
               <div className='flex flex-col w-fit justify-end self-end '>
                  <div className='flex w-full  items-center gap-4'>
                     <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' />
                     <h3 className="systems-subheading">Sistemas de</h3>
                  </div>
                  <div className='flex flex-col mt-2'>
                     <h2 className="systems-heading text-right">Incêndio e</h2>
                     <h2 className="systems-heading text-right">Segurança</h2>
                  </div>
               </div>


               <p className="mt-4 text-xl text-[#99a1af]">
                  Proteção total para o seu espaço com nossos sistemas avançados de segurança e combate a
                  incêndio.
               </p>
            </div>

            <div className="flex flex-col gap-6">
               {systemsContent.map(({ title, description, imagem }, idx) => (
                  <SystemCardMobile
                     key={`${title}-mobile`}
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

export default SystemsSectionMobile;
