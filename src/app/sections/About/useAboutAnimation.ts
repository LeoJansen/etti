"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface AboutAnimationOptions {
  itemSelector?: string;
  start?: string;
  end?: string;
  stagger?: number;
  fromY?: number;
  duration?: number;
}

const DEFAULT_OPTIONS: Required<AboutAnimationOptions> = {
  itemSelector: ".about-animate-item",
  start: "top 75%",
  end: "bottom 25%",
  stagger: 0.2,
  fromY: 64,
  duration: 0.8,
};

export const useAboutAnimation = (
  rootRef: RefObject<HTMLElement | null>,
  options: AboutAnimationOptions = {}
) => {
  const settings = { ...DEFAULT_OPTIONS, ...options };

  useGSAP(
    () => {
      const rootElement = rootRef.current;
      if (!rootElement) {
        return;
      }

      const select = gsap.utils.selector(rootElement);
      const items = select(settings.itemSelector);
      if (!items.length) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootElement,
          start: settings.start,
          end: settings.end,
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(items, { autoAlpha: 0, y: settings.fromY });

      timeline.to(items, {
        autoAlpha: 1,
        y: 0,
        duration: settings.duration,
        ease: "power2.out",
        stagger: settings.stagger,
      });

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    {
      scope: rootRef,
      dependencies: [
        settings.itemSelector,
        settings.start,
        settings.end,
        settings.stagger,
        settings.fromY,
        settings.duration,
      ],
    }
  );
};
