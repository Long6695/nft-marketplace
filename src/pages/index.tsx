import React from 'react'
import UIHeroSection from '@/components/Home/HeroSection'
import UITrendingCollection from '@/components/Home/Trending'
import UICreators from '@/components/Home/Creators'
import UICategories from '@/components/Home/Categories'
import UIDiscover from '@/components/Home/Discover'
import UIHighlight from '@/components/Home/Highlight'
import UIHowItWorks from '@/components/Home/HowItWorks'
import UIWeeklyDigest from '@/components/Home/WeeklyDigest'

export default function Home(): JSX.Element {
  return (
    <>
      <div className="flex flex-col container gap-150">
        <UIHeroSection />
        <UITrendingCollection />
        <UICreators />
        <UICategories />
        <UIDiscover />
      </div>
      <div className="my-[100px]">
        <UIHighlight />
      </div>
      <div className="flex flex-col container gap-150">
        <UIHowItWorks />
        <UIWeeklyDigest />
      </div>
    </>
  )
}
