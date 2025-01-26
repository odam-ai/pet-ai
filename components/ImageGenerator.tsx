'use client'

import { useImageStore } from '@/store/useImageStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert } from '@/components/ui/alert'
import { useResponsive } from '@/utils/responsive'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

export function ImageGenerator() {
  const { 
    prompt, 
    currentJob, 
    isGenerating, 
    error,
    setPrompt, 
    generateImage 
  } = useImageStore()
  
  const { isMobile } = useResponsive()

  const [showPreview, setShowPreview] = useState(false)

  const generatedImage = currentJob?.status === 'succeeded' 
    ? (Array.isArray(currentJob.output) ? null : currentJob.output?.image?.url) 
    : null

  // const handleExport = () => {
  //   if (!generatedImage) return;
    
  //   const a = document.createElement('a');
  //   a.href = generatedImage;
  //   a.download = `generated-image-${Date.now()}.png`;
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // }

  return (
    <div className="flex flex-col gap-4">
      {/* 图片预览区域 */}
      <div 
        className="aspect-[3/4] rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden relative cursor-pointer"
        onClick={() => generatedImage && setShowPreview(true)}
      >
        {generatedImage ? (
          <Image 
            src={generatedImage} 
            alt="Generated image"
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            {isGenerating ? (
              <div className="text-center flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
                <p className="mt-4 text-gray-900 dark:text-gray-100">
                  {currentJob && currentJob.queue_pos !== null 
                    ? `Waiting in queue... Position: ${currentJob.queue_pos}`
                    : (currentJob?.status === 'started' || currentJob?.status === 'rendered') 
                      ? 'Generating your image...'
                      : 'Processing...'}
                </p>
              </div>
            ) : (
              <span className="text-gray-500 dark:text-gray-400">No image generated</span>
            )}
          </div>
        )}
      </div>

      {/* 大图预览弹窗 */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">Generated Image Preview</DialogTitle>
          <div className="absolute right-4 top-4 z-50">
            <button
              className="rounded-full p-2 bg-black/50 hover:bg-black/70 text-white transition-colors"
              onClick={() => setShowPreview(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          {generatedImage && (
            <div className="aspect-[3/4] relative">
              <Image
                src={generatedImage}
                alt="Generated image preview"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* 错误提示 */}
      {error && (
        <Alert variant="destructive">
          <p>{error}</p>
        </Alert>
      )}

      {/* 提示词输入和生成按钮 */}
      <div className={`flex ${isMobile ? 'flex-col' : ''} gap-2`}>
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="flex-1"
          disabled={isGenerating}
        />
        <Button 
          onClick={generateImage}
          disabled={isGenerating || !prompt}
          className={isMobile ? 'w-full' : 'w-auto'}
        >
          {isGenerating ? 'Generating...' : 'Generate'}
        </Button>
        {/* <Button 
          onClick={handleExport}
          disabled={!generatedImage}
          className={isMobile ? 'w-full' : 'w-auto'}
        >
          Export
        </Button> */}
      </div>

      {/* 工具栏暂时不用 */}
      {/* <ToolBar /> */}
    </div>
  )
}
