"use client";

import { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useIsomorphicLayoutEffect =
   typeof window !== 'undefined' ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

export const useSystemsAnimation = (sectionRef) => {
   useIsomorphicLayoutEffect(() => {
      const sectionElement = sectionRef?.current;
      if (!sectionElement) {
         return undefined;
      }

      const ctx = gsap.context(() => {
         const select = gsap.utils.selector(sectionElement);
         const accentItems = select('[data-systems-accent]');
         const subheadingItems = select('[data-systems-subheading]');
         const headingItems = select('[data-systems-heading]');
         const descriptionItems = select('[data-systems-description]');
         const cardItems = select('[data-systems-card]');

         const prefersReducedMotion =
            typeof window !== 'undefined'
            && typeof window.matchMedia === 'function'
            && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

         if (prefersReducedMotion) {
            if (accentItems.length) {
               gsap.set(accentItems, {
                  autoAlpha: 1,
                  scaleX: 1,
                  transformOrigin: 'left center',
               });
            }

            const remainingTargets = [
               ...subheadingItems,
               ...headingItems,
               ...descriptionItems,
               ...cardItems,
            ];

            if (remainingTargets.length) {
               gsap.set(remainingTargets, { autoAlpha: 1, y: 0 });
            }

            return;
         }

         if (accentItems.length) {
            gsap.set(accentItems, {
               autoAlpha: 0,
               scaleX: 0,
               transformOrigin: 'left center',
            });
         }

         const animatedTargets = [
            ...subheadingItems,
            ...headingItems,
            ...descriptionItems,
            ...cardItems,
         ];

         if (animatedTargets.length) {
            gsap.set(animatedTargets, { autoAlpha: 0, y: 40 });
         }

         const timeline = gsap.timeline({
            defaults: { duration: 0.6, ease: 'power3.out' },
            scrollTrigger: {
               trigger: sectionElement,
               start: 'top 70%',
               once: true,
            },
         });

         if (accentItems.length) {
            timeline.to(accentItems, {
               autoAlpha: 1,
               scaleX: 1,
               duration: 0.5,
            });
         }

         if (subheadingItems.length) {
            timeline.to(subheadingItems, {
               autoAlpha: 1,
               y: 0,
               stagger: 0.1,
            });
         }

         if (headingItems.length) {
            timeline.to(headingItems, {
               autoAlpha: 1,
               y: 0,
               stagger: 0.1,
            });
         }

         if (descriptionItems.length) {
            timeline.to(descriptionItems, {
               autoAlpha: 1,
               y: 0,
            });
         }

         if (cardItems.length) {
            timeline.to(cardItems, {
               autoAlpha: 1,
               y: 0,
               stagger: 0.18,
            });
         }
      }, sectionElement);

      return () => ctx.revert();
   }, [sectionRef]);
};
