// WhyEttiCard.jsx - Componente individual do card

const WhyEttiCard = ({ title, description }) => {
   return (
      <div className="p-8 rounded-[6px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.1)] transform transition duration-500 hover:scale-105">
         <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-medium text-[#EB9948]  mb-4">
            {title}
         </h3>
         <p className="text-gray-600 dark:text-gray-400">
            {description}
         </p>

         </div>

     
      </div>
   );
};

export default WhyEttiCard;
