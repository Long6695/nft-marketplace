import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { H_NAV_LOGO } from '@/constants/home'
import Link from 'next/link'
import UIButton from '../Button/UIButton'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export const UINavbarMobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const useRoute = useRouter()

  useEffect(() => {
    setIsOpen(false)
  }, [useRoute.pathname])

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
          <div className="flex items-center">{renderLogo()}</div>
        </Link>
        {renderIcon()}
      </div>
    )
  }

  const renderLogo = (): JSX.Element => {
    return (
      <>
        <Image src="/images/logo.png" width={24} height={24} alt="logo" />
        <h4 className="text-base font-space ml-2 desktop:text-h5">
          {H_NAV_LOGO}
        </h4>
      </>
    )
  }

  const renderMenu = (): JSX.Element | null => {
    if (isOpen) {
      return (
        <div className="absolute inset-0 bg-black-color z-50">
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
                <h5 className="text-base">Marketplace</h5>
              </Link>
              <Link href="/rankings">
                <h5 className="text-base">Rankings</h5>
              </Link>
              <Link href="/connect-wallet">
                <h5 className="text-base">Connect a wallet</h5>
              </Link>
            </div>
            <div className="w-[120px] h-[50px]">
              <UIButton
                href="/sign-up"
                iconSize={20}
                title="Sign Up"
                // imgAlt="sign-up"
                // imgSrc="/images/user-white.png"
                variant="secondary"
                iconPos="left-4"
              />
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
