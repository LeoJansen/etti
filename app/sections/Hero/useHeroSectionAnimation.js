"use client";
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

/**
 * useHeroSectionAnimation
 * Runs a one-time staged intro animation for the Hero section on mount.
 * Targets elements using data attributes inside the provided container ref.
 * Respects prefers-reduced-motion by applying final states without animation.
 *
 * Expected structure:
 *  - containerRef -> section element
 *  - [data-hero-bg]
 *  - [data-hero-box] (wrapper around heading)
 *  - [data-hero-heading] (main heading wrapper)
 *  - [data-hero-cta] (container for CTAs)
 */
export function useHeroSectionAnimation(containerRef) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const q = gsap.utils.selector(container);
  const bg = q('[data-hero-bg]');
  const box = q('[data-hero-box]');
  const heading = q('[data-hero-heading]');
  const headingOverlay = q('[data-hero-heading] > span[aria-hidden="true"]');
  const ctaContainer = q('[data-hero-cta]');
  const cta = q('[data-hero-cta] a');

    const ctx = gsap.context(() => {
      // Container starts fully hidden
      gsap.set(container, { autoAlpha: 0 });
      // Initial states (bg starts hidden)
    gsap.set(bg, { scale: 1.05, autoAlpha: 0 });
    gsap.set(box, { autoAlpha: 0, y: 20 });
    gsap.set(heading, { autoAlpha: 0, y: 10 });
  gsap.set(headingOverlay, { autoAlpha: 0 });
  gsap.set(ctaContainer, { autoAlpha: 0 });
  gsap.set(cta, { autoAlpha: 0, y: 16 });

      if (prefersReduced) {
        gsap.set(container, { clearProps: 'all', autoAlpha: 1 });
    gsap.set(bg, { clearProps: 'all', scale: 1, autoAlpha: 1 });
    gsap.set(box, { clearProps: 'all', autoAlpha: 1, y: 0 });
    gsap.set(heading, { clearProps: 'all', autoAlpha: 1, y: 0 });
  gsap.set(headingOverlay, { clearProps: 'all', autoAlpha: 1 });
  gsap.set(ctaContainer, { clearProps: 'all', autoAlpha: 1 });
  gsap.set(cta, { clearProps: 'all', autoAlpha: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl
  // Reveal container immediately so children can animate
  .to(container, { autoAlpha: 1, duration: 0.01 }, 0)
  // Background becomes visible and zooms subtly
  .to(bg, { autoAlpha: 1, scale: 1, duration: 1.1 }, 0)
    // Frame/box appears
    .to(box, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.15)
    // Heading rise in
    .to(heading, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.3)
  // Reveal heading overlay (allows glow to start only after reveal)
  .to(headingOverlay, { autoAlpha: 1, duration: 0.2 }, 0.45)
  // Reveal CTA container then stagger buttons
  .to(ctaContainer, { autoAlpha: 1, duration: 0.1 }, 0.5)
  .to(cta, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, 0.55);
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
