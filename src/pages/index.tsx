import React from 'react'
import UIHeroSection from '@/components/Home/HeroSection/UIHeroSection'
import UITrendingCollection from '@/components/Home/Trending/UITrendingCollection'
import UICreators from '@/components/Home/Creators/UICreators'

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-[160px]">
      <UIHeroSection />
      <UITrendingCollection />
      <UICreators />
    </div>
  )
}
