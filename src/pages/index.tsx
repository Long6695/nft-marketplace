import UIHeroSection from '@/components/Home/UIHeroSection'
import UITrendingCollection from '@/components/Home/UITrendingCollection'
import React from 'react'

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col gap-[160px]">
      <UIHeroSection />
      <UITrendingCollection />
    </div>
  )
}
