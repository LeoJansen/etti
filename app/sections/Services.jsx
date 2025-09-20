"use client"

import Image from 'next/image'
import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
 
// Register the React hook with GSAP (safe in client components)
gsap.registerPlugin(useGSAP)

const Services = () => {
  const scope = React.useRef(null)

  // Neon sweep across each <h3> using a lightweight SplitText-like routine
  useGSAP(() => {
    const root = scope.current
    if (!root) return

    const headers = gsap.utils.toArray(root.querySelectorAll('.metalicCards h3'))

    // Split all headers once and set base styles
    headers.forEach((h3) => {
      if (h3 instanceof HTMLElement) {
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
        gsap.set(chars, {
          color: '#b1b1b1',
          filter: 'drop-shadow(0 0 6px #00e7ff80)'
        })
      }
    })

    // Build a master timeline that animates one card title at a time
    const master = gsap.timeline({ repeat: -1, defaults: { ease: 'power1.out' } })

    headers.forEach((h3) => {
      if (!(h3 instanceof HTMLElement)) return
      const chars = h3.querySelectorAll('.neon-char')

      const segment = gsap.timeline()
      segment
        .to(chars, {
          duration: 0.32,
          color: '#e8fcff',
          filter: 'drop-shadow(0 0 6px #00e7ff80) drop-shadow(0 0 12px #00e7ff80)',
          stagger: { each: 0.03, from: 'start' }
        })
        .to(
          chars,
          {
            duration: 0.22,
            color: '#b1b1b1',
            filter: 'drop-shadow(0 0 6px #00e7ff80)',
            ease: 'power1.in',
            stagger: { each: 0.03, from: 'start' }
          },
          '>-0.08'
        )
        // small pause before moving to the next card
        .to({}, { duration: 0.3 })

      master.add(segment)
    })
  }, { scope })
  
  return (
    <section id="services" className="bg-[#141414] relative py-16 h-full  w-full max-w-screen" ref={scope}>

      <div className=" flex flex-col w-full h-full items-center justify-center  px-4 md:px-8 lg:px-16">
        <h3 className="text-4xl font-bold text-center text-[#b1b1b1] mb-4">
          Nossos Serviços Especializados
        </h3>
        <p className="text-center text-lg text-[#b1b4b9] mb-12">
          Transforme seu projeto com tecnologia e segurança.
        </p>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-10 lg:py-20 text-[#b1b4b9] ">

          {/* Cartão de Instalações Elétricas */}
          <div className="metalicCards flex flex-col md:flex-row p-6  items-center h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] gap-6 md:gap-0">
            <div className='flex  w-full xl:w-1/4 justify-center items-start '>
              <Image src="/assets/services1.png" alt="Eletricista" quality={100} width={500} height={500} className='w-18 h-18 lg:w-25 lg:h-25 rounded-tl-[20px] drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)]' />
            </div>
            <div className='w-full h-full xl:w-3/4 flex flex-col gap-8   justify-center items-center bg-[#151618] rounded-[8px] terminal-text p-8'>
              <div className='h-10 w-full flex justify-center '>
                <h3 className="lg:text-2xl font-medium text-center drop-shadow-[_1px_1px_12px_rgba(0,231,255,0.85)]">Instalações Elétricas</h3>
              </div>
              <div className='flex w-full h-full'>
                <p className=" text-justify lg:text-[18px] tracking-wide">
                  Projetos completos para habitação, edifícios e comércios com as mais recentes normas de segurança.
                </p>

              </div>

            </div>
          </div>

          {/* Cartão de Sistemas de Segurança */}
          <div className="metalicCards flex flex-col md:flex-row p-6  items-center  h-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] gap-6 md:gap-0">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services2.png" alt="Eletricista" quality={100} width={500} height={500} className='w-18 h-18 lg:w-25 lg:h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
             <div className='w-full xl:w-3/4 flex flex-col gap-8  h-full justify-stretch bg-[#151618] rounded-[8px]  p-8 terminal-text'>
             <div className='h-10 w-full flex justify-center '>
                <h3 className="lg:text-2xl font-medium text-center tracking-wide drop-shadow-[_1px_1px_12px_rgba(0,231,255,0.85)]">Sistemas de Segurança</h3>
              </div>
              <div className=' flex w-full h-full rounded-[8px]  '>
                <p className="text-justify lg:text-[18px] tracking-wide">
                  Proteção contra incêndios e sistemas de segurança integrados para máxima tranquilidade.
                </p>
              </div>

            </div>
          </div>

          {/* Cartão de Automação Residencial */}
          <div className="metalicCards flex flex-col md:flex-row p-6 rounded-lg h-full items-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] gap-6 md:gap-0">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services3.png" alt="Eletricista" quality={100} width={500} height={500} className='w-18 h-18 lg:w-25 lg:h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
             <div className='w-full xl:w-3/4 flex flex-col gap-8  h-full justify-stretch bg-[#151618] rounded-[8px]  p-8 terminal-text '>
              <div className='h-10 w-full flex justify-center'>
                <h3 className="lg:text-2xl font-medium text-center tracking-wide drop-shadow-[_1px_1px_12px_rgba(0,231,255,0.85)]">Automação Residencial</h3>
              </div>
              <div className='flex w-full h-full '>
                <p className="text-justify lg:text-[18px] tracking-wide">
                  Domótica avançada com protocolo KNX para controle inteligente de toda a habitação.
                </p>
              </div>
            </div>
          </div>

          {/* Cartão de Certificação Técnica */}
          <div className="metalicCards flex flex-col md:flex-row p-6 rounded-lg h-full items-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2c2f33] gap-6 md:gap-0">
            <div className='flex w-full xl:w-1/4 justify-center items-start'>
              <Image src="/assets/services4.png" alt="Eletricista" quality={100} width={500} height={500} className='w-18 h-18 lg:w-25 lg:h-25 drop-shadow-[1.1582px_1.1582px_0.51px_rgba(255,255,255,0.95)] rounded-tl-[20px]' />
            </div>
               <div className='w-full xl:w-3/4 flex flex-col gap-8  h-full justify-stretch bg-[#151618] rounded-[8px]  p-8 terminal-text'>
              <div className='h-10 w-full flex justify-center'>
                <h3 className="lg:text-2xl font-medium text-center tracking-wide drop-shadow-[_1px_1px_12px_rgba(0,231,255,0.85)]">Certificação Técnica</h3>
              </div>
              <div className='flex w-full h-full '>
                <p className="text-justify lg:text-[18px] tracking-wide">
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