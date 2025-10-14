// components/SystemCard.jsx
import React from 'react';

/**
 * SystemCard
 * Props:
 * - title: string
 * - description?: string
 * - className?: string (extra classes merged with defaults)
 * - children?: ReactNode (alternative content when description isn't provided)
 */
const SystemCard = ({ index = 0, title, description, className = '', children }) => {
   const isOdd = index % 2 !== 0;

   const backgroundClass = isOdd ? 'bg-[#0a0a0a]' : 'bg-[#ffffff]';

   return (
      <div className={`p-8 flex w-full h-full flex-col justify-center items-center ${className}`.trim()}>
         <div className="flex flex-col gap-6 justify-start items-center w-full h-[300px]">
            <div className='flex h-1/2 w-full justify-center items-center'>
               {title && (
                  <h3 className={`text-2xl font-bold `}>{title}</h3>
               )}

            </div>

            {description ? (
               <p className="text-gray-600">{description}</p>
            ) : (
               children || null
            )}
         </div>
      </div>
   );
};

export default SystemCard;
