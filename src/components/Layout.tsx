import React, { type ReactNode } from 'react'
import { UINavbarMobile, UINavbar } from '@/components'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Layout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  const { isMobile, isTablet } = useMediaQuery()
  return (
    <div className="relative h-screen">
      {isMobile || isTablet ? <UINavbarMobile /> : <UINavbar />}
      <div className="max-w-[330px] tablet:max-w-[834px] desktop:max-w-[1050px] mx-auto">
        {children}
      </div>
    </div>
  )
}
