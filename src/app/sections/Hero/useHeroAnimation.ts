"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";

export const useHeroAnimation = (
  ref: RefObject<HTMLElement | null>,
  color = "#F1CFAD"
) => {
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const context = gsap.context(() => {
      const baseShadow = `0 0 0.05rem ${color}, 0 0 0.1rem ${color}`;
      const strongShadow = `0 0 0.0515rem ${color}, 0 0 0.248rem ${color}`;

      gsap.set(element, {
        textShadow: baseShadow,
        filter: `blur(0.51px) drop-shadow(0 0 3px ${color})`,
        opacity: 0.85,
        willChange: "filter, text-shadow, opacity",
      });

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        return;
      }

      gsap
        .timeline({ repeat: -1, defaults: { ease: "sine.inOut" } })
        .to(element, {
          duration: 1.6,
          textShadow: strongShadow,
          filter: `blur(1px) drop-shadow(0 0 10px ${color})`,
          opacity: 0.95,
        })
        .to(element, {
          duration: 1.6,
          textShadow: baseShadow,
          filter: `blur(0.51px) drop-shadow(0 0 6px ${color})`,
          opacity: 0.85,
        });

      const flicker = () => {
        const iterations = gsap.utils.random(1, 2, 1);
        const flickerTimeline = gsap.timeline();

        for (let index = 0; index < iterations; index += 1) {
          flickerTimeline
            .to(element, {
              opacity: 0.8,
              duration: 0.02,
              ease: "power1.inOut",
            })
            .to(element, {
              opacity: 0.9,
              duration: 0.02,
              ease: "power1.inOut",
            });
        }

        gsap.delayedCall(gsap.utils.random(3, 7), flicker);
      };

      flicker();
    }, ref);

    return () => context.revert();
  }, [ref, color]);
};
