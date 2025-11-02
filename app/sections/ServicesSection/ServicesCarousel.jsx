"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'

import { useDictionary } from '@/src/site/context/DictionaryContext'

import ServiceCardCarousel from './ServiceCardCarousel'

const ServicesCarousel = ({ className = '', ...rest }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)
  const { dictionary } = useDictionary()
  const cards = useMemo(() => {
    return dictionary.services.cards.map((card) => ({
      title: card.title,
      description: card.description,
      icon: {
        path: card.icon.src,
        title: card.icon.alt,
        iconWidth: card.icon.width,
        iconHeight: card.icon.height,
      },
    }))
  }, [dictionary.services.cards])

  const cardsLength = cards.length

  if (cardsLength === 0) {
    return null
  }

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? cardsLength - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cardsLength - 1 ? 0 : prev + 1))
  }

  const handleCardClick = (index) => {
    setActiveIndex(index)
  }

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev === 0 ? cardsLength - 1 : prev - 1))
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === cardsLength - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [cardsLength])

  
   useEffect(() => {
    const interval = setInterval(() => {
       handleNext()
     }, 5000)
     return () => clearInterval(interval)
   }, [activeIndex, cardsLength])

  return (
    <div
      {...rest}
      className={`w-full h-2/3 flex justify-center items-center relative px-4${className ? ` ${className}` : ''}`}
    >
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
        {cardsLength > 1 && (
          <div className="flex-shrink-0">
            <ServiceCardCarousel
              title={cards[activeIndex === 0 ? cardsLength - 1 : activeIndex - 1].title}
              description={cards[activeIndex === 0 ? cardsLength - 1 : activeIndex - 1].description}
              icon={cards[activeIndex === 0 ? cardsLength - 1 : activeIndex - 1].icon}
              iconWidth={cards[activeIndex === 0 ? cardsLength - 1 : activeIndex - 1].icon.iconWidth}
              iconHeight={cards[activeIndex === 0 ? cardsLength - 1 : activeIndex - 1].icon.iconHeight}
              pulseOffset={0}
              isActive={false}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleCardClick(activeIndex === 0 ? cardsLength - 1 : activeIndex - 1)
              }}
            />
          </div>
        )}

        {/* Card ativo (centro) */}
        <div className="flex-shrink-0">
          <ServiceCardCarousel
            title={cards[activeIndex].title}
            description={cards[activeIndex].description}
            icon={cards[activeIndex].icon}
            iconWidth={cards[activeIndex].icon.iconWidth}
            iconHeight={cards[activeIndex].icon.iconHeight}
            pulseOffset={activeIndex}
            isActive={true}
            onClick={() => {}}
          />
        </div>

        {/* Card próximo (direita) */}
        {cardsLength > 1 && (
          <div className="flex-shrink-0">
            <ServiceCardCarousel
              title={cards[activeIndex === cardsLength - 1 ? 0 : activeIndex + 1].title}
              description={cards[activeIndex === cardsLength - 1 ? 0 : activeIndex + 1].description}
              icon={cards[activeIndex === cardsLength - 1 ? 0 : activeIndex + 1].icon}
              iconWidth={cards[activeIndex === cardsLength - 1 ? 0 : activeIndex + 1].icon.iconWidth}
              iconHeight={cards[activeIndex === cardsLength - 1 ? 0 : activeIndex + 1].icon.iconHeight}
              pulseOffset={0}
              isActive={false}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleCardClick(activeIndex === cardsLength - 1 ? 0 : activeIndex + 1)
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
        {cards.map((_, index) => (
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