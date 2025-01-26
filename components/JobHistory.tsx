'use client'

import { useEffect, useState } from 'react'
import { Job, imageApi } from '@/utils/api'
import Image from 'next/image'
import { format } from 'date-fns'
import { JobWorkflowData_DemoTextToImage, JobWorkflowData_Labubu } from '@/utils/api'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

export function JobHistory() {
  const [jobs, setJobs] = useState<Job<JobWorkflowData_Labubu | JobWorkflowData_DemoTextToImage>[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await imageApi.getJobs()
        const sortedJobs = response.sort((a, b) => {
          const dateA = new Date(a.succeeded_at || a.created_at)
          const dateB = new Date(b.succeeded_at || b.created_at)
          return dateB.getTime() - dateA.getTime()
        })
        setJobs(sortedJobs)
      } catch (error) {
        console.error('Failed to fetch jobs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No generated images yet. Try creating one!
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job: Job<JobWorkflowData_Labubu | JobWorkflowData_DemoTextToImage>) => (
          <div key={job.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
            {job.output?.image && (
              <div className="relative h-48 cursor-pointer" onClick={() => job.output?.image?.url && setSelectedImage(job.output.image.url)}>
                <Image
                  src={job.output.image.url}
                  alt="Generated image"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm px-2 py-1 rounded ${
                  job.status === 'succeeded' ? 'bg-green-100 text-green-800' :
                  job.status === 'failed' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {job.status}
                </span>
                <span className="text-sm text-gray-500">
                  {format(new Date(job.succeeded_at || job.created_at), 'MMM d, yyyy HH:mm')}
                </span>
              </div>
              {job.failed_reason && (
                <p className="text-sm text-red-600 mt-2">{job.failed_reason}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">Generated Image Preview</DialogTitle>
          {selectedImage && (
            <>
              <div className="absolute right-4 top-4 z-50">
                <button
                  className="rounded-full p-2 bg-black/50 hover:bg-black/70 text-white transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={selectedImage}
                  alt="Preview"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
} 