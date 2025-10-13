"use client"

import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import ServiceCardCarousel from './ServiceCardCarousel'
import { servicesData } from './ServicesContent'

const ServicesCarouselMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1))
  }

  const handleCardClick = (index) => {
    setActiveIndex(index)
  }

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const swipeDistance = touchStartX.current - touchEndX.current

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        handleNext() // Swipe left = next
      } else {
        handlePrevious() // Swipe right = previous
      }
    }
  }

  // Auto-play desabilitado para melhor controle do usuário
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext()
  //   }, 4000)
  //   return () => clearInterval(interval)
  // }, [activeIndex])

  return (
    <section id="services" className="flex md:hidden relative w-full min-h-screen max-w-screen overflow-hidden">
      <Image
        src="/assets/servicesBgMobile3.png"
        alt="Background Gradient"
        fill
        style={{ objectFit: 'cover', objectPosition: 'left center' }}
        quality={100}
        sizes='100vw'
        className='-z-10'
      />
      
      <div className="flex flex-col w-full h-full">
        {/* Header da seção */}
        <div className='flex w-full h-1/3 justify-end items-center'>
          <div className='flex flex-col justify-end items-end bg-[#00000091] backdrop-blur-[40px] shadow-[0_2px_2px_2px_rgba(20,20,20,0.4)] place-self-end p-4 px-8 rounded-l-[6px]'>
            <div className='flex flex-col justify-end w-fit'>
              <div className='flex w-full justify-end gap-4 items-center'>
                <h3 className="text-lg font-light text-[#cecece]">Nossos</h3>
                <div className='h-[6px] w-full rounded-[1.5px] bg-[#EBC197]' />
              </div>
              <div className='flex w-fit'>
                <h2 className="text-3xl font-bold text-white">
                  Serviços
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full h-2/3 flex flex-col justify-center items-center relative px-4">
          {/* Container do carousel mobile */}
          <div 
            ref={carouselRef}
            className="flex items-center justify-center w-full max-w-sm relative touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Card ativo no centro */}
            <div className="flex justify-center">
              <ServiceCardCarousel
                title={servicesData[activeIndex].title}
                description={servicesData[activeIndex].description}
                icon={servicesData[activeIndex].icon}
                iconWidth={servicesData[activeIndex].icon.iconWidth}
                iconHeight={servicesData[activeIndex].icon.iconHeight}
                pulseOffset={activeIndex}
                isActive={true}
                onClick={() => {}}
              />
            </div>

            {/* Cards laterais (apenas visuais, menores) */}
            {servicesData.length > 1 && (
              <>
                {/* Card anterior (esquerda) */}
                <div 
                  className="absolute left-0 opacity-40 scale-75 -translate-x-4 z-0"
                  onClick={handlePrevious}
                >
                  <ServiceCardCarousel
                    title={servicesData[activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1].title}
                    description=""
                    icon={servicesData[activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1].icon}
                    iconWidth={servicesData[activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1].icon.iconWidth}
                    iconHeight={servicesData[activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1].icon.iconHeight}
                    pulseOffset={0}
                    isActive={false}
                    onClick={handlePrevious}
                  />
                </div>

                {/* Card próximo (direita) */}
                <div 
                  className="absolute right-0 opacity-40 scale-75 translate-x-4 z-0"
                  onClick={handleNext}
                >
                  <ServiceCardCarousel
                    title={servicesData[activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1].title}
                    description=""
                    icon={servicesData[activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1].icon}
                    iconWidth={servicesData[activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1].icon.iconWidth}
                    iconHeight={servicesData[activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1].icon.iconHeight}
                    pulseOffset={0}
                    isActive={false}
                    onClick={handleNext}
                  />
                </div>
              </>
            )}
          </div>

          {/* Botões de navegação */}
          <div className="flex justify-between items-center w-full max-w-sm mt-8">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00000080] backdrop-blur-md border border-[#eb994850] text-[#eb9948] hover:bg-[#eb994820] transition-all duration-300"
              aria-label="Card anterior"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00000080] backdrop-blur-md border border-[#eb994850] text-[#eb9948] hover:bg-[#eb994820] transition-all duration-300"
              aria-label="Próximo card"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>

          {/* Indicadores de posição */}
          <div className="flex gap-2 mt-6">
            {servicesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[#eb9948] w-6' 
                    : 'bg-[#eb994850] hover:bg-[#eb994880]'
                }`}
                aria-label={`Ir para serviço ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCarouselMobile