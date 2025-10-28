
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

const useWhyAnimation = (sectionRef, disabled = false) => {
	useIsomorphicLayoutEffect(() => {
		if (disabled) {
			return undefined;
		}

		const sectionElement = sectionRef?.current;
		if (!sectionElement) {
			return undefined;
		}

		if (prefersReducedMotion()) {
			const ctxReduced = gsap.context(() => {
				const select = gsap.utils.selector(sectionElement);
				const content = select("[data-why-content]");
				const headings = select("[data-why-heading]");
				const subheadings = select("[data-why-subheading]");
				const accents = select("[data-why-accent]");
				const descriptions = select("[data-why-description]");
				const cards = select("[data-why-card]");

				gsap.set([
					...content,
					...headings,
					...subheadings,
					...accents,
					...descriptions,
					...cards,
				], {
					autoAlpha: 1,
					y: 0,
				});

				gsap.set(accents, { scaleX: 1 });
			}, sectionElement);

			return () => ctxReduced.revert();
		}

		const ctx = gsap.context(() => {
			const select = gsap.utils.selector(sectionElement);
			const content = select("[data-why-content]");
			const headings = select("[data-why-heading]");
			const subheadings = select("[data-why-subheading]");
			const accents = select("[data-why-accent]");
			const descriptions = select("[data-why-description]");
			const cards = select("[data-why-card]");

			gsap.set(content, { autoAlpha: 0, y: 60 });
			gsap.set(headings, { autoAlpha: 0, y: 40 });
			gsap.set(subheadings, { autoAlpha: 0, y: 40 });
			gsap.set(descriptions, { autoAlpha: 0, y: 30 });
			gsap.set(cards, { autoAlpha: 0, y: 40 });
			gsap.set(accents, {
				autoAlpha: 0,
				scaleX: 0,
				transformOrigin: "left center",
			});

			const timeline = gsap.timeline({
				defaults: { duration: 0.6, ease: "power3.out" },
				scrollTrigger: {
					trigger: sectionElement,
					start: "top 70%",
					once: true,
				},
			});

			if (content.length) {
				timeline.to(content, { autoAlpha: 1, y: 0, duration: 0.7 });
			}

			if (headings.length) {
				timeline.to(headings, {
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
					"-=0.3"
				);
			}

			if (subheadings.length) {
				timeline.to(
					subheadings,
					{
						autoAlpha: 1,
						y: 0,
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
					stagger: 0.25,
				});
			}
		}, sectionElement);

		return () => ctx.revert();
	}, [sectionRef, disabled]);

	return undefined;
};

export default useWhyAnimation;
