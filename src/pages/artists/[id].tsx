import React from 'react'
import Image from 'next/image'
import ArtistInfo from '@/components/Artists/ArtistInfo'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import cn from 'classnames'

const ArtistPage = (): JSX.Element => {
  const { isMobile } = useMediaQuery()
  return (
    <div className="flex flex-col gap-28">
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
      <div className="container">
        <ArtistInfo />
      </div>
    </div>
  )
}

export default ArtistPage
