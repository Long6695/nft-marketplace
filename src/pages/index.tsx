import React from 'react'
import UIHeroSection from '@/components/Home/HeroSection'
import UITrendingCollection from '@/components/Home/Trending'
import UICreators from '@/components/Home/Creators'
import UICategories from '@/components/Home/Categories'
import UIDiscover from '@/components/Home/Discover'

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-[160px]">
      <UIHeroSection />
      <UITrendingCollection />
      <UICreators />
      <UICategories />
      <UIDiscover />
    </div>
  )
}
