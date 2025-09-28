'use client'

import React from 'react'

const toCssSize = (value) => (typeof value === 'number' ? `${value}px` : value)

const IconServices1 = ({
  color = 'currentColor',
  size = 64,
  title,
  className = '',
  style = {}
}) => {
  const dimension = toCssSize(size)

  return (
    <span
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      className={`inline-block ${className}`.trim()}
      style={{
        width: dimension,
        height: dimension,
        backgroundColor: color,
        maskImage: 'url(/assets/iconServices1.svg)',
        WebkitMaskImage: 'url(/assets/iconServices1.svg)',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        display: 'inline-block',
        ...style
      }}
    />
  )
}

export default IconServices1
