'use client'

import { useEffect } from 'react'
import { useImageStore } from '@/store/useImageStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert } from '@/components/ui/alert'
import { useResponsive } from '@/utils/responsive'
// import { ToolBar } from '@/components/ToolBar'
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

  const generatedImage = currentJob?.status === 'succeeded' 
    ? (Array.isArray(currentJob.output) ? null : currentJob.output?.image?.url) 
    : null

  const handleExport = () => {
    const data = { prompt, generatedImage }; // 假设您想导出这些数据
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exported_image_data.json'; // 导出的文件名
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col gap-4">
      {/* 图片预览区域 */}
      <div className="aspect-square w-full rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {generatedImage ? (
          <img 
            src={generatedImage} 
            alt="Generated image"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            {isGenerating ? (
              <div className="text-center flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
                <p className="mt-4 text-gray-900 dark:text-gray-100">Generating your image...</p>
              </div>
            ) : (
              <span className="text-gray-500 dark:text-gray-400">No image generated</span>
            )}
          </div>
        )}
      </div>

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
        <Button 
          onClick={handleExport}
          disabled={!generatedImage}
          className={isMobile ? 'w-full' : 'w-auto'}
        >
          Export
        </Button>
      </div>

      {/* 工具栏暂时不用 */}
      {/* <ToolBar /> */}
    </div>
  )
}
