"use client"

import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const ServiceCardCarousel = ({ 
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
      const offsetDelay = parsedOffset * 0.35

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        delay: offsetDelay,
        defaults: {
          ease: 'sine.inOut',
          duration: 1.6
        }
      })

      // Estados iniciais
      gsap.set(circleRef.current, {
        boxShadow: '0 0 6px rgba(235, 153, 72, 0.45)',
        borderColor: 'hsl(30,50%,70%)'
      })

      gsap.set(iconWrapperRef.current, {
        filter: 'drop-shadow(0 0 4px rgba(235, 153, 72, 0.35))',
        scale: 1
      })

      gsap.set(dividerRef.current, {
        boxShadow: '0 0 6px rgba(235, 153, 72, 0.45)',
        backgroundColor: 'hsl(30,80%,80%)'
      })

      // Animação de pulso
      tl
        .to(circleRef.current, {
          boxShadow: '0 0 6px rgba(235, 153, 72, 0.7), 0 0 6px rgba(235, 125, 73, 0.65)',
          borderColor: '#D6CDC3'
        })
        .to(iconWrapperRef.current, {
          filter: 'drop-shadow(0 0 16px rgba(235, 153, 72, 0.45)) drop-shadow(2px 6px 6px rgba(255,233,152,0.50))',
          scale: 1.05
        }, '<')
        .to(dividerRef.current, {
          boxShadow: '0 0 10px rgba(235, 223, 172, 0.75)',
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
        service-card-carousel flex flex-col items-center cursor-pointer transition-all duration-500 ease-in-out
        ${isActive 
          ? 'h-[400px] w-[280px] scale-100 opacity-100 z-20' 
          : 'h-[320px] w-[200px] scale-90 opacity-60 z-10'
        }
        rounded-[8px] bg-[#00000095] backdrop-blur-[40px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.5)]
        hover:scale-95 hover:opacity-80
      `}
    >
      <div className={`flex w-full justify-center items-center transition-all duration-300 ${
        isActive ? 'p-6' : 'p-4'
      }`}>
        <div 
          ref={circleRef} 
          className={`flex justify-center items-center border-2 border-[hsl(30,50%,70%)] rounded-full transition-all duration-300 ${
            isActive ? 'w-20 h-20' : 'w-16 h-16'
          }`}
        >
          <Image
            src={icon.path}
            alt={icon.title}
            width={isActive ? iconWidth : iconWidth * 0.7}
            height={isActive ? iconHeight : iconHeight * 0.7}
            className="object-contain transition-all duration-300"
            ref={iconWrapperRef}
          />  
        </div>
      </div>
      
      {/* Título sempre visível */}
      <div className={`w-full flex flex-col justify-center items-center font-medium text-center leading-6 transition-all duration-300 ${
        isActive ? 'text-[20px] text-[#eb9948] px-4' : 'text-[16px] text-[#eb9948] px-2'
      }`}>
        {title.map((line, index) => (
          <h3 key={index} className="">
            {line}
          </h3>
        ))}
      </div>
      
      {/* Conteúdo visível apenas quando ativo */}
      {isActive && (
        <div className='w-full h-full flex flex-col gap-6 justify-center items-center px-4 pb-6'>
          <div 
            ref={dividerRef} 
            className='h-[5px] w-full bg-[hsl(30,80%,80%)] transition-all duration-300'
          />
          <div className='flex w-full h-full text-lg tracking-tight font-extralight'>
            <p className="text-[#a7a7a7] text-center leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceCardCarousel