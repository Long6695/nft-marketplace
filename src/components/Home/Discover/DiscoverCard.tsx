import Avatar from '@/components/Avatar'
import { UIText } from '@/components/Text/UIText'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import React from 'react'

const DiscoverCard = (): JSX.Element => {
  const { isMobile } = useMediaQuery()
  return (
    <div className="w-[330px] h-[462px] tablet:h-[469px]">
      <Image
        src="/images/discover.png"
        priority
        width={330}
        height={isMobile ? 238 : 300}
        alt="discover"
      />
      <div className="flex flex-col w-full bg-black-color-secondary rounded-b-2xl p-4">
        <Avatar name="Mr Fox" title="DSNG Animals" />
        <div className="flex justify-between mt-2">
          <div>
            <UIText
              customStyle="font-space text-caption text-gray-color"
              text="Price"
            />
            <UIText
              customStyle="font-space text-caption text-white-color"
              text="1.63 ETH"
            />
          </div>
          <div>
            <UIText
              customStyle="font-space text-caption text-gray-color"
              text="Highest Bid"
            />
            <UIText
              customStyle="font-space text-caption text-white-color"
              text="0.33 wETH"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverCard
