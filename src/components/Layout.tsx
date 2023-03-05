import React, { type ReactNode } from 'react'
import { UINavbarMobile, UINavbar } from '@/components'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const { isMobile, isTablet } = useMediaQuery()
  return (
    <div>
      <div className="container">
        {isMobile || isTablet ? <UINavbarMobile /> : <UINavbar />}
      </div>
      <div className="max-w-[1050px] mx-auto">{children}</div>
    </div>
  )
}
