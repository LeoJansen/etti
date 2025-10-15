// components/WhyEttiSection.js

import Image from "next/image";


const WhyEtti = () => {
  return (
    <section className="relative py-16 bg-[#ffffff] -z-10">
      <Image
         src="/assets/whyEtti/interrogation.png"
         alt="Background Pattern"
         fill
         sizes="100vw"
         style={{objectFit:"contain", objectPosition:"right",paddingTop:"5%", paddingBottom:"5%"}}
         className="-z-10" />
         <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Porquê Escolher a Etti Project
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            As nossas vantagens competitivas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Experiência Comprovada */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Experiência Comprovada
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              [cite_start]Equipa com vasta experiência em projetos de diferentes escalas e complexidades, desde habitações unifamiliares a grandes edifícios comerciais[cite: 91, 92].
            </p>
          </div>
          {/* Tecnologia Avançada */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Tecnologia Avançada
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              [cite_start]Utilização das mais recentes tecnologias em automação e eficiência energética, proporcionando soluções inovadoras e sustentáveis[cite: 93, 94].
            </p>
          </div>
          {/* Certificação Oficial */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Certificação Oficial
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              [cite_start]Técnicos certificados e credenciados pelas entidades competentes, garantindo qualidade e conformidade regulamentar em todos os projetos[cite: 95, 96].
            </p>
          </div>
          {/* Serviço Completo */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Serviço Completo
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              [cite_start]Desde o projeto inicial até à certificação final, oferecemos um serviço integral que simplifica todo o processo para o cliente[cite: 97, 98].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEtti;