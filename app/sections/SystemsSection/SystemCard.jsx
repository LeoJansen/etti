"use client";
// components/SystemCard.jsx
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * SystemCard
 * Props:
 * - title: string
 * - description?: string
 * - className?: string (extra classes merged with defaults)
 * - children?: ReactNode (alternative content when description isn't provided)
 */
const SystemCard = ({ index = 0, title, description, className = '', children }) => {
   const cardRef = useRef(null);
   const titleRef = useRef(null);
   const imageRef = useRef(null);
   const overlayRef = useRef(null);
   const isOdd = index % 2 !== 0;
   const backgroundClass = isOdd ? 'bg-[hsl(0,0%,0%)]' : 'bg-[hsl(0,0%,0%)]';

   useEffect(() => {
      const card = cardRef.current;
      const titleElement = titleRef.current;
      const imageElement = imageRef.current;
      const overlayElement = overlayRef.current;

      if (!card || !titleElement || !imageElement) return;

      const handleMouseEnter = () => {
         const tl = gsap.timeline();
         
         // Animação: título desaparece e imagem aparece
         tl.to(titleElement, {
            opacity: 1,
            scale: 0.8,
            duration: 0.4,
            ease: "power2.out",
           
            filter:"brightness(0.5) contrast(1.8) saturate(1.8)"
         })
         .to(imageElement, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
         }, "-=0.2")
         .to(overlayElement, {
            opacity: 0.3,
            duration: 0.3,
            ease: "power2.out"
         }, "-=0.3");
      };

      const handleMouseLeave = () => {
         const tl = gsap.timeline();
         
         // Animação reversa: imagem desaparece e título volta
         tl.to(overlayElement, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
         })
         .to(imageElement, {
            opacity: 0,
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
         }, "-=0.1")
         .to(titleElement, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            filter:"brightness(1) contrast(1)",
            ease: "power2.out"
         }, "-=0.2");
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
         card.removeEventListener('mouseenter', handleMouseEnter);
         card.removeEventListener('mouseleave', handleMouseLeave);
      };
   }, []);

   return (
      <div 
         ref={cardRef}
         className={`relative flex w-full h-[400px] flex-col rounded-[6px] justify-center items-center ${backgroundClass} ${className} cursor-pointer overflow-hidden`.trim()}
      >
         {/* Imagem de fundo completa (inicialmente oculta) */}
         <div 
            ref={imageRef}
            className="absolute inset-0 opacity-0"
            style={{
               transform: 'scale(1.1)'
            }}
         >
            <Image
               src={`/assets/systems/systemCard${index + 1}.png`}
               alt={title}
               fill
               style={{
                  objectFit: "cover"
               }}
               sizes="(max-width: 768px) 100vw, 50vw"
            />
         </div>

         {/* Overlay escuro sobre a imagem */}
         <div 
            ref={overlayRef}
            className="absolute inset-0 bg-[hsl(0,0%,0%)] opacity-0 z-10"
         />

         {/* Título com máscara de imagem */}
         {title && (
            <h3 
               ref={titleRef}
               className="system-card-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center leading-tight px-4 max-w-full relative z-20"
               style={{
                  backgroundImage: `url(/assets/systems/systemCard${index + 1}.png)`
               }}
            >
               {title}
            </h3>
         )}

         {description && (
            <div className="mt-4 px-6 relative z-20">
               <p className="text-[#8d8d8d] text-lg text-center">{description}</p>
            </div>
         )}
         
         {children && (
            <div className="mt-4 px-6 relative z-20">
               {children}
            </div>
         )}
      </div>
   );
};

export default SystemCard;
