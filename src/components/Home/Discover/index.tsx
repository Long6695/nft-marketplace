import UIButton from '@/components/Button/UIButton'
import WrapperCards from '@/components/WrapperCards'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from 'next/link'
import React from 'react'
import WrapperHeaderSection from '../HeroSection/WrapperHeaderSection'
import DiscoverCard from './DiscoverCard'

const UIDiscover = (): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery()
  const renderItems = (qty: number): React.ReactNode => {
    return Array.from({ length: qty }, (_, idx) => <DiscoverCard key={idx} />)
  }

  const renderButtonAction = (): JSX.Element => (
    <Link href="/rankings" passHref>
      <UIButton variant="outlined" fullWidth icon="/images/see-all.png">
        See All
      </UIButton>
    </Link>
  )

  return (
    <div className="flex flex-col">
      <WrapperHeaderSection
        title="Discover More NFTs"
        description="Explore new trending NFTs"
        customAction={renderButtonAction}
      />
      <div className="flex justify-center">
        <WrapperCards>
          {(isDesktop || isMobile) && renderItems(3)}
          {isTablet && renderItems(2)}
        </WrapperCards>
      </div>
      {isMobile && <div className="w-full mt-10">{renderButtonAction()}</div>}
    </div>
  )
}

export default UIDiscover
