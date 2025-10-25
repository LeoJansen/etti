"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DEFAULT_OPTIONS = {
  itemSelector: ".about-animate-item",
  start: "top 75%",
  end: "bottom 25%",
  stagger: 0.2,
  fromY: 64,
  duration: 0.8,
};

export const useAboutAnimation = (rootRef, options = {}) => {
  const {
    itemSelector,
    start,
    end,
    stagger,
    fromY,
    duration,
  } = { ...DEFAULT_OPTIONS, ...options };

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const select = gsap.utils.selector(root);
      const items = select(itemSelector);
      if (!items.length) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start,
          end,
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(items, { autoAlpha: 0, y: fromY });

      timeline.to(items, {
        autoAlpha: 1,
        y: 0,
        duration,
        ease: "power2.out",
        stagger,
      });

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    {
      scope: rootRef,
      dependencies: [
        itemSelector,
        start,
        end,
        stagger,
        fromY,
        duration,
      ],
    }
  );
};
