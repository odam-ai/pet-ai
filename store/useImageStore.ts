import { create } from 'zustand'
import { imageApi, type Job, type JobWorkflowData_DemoTextToImage } from '@/utils/api'

interface ImageState {
  currentJob: Job | null
  isGenerating: boolean
  prompt: string
  aspectRatio: string
  error: string | null
  setPrompt: (prompt: string) => void
  setAspectRatio: (ratio: string) => void
  generateImage: () => Promise<void>
  checkJobStatus: (jobId: string) => Promise<void>
  reset: () => void
}

export const useImageStore = create<ImageState>((set, get) => ({
  currentJob: null,
  isGenerating: false,
  prompt: '',
  aspectRatio: '1:1',
  error: null,
  
  setPrompt: (prompt) => set({ prompt }),
  setAspectRatio: (ratio) => set({ aspectRatio: ratio }),
  
  generateImage: async () => {
    try {
      set({ isGenerating: true, error: null })
      const jobData: JobWorkflowData_DemoTextToImage = {
        input: {
            prompt: get().prompt
        },
        workflow: 'demo.text_to_image'
      }
      
      const job = await imageApi.createJob(jobData)
      set({ currentJob: job })
      
      // Start polling job status
      if (job.id) {
        await get().checkJobStatus(job.id)
      }
    } catch (error) {
      set({ error: 'Failed to generate image' })
      console.error('Failed to generate image:', error)
    } finally {
    //   set({ isGenerating: false })
    }
  },

  checkJobStatus: async (jobId: string) => {
    const pollInterval = 2000 // 2 seconds
    const maxAttempts = 30 // 1 minute max

    let attempts = 0
    const poll = async () => {
      try {
        const job = await imageApi.getJob(jobId)
        set({ currentJob: job })

        if (job.status === 'succeeded' || job.status === 'failed') {
          if (job.status === 'failed') {
            set({ error: job.error || 'Generation failed' })
          }
          set({ isGenerating: false })
          return
        }

        if (attempts < maxAttempts) {
          attempts++
          setTimeout(poll, pollInterval)
        } else {
          set({ error: 'Generation timeout' })
        }
      } catch (error) {
        set({ error: 'Failed to check job status' })
        console.error('Failed to check job status:', error)
      }
    }

    await poll()
  },

  reset: () => set({
    currentJob: null,
    isGenerating: false,
    error: null
  })
}))
