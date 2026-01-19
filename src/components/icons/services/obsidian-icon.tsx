import Image from 'next/image'
import React from 'react'

const ObsidianIcon = () => {
  return (
    <div className="relative h-6 w-5">
      <Image
        src={'/images/icons/obsidian.webp'}
        alt='next-auth'
        fill
        className='object-contain'
      />
    </div>
  )
}

export default ObsidianIcon