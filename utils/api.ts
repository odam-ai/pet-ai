import axios from 'axios'

export type InputImage = { key: string }
type OutputImage = { key: string, url: string }

export interface JobWorkflowData_DemoTextToImage {
    workflow: 'demo.text_to_image'
    input: { prompt: string }
    output?: { image: OutputImage },
}

export interface JobWorkflowData_Labubu {
    workflow: 'labubu'
    input: { prompt: string }
    output?: { image: OutputImage },
}

export type JobWorkflowData = JobWorkflowData_DemoTextToImage | JobWorkflowData_Labubu

export type JobStatus = 'created' | 'dispatched' | 'started' | 'succeeded' | 'failed' | 'rendered'

export type Job<T extends JobWorkflowData> = {
    id: string
    user_id: string

    status: JobStatus
    created_at: string
    started_at?: string
    succeeded_at?: string
    failed_at?: string
    failed_reason?: string
    updated_at: string
    queue_pos?: number

    workflow: T['workflow']
    input: T['input']
    output?: T['output']
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


export const imageApi = {
    createJob: async (data: JobWorkflowData_DemoTextToImage | JobWorkflowData_Labubu) => {
        const response = await api.post<Job<JobWorkflowData>>('/api/v1/jobs', data)
        return response.data
    },

    getJob: async (jobId: string) => {
        const response = await api.get<Job<JobWorkflowData>>(`/api/v1/jobs/${jobId}`)
        return response.data
    },

    getJobs: async () => {
        const response = await api.get<Job<JobWorkflowData>[]>('/api/v1/jobs')
        return response.data
    },

    getQueueSize: async () => {
        const response = await api.get<{ size: number }>('/api/v1/queue/size')
        return response.data
    }
}