'use client'
import React from 'react'
import Link from 'next/link'
import UIButton from '../Button/UIButton'
import { usePathname } from 'next/navigation'
import UILogo from '../Logo'

export const UINavbarDesktop = (): JSX.Element => {
  const pathname = usePathname()
  return (
    <div className="relative flex items-center justify-between py-6">
      <Link href="/">
        <UILogo />
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/marketplace">
          <h5
            className={`${
              pathname === '/marketplace'
                ? 'text-default text-call-to-action'
                : 'text-default'
            }`}
          >
            Marketplace
          </h5>
        </Link>
        <Link href="/rankings">
          <h5 className="text-default">Rankings</h5>
        </Link>
        <Link href="/connect-wallet">
          <h5 className="text-default">Connect a wallet</h5>
        </Link>
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
