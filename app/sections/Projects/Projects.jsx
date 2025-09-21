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
    <section id="projects" className="bg-gray-100 py-20 w-full lg:h-screen px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Projetos de Instalação Elétrica
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Desenvolvemos soluções elétricas personalizadas para habitação, edifícios e espaços comerciais, seguindo rigorosamente as normas técnicas e de segurança mais atuais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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