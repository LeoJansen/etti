"use client";
import React, { useRef, useEffect } from 'react';
import CameraCardMobile from './CameraCardMobile';
import { cameraContent } from '../CameraContent';
import { useCameraMobileAnimation } from './useCameraMobileAnimation';

const CameraMobile = () => {
  const sectionRef = useRef(null);

  useCameraMobileAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black overflow-hidden" id="camera">
      <div className="flex flex-col px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center">
            <h2 className="camera-heading-mobile text-3xl font-bold text-white mb-4" data-camera-heading-mobile>
              SISTEMAS DE
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[3px] w-16 rounded bg-[#3B82F6]" data-camera-accent-mobile />
              <h3 className="camera-subheading-mobile text-2xl font-bold text-[#3B82F6]" data-camera-subheading-mobile>
                Câmera CCTV
              </h3>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed px-4" data-camera-description-mobile>
            Sistemas avançados de videomonitoramento com tecnologia de ponta para máxima segurança e tranquilidade.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 px-2">
          {cameraContent.map((item, index) => (
            <div
              key={item.title ?? index}
              data-camera-card-mobile
              className="camera-card-wrapper-mobile"
            >
              <CameraCardMobile
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default CameraMobile;