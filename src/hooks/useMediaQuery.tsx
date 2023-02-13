import { useEffect, useState } from 'react'

export const useMediaQuery = (minWidth: number): boolean => {
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    const resizeHandler = (): void => {
      const currentWindowWidth = window.innerWidth
      setIsMatch(currentWindowWidth < minWidth)
    }
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return isMatch
}
