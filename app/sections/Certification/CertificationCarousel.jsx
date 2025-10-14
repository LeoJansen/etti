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
   const [currentSlide, setCurrentSlide] = React.useState(0);
   const [isPlaying, setIsPlaying] = React.useState(true);
   const timelineRef = React.useRef(null);

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

         const timeline = gsap.timeline({ repeat: -1, paused: !isPlaying });
         timelineRef.current = timeline;

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
      { scope: sliderRef, dependencies: [isPlaying] }
   );

   const goToSlide = (index) => {
      if (typeof window === "undefined" || !sliderRef.current) return;

      const slides = sliderRef.current.querySelectorAll("[data-certification-slide]");
      if (!slides.length) return;

      // Pause the automatic timeline
      if (timelineRef.current) {
         timelineRef.current.pause();
      }

      // Hide all slides
      gsap.set(slides, {
         autoAlpha: 0,
         zIndex: 0,
         pointerEvents: "none",
      });

      // Show target slide
      gsap.set(slides[index], {
         autoAlpha: 1,
         zIndex: 2,
         pointerEvents: "auto",
      });

      setCurrentSlide(index);
      setIsPlaying(false);
   };

   const nextSlide = () => {
      const newIndex = (currentSlide + 1) % certificationCards.length;
      goToSlide(newIndex);
   };

   const prevSlide = () => {
      const newIndex = currentSlide === 0 ? certificationCards.length - 1 : currentSlide - 1;
      goToSlide(newIndex);
   };

   return (
      <div ref={sliderRef} className="relative w-full flex z-50" >
         <div className="relative  flex w-full  items-center justify-center   z-60" >
            {certificationCards.map((card, index) => (
               <div
                  key={card.title}
                  className={`absolute mx-[10%] inset-0 flex items-center justify-center transition-opacity duration-500 ${index === 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none "
                     }`}
                  data-certification-slide
               >
                  <div className="w-full">
                     <CertificationCard index={index} {...card} />
                  </div>
               </div>
            ))}

            {/* Navigation Buttons */}
            <button
               onClick={prevSlide}
               className="absolute left-4 top-1/2 -translate-y-1/2  flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-sm transition-all hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#EB9948] focus:ring-offset-2 z-70"
               aria-label="Previous slide"
            >
               <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
               </svg>
            </button>

            <button
               onClick={nextSlide}
               className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-sm transition-all hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#EB9948] focus:ring-offset-2"
               aria-label="Next slide"
            >
               <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
               {certificationCards.map((_, index) => (
                  <button
                     key={index}
                     onClick={() => goToSlide(index)}
                     className={`h-3 w-3 rounded-full transition-all ${index === currentSlide
                           ? "bg-[#EB9948]"
                           : "bg-[#dadada] hover:bg-white/80"
                        }`}
                     aria-label={`Go to slide ${index + 1}`}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default CertificationCarousel;
