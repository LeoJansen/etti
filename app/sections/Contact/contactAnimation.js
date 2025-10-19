import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initContactAnimation = () => {
   try {
      // Adiciona classe para indicar que GSAP está carregado
      document.body.classList.add('gsap-ready');

      // Timeline principal para a seção
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // Adiciona indicadores para debug (remover em produção)
            // markers: true
         }
      });

      // Animação do background
      tl.fromTo("#contact .bg-image", 
         { 
            scale: 1.1,
            opacity: 0
         },
         { 
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out"
         }
      );

      // Animação do título principal
      tl.fromTo(".contact-title", 
         { 
            y: 100,
            opacity: 0,
            scale: 0.8
         },
         { 
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
         }, 
         "-=1.2"
      );

      // Animação de piscar como estrelas no título após aparecer
      tl.add(() => {
         const starBlinkAnimation = gsap.timeline({ repeat: -1 });
         
         // Cria múltiplas animações de brilho em intervalos aleatórios
         starBlinkAnimation
            .to(".contact-title", {
               textShadow: "0 0 10px #b3b3b3, 0 0 20px #b3b3b3, 0 0 30px #b3b3b3",
               duration: 0.1,
               ease: "power2.out"
            })
            .to(".contact-title", {
               textShadow: "0 0 5px #b3b3b3",
               duration: 0.1,
               ease: "power2.out"
            })
            .to(".contact-title", {
               textShadow: "0 0 15px #b3b3b3, 0 0 25px #b3b3b3",
               duration: 0.05,
               ease: "power2.out",
               delay: gsap.utils.random(0.5, 2)
            })
            .to(".contact-title", {
               textShadow: "0 0 5px #b3b3b3",
               duration: 0.05,
               ease: "power2.out"
            })
            .to(".contact-title", {
               textShadow: "0 0 20px #b3b3b3, 0 0 35px #b3b3b3, 0 0 45px #b3b3b3",
               duration: 0.08,
               ease: "power2.out",
               delay: gsap.utils.random(1, 3)
            })
            .to(".contact-title", {
               textShadow: "0 0 5px #b3b3b3",
               duration: 0.12,
               ease: "power2.out"
            })
            .to(".contact-title", {
               textShadow: "0 0 12px #b3b3b3, 0 0 18px #b3b3b3",
               duration: 0.06,
               ease: "power2.out",
               delay: gsap.utils.random(0.8, 2.5)
            })
            .to(".contact-title", {
               textShadow: "0 0 5px #b3b3b3",
               duration: 0.1,
               ease: "power2.out",
               delay: gsap.utils.random(2, 4)
            });
      }, "+=0.5");

      // Animação dos cards
      tl.fromTo(".contact-card", 
         { 
            y: 80,
            opacity: 0,
            scale: 0.9
         },
         { 
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2
         }, 
         "-=0.8"
      );

      // Animação dos botões
      tl.fromTo(".contact-button", 
         { 
            y: 60,
            opacity: 0,
            scale: 0.9
         },
         { 
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15
         }, 
         "-=0.5"
      );

      // Efeito de hover nos cards
      gsap.utils.toArray(".contact-card").forEach(card => {
         const hoverTl = gsap.timeline({ paused: true });
         
         hoverTl.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out"
         });

         card.addEventListener("mouseenter", () => hoverTl.play());
         card.addEventListener("mouseleave", () => hoverTl.reverse());
      });

      // Efeito de hover nos botões
      gsap.utils.toArray(".contact-button").forEach(button => {
         const hoverTl = gsap.timeline({ paused: true });
         
         hoverTl.to(button, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out"
         });

         button.addEventListener("mouseenter", () => hoverTl.play());
         button.addEventListener("mouseleave", () => hoverTl.reverse());
      });

      return tl;

   } catch (error) {
      console.warn("GSAP animation failed, using fallback:", error);
      // Fallback: adiciona classe para animação CSS
      document.body.classList.add('contact-fallback');
      return null;
   }
};