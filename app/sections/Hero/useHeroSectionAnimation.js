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
    const headingLetters = q('.hero-letter');
    const headingOverlayLetters = q('.hero-letter-overlay');
    const ctaContainer = q('[data-hero-cta]');
    const cta = q('[data-hero-cta] a');

    const ctx = gsap.context(() => {
      // Keep the hero visible but empty so the user first sees a black screen
      gsap.set(container, { autoAlpha: 1 });

      // Initial states (all children fully hidden)
      gsap.set(bg, { scale: 1.08, autoAlpha: 0 });
      gsap.set(box, { autoAlpha: 0, y: 24 });
      gsap.set(heading, { autoAlpha: 0, y: 16 });
      gsap.set(headingLetters, { opacity: 0 });
      gsap.set(headingOverlay, { autoAlpha: 0 });
      gsap.set(headingOverlayLetters, { opacity: 0 });
      gsap.set(ctaContainer, { autoAlpha: 0 });
      gsap.set(cta, { autoAlpha: 0, y: 20 });

      if (prefersReduced) {
        gsap.set(container, { clearProps: 'all', autoAlpha: 1 });
        gsap.set(bg, { clearProps: 'all', scale: 1, autoAlpha: 1, opacity: 1 });
        gsap.set(box, { clearProps: 'all', autoAlpha: 1, y: 0 });
        gsap.set(heading, { clearProps: 'all', autoAlpha: 1, y: 0 });
        gsap.set(headingLetters, { clearProps: 'all', opacity: 1 });
        gsap.set(headingOverlay, { clearProps: 'all', autoAlpha: 1 });
        gsap.set(headingOverlayLetters, { clearProps: 'all', opacity: 1 });
        gsap.set(ctaContainer, { clearProps: 'all', autoAlpha: 1 });
        gsap.set(cta, { clearProps: 'all', autoAlpha: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl
        // Hold the black screen briefly before revealing anything
        .to({}, { duration: 0.45 })
        // Background emerges first
        .to(bg, { autoAlpha: 1, scale: 1, duration: 1.1 })
        // Frame/box fades in after the background settles
        .to(box, { autoAlpha: 1, y: 0, duration: 0.6 }, '+=0.2')
        // Heading container follows
        .to(heading, { autoAlpha: 1, y: 0, duration: 0.6 })
        // Reveal the heading characters sequentially
        .to(headingLetters, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.05,
        })
        // Bring in the glow overlay once the main text is visible
        .to(headingOverlay, { autoAlpha: 1, duration: 0.3 }, '+=0.1')
        .to(headingOverlayLetters, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.05,
        })
        // Finally reveal the call-to-action buttons sequentially
        .to(ctaContainer, { autoAlpha: 1, duration: 0.3 }, '+=0.2')
        .to(cta, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.12 });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
