// components/AutomationSection.js
import React from 'react';
import AutomationCard from './AutomationCard';
import { automationContent } from './AutomationContent';



const Automation = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] w-screen max-w-screen overflow-hidden min-h-screen" id="automation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Automação Residencial com KNX
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Transforme sua casa em uma habitação inteligente com nossa expertise em domótica e protocolo KNX, o padrão mundial para automação predial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {automationContent.map((item, index) => (
            <AutomationCard
              key={index}
              title={item.title}
              description={item.description}
              className=''
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automation;