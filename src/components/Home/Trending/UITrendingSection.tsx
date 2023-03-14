import Image from 'next/image'
import React from 'react'
import Avatar from '../../Avatar'
import { UIText } from '../../Text/UIText'

const UITrendingSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[330px]">
        <div className=" h-[330px] rounded-lg">
          <Image
            src="/images/trending.png"
            width={330}
            height={330}
            alt="trending-card"
          />
        </div>
        <div className="w-[330px] flex gap-4 mt-5">
          <Image
            src="/images/trending.png"
            width={100}
            height={100}
            alt="trending-card"
          />
          <Image
            src="/images/trending.png"
            width={100}
            height={100}
            alt="trending-card"
          />
          <div className="w-[100px] bg-call-to-action rounded-md flex items-center justify-center">
            <UIText font="space-mono" onlySize="h5" text="1025+" />
          </div>
        </div>
        <div className="w-full flex flex-col items-start mt-5 px-2">
          <Avatar name="Mr Fox" title="DSNG Animals" />
        </div>
      </div>
    </div>
  )
}

export default UITrendingSection
