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
  <section id="projects" className="projects-section py-16 w-full  px-4 overflow-hidden">
      <div className="flex flex-col items-start justify-center px-[2%] ">
        <div className='flex gap-4 items-center '>
          <div className='h-[4px] w-20 bg-[#4991EB] '/>
          <h3 className="text-[35px] md:text-[40px] font-semibold text-[#EB9948] tracking-tight uppercase">
          Projetos de
        </h3>

        </div>
        
           <h2 className="text-[70px] lg:text-[95px] tracking-[-0.08em]  font-extralight leading-14  mb-6 text-[#8f8f8f] ">
         Instalação Elétrica
        </h2>
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
    </section>
  );
};

export default Projects;