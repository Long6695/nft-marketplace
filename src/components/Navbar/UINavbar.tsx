import React from 'react'
import Link from 'next/link'
import UIButton from '../Button/UIButton'
import UILogo from '../Logo'
import MenuItems from './components/MenuItems'

export const UINavbar = (): JSX.Element => {
  return (
    <div className="relative flex items-center justify-between py-6">
      <Link href="/">
        <UILogo />
      </Link>
      <div className="flex items-center gap-8">
        <MenuItems />
        <div className="w-[152px]">
          <Link href="/sign-up" passHref>
            <UIButton variant="filled" icon="/images/user-white.png">
              Sign Up
            </UIButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
