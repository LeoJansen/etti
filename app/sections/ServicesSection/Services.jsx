"use client"

import Image from 'next/image'
import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import ServiceCard from './ServiceCard'
 
// Register the React hook with GSAP (safe in client components)
gsap.registerPlugin(useGSAP)

const Services = () => {
  const scope = React.useRef(null)
  // Consider mobile when width <= 767px
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const color1 = '#fffdc8'
  const color2 = '#fff5a1'
  const color3 = '#fffcc2'

  // Services data
  const servicesData = [
    {
      imageSrc: "/assets/services1.png",
      imageAlt: "Eletricista",
      title: ["Instalações", "Elétricas"],
      description: "Projetos completos para habitação, edifícios e comércios com as mais recentes normas de segurança."
    },
    {
      imageSrc: "/assets/services2.png",
      imageAlt: "Sistemas de Segurança",
      title: ["Sistemas de", "Segurança"],
      description: "Proteção contra incêndios e sistemas de segurança integrados para máxima tranquilidade."
    },
    {
      imageSrc: "/assets/services3.png",
      imageAlt: "Automação Residencial",
      title: ["Automação", "Residencial"],
      description: "Domótica avançada com protocolo KNX para controle inteligente de toda a habitação."
    },
    {
      imageSrc: "/assets/services4.png",
      imageAlt: "Certificação Técnica",
      title: ["Certificação", "Técnica"],
      description: "Documentação completa, certificações e vistorias para garantir conformidade regulamentar."
    }
  ]

  // Setup neon effect: only animate the card under the mouse
  useGSAP(() => {
    const root = scope.current
    if (!root) return

    // Skip hover bindings on small screens if desired
    if (isMobile) return

    const cards = gsap.utils.toArray(root.querySelectorAll('.service-card'))

    const cleanups = []

    cards.forEach((card) => {
      if (!(card instanceof HTMLElement)) return

      const h3Elements = card.querySelectorAll('h3')
      if (h3Elements.length === 0) return

      let allChars = []

      // Prepare each h3 inside this card (split into chars once)
      h3Elements.forEach((h3) => {
        if (!(h3 instanceof HTMLElement)) return
        if (h3.dataset.split !== 'true') {
          const original = h3.textContent || ''
          h3.textContent = ''
          const frag = document.createDocumentFragment()
          ;[...original].forEach((ch) => {
            const span = document.createElement('span')
            span.className = 'neon-char'
            span.textContent = ch
            frag.appendChild(span)
          })
          h3.appendChild(frag)
          h3.dataset.split = 'true'
        }
        const chars = h3.querySelectorAll('.neon-char')
        allChars = [...allChars, ...chars]
      })

      // Baseline state for this card's title chars
      gsap.set(allChars, {
        color: 'rgba(255,255,220,1)',
        filter: 'drop-shadow(0 0 0.2px rgba(255,255,210,0.3))'
      })

      // Get the image element for this card
      const image = card.querySelector('.service-image')

      // Mouse enter animation (only this card)
      const handleMouseEnter = () => {
        gsap.to(allChars, {
          duration: 0.32,
          color: 'rgba(255,255,210,1)',
          filter: 'drop-shadow(0 0 6px rgba(255,255,210,0.4)) drop-shadow(0 0 12px rgba(255,255,210,0.3))',
          stagger: { each: 0.03, from: 'start' },
          ease: 'power1.out'
        })
        if (image) {
          gsap.to(image, {
            duration: 0.6,
            filter: 'drop-shadow(1.1582px 1.1582px 0.51px rgba(255,255,255,0.95)) drop-shadow(0 0 1px rgba(255,255,255,0.6)) drop-shadow(0 0 1px rgba(255,255,210,0.4))',
            scale: 1.01,
            ease: 'power1.out'
          })
        }
      }

      // Mouse leave animation (revert this card only)
      const handleMouseLeave = () => {
        gsap.to(allChars, {
          duration: 0.22,
          color: 'rgba(255,255,210,1)',
          filter: 'drop-shadow(0 0 0.2px rgba(245,245,255,0.3))',
          stagger: { each: 0.02, from: 'start' },
          ease: 'power1.in'
        })
        if (image) {
          gsap.to(image, {
            duration: 0.3,
            // Revert to the baseline drop shadow declared in class
            filter: 'drop-shadow(1.1582px 1.1582px 0.51px rgba(255,255,255,0.95))',
            scale: 1,
            ease: 'power1.in'
          })
        }
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      cleanups.push(() => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      })
    })

    // Proper cleanup when component unmounts or deps change
    return () => {
      cleanups.forEach((fn) => fn())
    }
  }, { scope, dependencies: [isMobile] })
  
  return (
    <section id="services" className=" bg-[#101111] relative py-16 h-full  w-full min-h-screen max-w-screen overflow-hidden" ref={scope}>

      <div className="flex flex-col w-full h-full items-center justify-center  px-4 md:px-8 lg:px-10 xl:px-20">
        <h3 className="text-4xl font-bold text-center text-[#b1b1b1] mb-4">
          Nossos Serviços Especializados
        </h3>
        <p className="text-center text-lg text-[#b1b4b9] mb-12">
          Transforme seu projeto com tecnologia e segurança.
        </p>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-0  lg:py-20 text-[#cecece]">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services