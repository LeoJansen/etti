"use client";

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useServiceAnimation = (sectionRef) => {
   useGSAP(
      () => {
      const sectionElement = sectionRef?.current;
      if (!sectionElement) {
         return;
      }

      if (typeof window === 'undefined') {
         return;
      }

      const prefersReducedMotion = window.matchMedia(
         '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
         return;
      }

      const ctx = gsap.context(() => {
         const select = gsap.utils.selector(sectionElement);
         const items = select('[data-service-item]');

         if (!items.length) {
            return;
         }

         const timeline = gsap.timeline({
            defaults: { ease: 'power3.out' },
            scrollTrigger: {
               trigger: sectionElement,
               start: 'top 75%',
               end: 'bottom 20%',
               once: true,
            },
         });

         timeline.fromTo(
            sectionElement,
            { autoAlpha: 0, y: 80 },
            { autoAlpha: 1, y: 0, duration: 0.8 }
         );

         timeline.fromTo(
            items,
            { autoAlpha: 0, y: 48 },
            {
               autoAlpha: 1,
               y: 0,
               duration: 0.6,
               stagger: 0.2,
            },
            '-=0.4'
         );
      }, sectionElement);

      return () => ctx.revert();
      },
      {
         scope: sectionRef,
         dependencies: [sectionRef],
      }
   );
};

export default useServiceAnimation;
