import Image from 'next/image';
import React, { forwardRef } from 'react';

const CameraCardMobile = forwardRef(function CameraCardMobile(
  { title, description, image, children, className = "", ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      {...rest}
      className={`camera-card-mobile relative bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg overflow-hidden transition-all duration-300 ${className}`.trim()} 
    >
      {/* Animated border */}
      <div className="camera-card-border-mobile absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] p-0.5">
          <div className="rounded-lg bg-[#0A0A0A] h-full w-full" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Image */}
        {image?.src && (
          <div className="camera-card-image-mobile relative h-40 w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt ?? "Sistema de câmera"}
              fill
              style={{ objectFit: "cover" }}
              quality={75}
              className="transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
            
            {/* Tech indicator overlay */}
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#0A0A0A]/80 backdrop-blur-sm rounded-full px-2 py-1">
              <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
              <span className="text-xs text-[#3B82F6] font-medium">HD</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          {title && (
            <h3 className="camera-card-title-mobile text-lg font-bold text-white mb-2">
              {title}
            </h3>
          )}

          {description ? (
            <p className="camera-card-description-mobile text-sm text-gray-300 leading-relaxed mb-3">
              {description}
            </p>
          ) : (
            children || null
          )}

          {/* Bottom tech bar */}
          <div className="camera-card-tech-mobile flex items-center gap-2 pt-2 border-t border-[#1A1A1A]">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-[#3B82F6] rounded-full" />
              <div className="w-1 h-1 bg-[#3B82F6] rounded-full opacity-70" />
              <div className="w-1 h-1 bg-[#3B82F6] rounded-full opacity-40" />
            </div>
            <span className="text-xs text-[#3B82F6] font-medium uppercase tracking-wider flex-1">
              Sistema Integrado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CameraCardMobile;