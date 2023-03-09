import React from 'react'
import Image from 'next/image'
import UIButton from '../../Button/UIButton'
import { UIText } from '../../Text/UIText'
import { UITitle } from '../../Text/UITitle'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Avatar from '../../Avatar'
import Link from 'next/link'

const UIHeroSection = (): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery()
  const renderTotalSale = ({
    qty,
    text,
  }: {
    qty: string
    text: string
  }): JSX.Element => {
    return (
      <div className="flex flex-col">
        <UIText
          text={qty}
          customStyle="font-semibold font-spaceMono text-h5 desktop:text-h4"
        />
        <UIText text={text} customStyle="text-default desktop:text-h5" />
      </div>
    )
  }
  const renderActionButton = (): JSX.Element => {
    return (
      <>
        <div className="w-full h-[60px] tablet:w-[224px] my-8">
          <Link href="/" passHref>
            <UIButton
              title="Get Started"
              variant="filled"
              icon="/images/rocket-launch.png"
              fullWidth
            >
              Get Started
            </UIButton>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center tablet:justify-start gap-10 desktop:gap-20">
          {renderTotalSale({ qty: '240k+', text: 'Total Sale' })}
          {renderTotalSale({ qty: '100k+', text: 'Auctions' })}
          {renderTotalSale({ qty: '240k+', text: 'Artists' })}
        </div>
      </>
    )
  }
  return (
    <div className="w-full flex flex-col items-center tablet:flex-row tablet:items-start tablet:justify-center gap-8">
      <div className="flex flex-col items-start w-[330px] desktop:w-[510px]">
        <UITitle variant="h1" title="Discover Digital Art & Collect NFTs" />
        <UIText
          text="NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists."
          customStyle="text-default tablet-h5 mt-2"
        />
        {(isDesktop || isTablet) && renderActionButton()}
      </div>
      <div className="flex flex-col">
        <div>
          <Image
            src="/images/hero-section.png"
            width={isDesktop ? 501 : 330}
            height={isDesktop ? 401 : 221}
            alt="hero-section"
          />
        </div>
        <div className="bg-black-secondary rounded-b-[20px] p-4 flex flex-col items-start">
          <Avatar title="Space walker" name="Animakid" />
        </div>
        {isMobile && renderActionButton()}
      </div>
    </div>
  )
}

export default UIHeroSection
