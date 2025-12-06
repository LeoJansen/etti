'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useProjectAnimation = (sectionRef) => {
	useGSAP(
		() => {
		const sectionElement = sectionRef?.current;
		if (!sectionElement) {
			return;
		}

		const ctx = gsap.context(() => {
			const select = gsap.utils.selector(sectionElement);
			const headingItems = select('[data-project-heading]');
			const descriptionItems = select('[data-project-description]');
			const cardItems = select('[data-project-card]');
			const targets = [
				...headingItems,
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
					return window
						.matchMedia('(prefers-reduced-motion: reduce)')
						.matches;
				})();

			if (prefersReducedMotion) {
				gsap.set(targets, { autoAlpha: 1, y: 0 });
				return;
			}

			const timeline = gsap.timeline({
				defaults: { duration: 0.6, ease: 'power3.out' },
				scrollTrigger: {
					trigger: sectionElement,
					start: 'top 70%',
					once: true,
				},
			});

			if (headingItems.length) {
				timeline.to(headingItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.15,
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
					stagger: 0.2,
				});
			}
		}, sectionElement);

		return () => ctx.revert();
		},
		{
			scope: sectionRef,
			dependencies: [sectionRef],
		}
	);
};

export default useProjectAnimation;
