"use client"

import { useRef } from 'react'
import Image from 'next/image'
import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

// Register once at module scope
gsap.registerPlugin(useGSAP)

const Services = () => {
  const sectionRef = useRef(null)

  useGSAP((context) => {
    const headings = context.selector('.metalicCards h3')
    const cards = context.selector('.metalicCards')

    const baseShadow = '0 0 3px rgba(0,255,255,0.45), 0 0 8px rgba(0,255,255,0.25)'
    const strongShadow = '0 0 12px rgba(0,255,255,1), 0 0 28px rgba(0,255,255,0.85)'
    const hoverShadow = '0 0 16px rgba(0,255,255,1), 0 0 36px rgba(0,255,255,0.9)'
    const baseColor = '#b7edf2'
    const strongColor = '#eaffff'

    const headingToTween = new Map()

    // Split each heading into per-letter spans and create a left-to-right sweep
    headings.forEach((h) => {
      const el = h
      // Remove any heading-level shadow that could conflict with per-letter glow
      gsap.set(el, { textShadow: 'none' })
      // Avoid double-splitting during hot reload/StrictMode
      if (!el.dataset.original) {
        const original = el.textContent || ''
        el.dataset.original = original
      }

      // If already split, skip
      if (!el.querySelector('.char')) {
        const chars = Array.from(el.dataset.original)
        el.innerHTML = chars
          .map((c) => `<span class="char inline-block align-baseline">${c === ' ' ? '&nbsp;' : c}</span>`) 
          .join('')
      }

      const spans = el.querySelectorAll('.char')

      // Base style for each letter
      gsap.set(spans, {
        color: baseColor,
        textShadow: baseShadow,
      })

      // Wave sweep timeline: brighten each letter then return to base, left-to-right
      const tween = gsap.timeline({ repeat: -1, repeatDelay: 0.2 })
        .to(spans, {
          color: strongColor,
          textShadow: strongShadow,
          duration: 0.18,
          ease: 'sine.inOut',
          stagger: { each: 0.06, from: 'start' }
        })
        .to(spans, {
          color: baseColor,
          textShadow: baseShadow,
          duration: 0.18,
          ease: 'sine.inOut',
          stagger: { each: 0.06, from: 'start' }
        }, '>-0.12')

      headingToTween.set(el, tween)
    })

    // Hover: pause sweep and boost all letters; resume on leave
    cards.forEach((card) => {
      const title = card.querySelector('h3')
      if (!title) return

      const enter = () => {
        const spans = title.querySelectorAll('.char')
        headingToTween.get(title)?.pause()
        gsap.to(spans, {
          textShadow: hoverShadow,
          duration: 0.2,
          ease: 'power2.out',
        })
        gsap.to(title, { scale: 1.03, duration: 0.25, ease: 'power2.out' })
      }

      const leave = () => {
        const spans = title.querySelectorAll('.char')
        gsap.to(spans, {
          textShadow: baseShadow,
          duration: 0.2,
          ease: 'power2.out',
          onComplete: () => headingToTween.get(title)?.resume(),
        })
        gsap.to(title, { scale: 1, duration: 0.25, ease: 'power2.out' })
      }

      card.addEventListener('mouseenter', enter)
      card.addEventListener('mouseleave', leave)

      context.add(() => {
        card.removeEventListener('mouseenter', enter)
        card.removeEventListener('mouseleave', leave)
      })
    })

    // Cleanup: kill tweens and restore original text
    context.add(() => {
      headingToTween.forEach((tw) => tw.kill())
      headings.forEach((h) => {
        const el = h
        if (el.dataset.original) {
          el.textContent = el.dataset.original
        }
      })
    })
  }, { scope: sectionRef })
  return (
    <section id="services" ref={sectionRef} className="bg-[#141414] py-16 h-screen w-full max-w-screen">

      <div className=" flex flex-col w-full h-full items-center justify-center  px-4 md:px-8 lg:px-16">
        <h3 className="text-4xl font-bold text-center text-[#b1b1b1] mb-4">
          Nossos Serviços Especializados
        </h3>
        <p className="text-center text-lg text-[#b1b4b9] mb-12">
          Transforme seu projeto com tecnologia e segurança.
        </p>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 lg:px-10 lg:py-20 text-[#b1b4b9] ">

          {/* Cartão de Instalações Elétricas */}
          <div className="metalicCards flex p-6  items-center h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] ">
            <div className='flex w-full xl:w-1/4 justify-center items-start '>
              <Image src="/assets/services1.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
            <div className='w-full h-full xl:w-3/4 flex flex-col gap-8   justify-center items-center bg-[#151618] rounded-[8px] terminal-text p-8'>
              <div className='h-10 w-full flex justify-center '>
                <h3 className="text-2xl font-medium ">Instalações Elétricas</h3>
              </div>
              <div className='flex w-full h-full'>
                <p className=" text-justify text-[22px] tracking-wide">
                  Projetos completos para habitação, edifícios e comércios com as mais recentes normas de segurança.
                </p>

              </div>

            </div>
          </div>

          {/* Cartão de Sistemas de Segurança */}
          <div className="metalicCards flex p-6  items-center  h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] ">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services2.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
             <div className='w-full xl:w-3/4 flex flex-col gap-8  h-full justify-stretch bg-[#151618] rounded-[8px]  p-8 terminal-text'>
             <div className='h-10 w-full flex justify-center '>
                <h3 className="text-2xl font-medium  tracking-wide">Sistemas de Segurança</h3>
              </div>
              <div className=' flex w-full h-full rounded-[8px]  '>
                <p className="text-justify text-[22px] tracking-wide">
                  Proteção contra incêndios e sistemas de segurança integrados para máxima tranquilidade.
                </p>
              </div>

            </div>
          </div>

          {/* Cartão de Automação Residencial */}
          <div className="metalicCards flex  p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33]">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services3.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
             <div className='w-full xl:w-3/4 flex flex-col gap-8  h-full justify-stretch bg-[#151618] rounded-[8px]  p-8 terminal-text '>
              <div className='h-10 w-full flex justify-center'>
                <h3 className="text-2xl font-medium tracking-wide ">Automação Residencial</h3>
              </div>
              <div className='flex w-full h-full '>
                <p className="text-justify text-[22px] tracking-wide">
                  Domótica avançada com protocolo KNX para controle inteligente de toda a habitação.
                </p>
              </div>
            </div>
          </div>

          {/* Cartão de Certificação Técnica */}
          <div className="metalicCards flex p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33]">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services4.png" alt="Eletricista" quality={100} width={500} height={500} className='w-25 h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
               <div className='w-full xl:w-3/4 flex flex-col gap-8  h-full justify-stretch bg-[#151618] rounded-[8px]  p-8 terminal-text'>
              <div className='h-10 w-full flex justify-center'>
                <h3 className="text-2xl font-medium tracking-wide">Certificação Técnica</h3>
              </div>
              <div className='flex w-full h-full '>
                <p className="text-justify text-[22px] tracking-wide">
                  Documentação completa, certificações e vistorias para garantir conformidade regulamentar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services