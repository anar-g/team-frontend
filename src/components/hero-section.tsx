'use client'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import { Button } from '@/components/ui/button'
import { Trophy, Zap, Target, Play } from 'lucide-react'
import type React from 'react'
import { BgElement } from './parts/bg-element'

export default function HeroSection() {
  const placeholders = [
    'Search for upcoming tournaments...',
    'Find live match schedules...',
    'Discover player statistics...',
    'Explore team rankings...',
    'Check championship results...',
    'Browse sports analytics...',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Search submitted')
  }

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <BgElement />
      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900">DDAM</span>
            <div className="text-xs font-medium text-gray-500">CHAMPIONSHIP 2025</div>
          </div>
        </div>

        <Button>Watch Live</Button>
      </nav>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-32">
        <div className="mb-12 text-center">
          <div className="mb-8 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
            <span>LIVE CHAMPIONSHIP • 2025 SEASON</span>
          </div>

          <h1 className="mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-7xl leading-none font-black tracking-tight text-transparent md:text-9xl">
            Game On,
          </h1>

          <p className="mx-auto mb-16 max-w-3xl text-xl leading-relaxed font-medium text-gray-600 md:text-2xl">
            Experience the future of sports technology. Real-time analytics, live streaming, and championship insights at your fingertips.
          </p>
        </div>

        <div className="mb-20">
          <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              variant="outline"
              className="rounded-xl border-2 border-blue-200 bg-white/80 px-8 py-4 text-base font-semibold text-blue-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl dark:border-blue-400/30 dark:text-blue-400 dark:hover:bg-blue-950/30"
            >
              <Play className="mr-1 h-5 w-5" />
              Watch Live Scores
            </Button>
            <Button
              variant="outline"
              className="rounded-xl border-2 border-purple-200 bg-white/80 px-8 py-4 text-base font-semibold text-purple-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:shadow-xl dark:border-purple-400/30 dark:text-purple-400 dark:hover:bg-purple-950/30"
            >
              <Target className="mr-1 h-5 w-5" />
              View Analytics & Stats
            </Button>
            <Button className="rounded-xl px-8 py-4 text-base font-semibold">
              <Zap className="mr-1 h-5 w-5" />
              Archive
            </Button>
          </div>
        </div>

        {/* <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200/50 bg-white/60 p-6 text-center shadow-lg backdrop-blur-sm">
            <div className="mb-2 text-3xl font-black text-blue-600">24/7</div>
            <div className="font-medium text-gray-600">Live Coverage</div>
          </div>
          <div className="rounded-2xl border border-gray-200/50 bg-white/60 p-6 text-center shadow-lg backdrop-blur-sm">
            <div className="mb-2 text-3xl font-black text-purple-600">500K+</div>
            <div className="font-medium text-gray-600">Active Players</div>
          </div>
          <div className="rounded-2xl border border-gray-200/50 bg-white/60 p-6 text-center shadow-lg backdrop-blur-sm">
            <div className="mb-2 text-3xl font-black text-green-600">1M+</div>
            <div className="font-medium text-gray-600">Match Analytics</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
