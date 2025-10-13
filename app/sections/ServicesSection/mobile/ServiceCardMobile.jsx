"use client"

import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const ServiceCardMobile = ({ 
  title, 
  description, 
  icon, 
  iconWidth, 
  iconHeight, 
  pulseOffset = 0,
  isActive = true 
}) => {
  const cardRef = React.useRef(null)
  const iconWrapperRef = React.useRef(null)
  const circleRef = React.useRef(null)
  const dividerRef = React.useRef(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      gsap.set([
        circleRef.current,
        iconWrapperRef.current,
        dividerRef.current
      ], { clearProps: 'all' })
      return
    }

    if (!circleRef.current || !iconWrapperRef.current || !dividerRef.current) return

    // Animação apenas se o card estiver ativo (visível)
    if (isActive) {
      const parsedOffset = Number(pulseOffset) || 0
      const offsetDelay = parsedOffset * 0.35

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        delay: offsetDelay,
        defaults: {
          ease: 'sine.inOut',
          duration: 1.8 // Duração um pouco mais longa para mobile
        }
      })

      // Estados iniciais
      gsap.set(circleRef.current, {
        boxShadow: '0 0 4px rgba(235, 153, 72, 0.4)'
      })

      gsap.set(iconWrapperRef.current, {
        filter: 'drop-shadow(0 0 3px rgba(235, 153, 72, 0.3))'
      })

      gsap.set(dividerRef.current, {
        boxShadow: '0 0 4px rgba(235, 153, 72, 0.4)'
      })

      // Animação de pulso otimizada para mobile
      tl
        .to(circleRef.current, {
          boxShadow: '0 0 8px rgba(235, 153, 72, 0.6), 0 0 4px rgba(235, 125, 73, 0.5)',
          borderColor: '#D6CDC3'
        })
        .to(iconWrapperRef.current, {
          filter: 'drop-shadow(0 0 12px rgba(235, 153, 72, 0.4)) drop-shadow(1px 4px 4px rgba(255,233,152,0.4))',
          scale: 1.03 // Escala menor para mobile
        }, '<')
        .to(dividerRef.current, {
          boxShadow: '0 0 8px rgba(235, 223, 172, 0.6)',
          backgroundColor: '#D6CDC3'
        }, '<')

      return () => {
        tl.kill()
      }
    }
  }, { scope: cardRef, dependencies: [isActive, pulseOffset] })

  return (
    <div 
      ref={cardRef} 
      className="service-card-mobile flex flex-col items-center w-full h-[120px]  rounded-[8px] bg-[#00000095] backdrop-blur-[4px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.5)] p-4 gap-4"
    >
      {/* Container do ícone e título */}
      <div className='flex flex-col w-full items-center gap-4 pt-2'>
        {/* Círculo do ícone */}
        <div 
          ref={circleRef} 
          className='flex w-20 h-20 justify-center items-center border-2 border-[hsl(30,50%,70%)] rounded-full bg-[#00000020]'
        >
          <Image
            src={icon.path}
            alt={icon.title}
            width={iconWidth * 0.5} // Tamanho ajustado para mobile
            height={iconHeight * 0.5}
            className="object-contain"
            ref={iconWrapperRef}
          />  
        </div>
        
        {/* Título */}
        <div className='w-full flex flex-col justify-center text-center'>
          <div className='text-lg sm:text-xl text-[#eb9948] font-semibold leading-6'>
            {title.map((line, index) => (
              <h3 key={index} className="block">
                {line}
              </h3>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div 
        ref={dividerRef} 
        className='h-[4px] w-3/4 bg-[hsl(30,80%,80%)] rounded-full'
      />
      
      {/* Descrição */}
      <div className='flex w-full h-full flex-col justify-center items-center px-2'>
        <p className="text-[#a7a7a7] text-sm sm:text-base leading-relaxed text-center font-light tracking-wide">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCardMobile
