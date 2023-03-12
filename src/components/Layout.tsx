import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import UIFooter from './Footer'
import { UINavbar } from './Navbar/UINavbar'
import { UINavbarMobile } from './Navbar/UINavbarMobile'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { isMobile, isTablet } = useMediaQuery()
  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-5">
        {isMobile || isTablet ? <UINavbarMobile /> : <UINavbar />}
      </div>
      <div>{children}</div>
      <UIFooter />
    </div>
  )
}

export default Layout
