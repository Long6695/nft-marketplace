'use client'
import React from 'react'
import Image from 'next/image'
import { UIText } from '@/components'
import { CW_DESCRIPTION, CW_TITLE } from '@/constants/connect-wallet'
import UIButton from '@/components/Button/UIButton'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import cn from 'classnames'
const ConnectWalletPage = (): JSX.Element => {
  const { isDesktop, isMobile } = useMediaQuery()

  return (
    <div className="flex flex-col tablet:flex-row desktop:mb-0">
      <div
        className={cn('relative tablet:flex-1', {
          'w-full h-[232px]': isMobile,
        })}
      >
        <Image fill src="/images/connect-wallet.png" alt="connect wallet" />
      </div>
      <div className="flex-1 space-y-5 tablet:ml-5 mb-5 px-5">
        <div
          className={cn('my-2', {
            'w-2/3': isDesktop,
            'w-full': !isDesktop,
            'text-center': isMobile,
          })}
        >
          <UIText
            text={CW_TITLE}
            sizeDesktop="h2"
            sizeTablet="h3"
            sizeMobile="h3"
          />
          <UIText
            text={CW_DESCRIPTION}
            sizeDesktop="h5"
            sizeTablet="default"
            sizeMobile="default"
          />
        </div>
        <div className="flex flex-col gap-5 mt-5 desktop:gap-10">
          <UIButton
            size={35}
            icon="/images/metamask.png"
            variant="outlined"
            width={isDesktop ? 'w-1/2' : 'w-full'}
          >
            Metamask
          </UIButton>
          <UIButton
            size={35}
            icon="/images/wallet-connect.png"
            variant="outlined"
            width={isDesktop ? 'w-1/2' : 'w-full'}
          >
            Wallet Connect
          </UIButton>
          <UIButton
            size={35}
            icon="/images/coinbase.png"
            variant="outlined"
            width={isDesktop ? 'w-1/2' : 'w-full'}
          >
            Coinbase
          </UIButton>
        </div>
      </div>
    </div>
  )
}

export default ConnectWalletPage
