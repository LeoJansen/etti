"use client"

import { useRef } from 'react';

import { useDictionary } from '@/src/site/context/DictionaryContext';

import SystemCardMobile from './SystemCardMobile';
import { useSystemsAnimation } from '../useSystemsAnimation';

/**
 * SystemsSectionMobile
 * Mobile-only rendering for systems section, pairing with the desktop version.
 */
const SystemsSectionMobile = () => {
   const sectionRef = useRef(null);
   const { dictionary } = useDictionary();
   const systemsContent = dictionary.systems;
   const headingLines = systemsContent.headingLines ?? [systemsContent.heading];

   useSystemsAnimation(sectionRef);

   return (
      <section
         ref={sectionRef}
         id="systems"
         className="relative flex md:hidden w-full items-stretch p-6 pb-20"
      >
            <video
            className="pointer-events-none absolute bottom-0 inset-0 h-full w-full object-cover opacity-10 -z-10"
            autoPlay
            muted
            loop
            playsInline
            data-systems-video
            style={{
               objectFit: 'cover',
               objectPosition: 'bottom center',
            }}
         >
            <source src="/assets/systems/systems-bg.mp4" type="video/mp4" />
         </video>
         <div className="mx-auto flex w-full max-w-xl flex-col gap-10 ">
            <div className="flex flex-col items-center text-center w-fit">
               <div className='flex flex-col w-fit justify-end self-end '>
                  <div className='flex w-full  items-center gap-4'>
                     <div className='h-[5px] w-full rounded-[1.5px] bg-[#EBC197]' data-systems-accent />
                        <h3 className="systems-subheading" data-systems-subheading>{systemsContent.eyebrow}</h3>
                  </div>
                  <div className='flex flex-col mt-2'>
                        {headingLines.map((line) => (
                           <h2 key={line} className="systems-heading text-right" data-systems-heading>{line}</h2>
                        ))}
                  </div>
               </div>


                  <p className="mt-4 text-xl text-[#99a1af]" data-systems-description>
                     {systemsContent.description}
               </p>
            </div>

            <div className="flex flex-col gap-6">
                  {systemsContent.cards.map(({ title, description, image }, idx) => (
                  <div
                     key={`${title ?? idx}-mobile`}
                     data-systems-card
                     className="w-full"
                  >
                     <SystemCardMobile
                        index={idx}
                        title={title}
                        description={description}
                           image={image}
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default SystemsSectionMobile;
