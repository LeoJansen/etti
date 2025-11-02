'use client';

import { useRef } from 'react';

import { useDictionary } from '@/src/site/context/DictionaryContext';

import ProjectCardMobile from './ProjectCardMobile';
import useProjectAnimation from '../useProjectAnimation';

const ProjectsMobile = () => {
   const sectionRef = useRef(null);
   const { dictionary } = useDictionary();
   const projectsContent = dictionary.projects;
   const headingLines = projectsContent.headingLines ?? [projectsContent.heading];

   useProjectAnimation(sectionRef);

   return (
      <div ref={sectionRef} className="projects-section flex w-full p-6 pb-20">
         <div className="mx-auto flex w-full max-w-xl flex-col gap-10 px-6">
            <div className="flex flex-col items-end text-end gap-4 w-fit self-end">
               <div className="flex w-full items-center justify-end gap-4">
                  <h3 data-project-heading className="projects-subheading">{projectsContent.eyebrow}</h3>
                  <div data-project-heading className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197]" />
               </div>
               {headingLines.map((line) => (
                  <h2 key={line} data-project-heading className="projects-heading">
                     {line}
                  </h2>
               ))}
            </div>

            <p data-project-description className="text-[#9e9e9e] leading-relaxed text-xl">
               {projectsContent.description}
            </p>

            <div className="flex flex-col gap-6">
               {projectsContent.cards.map((project) => (
                  <ProjectCardMobile
                     key={`${project.title}-mobile`}
                     data-project-card
                     title={project.title}
                     description={project.description}
                     image={project.image}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProjectsMobile;
