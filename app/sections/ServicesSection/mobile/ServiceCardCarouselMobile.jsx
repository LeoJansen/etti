"use client"

import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const ServiceCardCarouselMobile = ({ 
  title, 
  description, 
  icon, 
  iconWidth, 
  iconHeight, 
  pulseOffset = 0,
  isActive = false,
  onClick 
}) => {
  const cardRef = React.useRef(null)
  const iconWrapperRef = React.useRef(null)
  const circleRef = React.useRef(null)
  const dividerRef = React.useRef(null)

  useGSAP(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    if (!circleRef.current || !iconWrapperRef.current) return

    // Limpar animações anteriores
    gsap.killTweensOf([circleRef.current, iconWrapperRef.current, dividerRef.current])

    // Animação apenas para o card ativo
    if (isActive && dividerRef.current) {
      const parsedOffset = Number(pulseOffset) || 0
      const offsetDelay = parsedOffset * 0.4 // Delay um pouco maior para mobile

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        delay: offsetDelay,
        defaults: {
          ease: 'sine.inOut',
          duration: 2.0 // Duração mais longa para mobile (mais suave)
        }
      })

      // Estados iniciais otimizados para mobile
      gsap.set(circleRef.current, {
        boxShadow: '0 0 4px rgba(235, 153, 72, 0.4)',
        borderColor: 'hsl(30,50%,70%)'
      })

      gsap.set(iconWrapperRef.current, {
        filter: 'drop-shadow(0 0 3px rgba(235, 153, 72, 0.3))',
        scale: 1
      })

      gsap.set(dividerRef.current, {
        boxShadow: '0 0 4px rgba(235, 153, 72, 0.4)',
        backgroundColor: 'hsl(30,80%,80%)'
      })

      // Animação de pulso suave para mobile
      tl
        .to(circleRef.current, {
          boxShadow: '0 0 8px rgba(235, 153, 72, 0.6), 0 0 4px rgba(235, 125, 73, 0.5)',
          borderColor: '#D6CDC3'
        })
        .to(iconWrapperRef.current, {
          filter: 'drop-shadow(0 0 12px rgba(235, 153, 72, 0.4)) drop-shadow(1px 4px 4px rgba(255,233,152,0.4))',
          scale: 1.02 // Escala bem pequena para mobile
        }, '<')
        .to(dividerRef.current, {
          boxShadow: '0 0 8px rgba(235, 223, 172, 0.6)',
          backgroundColor: '#D6CDC3'
        }, '<')

      return () => {
        tl.kill()
      }
    } else {
      // Reset para cards inativos
      gsap.set([circleRef.current, iconWrapperRef.current], {
        clearProps: 'all'
      })
      if (dividerRef.current) {
        gsap.set(dividerRef.current, { clearProps: 'all' })
      }
    }
  }, { scope: cardRef, dependencies: [isActive, pulseOffset] })

  return (
    <div 
      ref={cardRef} 
      onClick={onClick}
      className={`
        service-card-carousel-mobile flex flex-col items-center cursor-pointer transition-all duration-500 ease-in-out
        ${isActive 
          ? 'h-[400px] w-[240px] scale-100 opacity-100 z-20' 
          : 'h-[280px] w-[180px] scale-85 opacity-50 z-10'
        }
        rounded-[3px] bg-[#00000095] backdrop-blur-[4px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.5)]
        active:scale-95
      `}
    >
      {/* Container do ícone */}
      <div className={`flex flex-col gap-4 w-full justify-center items-center transition-all duration-300 ${
        isActive ? 'py-5' : 'py-3'
      }`}>
        <div 
          ref={circleRef} 
          className={`flex justify-center items-center border-2 border-[hsl(30,50%,70%)] rounded-full transition-all duration-300 ${
            isActive ? 'w-16 h-16' : 'w-12 h-12'
          }`}
        >
          <Image
            src={icon.path}
            alt={icon.title}
            width={isActive ? iconWidth * 0.7 : iconWidth * 0.5}
            height={isActive ? iconHeight * 0.7 : iconHeight * 0.5}
            className="object-contain transition-all duration-300"
            ref={iconWrapperRef}
          />  
        </div>
        <div 
            ref={dividerRef} 
            className='h-[5px] w-3/4 bg-[hsl(30,80%,80%)] rounded-full transition-all duration-300'
          />
      </div>
      
      {/* Título sempre visível */}
      <div className={`w-full flex flex-col  justify-center items-center font-medium text-center leading-5 transition-all duration-300 ${
        isActive ? 'text-base text-[#eb9948] px-3' : 'text-sm text-[#eb9948] px-2'
      }`}>
        {title.map((line, index) => (
          <h3 key={index} className="">
            {line}
          </h3>
        ))}
      </div>
      
      {/* Conteúdo visível apenas quando ativo */}
      {isActive && (
        <div className='w-full h-full flex flex-col gap-4 justify-center items-center px-3 pb-4 mt-5'>
          
          <div className='flex w-full h-full text-sm tracking-tight '>
            <p className="text-[#9e9e9e] tracking-tighter text-lg  text-center leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceCardCarouselMobile