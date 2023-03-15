import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import UIButton from '../Button/UIButton'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import UILogo from '../Logo'
import MenuItems from './components/MenuItems'
import cn from 'classnames'

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
        className={cn('flex items-center justify-between py-6', {
          'px-8': isOpen,
        })}
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
        <div className="fixed inset-x-0 inset-y-0 bg-black z-50">
          {renderHeaderBar({
            renderIcon: () => (
              <div className="pl-2">
                <XMarkIcon onClick={handleToggleMenu} className="h-6 w-6" />
              </div>
            ),
          })}
          <div className="flex flex-col p-8">
            <div className="flex flex-col items-start gap-10 py-10">
              <MenuItems />
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
