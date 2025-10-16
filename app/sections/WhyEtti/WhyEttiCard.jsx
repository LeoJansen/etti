// WhyEttiCard.jsx - Componente individual do card

const WhyEttiCard = ({ title, description }) => {
   return (
      <div className="p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
         <h3 className="text-2xl font-bold text-[#EB9948]jhjghu mb-4">
            {title}
         </h3>
         <p className="text-gray-600 dark:text-gray-400">
            {description}
         </p>
      </div>
   );
};

export default WhyEttiCard;
