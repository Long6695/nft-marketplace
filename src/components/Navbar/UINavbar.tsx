import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import UIButton from '../Button/UIButton'
import { H_NAV_LOGO } from '@/constants/home'
import { useRouter } from 'next/router'

export const UINavbar = (): JSX.Element => {
  const router = useRouter()

  const renderLogo = (): JSX.Element => {
    return (
      <>
        <Image src="/images/logo.png" width={32} height={32} alt="logo" />
        <h4 className="text-base font-space ml-2 desktop:text-h5">
          {H_NAV_LOGO}
        </h4>
      </>
    )
  }

  return (
    <div className="relative flex items-center justify-between py-6 px-8">
      <Link href="/">
        <div className="flex items-center">{renderLogo()}</div>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/marketplace">
          <h5
            className={`${
              router.pathname === '/marketplace'
                ? 'text-base text-call-to-action-color'
                : 'text-base'
            }`}
          >
            Marketplace
          </h5>
        </Link>
        <Link href="/rankings">
          <h5 className="text-base">Rankings</h5>
        </Link>
        <Link href="/connect-wallet">
          <h5 className="text-base">Connect a wallet</h5>
        </Link>
        <div className="w-[152px] h-[60px]">
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
