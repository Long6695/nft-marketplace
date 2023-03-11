import React from 'react'
import Image from 'next/image'
import { UIText, UITitle } from '@/components'
import { CW_DESCRIPTION, CW_TITLE } from '@/constants/connect-wallet'
import UIButton from '@/components/Button/UIButton'

const ConnectWalletPage = (): JSX.Element => {
  return (
    <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:gap-10 desktop:gap-[60px]">
      <div className="relative w-screen h-[232px] tablet:w-1/2 tablet:h-[642px]">
        <Image
          fill
          sizes="(min-width: 375px) 100vw,
              (min-width: 834px) 50vw"
          src="/images/signup-bg.png"
          alt="sign up background"
        />
      </div>
      <div className="flex flex-col items-center tablet:flex-1 tablet:items-start gap-5 m-10">
        <UITitle title={CW_TITLE} variant="h2" />
        <UIText text={CW_DESCRIPTION} />

        <div className="w-full flex flex-col gap-5 mt-5 desktop:gap-10">
          <UIButton size={35} icon="/images/metamask.png" variant="outlined">
            Metamask
          </UIButton>
          <UIButton
            size={35}
            icon="/images/wallet-connect.png"
            variant="outlined"
          >
            Wallet Connect
          </UIButton>
          <UIButton size={35} icon="/images/coinbase.png" variant="outlined">
            Coinbase
          </UIButton>
          {/* <UIButton
            imgSrc="/images/metamask.png"
            imgAlt="metamask"
            variant={
              isMobile || isTablet ? 'outlinedSecondary' : 'outlinedPrimary'
            }
            title="Metamask"
          />
          <UIButton
            imgSrc="/images/wallet-connect.png"
            imgAlt="wallet-connect"
            variant={
              isMobile || isTablet ? 'outlinedSecondary' : 'outlinedPrimary'
            }
            title="Wallet Connect"
          />
          <UIButton
            imgSrc="/images/coinbase.png"
            imgAlt="coinbase"
            variant={
              isMobile || isTablet ? 'outlinedSecondary' : 'outlinedPrimary'
            }
            title="Coinbase"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default ConnectWalletPage
