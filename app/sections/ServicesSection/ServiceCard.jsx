"use client"


import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)


const ServiceCard = ({  title, description, icon, iconWidth, iconHeight, pulseOffset = 0 }) => {

  const cardRef = React.useRef(null)
  const iconWrapperRef = React.useRef(null)
  const circleRef = React.useRef(null)
  const dividerRef = React.useRef(null)

  useGSAP(() => {
    if (typeof window === 'undefined') {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      gsap.set([
        circleRef.current,
        iconWrapperRef.current,
        dividerRef.current
      ], { clearProps: 'all' })
      return
    }

    if (!circleRef.current || !iconWrapperRef.current || !dividerRef.current) {
      return
    }

    const parsedOffset = Number(pulseOffset)
    const offsetDelay = (Number.isFinite(parsedOffset) ? Math.max(parsedOffset, 0) : 0) * 0.35

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay: offsetDelay > 0 ? offsetDelay : 0,
      defaults: {
        ease: 'sine.inOut',
        duration: 1.6
      }
    })

    gsap.set(circleRef.current, {
      boxShadow: '0 0 6px rgba(235, 153, 72, 0.45)'
    })

    gsap.set(iconWrapperRef.current, {
      filter: 'drop-shadow(0 0 4px rgba(235, 153, 72, 0.35))'
    })

    gsap.set(dividerRef.current, {
      boxShadow: '0 0 6px rgba(235, 153, 72, 0.45)'
    })

    tl
      .to(circleRef.current, {
        boxShadow: '0 0 6px rgba(235, 153, 72, 0.7), 0 0 6px rgba(235, 125, 73, 0.65)',
        borderColor: '#D6CDC3'
      })
      .to(iconWrapperRef.current, {
        filter: 'drop-shadow(0 0 16px rgba(235, 153, 72, 0.85))',
        scale: 1.05
      }, '<')
      .to(dividerRef.current, {
        boxShadow: '0 0 10px rgba(235, 223, 172, 0.75)',
        backgroundColor: '#D6CDC3'
      }, '<')

    return () => {
      tl.kill()
    }
  }, { scope: cardRef })

  return (
    <div ref={cardRef} className="service-card flex flex-col  items-center h-full self-end pb-8 md:h-3/4 w-full  rounded-[2px]  duration-300  gap-2 md:gap-0  bg-[#00000095] backdrop-blur-[40px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.5)] z-10 ">
      <div className='flex w-full justify-start items-center  p-4'>

        <div ref={circleRef} className='flex w-30 h-21 justify-center items-center  border-2 border-[hsl(30,50%,70%)]  rounded-full'>
          <Image
            src={icon.path}
            alt={icon.title}
            width={iconWidth}
            height={iconHeight}
            className=' object-contain'
            ref={iconWrapperRef}
          />  
         
        </div>
           <div className=' w-full flex flex-col justify-center text-[20px] text-[#eb9948] font-medium text-center  leading-6  '>
          {title.map((line, index) => (
            <h3 key={index} className="">
              {line}
            </h3>
          ))}
        </div>
          
       
      </div>
      <div className='w-full h-full flex flex-col  gap-8 justify-center items-center  rounded-[6px]  px-4'>
        <div ref={dividerRef} className='h-[5px] md:h-[7px] w-full bg-[hsl(30,80%,80%)]'/>
     
        <div className='flex w-full h-full'>
          <p className=" text-[16px] tracking-wide text-[#8d8d8d]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard