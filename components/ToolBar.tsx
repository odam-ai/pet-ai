'use client'

import { useImageStore } from '@/store/useImageStore'
import { Button } from '@/components/ui/button'
import { useResponsive } from '@/utils/responsive'

export function ToolBar() {
  const { setAspectRatio } = useImageStore()
  const { isMobile } = useResponsive()

  const toolbarClass = isMobile 
    ? 'grid grid-cols-1 gap-2' 
    : 'grid grid-cols-3 gap-2'

  return (
    <div className={toolbarClass}>
      <Button 
        variant="outline" 
        onClick={() => setAspectRatio('1:1')}
      >
        Aspect ratio
      </Button>
      <Button 
        variant="outline"
      >
        Negative prompt
      </Button>
      <Button 
        variant="outline"
      >
        Random prompt
      </Button>
    </div>
  )
} 