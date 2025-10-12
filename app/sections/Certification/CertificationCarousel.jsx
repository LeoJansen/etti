"use client";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CertificationCard from "./CertificationCard";
import { certificationCards } from "./CertificationContent";

gsap.registerPlugin(useGSAP);

const DISPLAY_DURATION = 3.2;
const TRANSITION_DURATION = 0.85;

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
            scale: 0.92,
            zIndex: 0,
            pointerEvents: "none",
         });

         gsap.set(slides[0], {
            autoAlpha: 1,
            scale: 1,
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
                     scale: 0.92,
                     duration: TRANSITION_DURATION,
                     ease: "power2.inOut",
                     pointerEvents: "none",
                  },
                  `+=${DISPLAY_DURATION}`
               )
               .to(
                  nextSlide,
                  {
                     autoAlpha: 1,
                     scale: 1,
                     duration: TRANSITION_DURATION,
                     ease: "power2.out",
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
      <div ref={sliderRef} className="relative w-full h-full flex">
         <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center overflow-hidden rounded-3xl  px-6 py-12 shadow-lg bg-[#FF6A00]">
            {certificationCards.map((card, index) => (
               <div
                  key={card.title}
                  className={`absolute inset-0 flex items-center justify-center px-2 transition-opacity duration-500 ${
                     index === 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                  data-certification-slide
               >
                  <div className="w-full max-w-3xl">
                     <CertificationCard index={index} {...card} />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CertificationCarousel;
