'use client'

import { FloatingDock } from '@/components/ui/floating-dock'
import { cn } from '@/lib/utils'
import { IconClipboardList, IconHome, IconLivePhoto, IconTrophy, IconUserCircle } from '@tabler/icons-react'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import useScrollPosition from '@/hooks/useScroll'
import { useEffect, useState } from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// export const metadata: Metadata = {
//   title: 'DDAM CUP',
//   description: 'Made with <3',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isInTop, setIsInTop] = useState<boolean>(false)

  const links = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Live Score',
      icon: <IconLivePhoto className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Drafting System',
      icon: <IconClipboardList className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Gallery',
      icon: <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Profile',
      icon: <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
  ]

  const [scroll] = useScrollPosition()
  useEffect(() => {
    if (scroll > document.documentElement.clientHeight) {
      setIsInTop(false)
    } else {
      setIsInTop(true)
    }
  }, [scroll])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable, 'relative size-full min-h-screen antialiased')}>
        {children}
        {!isInTop && (
          <div className="fixed bottom-4 flex w-full items-center justify-center">
            <FloatingDock items={links} />
          </div>
        )}
      </body>
    </html>
  )
}
