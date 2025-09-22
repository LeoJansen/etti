// components/ContactSection.js


const Contact = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] w-screen max-w-screen overflow-hidden" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Contacte-nos
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Solicite um orçamento personalizado e descubra como podemos transformar o seu projeto em realidade com soluções elétricas de excelência.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card: Orçamento Gratuito */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Orçamento Gratuito
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Oferecemos consultoria inicial gratuita e orçamentos detalhados sem compromisso para todos os nossos serviços.
            </p>
          </div>
          {/* Card: Resposta Rápida */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Resposta Rápida
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Garantimos resposta em 24 horas e disponibilidade para reuniões presenciais ou virtuais conforme a sua preferência.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            Pedir Orçamento [cite: 110]
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-300 transition duration-300">
            Agendar Reunião [cite: 111]
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;