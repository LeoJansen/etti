"use client";

import { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useIsomorphicLayoutEffect =
   typeof window !== 'undefined' ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

const useServiceAnimation = (sectionRef) => {
   useIsomorphicLayoutEffect(() => {
      const sectionElement = sectionRef?.current;
      if (!sectionElement) {
         return;
      }

      const ctx = gsap.context(() => {
         const query = gsap.utils.selector(sectionElement);
         const items = query('[data-service-item]');

         if (!items.length) {
            return;
         }

         gsap.set(items, { autoAlpha: 0, y: 40 });

         gsap
            .timeline({
               defaults: { duration: 0.6, ease: 'power3.out' },
               scrollTrigger: {
                  trigger: sectionElement,
                  start: 'top 70%',
                  once: true,
               },
            })
            .to(items, {
               autoAlpha: 1,
               y: 0,
               stagger: 0.2,
            });
      }, sectionElement);

      return () => ctx.revert();
   }, [sectionRef]);
};

export default useServiceAnimation;
