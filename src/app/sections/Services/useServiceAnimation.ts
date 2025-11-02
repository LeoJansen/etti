"use client";

import { useEffect, useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const useServiceAnimation = (sectionRef: RefObject<HTMLElement | null>) => {
  useIsomorphicLayoutEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement || typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const select = gsap.utils.selector(sectionElement);
      const items = select("[data-service-item]");

      if (!items.length) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionElement,
          start: "top 75%",
          end: "bottom 20%",
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
        "-=0.4"
      );
    }, sectionElement);

    return () => context.revert();
  }, [sectionRef]);
};

export default useServiceAnimation;
