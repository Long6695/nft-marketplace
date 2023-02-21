import React from 'react'
import Image from 'next/image'
import { UIText, UITitle } from '@/components'
import { CW_DESCRIPTION, CW_TITLE } from '@/constants/connect-wallet'
import UIButton from '@/components/Button/UIButton'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { DESKTOP } from '@/constants/breakpoint'

const ConnectWalletPage = (): JSX.Element => {
  const isMatch = useMediaQuery(DESKTOP)

  return (
    <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:gap-10 desktop:gap-[60px]">
      <div className="relative w-screen h-[232px] tablet:w-1/2 tablet:h-screen">
        <Image
          fill
          sizes="(min-width: 375px) 100vw,
              (min-width: 834px) 50vw"
          priority
          src="/images/signup-bg.png"
          alt="sign up background"
        />
      </div>
      <div className="flex flex-col items-center tablet:flex tablet:w-[325px] tablet:flex-1 tablet:items-start desktop:w-[460px] gap-5 m-10">
        <UITitle title={CW_TITLE} />
        <UIText text={CW_DESCRIPTION} />

        <div className="flex flex-col gap-5 mt-5 w-[315px] tablet:w-[325px] desktop:w-[330px] desktop:gap-10">
          <UIButton
            imgSrc="/images/metamask.png"
            imgAlt="metamask"
            variant={isMatch ? 'outlinedSecondary' : 'outlinedPrimary'}
            title="Metamask"
          />
          <UIButton
            imgSrc="/images/wallet-connect.png"
            imgAlt="wallet-connect"
            variant={isMatch ? 'outlinedSecondary' : 'outlinedPrimary'}
            title="Wallet Connect"
          />
          <UIButton
            imgSrc="/images/coinbase.png"
            imgAlt="coinbase"
            variant={isMatch ? 'outlinedSecondary' : 'outlinedPrimary'}
            title="Coinbase"
          />
        </div>
      </div>
    </div>
  )
}

export default ConnectWalletPage
