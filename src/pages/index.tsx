import React from 'react'
import UIHeroSection from '@/components/Home/HeroSection'
import UITrendingCollection from '@/components/Home/Trending'
import UICreators from '@/components/Home/Creators'
import UICategories from '@/components/Home/Categories'
import UIDiscover from '@/components/Home/Discover'
import UIHighlight from '@/components/Home/Highlight'
import UIHowItWorks from '@/components/Home/HowItWorks'
import UIWeeklyDigest from '@/components/Home/WeeklyDigest'
import Button from '@/components/test/UIButton'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-[150px]">
      <Link href="/connect-wallet" passHref>
        <Button height="md">Hello asd as das da</Button>
      </Link>
      <div className="container flex flex-col gap-[150px]">
        <UIHeroSection />
        <UITrendingCollection />
        <UICreators />
        <UICategories />
        <UIDiscover />
      </div>
      <UIHighlight />
      <div className="container flex flex-col gap-[150px]">
        <UIHowItWorks />
        <UIWeeklyDigest />
      </div>
    </div>
  )
}
