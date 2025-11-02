import Image from 'next/image';
import React, { forwardRef } from 'react';

const CameraCard = forwardRef(function CameraCard(
  { title, description, image, techBadge, children, className = "", ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      {...rest}
      className={`camera-card relative w-full min-h-[400px] bg-transparent border border-[#1A1A1A] flex flex-col rounded-lg overflow-hidden transition-all duration-300 hover:border-[#EB9948] hover:shadow-lg hover:shadow-[#EB9948]/20 ${className}`.trim()} 
    >
      {/* Border animation elements */}
      <span className="camera-card-edge camera-card-edge--top pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#EB9948] to-transparent origin-left scale-x-0 opacity-0" />
      <span className="camera-card-edge camera-card-edge--right pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#EB9948] to-transparent origin-top scale-y-0 opacity-0" />
      <span className="camera-card-edge camera-card-edge--bottom pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-l from-transparent via-[#EB9948] to-transparent origin-right scale-x-0 opacity-0" />
      <span className="camera-card-edge camera-card-edge--left pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-t from-transparent via-[#EB9948] to-transparent origin-bottom scale-y-0 opacity-0" />

      {/* Card content */}
      
        {image?.src && (
          <div className="camera-card-image relative md:h-60 xl:h-80 w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt ?? "Imagem do sistema de câmera"}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              className="transition-transform duration-500 hover:scale-105"
            />
            
          </div>
        )}
  

      <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
        <div>
          {title && (
            <h3 className="camera-card-title text-xl font-bold text-white mb-3 opacity-0">
              {title}
            </h3>
          )}

          {description ? (
            <p className="camera-card-description text-gray-300 leading-relaxed opacity-0">
              {description}
            </p>
          ) : (
            children || null
          )}
        </div>

        {/* Tech indicator */}
          <div className="camera-card-tech mt-4 flex items-center gap-2 opacity-0">
          <div className="w-2 h-2 bg-[#EB9948] rounded-full animate-pulse" />
          <span className="text-xs text-[#EB9948] font-medium uppercase tracking-wider">
            {techBadge ?? "CCTV Technology"}
          </span>
        </div>
      </div>
    </div>
  );
});

export default CameraCard;