import React from 'react'
import Image from 'next/image'
import ArtistInfo from '@/components/Artists/ArtistInfo'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import cn from 'classnames'
import ArtistTabs from '@/components/Artists/ArtistTabs'
import DiscoverCard from '@/components/Home/Discover/DiscoverCard'
import WrapperCards from '@/components/WrapperCards'
import Divider from '@/components/Divider'

const ArtistPage = (): JSX.Element => {
  const { isMobile } = useMediaQuery()

  const renderItems = (qty: number): React.ReactNode => {
    return Array.from({ length: qty }, (_, idx) => (
      <DiscoverCard bg="bg-black" key={idx} />
    ))
  }

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[320px]">
        <Image priority fill src="/images/artist-bg.png" alt="artist" />
        <div className="absolute container h-full flex items-end left-1/2 -translate-x-1/2">
          <div
            className={cn('absolute -bottom-14', {
              'left-1/2 -translate-x-1/2': isMobile,
            })}
          >
            <Image
              src="/images/ava-artist-square.png"
              alt="artist"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
      <ArtistInfo />
      <Divider />
      <ArtistTabs />
      <div className="w-full bg-black-secondary">
        <div className="container mb-10">
          <WrapperCards>{renderItems(9)}</WrapperCards>
        </div>
      </div>
    </div>
  )
}

export default ArtistPage
