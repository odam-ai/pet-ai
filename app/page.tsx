'use client'

import { useAuth } from '@/contexts/AuthContext'
import { ImageGenerator } from '@/components/ImageGenerator'
import { Button } from '@/components/ui/button'
import { Menu, Github, Twitter, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobHistory } from '@/components/JobHistory'

export default function Home() {
  const { user, loading, signInWithGoogle, signOut } = useAuth()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [btnPulse, setBtnPulse] = useState(false)

  const carouselItems = [
    {
      description: "A Labubu wearing a pig nose and piglet costume, holding a donut",
      background: "bg-pink-100"
    },
    {
      description: "A Labubu wearing pikachu costume, standing in a Pokemon forest scene",
      background: "bg-yellow-100"
    },
    {
      description: "A Labubu wearing a poop costume, holding a toilet plug, sitting on toilet stool",
      background: "bg-blue-100"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [carouselItems.length])

  useEffect(() => {
    const bounceTimer = setInterval(() => {
      setBtnPulse(true)
      setTimeout(() => setBtnPulse(false), 800)
    }, 2000)
    return () => clearInterval(bounceTimer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen mx-auto relative">
        <style>
          {`
            @keyframes gentleJello {
              0%, 100% { transform: scale3d(1, 1, 1); }
              30% { transform: scale3d(1.1, 0.9, 1); }
              40% { transform: scale3d(0.9, 1.1, 1); }
              50% { transform: scale3d(1.05, 0.95, 1); }
              65% { transform: scale3d(0.95, 1.05, 1); }
              75% { transform: scale3d(1.02, 0.98, 1); }
            }
            
            .jello-button {
              animation: gentleJello 0.8s both;
            }
            
            .carousel-slide {
              transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}
        </style>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-fredoka-one)' }}>
                <span>Labu</span>
                <span className="text-blue-400">Lab</span>
              </h1>
              <span className="text-sm md:text-base text-gray-500" style={{ fontFamily: 'var(--font-fredoka-one)' }}>
                Create your own unique Labubu
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-0">
          {/* Hero Section */}
          <div className="relative h-[calc(100vh-120px)] bg-gray-900 mt-14">
            <div className="max-w-7xl mx-auto h-full relative">
              <Image 
                src="/assets/astro.png"
                alt="Astronaut Labubu"
                fill
                className="object-contain md:object-cover z-0"
                priority
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-20 px-4 z-10 space-y-4 max-w-xl mx-auto">
                <div className="bg-white bg-opacity-70 rounded-lg p-3 mx-2">
                  <p className="text-gray-800 text-center">
                    A Labubu wearing an astronaut costume, standing on the moon
                  </p>
                </div>
                <Button 
                  className={`w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-6 font-semibold ${btnPulse ? 'jello-button' : ''}`}
                  style={{ fontFamily: 'var(--font-fredoka-one)' }}
                  onClick={signInWithGoogle}
                >
                  START GENERATING
                </Button>
              </div>
            </div>
          </div>

          {/* Dark section with text */}
          <div className="bg-gray-900 text-center py-12 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-white text-2xl md:text-3xl mb-2" style={{ fontFamily: 'var(--font-fredoka-one)' }}>
                Let your imagination wild! Create your own unique Labubu design at LabuLab!
              </h2>
            </div>
          </div>

          {/* Carousel section */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="mt-8 overflow-hidden rounded-lg">
              <div 
                className="flex carousel-slide"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`w-full flex-shrink-0 ${item.background} p-6 md:p-8`}
                  >
                    <div className="max-w-2xl mx-auto">
                      {/* <Image 
                        src={`/assets/showcase/showcase-${index + 1}.png`}
                        alt={`Labubu design ${index + 1}`}
                        fill
                        className="rounded-lg mb-3 w-full"
                        unoptimized
                      /> */}
                      <img 
                        src={`/assets/showcase/showcase-${index + 1}.png`}
                        alt={`Labubu design ${index + 1}`}
                        className="rounded-lg mb-3 w-full"
                      />
                      <p className="text-sm md:text-base bg-white bg-opacity-75 rounded p-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works section */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8 mx-auto max-w-3xl">
              <h3 className="text-2xl md:text-3xl mb-6 text-center" style={{ fontFamily: 'var(--font-fredoka-one)' }}>
                How it works:
              </h3>
              <ol className="space-y-3 mb-6">
                <li>1. Input your desired Labubu design in the text box.</li>
                <li>2. Click &quot;Generate&quot;</li>
                <li>3. Wait ~20 seconds, and receive your one of a kind Labubu design!</li>
              </ol>
              <Button 
                className={`w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-6 font-semibold ${btnPulse ? 'jello-button' : ''}`}
                style={{ fontFamily: 'var(--font-fredoka-one)' }}
                onClick={signInWithGoogle}
              >
                START GENERATING
              </Button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-4 text-sm">
                <a href="#" className="hover:text-gray-300">About</a>
                <a href="#" className="hover:text-gray-300">Privacy</a>
                <a href="#" className="hover:text-gray-300">Terms</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
              </div>
              <p className="text-gray-400 text-sm">
                © 2025 LabuLab. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8 overflow-hidden">
      <div className="flex justify-between items-center mb-8 flex-wrap">
        <h1 className="text-2xl font-bold">LabuLab</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="truncate max-w-xs">{user.email}</span>
          <Button variant="outline" onClick={signOut}>
            Sign Out
          </Button>
        </div>
      </div>

      <Tabs defaultValue="generate" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="generate">Generate Image</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="generate">
          <ImageGenerator />
        </TabsContent>
        <TabsContent value="history">
          <JobHistory />
        </TabsContent>
      </Tabs>
    </main>
  )
}
