import { UIText } from '@/components'
import RankingBoards from '@/components/Rankings/RankingBoards'
import RankingTabs from '@/components/Rankings/RankingTabs'
import React from 'react'

const RankingPage = (): JSX.Element => {
  return (
    <div className="container">
      <div>
        <UIText
          text="Top Creators"
          sizeDesktop="h2"
          sizeTablet="h3"
          sizeMobile="h4"
        />
        <UIText
          text="Check out top ranking NFT artists on the NFT Marketplace."
          sizeDesktop="h5"
          sizeMobile="default"
          sizeTablet="default"
        />
      </div>
      <RankingTabs />
      <RankingBoards />
    </div>
  )
}

export default RankingPage
