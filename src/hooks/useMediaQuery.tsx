'use client'
import { TABLET, DESKTOP } from '@/constants/breakpoint'
import { useState, useEffect } from 'react'

export const useMediaQuery = (): {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
} => {
  const [windowSize, setWindowSize] = useState<{ width: number }>({ width: 0 })
  useEffect(() => {
    const resizeHandler = (): void => {
      setWindowSize({ width: window.innerWidth })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeHandler)
      resizeHandler()
      return () => {
        window.removeEventListener('resize', resizeHandler)
      }
    }
  }, [])

  const isMobile = windowSize.width < TABLET
  const isTablet = windowSize.width >= TABLET && windowSize.width < DESKTOP
  const isDesktop = windowSize.width >= DESKTOP

  return { isMobile, isTablet, isDesktop }
}
