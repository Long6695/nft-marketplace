import WrapperHeaderSection from '@/components/Home/HeroSection/WrapperHeaderSection'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import UITrendingSection from './UITrendingSection'

const UITrendingCollection = (): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery()

  const getTrendingSections = (count: number): JSX.Element[] => {
    return Array.from({ length: count }, (_, idx) => (
      <UITrendingSection key={idx} />
    ))
  }

  return (
    <div>
      <WrapperHeaderSection
        title="Trending Collection"
        description="Checkout our weekly updated trending collection."
      />
      <div className="flex gap-5 items-center justify-center mt-10">
        {isMobile && getTrendingSections(1)}
        {isTablet && getTrendingSections(2)}
        {isDesktop && getTrendingSections(3)}
      </div>
    </div>
  )
}

export default UITrendingCollection
