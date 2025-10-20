"use client";
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

/**
 * useHeroAnimantion
 * Applies a subtle neon glow pulse and occasional flicker to a text element overlay.
 * The element should be positioned behind the main crisp text.
 * Respects prefers-reduced-motion by keeping a static glow.
 *
 * @param {React.RefObject<HTMLElement>} ref - ref to the overlay element
 * @param {string} color - glow color, default '#EBC299'
 */
export function useHeroAnimantion(ref, color = '#F1CFAD') {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const baseShadow = `0 0 0.05rem ${color}, 0 0 0.1rem ${color}`;
      const strongShadow = `0 0 0.0515rem ${color}, 0 0 0.248rem ${color}`;

      // Initial glow (overlay only)
      gsap.set(el, {
        textShadow: baseShadow,
        filter: `blur(0.51px) drop-shadow(0 0 3px ${color})`,
        opacity: 0.85,
        willChange: 'filter, text-shadow, opacity',
      });

      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      // Gentle pulse
      gsap
        .timeline({ repeat: -1, defaults: { ease: 'sine.inOut' } })
        .to(el, {
          duration: 1.6,
          textShadow: strongShadow,
          filter: `blur(1.0px) drop-shadow(0 0 10px ${color})`,
          opacity: 0.95,
        })
        .to(el, {
          duration: 1.6,
          textShadow: baseShadow,
          filter: `blur(0.51px) drop-shadow(0 0 6px ${color})`,
          opacity: 0.85,
        });

      // Subtle flicker
      const flicker = () => {
        const times = gsap.utils.random(1, 2, 1);
        const tl = gsap.timeline();
        for (let i = 0; i < times; i++) {
          tl.to(el, { opacity: 0.8, duration: 0.02, ease: 'power1.inOut' })
            .to(el, { opacity: 0.9, duration: 0.02, ease: 'power1.inOut' });
        }
        gsap.delayedCall(gsap.utils.random(3, 7), flicker);
      };
      flicker();
    }, ref);

    return () => ctx.revert();
  }, [ref, color]);
}
