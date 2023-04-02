import React from 'react'
import { UIText } from '../Text/UIText'
import UserRankings from './UserRankings'

const RankingBoards = (): JSX.Element => {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-ranking items-center w-full h-10 rounded-full border-black-secondary border-2 px-6">
        <UIText font="space-mono" onlySize="default" color="gray" text="#" />
        <UIText
          font="space-mono"
          onlySize="default"
          color="gray"
          text="Artist"
        />
        <UIText
          font="space-mono"
          onlySize="default"
          color="gray"
          text="Change"
        />
        <UIText
          font="space-mono"
          onlySize="default"
          color="gray"
          text="NFTs Sold"
        />
        <UIText
          font="space-mono"
          onlySize="default"
          color="gray"
          text="Volume"
        />
      </div>
      <UserRankings />
    </div>
  )
}

export default RankingBoards
