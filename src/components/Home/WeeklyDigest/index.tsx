import UISendEmailButton from '@/components/Button/UISendEmailButton'
import { UIText } from '@/components/Text/UIText'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Image from 'next/image'
import React from 'react'

const UIWeeklyDigest = (): JSX.Element => {
  const { isTablet, isDesktop } = useMediaQuery()
  const renderContent = (): JSX.Element => (
    <>
      <UIText
        text="Join Our Weekly Digest"
        customStyle="font-semibold text-h4 desktop:text-h3"
      />
      <UIText text="Get exclusive promotions & updates straight to your inbox." />
    </>
  )
  const renderImage = (width: number, height: number): JSX.Element => (
    <Image
      width={width}
      height={height}
      src="/images/weekly-digest.png"
      alt="weekly-digest"
    />
  )
  if (isTablet || isDesktop) {
    return (
      <div className="tablet:h-[360px] desktop:h-[430px] bg-black-secondary rounded-xl">
        <div className="flex justify-around h-full p-6">
          {renderImage(isDesktop ? 425 : 300, isDesktop ? 310 : 280)}
          <div className="flex flex-col tablet:w-[300px] desktop:w-[425px] gap-7">
            {renderContent()}
            <UISendEmailButton />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="h-[565px] rounded-xl">
      <div className="flex flex-col h-full">
        {renderImage(315, 255)}
        <div className="mt-10">
          <div className="flex flex-col gap-5">{renderContent()}</div>
          <UISendEmailButton />
        </div>
      </div>
    </div>
  )
}

export default UIWeeklyDigest
