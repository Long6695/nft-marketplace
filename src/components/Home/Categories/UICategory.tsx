import { UIText } from '@/components/Text/UIText'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import React from 'react'

const UICategory = (): JSX.Element => {
  const { isDesktop } = useMediaQuery()
  return (
    <div className="flex flex-col rounded-t-lg w-[147px] h-[209px] desktop:w-[240px] desktop:h-[316px]">
      <div className="relative">
        <Image
          src="/images/category-art.png"
          width={isDesktop ? 240 : 150}
          height={isDesktop ? 240 : 150}
          alt="category"
        />
      </div>
      <div className="flex items-center justify-start rounded-b-2xl bg-black-secondary h-full py-2 px-4">
        <UIText
          text="Art"
          sizeMobile="default"
          sizeTablet="default"
          sizeDesktop="h5"
        />
      </div>
    </div>
  )
}

export default UICategory
