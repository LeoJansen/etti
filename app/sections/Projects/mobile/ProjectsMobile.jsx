'use client';

import { useRef } from 'react';
import ProjectCardMobile from './ProjectCardMobile';
import { projectsContent } from '../ProjectsContent';
import useProjectAnimation from '../useProjectAnimation';

const ProjectsMobile = () => {
   const sectionRef = useRef(null);

   useProjectAnimation(sectionRef);

   return (
      <div ref={sectionRef} className="projects-section flex w-full p-6 pb-20">
         <div className="mx-auto flex w-full max-w-xl flex-col gap-10 px-6">
            <div className="flex flex-col items-end text-end gap-4 w-fit self-end">
               <div className="flex w-full items-center justify-end gap-4">
                  <h3 data-project-heading className="projects-subheading">Projetos de</h3>
                  <div data-project-heading className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197]" />
               </div>
               <h2 data-project-heading className="projects-heading">Instalação</h2>
               <h2 data-project-heading className="projects-heading">Elétrica</h2>
            </div>

            <p data-project-description className="text-[#9e9e9e] leading-relaxed text-xl">
               Desenvolvemos soluções elétricas personalizadas para habitação, edifícios e espaços comerciais,
               seguindo rigorosamente as normas técnicas e de segurança mais atuais.
            </p>

            <div className="flex flex-col gap-6">
               {projectsContent.map((project) => (
                  <ProjectCardMobile
                     key={`${project.title}-mobile`}
                     data-project-card
                     title={project.title}
                     description={project.description}
                     imageSrc={project.imageSrc}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProjectsMobile;
