import React from 'react'
import Image from 'next/image'
import { UIText } from '@/components/Text/UIText'
import UICreatorInfo from './UICreatorInfo'
const UICardCreatorMobile = ({ order }: { order: number }): JSX.Element => {
  return (
    <div className="flex items-center bg-black-color-secondary rounded-xl w-[330px] h-[100px] p-4 gap-5">
      <div className="relative">
        <Image
          src="/images/avatar-artist.png"
          width={60}
          height={60}
          alt="avatar"
        />
        <div className="absolute -top-2 -left-2 bg-black-color w-[30px] h-[30px] rounded-full flex items-center justify-center">
          <UIText
            customStyle="text-base font-space text-gray-color"
            text={`${order}`}
          />
        </div>
      </div>
      <UICreatorInfo name="Keepitreal" totalSales="3.15 ETH" />
    </div>
  )
}

export default UICardCreatorMobile
