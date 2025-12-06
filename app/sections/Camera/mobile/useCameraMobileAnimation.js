import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const useCameraMobileAnimation = (sectionRef) => {
  useGSAP(
    () => {
      if (!sectionRef?.current) return;

      const section = sectionRef.current;
      const ctx = gsap.context(() => {
      
      // Initial states
      gsap.set("[data-camera-heading-mobile]", { 
        opacity: 0, 
        y: 30,
        scale: 0.9
      });
      gsap.set("[data-camera-subheading-mobile]", { 
        opacity: 0, 
        x: -20 
      });
      gsap.set("[data-camera-accent-mobile]", { 
        scaleX: 0, 
        transformOrigin: "left center" 
      });
      gsap.set("[data-camera-description-mobile]", { 
        opacity: 0, 
        y: 20 
      });

      // Cards
      gsap.set(".camera-card-mobile", { 
        opacity: 0, 
        y: 40,
        scale: 0.9
      });
      gsap.set(".camera-card-image-mobile", { 
        opacity: 0, 
        scale: 1.1 
      });
      gsap.set(".camera-card-title-mobile", { 
        opacity: 0, 
        x: -15 
      });
      gsap.set(".camera-card-description-mobile", { 
        opacity: 0, 
        y: 15 
      });
      gsap.set(".camera-card-tech-mobile", { 
        opacity: 0, 
        y: 10 
      });

      // Header animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      });

      headerTl
        .to("[data-camera-heading-mobile]", { 
          duration: 0.6, 
          opacity: 1, 
          y: 0,
          scale: 1,
          ease: "power2.out" 
        })
        .to("[data-camera-accent-mobile]", { 
          duration: 0.5, 
          scaleX: 1, 
          ease: "power2.out" 
        }, "-=0.3")
        .to("[data-camera-subheading-mobile]", { 
          duration: 0.5, 
          opacity: 1, 
          x: 0, 
          ease: "power2.out" 
        }, "-=0.2")
        .to("[data-camera-description-mobile]", { 
          duration: 0.6, 
          opacity: 1, 
          y: 0, 
          ease: "power2.out" 
        }, "-=0.1");

      // Cards animation
      gsap.utils.toArray("[data-camera-card-mobile]").forEach((card, index) => {
        const cardElement = card.querySelector(".camera-card-mobile");
        
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        cardTl
          .to(cardElement, {
            duration: 0.6,
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            delay: index * 0.1
          })
          .to(cardElement.querySelector(".camera-card-image-mobile"), {
            duration: 0.8,
            opacity: 1,
            scale: 1,
            ease: "power2.out"
          }, "-=0.4")
          .to(cardElement.querySelector(".camera-card-title-mobile"), {
            duration: 0.5,
            opacity: 1,
            x: 0,
            ease: "power2.out"
          }, "-=0.3")
          .to(cardElement.querySelector(".camera-card-description-mobile"), {
            duration: 0.5,
            opacity: 1,
            y: 0,
            ease: "power2.out"
          }, "-=0.2")
          .to(cardElement.querySelector(".camera-card-tech-mobile"), {
            duration: 0.4,
            opacity: 1,
            y: 0,
            ease: "power2.out"
          }, "-=0.1");

        // Hover effect for mobile (touch)
        let touchStartTime = 0;
        
        cardElement.addEventListener("touchstart", () => {
          touchStartTime = Date.now();
          gsap.to(cardElement.querySelector(".camera-card-border-mobile"), {
            duration: 0.3,
            opacity: 0.8,
            ease: "power2.out"
          });
        });

        cardElement.addEventListener("touchend", () => {
          const touchDuration = Date.now() - touchStartTime;
          if (touchDuration < 200) { // Quick tap
            gsap.to(cardElement.querySelector(".camera-card-border-mobile"), {
              duration: 0.5,
              opacity: 0,
              ease: "power2.out",
              delay: 0.2
            });
          }
        });
      });

      }, section);

      return () => ctx.revert();
    },
    {
      scope: sectionRef,
      dependencies: [sectionRef],
    }
  );
};