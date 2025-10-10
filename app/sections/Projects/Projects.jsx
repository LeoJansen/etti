// components/ProjectsSection.js

import ProjectCard from './ProjectCard';

const projects = [
   {
      title: "Habitação",
      description: "Instalações residenciais modernas com eficiência energética e segurança maximizada para o seu lar.",
      imageSrc: "/assets/projects1.png",
   },
   {
      title: "Edifícios",
      description: "Sistemas elétricos complexos para edifícios residenciais e escritórios com gestão inteligente de energia.",
      imageSrc: "/assets/projects2.png",
   },
   {
      title: "Comércios",
      description: "Soluções comerciais robustas que garantem funcionamento contínuo e seguro do seu negócio.",
      imageSrc: "/assets/projects3.png",
   },
];

const Projects = () => {
   return (
      <section id="projects" className="projects-section py-16 w-full min-h-screen  px-4 overflow-hidden">
         <div className="flex flex-col items-end justify-center px-[2%] ">
            <div className='flex flex-col items-end '>
               <div className='flex items-center justify-end gap-4 w-full'>
                 
                  <h3 className="projects-subheading">      Projetos de</h3>
                   <div className='h-[5px] w-full bg-[#EBC197]' />
               </div>

               <h2 className="projects-heading text-end">
                  Instalação Elétrica
               </h2>


            </div>


            <p className="text-lg text-gray-600 max-w-3xl mx-auto my-12">
               Desenvolvemos soluções elétricas personalizadas para habitação, edifícios e espaços comerciais, seguindo rigorosamente as normas técnicas e de segurança mais atuais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 md:gap-10">
               {projects.map((project) => (
                  <ProjectCard
                     key={project.title}
                     title={project.title}
                     description={project.description}
                     imageSrc={project.imageSrc}
                  />
               ))}
            </div>
         </div>
      </section >
   );
};

export default Projects;