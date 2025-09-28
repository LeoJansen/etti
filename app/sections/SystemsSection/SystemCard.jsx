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
const SystemCard = ({index, title, description, className = '', children }) => {
 

  return (
    <div className={` p-8   flex w-full h-full flex-col justify-center bg-[#ffffff]`.trim()}>
        <div className='flex flex-col gap-6 justify-start items-center  w-full h-[300px]'>
      {title && (
        <h3 className={`text-2xl font-bold ${index % 2 ==! 0 ? 'text-[#0a0a0a] ' : 'text-[#ffffff] '}`}>{title}</h3>
      )}
      {description ? (
        <p className="text-gray-600 ">{description}</p>
      ) : (
        children || null
      )}
      </div>
    </div>
  );
};

export default SystemCard;
