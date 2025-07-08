import { ThemeProvider } from '@/components/theme-provider'
import { FloatingDock } from '@/components/ui/floating-dock'
import { cn } from '@/lib/utils'
import { IconClipboardList, IconHome, IconLivePhoto, IconTrophy, IconUserCircle } from '@tabler/icons-react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DDAM CUP',
  description: 'Made with <3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable, 'relative size-full min-h-screen antialiased')}>
        {children}
        <div className="absolute bottom-4 flex w-full items-center justify-center">
          <FloatingDock items={links} />
        </div>
      </body>
    </html>
  )
}
