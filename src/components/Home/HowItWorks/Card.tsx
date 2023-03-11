import { UIText } from '@/components/Text/UIText'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import React from 'react'
import classNames from 'classnames'

const Card = ({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery()
  const renderContent = (title: string, description: string): JSX.Element => {
    return (
      <div
        className={`${classNames(
          {
            'w-1/2 ml-6': isMobile,
          },
          { 'text-center mt-10': isTablet || isDesktop },
        )}`}
      >
        <UIText
          text={title}
          customStyle="font-semibold text-default desktop:text-h5 desktop:font-semibold"
        />
        <UIText
          customStyle="leading-4 text-small mt-2 desktop:text-default"
          text={description}
        />
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className="flex items-center w-[315px] h-[157px] rounded-xl bg-black-secondary p-4">
        <div>
          <Image src={image} width={83} height={83} alt="set up wallet" />
        </div>
        {renderContent(title, description)}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center tablet:w-[210px] tablet:h-[320px] desktop:w-[330px] desktop:h-[440px] rounded-lg bg-black-secondary p-4">
      <div>
        <Image
          src={image}
          width={isTablet ? 135 : 210}
          height={isTablet ? 135 : 210}
          alt="set up wallet"
        />
      </div>
      {renderContent(title, description)}
    </div>
  )
}

export default Card
