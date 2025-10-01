"use client"

import Image from 'next/image'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ServiceCard from './ServiceCard'
import { servicesData } from './ServicesContent'
import { BiSolidChevronLeftSquare, BiSolidChevronRightSquare, } from 'react-icons/bi'

gsap.registerPlugin(useGSAP)

const AUTO_PLAY_DELAY = 4.5
const TRANSITION_DURATION = 0.75

const ServicesMobile = () => {
  const slideCount = servicesData.length
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const autoPlayRef = useRef(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const { contextSafe } = useGSAP(() => {}, { scope: containerRef })

  const goToSlide = useMemo(() => contextSafe((index, { immediate = false } = {}) => {
    if (!trackRef.current || slideCount === 0) return

    const normalizedIndex = ((index % slideCount) + slideCount) % slideCount

    activeIndexRef.current = normalizedIndex
    setActiveIndex(normalizedIndex)

    gsap.to(trackRef.current, {
      xPercent: -100 * normalizedIndex,
      duration: immediate ? 0 : TRANSITION_DURATION,
      ease: 'power2.inOut'
    })
  }), [contextSafe, slideCount])

  const clearAutoplay = useCallback(() => {
    if (autoPlayRef.current) {
      autoPlayRef.current.kill()
      autoPlayRef.current = null
    }
  }, [])

  const scheduleAutoplay = useCallback(() => {
    clearAutoplay()

    if (prefersReducedMotion || slideCount <= 1) {
      return
    }

    autoPlayRef.current = gsap.delayedCall(AUTO_PLAY_DELAY, () => {
      goToSlide(activeIndexRef.current + 1)
      scheduleAutoplay()
    })
  }, [clearAutoplay, goToSlide, prefersReducedMotion, slideCount])

  const handleManualNavigation = useCallback((targetIndex) => {
    clearAutoplay()
    goToSlide(targetIndex)

    if (!prefersReducedMotion) {
      scheduleAutoplay()
    }
  }, [clearAutoplay, goToSlide, prefersReducedMotion, scheduleAutoplay])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches)
    }

    setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    goToSlide(0, { immediate: true })
  }, [goToSlide])

  useEffect(() => {
    scheduleAutoplay()

    return () => {
      clearAutoplay()
    }
  }, [scheduleAutoplay, clearAutoplay])

  return (
    <section id="services" className="flex md:hidden relative md:h-screen w-full min-h-screen max-w-screen overflow-hidden">
      <Image
        src="/assets/servicesBgMobile3.png"
        alt="Background Gradient"
        fill                                                     
        style={{ objectFit: 'cover', objectPosition: 'left center' }}
        quality={100}
        sizes='100vw'
        className='-z-10'

      />
      <div className="flex flex-col w-full h-full items-center justify-end py-8">
        <div className='flex flex-col justify-end items-end bg-[#00000001] backdrop-blur-[40px] shadow-[0_2px_2px_2px_rgba(20,20,20,0.2)]  place-self-end p-1.5 px-7 md:p-8 md:px-16 rounded-l-[6px]'>
          <div className='flex w-full justify-end gap-4 items-center'>
            <div className='h-[6px] w-[70px] md:w-[145px] rounded-[1.5px] bg-[#4991EB]' />
            <h3 className="text-[35px] md:text-[40px] font-semibold text-[#EB9948] tracking-tight uppercase">Nossos</h3>

          </div>
          <h2 className="text-[68px] md:text-[70px] lg:text-[95px] tracking-[-0.08em] font-extralight leading-8 md:leading-14 mb-6 text-[#8f8f8f]">
            Serviços
          </h2>
        </div>

        <div ref={containerRef} className="relative w-full px-4 mt-68">
          {slideCount > 1 && (
            <div className="absolute inset-x-0 -top-8 flex items-center justify-between px-6">
              <button
                type="button"
                onClick={() => handleManualNavigation(activeIndex - 1)}
                className=" text-[#888888]   transition   "
                aria-label="Slide anterior"
              >
               <BiSolidChevronLeftSquare className='w-[37px] h-[37px]' />

              </button>
              <button
                type="button"
                onClick={() => handleManualNavigation(activeIndex + 1)}
               className=" text-[#888888]    transition   "
                aria-label="Próximo slide"
              >
            
            <BiSolidChevronRightSquare className='w-[37px] h-[37px]' />

              </button>
            </div>
          )}

          <div className="overflow-hidden rounded-[10px]">
            <div ref={trackRef} className="flex w-full">
              {servicesData.map((service, index) => (
                <article key={index} className="flex-shrink-0 w-full px-3 py-8">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    iconColor="#EB9948"
                       iconWidth={service.icon.iconWidth}
              iconHeight={service.icon.iconHeight}
                  />
                </article>
              ))}
            </div>
          </div>

          
        </div>

        {slideCount > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3">
            {servicesData.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                aria-label={`Ir para o slide ${index + 1}`}
                onClick={() => handleManualNavigation(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${activeIndex === index ? 'bg-[#EB7D49]' : 'bg-white/25'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesMobile