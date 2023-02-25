import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import UIButton from '../../Button/UIButton'
import UISectionHeadline from '../../Text/UISectionHeadline'
import UICardCreator from './UICardCreator'
import UICardCreatorMobile from './UICardCreatorMobile'

const UICreators = (): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery()
  const renderButtonAction = (): JSX.Element => (
    <UIButton
      href="/rankings"
      imgSrc="/images/rocket-purple.png"
      imgAlt="rocket"
      title="View Rankings"
      variant="outlinedHeadline"
      iconSize={20}
    />
  )
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end tablet:flex-row">
        <div className="flex flex-col flex-1">
          <UISectionHeadline
            title="Top Creators"
            description="Checkout Top Rated Creators on the NFT Marketplace"
          />
        </div>
        {(isDesktop || isTablet) && (
          <div className="flex flex-1 desktop:flex-none justify-end">
            <div className="tablet:w-[247px]">{renderButtonAction()}</div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[30px] mt-10 tablet:mt-20">
        {Array.from({ length: isDesktop ? 12 : 6 }, (_, idx) => {
          return isDesktop ? (
            <UICardCreator key={idx} order={idx + 1} />
          ) : (
            <UICardCreatorMobile key={idx} order={idx + 1} />
          )
        })}
      </div>
      {isMobile && <div className="w-full mt-10">{renderButtonAction()}</div>}
    </div>
  )
}

export default UICreators
