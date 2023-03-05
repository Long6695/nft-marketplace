import WrapperCards from '@/components/WrapperCards'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import UIButton from '../../Button/UIButton'
import WrapperHeaderSection from '../HeroSection/WrapperHeaderSection'
import UICardCreator from './UICardCreator'
import UICardCreatorMobile from './UICardCreatorMobile'

const UICreators = (): JSX.Element => {
  const { isMobile, isDesktop } = useMediaQuery()
  const renderButtonAction = (): JSX.Element => (
    <UIButton
      href="/rankings"
      imgSrc="/images/rocket-purple.png"
      imgAlt="rocket"
      title="View Rankings"
      variant="outlinedHeadline"
      iconSize={20}
      isCenter
    />
  )
  return (
    <div className="flex flex-col">
      <WrapperHeaderSection
        title="Top Creators"
        description="Checkout Top Rated Creators on the NFT Marketplace"
        customAction={renderButtonAction}
      />
      <div className="flex justify-center">
        <WrapperCards>
          {Array.from({ length: isDesktop ? 12 : 6 }, (_, idx) => {
            return isDesktop ? (
              <UICardCreator key={idx} order={idx + 1} />
            ) : (
              <UICardCreatorMobile key={idx} order={idx + 1} />
            )
          })}
        </WrapperCards>
      </div>
      {isMobile && <div className="w-full mt-10">{renderButtonAction()}</div>}
    </div>
  )
}

export default UICreators
