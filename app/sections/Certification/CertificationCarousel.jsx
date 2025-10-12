"use client";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CertificationCard from "./CertificationCard";
import { certificationCards } from "./CertificationContent";

gsap.registerPlugin(useGSAP);

const DISPLAY_DURATION = 3.2;
const TRANSITION_DURATION = 1.5;

const CertificationCarousel = () => {
   const sliderRef = React.useRef(null);

   useGSAP(
      () => {
         if (typeof window === "undefined") {
            return;
         }

         const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
         if (prefersReducedMotion.matches) {
            return;
         }

         const slides = gsap.utils.toArray(
            sliderRef.current?.querySelectorAll("[data-certification-slide]") ?? []
         );

         if (!slides.length) {
            return;
         }

         gsap.set(slides, {
            autoAlpha: 0,
        
            zIndex: 0,
            pointerEvents: "none",
         });

         gsap.set(slides[0], {
            autoAlpha: 1,
          
            zIndex: 2,
            pointerEvents: "auto",
         });

         const timeline = gsap.timeline({ repeat: -1 });

         slides.forEach((slide, index) => {
            const nextSlide = slides[(index + 1) % slides.length];

            timeline
               .to(
                  slide,
                  {
                     autoAlpha: 0,
                     
                     duration: TRANSITION_DURATION,
                     ease: "easeInOut",
                     pointerEvents: "none",
                  },
                  `+=${DISPLAY_DURATION}`
               )
               .to(
                  nextSlide,
                  {
                     autoAlpha: 1,
                  
                     duration: TRANSITION_DURATION,
                     ease: "easeInOut",
                     onStart: () => {
                        gsap.set(nextSlide, { pointerEvents: "auto", zIndex: 2 });
                        gsap.set(slide, { zIndex: 0 });
                     },
                  },
                  "<"
               );
         });

         return () => {
            timeline.kill();
         };
      },
      { scope: sliderRef }
   );

   return (
      <div ref={sliderRef} className="relative w-full  flex">
         <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center overflow-hidden rounded-3xl  bg-[#FFFAF6]" style={{ boxShadow: "0 0 60px 2px rgba(23, 15, 7, 0.15)" }}>
            {certificationCards.map((card, index) => (
               <div
                  key={card.title}
                  className={`absolute inset-0 flex items-center justify-center  transition-opacity duration-500 ${
                     index === 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                  data-certification-slide
               >
                  <div className="w-full ">
                     <CertificationCard index={index} {...card} />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CertificationCarousel;
