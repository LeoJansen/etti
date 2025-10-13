"use client"

import React, { useState, useRef, useEffect } from 'react'
import ServiceCardCarousel from './ServiceCardCarousel'
import { servicesData } from './ServicesContent'

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1))
  }

  const handleCardClick = (index) => {
    setActiveIndex(index)
  }

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1))
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [servicesData.length])

  
   useEffect(() => {
    const interval = setInterval(() => {
       handleNext()
     }, 5000)
     return () => clearInterval(interval)
   }, [activeIndex])

  return (
    <div className="w-full h-2/3 flex justify-center items-center relative px-4">
      {/* Botão anterior */}
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handlePrevious()
        }}
        className="absolute left-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#00000080] backdrop-blur-md border border-[#eb994850] text-[#eb9948] hover:bg-[#eb994820] hover:border-[#eb9948] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Card anterior"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      {/* Container do carousel */}
      <div 
        ref={carouselRef}
        className="flex items-center justify-center gap-6 w-full max-w-6xl"
      >
        {/* Card anterior (esquerda) */}
        {servicesData.length > 1 && (
          <div className="flex-shrink-0">
            <ServiceCardCarousel
              title={servicesData[activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1].title}
              description={servicesData[activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1].description}
              icon={servicesData[activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1].icon}
              iconWidth={servicesData[activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1].icon.iconWidth}
              iconHeight={servicesData[activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1].icon.iconHeight}
              pulseOffset={0}
              isActive={false}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleCardClick(activeIndex === 0 ? servicesData.length - 1 : activeIndex - 1)
              }}
            />
          </div>
        )}

        {/* Card ativo (centro) */}
        <div className="flex-shrink-0">
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

        {/* Card próximo (direita) */}
        {servicesData.length > 1 && (
          <div className="flex-shrink-0">
            <ServiceCardCarousel
              title={servicesData[activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1].title}
              description={servicesData[activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1].description}
              icon={servicesData[activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1].icon}
              iconWidth={servicesData[activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1].icon.iconWidth}
              iconHeight={servicesData[activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1].icon.iconHeight}
              pulseOffset={0}
              isActive={false}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleCardClick(activeIndex === servicesData.length - 1 ? 0 : activeIndex + 1)
              }}
            />
          </div>
        )}
      </div>

      {/* Botão próximo */}
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleNext()
        }}
        className="absolute right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#00000080] backdrop-blur-md border border-[#eb994850] text-[#eb9948] hover:bg-[#eb994820] hover:border-[#eb9948] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Próximo card"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>

      {/* Indicadores de posição */}
      <div className="absolute bottom-4 flex gap-2 z-50">
        {servicesData.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleCardClick(index)
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex 
                ? 'bg-[#eb9948] w-6' 
                : 'bg-[#eb994850] hover:bg-[#eb994880] w-2 hover:w-4'
            }`}
            aria-label={`Ir para serviço ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesCarousel