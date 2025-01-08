'use client'

import { ImageGenerator } from '@/components/ImageGenerator'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { user, loading, signInWithGoogle, signOut } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold text-center">Welcome to Odam Pet Image Generator</h1>
        <p className="text-gray-600">Please sign in to continue</p>
        <Button onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Odam Pet</h1>
        <div className="flex items-center gap-4">
          <span>{user.email}</span>
          <Button variant="outline" onClick={signOut}>
            Sign Out
          </Button>
        </div>
      </div>
      <ImageGenerator />
    </main>
  )
}
