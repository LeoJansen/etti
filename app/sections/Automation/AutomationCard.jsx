// components/AutomationCard.jsx
import Image from 'next/image';
import React, { forwardRef } from 'react';

const AutomationCard = forwardRef(function AutomationCard(
  { title, description, icon, children, className = "" },
  ref
) {
  return (
    <div
      ref={ref}
      className={`automation-card relative bg-[#000000] flex flex-col items-center py-8 rounded-[4px] shadow-[0_0_0_rgba(0,0,0,0)] transition-colors duration-300 overflow-hidden ${className}`.trim()} 
    >
      <span className="automation-card-edge automation-card-edge--top pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-full bg-[#EB994833] origin-left scale-x-0 opacity-0" />
      <span className="automation-card-edge automation-card-edge--right pointer-events-none absolute inset-y-0 right-0 w-[3px] rounded-full bg-[#EB994833] origin-top scale-y-0 opacity-0" />
      <span className="automation-card-edge automation-card-edge--bottom pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#EB994833] origin-right scale-x-0 opacity-0" />
      <span className="automation-card-edge automation-card-edge--left pointer-events-none absolute inset-y-0 left-0 w-[3px] rounded-full bg-[#EB994833] origin-bottom scale-y-0 opacity-0" />
      <div className="flex  items-center w-full mb-4">
        {icon?.src && (
          <div className="automation-card-icon flex w-1/5 items-center justify-end opacity-0">
            <div className="automation-card-connector flex w-[calc(100%-15px)] h-[5px] bg-[#eb9a48] opacity-0 scale-x-0 origin-left" />
            <Image
              src={icon.src}
              alt={icon.alt ?? "Ícone de automação"}
              width={icon.width ?? 32}
              height={icon.height ?? 32}
              className="w-[24px] h-[24px] "
              quality={icon.quality ?? 90}
              priority={false}
            />
            
          </div>
        )}
        {title && (
         <div className='absolute flex w-full justify-center'>
            <h3 className="automation-card-title text-2xl font-semibold text-[#8a8a8a] tracking-tight">
              {title}
            </h3>
          </div>
        )}
      </div>

      {description ? (
         <div className='p-4 px-8'> 
            <p className="text-gray-400 text-center leading-relaxed">{description}</p>
         </div>
      ) : (
        children || null
      )}
    </div>
  );
});

export default AutomationCard;
