'use client'

import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useScroll, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

export const TracingBeam = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight)
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => window.removeEventListener('resize', updateHeight)
  }, [children])

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.6], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  })

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  })

  return (
    <div className={cn('relative w-full', className)}>
      <motion.div ref={ref} className="relative mx-auto w-full">
        {/* Tracing line container */}
        <div className="absolute top-3 left-4 z-10">
          {/* Starting dot */}
          <motion.div
            className="bg-background ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-neutral-800 shadow-sm"
            animate={{
              boxShadow: scrollYProgress.get() > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
          >
            <motion.div
              className="bg-background h-2 w-2 rounded-full border border-neutral-900"
              animate={{
                backgroundColor: scrollYProgress.get() > 0 ? '#10b981' : '#fff',
                borderColor: scrollYProgress.get() > 0 ? '#059669' : '#d1d5db',
              }}
              transition={{
                duration: 0.2,
                delay: 0.5,
              }}
            />
          </motion.div>

          {/* SVG Path */}
          {svgHeight > 0 && (
            <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden="true">
              {/* Background path */}
              <motion.path
                d={`M 1 0 V -36 l 18 24 V ${svgHeight * 0.8} l -18 24 V ${svgHeight}`}
                fill="none"
                stroke="#9091A0"
                strokeOpacity="0.16"
                strokeWidth="1"
              />

              {/* Animated gradient path */}
              <motion.path
                d={`M 1 0 V -36 l 18 24 V ${svgHeight * 0.8} l -18 24 V ${svgHeight}`}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1.25"
                className="motion-reduce:hidden"
              />

              <defs>
                <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
                  <stop stopColor="#18CCFC" stopOpacity="0" />
                  <stop stopColor="#18CCFC" />
                  <stop offset="0.325" stopColor="#6344F5" />
                  <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
                </motion.linearGradient>
              </defs>
            </svg>
          )}
        </div>

        <div ref={contentRef} className="relative mx-auto max-w-4xl px-4 py-8">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
