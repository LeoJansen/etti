"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";

export const useHeroSectionAnimationMobile = (
  containerRef: RefObject<HTMLElement | null>
) => {
  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const query = gsap.utils.selector(container);
    const background = query("[data-hero-bg]");
    const box = query("[data-hero-box]");
    const heading = query("[data-hero-heading]");
    const headingOverlay = query('[data-hero-heading] > span[aria-hidden="true"]');
    const headingLetters = query(".hero-letter");
    const headingOverlayLetters = query(".hero-letter-overlay");
    const ctaContainer = query("[data-hero-cta]");
    const ctaButtons = query("[data-hero-cta] a");

    const context = gsap.context(() => {
      gsap.set(container, { autoAlpha: 1 });
      gsap.set(background, { scale: 1.08, autoAlpha: 0 });
      gsap.set(box, { autoAlpha: 0, y: 24 });
      gsap.set(heading, { autoAlpha: 0, y: 16 });
      gsap.set(headingLetters, { opacity: 0 });
      gsap.set(headingOverlay, { autoAlpha: 0 });
      gsap.set(headingOverlayLetters, { opacity: 0 });
      gsap.set(ctaContainer, { autoAlpha: 0 });
      gsap.set(ctaButtons, { autoAlpha: 0, y: 20 });

      if (prefersReducedMotion) {
        gsap.set(container, { clearProps: "all", autoAlpha: 1 });
        gsap.set(background, { clearProps: "all", scale: 1, autoAlpha: 1, opacity: 1 });
        gsap.set(box, { clearProps: "all", autoAlpha: 1, y: 0 });
        gsap.set(heading, { clearProps: "all", autoAlpha: 1, y: 0 });
        gsap.set(headingLetters, { clearProps: "all", opacity: 1 });
        gsap.set(headingOverlay, { clearProps: "all", autoAlpha: 1 });
        gsap.set(headingOverlayLetters, { clearProps: "all", opacity: 1 });
        gsap.set(ctaContainer, { clearProps: "all", autoAlpha: 1 });
        gsap.set(ctaButtons, { clearProps: "all", autoAlpha: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

      timeline
        .to({}, { duration: 0.45 })
        .to(background, { autoAlpha: 1, scale: 1, duration: 1.1 })
        .to(box, { autoAlpha: 1, y: 0, duration: 0.6 }, "+=0.2")
        .to(heading, { autoAlpha: 1, y: 0, duration: 0.6 })
        .to(headingLetters, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05,
        })
        .to(headingOverlay, { autoAlpha: 1, duration: 0.3 }, "+=0.1")
        .to(headingOverlayLetters, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05,
        })
        .to(ctaContainer, { autoAlpha: 1, duration: 0.3 }, "-=5.2")
        .to(ctaButtons, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, "-=3.2");
    }, container);

    return () => context.revert();
  }, [containerRef]);
};
