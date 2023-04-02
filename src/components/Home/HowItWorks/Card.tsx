'use client'
import { UIText } from '@/components/Text/UIText'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import React from 'react'

const Card = ({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}): JSX.Element => {
  const { isMobile, isTablet } = useMediaQuery()
  const renderContent = (title: string, description: string): JSX.Element => {
    return (
      <div className="ml-2 tablet:ml-0 tablet:text-center">
        <UIText text={title} onlySize="h5" />
        <UIText onlySize="small" text={description} />
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className="flex items-center rounded-xl bg-black-secondary p-4">
        <Image src={image} width={83} height={83} alt="set up wallet" />
        {renderContent(title, description)}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center rounded-lg bg-black-secondary p-4 tablet:w-full">
      <Image
        src={image}
        width={isTablet ? 135 : 210}
        height={isTablet ? 135 : 210}
        alt="set up wallet"
      />
      {renderContent(title, description)}
    </div>
  )
}

export default Card
