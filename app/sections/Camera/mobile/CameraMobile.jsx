"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
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
          <div className="flex flex-col w-fit">
            <div className="about-animate-item flex items-center gap-5">
              <div className="h-[5px] flex-1 rounded-[1.5px] bg-[#EBC197]" />
              <h3 className="camera-subheading">Sistemas de</h3>
            </div>
            <div className="">
              <h2 className="camera-heading">Câmera CCTV</h2>
            </div>
          </div>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed px-4" data-camera-description-mobile>
           Na Etti, implementamos soluções avançadas de videovigilância (CCTV) que garantem a proteção total do seu espaço. Os nossos projetos são personalizados para habitação , edifícios e comércios , utilizando tecnologia de ponta  para assegurar que o seu patrimônio esteja sempre protegido.
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