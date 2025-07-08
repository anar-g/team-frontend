'use client'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import { Button } from '@/components/ui/button'
import { Trophy, Zap, Target, Play } from 'lucide-react'
import type React from 'react'

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
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-gradient-to-bl from-blue-100/20 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-100/20 via-transparent to-transparent blur-3xl"></div>

      {/* Geometric Patterns */}
      <div className="absolute top-20 left-10 h-32 w-32 rotate-12 animate-pulse rounded-lg border border-blue-200/30"></div>
      <div className="absolute right-20 bottom-40 h-24 w-24 animate-bounce rounded-full border border-purple-200/30"></div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900">SportsTech</span>
            <div className="text-xs font-medium text-gray-500">CHAMPIONSHIP 2025</div>
          </div>
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          <a href="#" className="font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            Live Matches
          </a>
          <a href="#" className="font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            Teams
          </a>
          <a href="#" className="font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            Analytics
          </a>
          <a href="#" className="font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            Rankings
          </a>
        </div>

        <Button className="rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">Watch Live</Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-32">
        {/* Status Badge */}
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

        {/* Search Input */}
        <div className="mb-20">
          <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <p className="mb-10 text-lg font-medium text-gray-500">Join the digital arena</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              variant="outline"
              className="rounded-xl border-2 border-blue-200 bg-white/80 px-8 py-4 text-base font-semibold text-blue-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl dark:border-blue-400/30 dark:text-blue-400 dark:hover:bg-blue-950/30"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Highlights
            </Button>
            <Button
              variant="outline"
              className="rounded-xl border-2 border-purple-200 bg-white/80 px-8 py-4 text-base font-semibold text-purple-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:shadow-xl dark:border-purple-400/30 dark:text-purple-400 dark:hover:bg-purple-950/30"
            >
              <Target className="mr-3 h-5 w-5" />
              View Analytics
            </Button>
            <Button className="rounded-xl px-8 py-4 text-base font-semibold">
              <Zap className="mr-3 h-5 w-5" />
              Join Tournament
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
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
        </div>
      </div>
    </div>
  )
}
