'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useCertificationAnimation = (sectionRef) => {
	useGSAP(
		() => {
		const sectionElement = sectionRef?.current;
		if (!sectionElement) {
			return undefined;
		}

		const ctx = gsap.context(() => {
			const select = gsap.utils.selector(sectionElement);
			const headingItems = select('[data-cert-heading]');
			const subheadingItems = select('[data-cert-subheading]');
			const dividerItems = select('[data-cert-divider]');
			const descriptionItems = select('[data-cert-description]');
			const carouselItems = select('[data-cert-carousel]');

			const animationTargets = [
				...headingItems,
				...subheadingItems,
				...dividerItems,
				...descriptionItems,
				...carouselItems,
			];

			if (!animationTargets.length) {
				return;
			}

			gsap.set(animationTargets, { autoAlpha: 0, y: 40 });

			const prefersReducedMotion = (() => {
				if (typeof window === 'undefined' || !window.matchMedia) {
					return false;
				}
				return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			})();

			if (prefersReducedMotion) {
				gsap.set(animationTargets, { autoAlpha: 1, y: 0 });
				return;
			}

			const timeline = gsap.timeline({
				defaults: { duration: 0.6, ease: 'power3.out' },
				scrollTrigger: {
					trigger: sectionElement,
					start: 'top 75%',
					once: true,
				},
			});

			if (headingItems.length) {
				timeline.to(headingItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.12,
				});
			}

			if (subheadingItems.length) {
				timeline.to(subheadingItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.12,
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

			if (carouselItems.length) {
				timeline.to(carouselItems, {
					autoAlpha: 1,
					y: 0,
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

export default useCertificationAnimation;
