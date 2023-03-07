import { UIText } from '@/components/Text/UIText'
import Image from 'next/image'
import React from 'react'
import UICreatorInfo from './UICreatorInfo'

const UICardCreator = ({ order }: { order: number }): JSX.Element => {
  return (
    <div className="relative desktop:flex desktop:flex-col desktop:items-center desktop:justify-center desktop:gap-5 desktop:w-[240px] desktop:h-[240px] bg-black-secondary rounded-xl">
      <div className="absolute top-5 left-5 bg-black w-[30px] h-[30px] rounded-full flex items-center justify-center">
        <UIText
          customStyle="text-base font-spaceMono text-gray"
          text={`${order}`}
        />
      </div>
      <Image
        src="/images/avatar-artist.png"
        width={120}
        height={120}
        alt="avatar"
      />
      <UICreatorInfo name="Keepitreal" totalSales="3.15 ETH" />
    </div>
  )
}

export default UICardCreator
