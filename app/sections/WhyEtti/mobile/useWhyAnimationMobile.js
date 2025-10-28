"use client";

import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () => {
	if (typeof window === "undefined" || !window.matchMedia) {
		return false;
	}

	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const useWhyAnimationMobile = (sectionRef, disabled = false) => {
	useIsomorphicLayoutEffect(() => {
		if (disabled) {
			return undefined;
		}

		const sectionElement = sectionRef?.current;
		if (!sectionElement) {
			return undefined;
		}

		const selector = gsap.utils.selector(sectionElement);
		const headers = selector("[data-why-mobile-heading]");
		const accents = selector("[data-why-mobile-accent]");
		const descriptions = selector("[data-why-mobile-description]");
		const cards = selector("[data-why-mobile-card]");

		if (prefersReducedMotion()) {
			const ctxReduced = gsap.context(() => {
				gsap.set([
					...headers,
					...descriptions,
					...cards,
				], {
					autoAlpha: 1,
					y: 0,
				});
				gsap.set(accents, { autoAlpha: 1, scaleX: 1 });
			}, sectionElement);

			return () => ctxReduced.revert();
		}

		const ctx = gsap.context(() => {
			gsap.set(headers, { autoAlpha: 0, y: 30 });
			gsap.set(descriptions, { autoAlpha: 0, y: 30 });
			gsap.set(cards, { autoAlpha: 0, y: 40 });
			gsap.set(accents, {
				autoAlpha: 0,
				scaleX: 0,
				transformOrigin: "left center",
			});

			const timeline = gsap.timeline({
				defaults: { duration: 0.55, ease: "power3.out" },
				scrollTrigger: {
					trigger: sectionElement,
					start: "top 80%",
					once: true,
				},
			});

			if (headers.length) {
				timeline.to(headers, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.12,
				});
			}

			if (accents.length) {
				timeline.to(
					accents,
					{
						autoAlpha: 1,
						scaleX: 1,
						duration: 0.4,
						ease: "power2.out",
					},
					"-=0.25"
				);
			}

			if (descriptions.length) {
				timeline.to(
					descriptions,
					{
						autoAlpha: 1,
						y: 0,
					},
					"-=0.2"
				);
			}

			if (cards.length) {
				timeline.to(cards, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.2,
				});
			}
		}, sectionElement);

		return () => ctx.revert();
	}, [sectionRef, disabled]);

	return undefined;
};

export default useWhyAnimationMobile;
