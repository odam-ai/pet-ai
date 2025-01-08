import axios from 'axios'

export type InputImage = { key: string }
type OutputImage = { key: string, url: string }

export interface JobWorkflowData_DemoTextToImage {
    workflow: 'demo.text_to_image'
    input: { prompt: string }
    output?: { image: OutputImage }
}

export interface JobWorkflowData_Labubu {
    workflow: 'labubu'
    input: { prompt: string }
    output?: { image: OutputImage }
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export interface Job {
  id: string
  status: 'created' | 'dispatched' | 'started' | 'succeeded' | 'failed'
  output?: [] | {
    image: {
        key: string,
        url: string
    }
  }
  error?: string
}

export const imageApi = {
  createJob: async (data: JobWorkflowData_DemoTextToImage | JobWorkflowData_Labubu) => {
    const response = await api.post<Job>('/api/v1/jobs', data)
    return response.data
  },

  getJob: async (jobId: string) => {
    const response = await api.get<Job>(`/api/v1/jobs/${jobId}`)
    return response.data
  }
}
