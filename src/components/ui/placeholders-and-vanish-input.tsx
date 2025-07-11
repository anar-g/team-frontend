'use client'
import { AnimatePresence, motion } from 'motion/react'
import type React from 'react'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: {
  placeholders: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length)
    }, 3000)
  }
  const handleVisibilityChange = () => {
    if (document.visibilityState !== 'visible' && intervalRef.current) {
      clearInterval(intervalRef.current) // Clear the interval when the tab is not visible
      intervalRef.current = null
    } else if (document.visibilityState === 'visible') {
      startAnimation() // Restart the interval when the tab becomes visible
    }
  }

  useEffect(() => {
    startAnimation()
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [placeholders])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const newDataRef = useRef<any[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const [animating, setAnimating] = useState(false)

  const draw = useCallback(() => {
    if (!inputRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 800
    canvas.height = 800
    ctx.clearRect(0, 0, 800, 800)
    const computedStyles = getComputedStyle(inputRef.current)
    const fontSize = Number.parseFloat(computedStyles.getPropertyValue('font-size'))
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`
    ctx.fillStyle = '#000'
    ctx.fillText(value, 16, 40)

    const imageData = ctx.getImageData(0, 0, 800, 800)
    const pixelData = imageData.data
    const newData: any[] = []

    for (let t = 0; t < 800; t++) {
      const i = 4 * t * 800
      for (let n = 0; n < 800; n++) {
        const e = i + 4 * n
        if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
          newData.push({
            x: n,
            y: t,
            color: [pixelData[e], pixelData[e + 1], pixelData[e + 2], pixelData[e + 3]],
          })
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }))
  }, [value])

  useEffect(() => {
    draw()
  }, [value, draw])

  const animate = (start: number) => {
    const animateFrame = (pos = 0) => {
      requestAnimationFrame(() => {
        const newArr = []
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i]
          if (current.x < pos) {
            newArr.push(current)
          } else {
            if (current.r <= 0) {
              current.r = 0
              continue
            }
            current.x += Math.random() > 0.5 ? 1 : -1
            current.y += Math.random() > 0.5 ? 1 : -1
            current.r -= 0.05 * Math.random()
            newArr.push(current)
          }
        }
        newDataRef.current = newArr
        const ctx = canvasRef.current?.getContext('2d')
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800)
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color } = t
            if (n > pos) {
              ctx.beginPath()
              ctx.rect(n, i, s, s)
              ctx.fillStyle = color
              ctx.strokeStyle = color
              ctx.stroke()
            }
          })
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8)
        } else {
          setValue('')
          setAnimating(false)
        }
      })
    }
    animateFrame(start)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !animating) {
      vanishAndSubmit()
    }
  }

  const vanishAndSubmit = () => {
    setAnimating(true)
    draw()

    const value = inputRef.current?.value || ''
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce((prev, current) => (current.x > prev ? current.x : prev), 0)
      animate(maxX)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    vanishAndSubmit()
    onSubmit && onSubmit(e)
  }
  return (
    <form
      className={cn(
        'relative mx-auto h-16 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200/50 bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-sm transition duration-300 hover:border-gray-300/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]',
        value && 'border-gray-300/70 bg-white/90',
      )}
      onSubmit={handleSubmit}
    >
      <canvas
        className={cn(
          'pointer-events-none absolute top-[20%] left-2 origin-top-left scale-50 transform pr-20 text-base sm:left-8',
          !animating ? 'opacity-0' : 'opacity-100',
        )}
        ref={canvasRef}
      />
      <input
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value)
            onChange && onChange(e)
          }
        }}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        value={value}
        type="text"
        className={cn(
          'relative z-50 h-full w-full rounded-2xl border-none bg-transparent pr-24 pl-6 text-base font-medium text-black focus:ring-0 focus:outline-none sm:pl-8 sm:text-lg',
          animating && 'text-transparent',
        )}
      />
      <button
        disabled={!value}
        type="submit"
        className="from-primary-gradient-from to-primary-gradient-to hover:from-primary-gradient-from/90 hover:to-primary-gradient-to/90 absolute top-1/2 right-4 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-r shadow-lg transition duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-white"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.path
            d="M5 12l14 0"
            initial={{
              strokeDasharray: '50%',
              strokeDashoffset: '50%',
            }}
            animate={{
              strokeDashoffset: value ? 0 : '50%',
            }}
            transition={{
              duration: 0.3,
              ease: 'linear',
            }}
          />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </motion.svg>
      </button>

      <div className="pointer-events-none absolute inset-0 flex items-center rounded-xl">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'linear',
              }}
              className="w-[calc(100%-3rem)] truncate pl-6 text-left text-base font-medium text-gray-400 sm:pl-8 sm:text-lg"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  )
}
