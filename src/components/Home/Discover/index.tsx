import UIButton from '@/components/Button/UIButton'
import UISectionHeadline from '@/components/Text/UISectionHeadline'
import WrapperCards from '@/components/WrapperCards'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import DiscoverCard from './DiscoverCard'

const UIDiscover = (): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery()
  const renderItems = (qty: number): React.ReactNode => {
    return Array.from({ length: qty }, (_, idx) => <DiscoverCard key={idx} />)
  }

  const renderButtonAction = (): JSX.Element => (
    <UIButton
      href="/rankings"
      imgSrc="/images/see-all.png"
      imgAlt="see-all"
      title="See All"
      variant="outlinedHeadline"
      iconSize={20}
      isCenter
    />
  )

  return (
    <div className="flex flex-col">
      <div className="flex flex-col tablet:items-end tablet:flex-row">
        <div className="flex flex-col flex-1">
          <UISectionHeadline
            title="Discover More NFTs"
            description="Explore new trending NFTs"
          />
        </div>
        {(isDesktop || isTablet) && (
          <div className="flex flex-1 desktop:flex-none justify-end">
            <div className="tablet:w-[247px]">{renderButtonAction()}</div>
          </div>
        )}
      </div>
      <WrapperCards>
        {(isDesktop || isMobile) && renderItems(3)}
        {isTablet && renderItems(2)}
      </WrapperCards>
      {isMobile && <div className="w-full mt-10">{renderButtonAction()}</div>}
    </div>
  )
}

export default UIDiscover
