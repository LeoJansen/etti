"use client";

import Image from "next/image";

const DocCardMobile = ({ title, description, icon, iconSize, className = "", titleClassName = "", ...rest }) => {
   return (
      <div
         {...rest}
         className={`doc-card-mobile doc-card flex flex-col items-center gap-6 rounded-[3px] py-6 px-5 shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-sm ${className}`.trim()}
      >
         <div className="flex w-full items-center gap-3 text-center">
            {icon?.name && (
               <Image
                  src={`/assets/${icon.name}.svg`}
                  alt={icon?.title || title}
                  width={iconSize?.width || 64}
                  height={iconSize?.height || 64}
                  className="opacity-60"
               />
            )}
               <div className='bg-[#bebebe] h-[7px] w-full rounded-l-[2.3px] mr-[-16px] '/>
         </div>
         <h3 className={`text-xl leading-6 font-medium text-[#EB9948] ${titleClassName}`}>{title}</h3>

         <p className="text-lg leading-relaxed font-light text-[#5c5c5c] text-justify">{description}</p>
      </div>
   );
};

export default DocCardMobile;