import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import { UIText } from '../Text/UIText'
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
      <UIText text="Trending Collection" customStyle="text-h4 tablet:text-h3" />
      <UIText
        text="Checkout our weekly updated trending collection."
        customStyle="text-base tablet:text-h5"
      />
      <div className="flex justify-evenly mt-10">
        {isMobile && getTrendingSections(1)}
        {isTablet && getTrendingSections(2)}
        {isDesktop && getTrendingSections(3)}
      </div>
    </div>
  )
}

export default UITrendingCollection
