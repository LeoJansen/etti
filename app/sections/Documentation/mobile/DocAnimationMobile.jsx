"use client";

import { useMemo } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MOBILE_ANIMATION_DEFAULTS = {
	selector: ".doc-card-mobile",
	directions: ["left", "top", "right"],
	distance: 420,
	backgroundSelector: ".doc-bg-mobile",
	backgroundBlurInitial: 0,
	backgroundBlurFocused: 10,
	stagger: 0.18,
};

const resolveOffsets = (direction, distance) => {
	switch (direction) {
		case "left":
			return { x: -distance, y: 0 };
		case "right":
			return { x: distance, y: 0 };
		case "bottom":
			return { x: 0, y: distance };
		case "top":
		default:
			return { x: 0, y: -distance };
	}
};

export function useDocAnimationMobile(containerRef, options = {}) {
	const settings = useMemo(
		() => ({ ...MOBILE_ANIMATION_DEFAULTS, ...options }),
		[options]
	);

	const {
		selector,
		directions,
		distance,
		backgroundSelector,
		backgroundBlurInitial,
		backgroundBlurFocused,
		stagger,
	} = settings;

	useGSAP(
		() => {
			const container = containerRef.current;
			if (!container) return;

			const select = gsap.utils.selector(container);
			const cards = select(selector);
			if (!cards.length) return;

			const backgroundEls = backgroundSelector
				? select(backgroundSelector)
				: [];

			backgroundEls.forEach((bg) =>
				gsap.set(bg, { filter: `blur(${backgroundBlurInitial}px)` })
			);

			cards.forEach((card, index) => {
				const direction =
					directions[index] ?? directions[directions.length - 1] ?? "top";
				const { x, y } = resolveOffsets(direction, distance);
				gsap.set(card, { autoAlpha: 0, x, y });
			});

			const animationTimeline = gsap.timeline({ paused: true });

			if (backgroundEls.length) {
				animationTimeline.to(
					backgroundEls,
					{
						filter: `blur(${backgroundBlurFocused}px)`,
						duration: 0.8,
						ease: "power2.out",
					},
					0
				);
			}

			cards.forEach((card, index) => {
				animationTimeline.to(
					card,
					{
						autoAlpha: 1,
						x: 0,
						y: 0,
						duration: 0.6,
						ease: "power2.out",
					},
					index * stagger
				);
			});

			const trigger = ScrollTrigger.create({
				trigger: container,
				start: "center 82%",
				end: "bottom top",
				onEnter: () => animationTimeline.play(),
				onEnterBack: () => animationTimeline.play(),
				onLeave: () => animationTimeline.progress(1),
				onLeaveBack: () => animationTimeline.reverse(),
			});

			return () => {
				trigger.kill();
				animationTimeline.kill();
			};
		},
		{
			scope: containerRef,
			dependencies: [
				selector,
				JSON.stringify(directions),
				distance,
				backgroundSelector,
				backgroundBlurInitial,
				backgroundBlurFocused,
				stagger,
			],
			revertOnUpdate: true,
		}
	);
}


