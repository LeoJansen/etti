// WhyEttiCard.jsx - Componente individual do card

const WhyEttiCard = ({ title, description, index }) => {
   return (
      <div
         className="p-8 rounded-[3px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.1)] transform transition duration-500 hover:scale-105"
         data-why-card
      >
         <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 justify-center mb-4">
               <div className="w-8 h-8 rounded-full bg-[#EB9948] flex items-center justify-center">
               <span className="text-white text-lg">
                  {index + 1}
               </span>
            </div>
            <h3 className="text-2xl font-medium text-[#EB9948]  ">
               {title}
            </h3>


            </div>
            
            <p className="text-gray-600 dark:text-gray-400">
               {description}
            </p>

         </div>


      </div>
   );
};

export default WhyEttiCard;
