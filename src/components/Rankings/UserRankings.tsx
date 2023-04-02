import React from 'react'
import { UIText } from '../Text/UIText'

const UserRankings = (): JSX.Element => {
  return (
    <div className="grid grid-cols-ranking items-center w-full h-20 rounded-3xl border-black-secondary border-2 px-6 mt-4">
      <div className="w-8 h-8 rounded-full bg-black-secondary flex items-center justify-center">
        <UIText text="1" font="space-mono" color="white" onlySize="default" />
      </div>
      <div>a</div>
      <div>
        <UIText
          text="+1.4"
          font="space-mono"
          color="green"
          onlySize="default"
        />
      </div>
      <div>
        <UIText text="604" font="space-mono" color="white" onlySize="default" />
      </div>
      <div>
        <UIText
          text="12.4 ETH"
          font="space-mono"
          color="white"
          onlySize="default"
        />
      </div>
    </div>
  )
}

export default UserRankings
