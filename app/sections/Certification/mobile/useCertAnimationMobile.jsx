'use client';

import { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

const useCertAnimationMobile = (sectionRef) => {
	useIsomorphicLayoutEffect(() => {
		const sectionElement = sectionRef?.current;
		if (!sectionElement) {
			return undefined;
		}

		const ctx = gsap.context(() => {
			const select = gsap.utils.selector(sectionElement);
			const headingItems = select('[data-cert-mobile-heading]');
			const dividerItems = select('[data-cert-mobile-divider]');
			const descriptionItems = select('[data-cert-mobile-description]');
			const cardItems = select('[data-cert-mobile-card]');

			const targets = [
				...headingItems,
				...dividerItems,
				...descriptionItems,
				...cardItems,
			];

			if (!targets.length) {
				return;
			}

			gsap.set(targets, { autoAlpha: 0, y: 40 });

			const prefersReducedMotion = (() => {
				if (typeof window === 'undefined' || !window.matchMedia) {
					return false;
				}
				return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			})();

			if (prefersReducedMotion) {
				gsap.set(targets, { autoAlpha: 1, y: 0 });
				return;
			}

			const timeline = gsap.timeline({
				defaults: { duration: 0.6, ease: 'power3.out' },
				scrollTrigger: {
					trigger: sectionElement,
					start: 'top 80%',
					once: true,
				},
			});

			if (headingItems.length) {
				timeline.to(headingItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.1,
				});
			}

			if (dividerItems.length) {
				timeline.to(dividerItems, {
					autoAlpha: 1,
					y: 0,
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
					stagger: 0.15,
				});
			}
		}, sectionElement);

		return () => ctx.revert();
	}, [sectionRef]);
};

export default useCertAnimationMobile;
