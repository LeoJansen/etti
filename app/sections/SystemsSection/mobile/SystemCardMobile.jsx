"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

/**
 * SystemCardMobile
 * Ensures mobile-specific styling for system cards while keeping the API
 * similar to the desktop component.
 */
const SystemCardMobile = ({ index = 0, title, description, className = '', children }) => {
   const cardRef = useRef(null);
   const titleRef = useRef(null);
   const imageRef = useRef(null);
   const overlayRef = useRef(null);
   const descriptionRef = useRef(null);
   const isOdd = index % 2 !== 0;

   useEffect(() => {
      const card = cardRef.current;
      const titleElement = titleRef.current;
      const imageElement = imageRef.current;
      const overlayElement = overlayRef.current;
      const descriptionElement = descriptionRef.current;

      if (!card || !titleElement || !imageElement) return;

      const handleTouchStart = () => {
         const tl = gsap.timeline();

         // Anima título e descrição enquanto traz a imagem
         tl.to(descriptionElement, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: 'power2.out',
         })
         tl.to(titleElement, {
            duration: 0.4,
            ease: 'power2.out',
            filter: "brightness(0.5) contrast(1.8) saturate(1.8)"
         })
            .to(
               imageElement,
               {
                  opacity: 1,
                  scale: 1,
                  duration: 0.5,
                  ease: 'power2.out',
               },
               '-=0.2',
            )
            .to(
               overlayElement,
               {
                  opacity: 0.3,
                  duration: 0.3,
                  ease: 'power2.out',
               },
               '-=0.3',
            );
      };

      const handleTouchEnd = () => {
         const tl = gsap.timeline();

         // Reverte a animação e volta ao conteúdo padrão
         tl.to(overlayElement, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
         })
            .to(
               imageElement,
               {
                  opacity: 0,
                  scale: 1.1,
                  duration: 0.4,
                  ease: 'power2.out',
               },
               '-=0.1',
            )

            .to(
               titleElement,
               {
                  opacity: 1,
                  duration: 0.5,
                  ease: 'power2.out',
                  filter: "brightness(1.5) contrast(0.8) saturate(1.8)"
               },
               '-=0.2',
            )
            .to(
               descriptionElement,
               {
                  opacity: 1,
                  scale: 1,
                  duration: 0.5,
                  ease: 'power2.out',
               },
               '-=0.2',
            );
      };

      // Eventos para dispositivos touch e mouse
      card.addEventListener('touchstart', handleTouchStart);
      card.addEventListener('touchend', handleTouchEnd);
      card.addEventListener('mouseenter', handleTouchStart);
      card.addEventListener('mouseleave', handleTouchEnd);

      return () => {
         card.removeEventListener('touchstart', handleTouchStart);
         card.removeEventListener('touchend', handleTouchEnd);
         card.removeEventListener('mouseenter', handleTouchStart);
         card.removeEventListener('mouseleave', handleTouchEnd);
      };
   }, []);

   return (
      <div
         ref={cardRef}
         className={`relative flex w-full h-[320px] flex-col items-center justify-center rounded-[3px] overflow-hidden cursor-pointer ${isOdd ? 'bg-[#000000]' : 'bg-[#000000]'
            } ${className}`.trim()}
      >
         {/* Imagem de fundo completa (inicialmente oculta) */}
         <div
            ref={imageRef}
            className="absolute inset-0 opacity-0"
            style={{
               transform: 'scale(1.1)',
            }}
         >
            <Image
               src={`/assets/systems/systemCard${index + 1}.png`}
               alt={title}
               fill
               style={{
                  objectFit: 'cover',
               }}
               sizes="100vw"
            />
         </div>

         {/* Overlay escuro sobre a imagem */}
         <div
            ref={overlayRef}
            className="absolute inset-0 bg-black/60 opacity-0 z-10"
         />

         {/* Conteúdo principal */}
         <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center">
            {title && (
               <h3
                  ref={titleRef}
                  className="system-card-title  font-semibold text-center tracking-[0.05em] leading-tight"
                  style={{
                     backgroundImage: `url(/assets/systems/systemCard${index + 1}.png)`,
                     filter: "brightness(1.2)  saturate(1.2)",
                     fontSize: '32px',
                  }}
               >
                  {title}
               </h3>
            )}

            {description ? (
               <p
                  ref={descriptionRef}
                  className="text-[#8d8d8d] text-lg text-center mt-4"
               >
                  {description}
               </p>
            ) : (
               children && <div ref={descriptionRef}>{children}</div>
            )}
         </div>
      </div>
   );
};

export default SystemCardMobile;
