'use client'

import { useState } from 'react'
import { useResponsive } from '@/utils/responsive'
import Image from 'next/image'

interface InspirationItem {
  id: string
  imageUrl: string
  prompt: string
}

const mockInspirations: InspirationItem[] = [
  // Add your inspiration items here
]

export function InspirationGrid() {
  const [inspirations] = useState<InspirationItem[]>(mockInspirations)
  const { isMobile } = useResponsive()

  const gridClass = isMobile 
    ? 'grid grid-cols-2 gap-2' 
    : 'grid grid-cols-4 gap-4'

  return (
    <div className={`${gridClass} p-4`}>
      {inspirations.map((item) => (
        <div 
          key={item.id} 
          className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative"
        >
          <Image 
            src={item.imageUrl} 
            alt={item.prompt}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      ))}
    </div>
  )
} 