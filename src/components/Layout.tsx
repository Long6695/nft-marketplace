import React, { type ReactNode } from 'react'
import { UINavbarMobile, UINavbar } from '@/components'
import { DESKTOP } from '@/constants/breakpoint'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Layout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const isMatch = useMediaQuery(DESKTOP)
  return (
    <div className="relative h-screen">
      {isMatch ? <UINavbarMobile /> : <UINavbar />}
      {children}
    </div>
  )
}
