import React from 'react'
import UIButton from '../Button/UIButton'
import { UIText } from '../Text/UIText'
import { BiCopy } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { RxDiscordLogo } from 'react-icons/rx'
import { CiTwitter } from 'react-icons/ci'
import { breakStringWith3Dots } from '@/utils/function'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const ArtistInfo = (): JSX.Element => {
  const { isMobile } = useMediaQuery()
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
          sizeMobile="h5"
          sizeTablet="h5"
          sizeDesktop="h4"
          font="space-mono"
        />
        <UIText
          text={text}
          sizeMobile="default"
          sizeTablet="default"
          sizeDesktop="h5"
        />
      </div>
    )
  }
  return (
    <div className="container flex flex-col gap-5 mt-[120px]">
      <div className="flex flex-col items-start gap-5 desktop:flex-row">
        <UIText
          text="Animakid"
          sizeDesktop="h2"
          sizeTablet="h3"
          sizeMobile="h4"
        />
        <div className="w-full flex flex-col gap-5 tablet:flex-row desktop:justify-end">
          <UIButton fullWidth={isMobile} customIcon={<BiCopy />}>
            {breakStringWith3Dots('0xc0E3123saidA*a9sda89A*DTA*(TD8satd7as8')}
          </UIButton>
          <UIButton
            fullWidth={isMobile}
            variant="outlined"
            customIcon={<BsPlus />}
          >
            Follow
          </UIButton>
        </div>
      </div>
      <div className="w-full flex items-center gap-10 tablet:justify-start desktop:gap-20">
        {renderTotalSale({ qty: '250k+', text: 'Volume' })}
        {renderTotalSale({ qty: '50+', text: 'NFTs Sold' })}
        {renderTotalSale({ qty: '3000+', text: 'Followers' })}
      </div>
      <div>
        <UIText
          text="Bio"
          sizeMobile="h5"
          sizeTablet="h5"
          sizeDesktop="h4"
          font="space-mono"
          color="gray"
        />
        <UIText
          text="The internet's friendliest designer kid."
          sizeMobile="default"
          sizeTablet="default"
          sizeDesktop="h5"
        />
      </div>
      <div>
        <UIText
          text="Links"
          sizeMobile="h5"
          sizeTablet="h5"
          sizeDesktop="h4"
          font="space-mono"
          color="gray"
        />
        <div className="flex gap-2">
          <AiOutlineFacebook />
          <RxDiscordLogo />
          <AiOutlineYoutube />
          <CiTwitter />
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  )
}

export default ArtistInfo
