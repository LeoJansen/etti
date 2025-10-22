// components/ProjectsSection.js

'use client';

import dynamic from 'next/dynamic';
import ProjectCard from './ProjectCard';
import { projectsContent } from './ProjectsContent';

const ProjectsMobile = dynamic(() => import('./mobile/ProjectsMobile'), {
   ssr: false,
});

const Projects = () => {
   return (
      <section id="projects" className="projects-section relative w-full min-h-screen px-4 overflow-hidden">
         <div className="hidden md:block w-full h-full p-6 md:p-12">
            <div className="flex flex-col items-end justify-center px-[2%] gap-12">
               <div className="flex flex-col items-end">
                  <div className="flex flex-col w-fit">
                     <div className="flex items-center justify-end gap-4">
                        <h3 className="projects-subheading">Projetos de</h3>
                        <div className="h-[5px] w-full bg-[#EBC197]" />
                     </div>

                     <h2 className="projects-heading text-end w-fit">Instalação Elétrica</h2>
                  </div>
               </div>

               <div className="flex w-full px-[5%]">
                  <p className="text-[#9e9e9e] tracking-tighter font-light text-xl xl:text-2xl ">
                     Desenvolvemos soluções elétricas personalizadas para habitação, edifícios e espaços comerciais, seguindo rigorosamente as normas técnicas e de segurança mais atuais.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 md:gap-10">
                  {projectsContent.map((project) => (
                     <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc}
                     />
                  ))}
               </div>
            </div>
         </div>

         <ProjectsMobile />
      </section>
   );
};

export default Projects;
