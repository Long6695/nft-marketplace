'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import UIButton from '../Button/UIButton'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import UILogo from '../Logo'

export const UINavbarMobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleToggleMenu = (): any => {
    setIsOpen((prev) => !prev)
  }

  const renderHeaderBar = ({
    renderIcon,
  }: {
    renderIcon: () => JSX.Element
  }): JSX.Element => {
    return (
      <div
        className={`flex items-center justify-between py-6 ${
          isOpen ? 'px-8' : 'px-0'
        }`}
      >
        <Link href="/">
          <UILogo />
        </Link>
        {renderIcon()}
      </div>
    )
  }

  const renderMenu = (): JSX.Element | null => {
    if (isOpen) {
      return (
        <div className="absolute inset-0 bg-black z-50">
          {renderHeaderBar({
            renderIcon: () => (
              <div className="pl-2">
                <XMarkIcon onClick={handleToggleMenu} className="h-6 w-6" />
              </div>
            ),
          })}
          <div className="flex flex-col p-8">
            <div className="flex flex-col items-start gap-10 py-10">
              <Link href="/marketplace">
                <h5 className="text-default">Marketplace</h5>
              </Link>
              <Link href="/rankings">
                <h5 className="text-default">Rankings</h5>
              </Link>
              <Link href="/connect-wallet">
                <h5 className="text-default">Connect a wallet</h5>
              </Link>
            </div>
            <div className="w-[120px]">
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
    return null
  }

  return (
    <>
      {renderMenu()}
      {renderHeaderBar({
        renderIcon: () => (
          <a onClick={handleToggleMenu}>
            <Image
              src="/images/hamburger.png"
              width={24}
              height={24}
              alt="list-menu"
            />
          </a>
        ),
      })}
    </>
  )
}
