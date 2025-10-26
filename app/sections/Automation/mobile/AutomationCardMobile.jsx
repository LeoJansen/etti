// components/AutomationCardMobile.jsx
import Image from 'next/image';
import React, { forwardRef } from 'react';

const AutomationCardMobile = forwardRef(function AutomationCardMobile(
   { title, description, icon, children, className = "" },
   ref
) {
   return (
      <div
         ref={ref}
         className={`automation-card relative bg-[#000000] p-6 rounded-[2px] shadow-[0_0_0_rgba(0,0,0,0)] transition-colors duration-300 overflow-hidden ${className}`.trim()}
      >
         <span className="automation-card-edge automation-card-edge--top pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-full bg-[#EB994833] origin-left scale-x-0 opacity-0" />
         <span className="automation-card-edge automation-card-edge--right pointer-events-none absolute inset-y-0 right-0 w-[3px] rounded-full bg-[#EB994833] origin-top scale-y-0 opacity-0" />
         <span className="automation-card-edge automation-card-edge--bottom pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#EB994833] origin-right scale-x-0 opacity-0" />
         <span className="automation-card-edge automation-card-edge--left pointer-events-none absolute inset-y-0 left-0 w-[3px] rounded-full bg-[#EB994833] origin-bottom scale-y-0 opacity-0" />
         <div className="flex items-center justify-start gap-3 mb-4">
            <div className='flex w-1/4 items-center ml-[-21px]'>
               <div className="automation-card-connector flex w-[calc(100%-15px)] h-[5px] bg-[#eb9a48] opacity-0 scale-x-0 origin-left" />
               {icon?.src && (
                  <div className="automation-card-icon flex w-[22px] items-center justify-center opacity-0">
                     <Image
                        src={icon.src}
                        alt={icon.alt ?? "Ícone de automação"}
                        width={icon.width ?? 32}
                        height={icon.height ?? 32}
                        className="w-[22px] h-[22px]"
                        quality={icon.quality ?? 90}
                     />
                  </div>
               )}

            </div>

            {title && (
               <h3 className="automation-card-title text-lg font-semibold text-[#8a8a8a] ">
                  {title}
               </h3>
            )}
         </div>
         {description ? (
            <p className="automation-card-description text-[#bebebe] text-lg leading-relaxed mb-3">{description}</p>
         ) : (
            children || null
         )}
      </div>
   );
});

export default AutomationCardMobile;
