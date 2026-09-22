"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'

import { useDictionary } from '@/src/site/context/DictionaryContext'

import ServiceCardCarousel from './ServiceCardCarousel'
import { wrapIndex } from '@/app/utils/circularIndex'

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

  const handlePrevious = () => {
    setActiveIndex((prev) => wrapIndex(prev - 1, cardsLength))
  }

  const handleNext = () => {
    setActiveIndex((prev) => wrapIndex(prev + 1, cardsLength))
  }

  const handleCardClick = (index) => {
    setActiveIndex(wrapIndex(index, cardsLength))
  }

  // Navegação por teclado
  useEffect(() => {
    if (cardsLength <= 1) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => wrapIndex(prev - 1, cardsLength))
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => wrapIndex(prev + 1, cardsLength))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [cardsLength])

  useEffect(() => {
    if (cardsLength <= 1) {
      return undefined
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => wrapIndex(prev + 1, cardsLength))
    }, 5000)

    return () => clearInterval(interval)
  }, [cardsLength])

  if (cardsLength === 0) {
    return null
  }

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
              title={cards[wrapIndex(activeIndex - 1, cardsLength)].title}
              description={cards[wrapIndex(activeIndex - 1, cardsLength)].description}
              icon={cards[wrapIndex(activeIndex - 1, cardsLength)].icon}
              iconWidth={cards[wrapIndex(activeIndex - 1, cardsLength)].icon.iconWidth}
              iconHeight={cards[wrapIndex(activeIndex - 1, cardsLength)].icon.iconHeight}
              pulseOffset={0}
              isActive={false}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleCardClick(wrapIndex(activeIndex - 1, cardsLength))
              }}
            />
          </div>
        )}

        {/* Card ativo (centro) */}
        <div className="flex-shrink-0">
          <ServiceCardCarousel
            title={cards[wrapIndex(activeIndex, cardsLength)].title}
            description={cards[wrapIndex(activeIndex, cardsLength)].description}
            icon={cards[wrapIndex(activeIndex, cardsLength)].icon}
            iconWidth={cards[wrapIndex(activeIndex, cardsLength)].icon.iconWidth}
            iconHeight={cards[wrapIndex(activeIndex, cardsLength)].icon.iconHeight}
            pulseOffset={activeIndex}
            isActive={true}
            onClick={() => {}}
          />
        </div>

        {/* Card próximo (direita) */}
        {cardsLength > 1 && (
          <div className="flex-shrink-0">
            <ServiceCardCarousel
              title={cards[wrapIndex(activeIndex + 1, cardsLength)].title}
              description={cards[wrapIndex(activeIndex + 1, cardsLength)].description}
              icon={cards[wrapIndex(activeIndex + 1, cardsLength)].icon}
              iconWidth={cards[wrapIndex(activeIndex + 1, cardsLength)].icon.iconWidth}
              iconHeight={cards[wrapIndex(activeIndex + 1, cardsLength)].icon.iconHeight}
              pulseOffset={0}
              isActive={false}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleCardClick(wrapIndex(activeIndex + 1, cardsLength))
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
                index === wrapIndex(activeIndex, cardsLength)
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
