import React, { useEffect, useState } from 'react'
import Avatar from '@/components/Avatar'
import UIButton from '@/components/Button/UIButton'
import { UIText } from '@/components/Text/UIText'
import moment, { type Duration } from 'moment'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from 'next/link'

const Countdown = (): JSX.Element => {
  const [countdown, setCountdown] = useState<Duration>(moment.duration())

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment()
      const end = moment('20240304 21:00:00', 'YYYYMMDD HH:mm:ss')
      const diff = moment.duration(end.diff(now))
      setCountdown(diff)
    }, 1000)
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [])

  const renderTime = (time: string, text: string): JSX.Element => (
    <div className="flex flex-col">
      <UIText customStyle="font-spaceMono text-h3" text={time} />
      <UIText customStyle="font-spaceMono text-small" text={text} />
    </div>
  )

  return (
    <div className="flex gap-4">
      {renderTime(moment(`${countdown.hours()}`, 'HH').format('HH'), 'Hours')}
      <UIText customStyle="font-spaceMono text-h3" text=":" />
      {renderTime(
        moment(`${countdown.minutes()}`, 'mm').format('mm'),
        'Minutes',
      )}
      <UIText customStyle="font-spaceMono text-h3" text=":" />
      {renderTime(
        moment(`${countdown.seconds()}`, 'ss').format('ss'),
        'Seconds',
      )}
    </div>
  )
}
const renderButtonAction = (): JSX.Element => (
  <div className="w-[200px]">
    <Link href="/rankings" passHref>
      <UIButton fullWidth variant="filled-white" icon="/images/see-all.png">
        See NFT
      </UIButton>
    </Link>
  </div>
)
const UIHighlight = (): JSX.Element => {
  const { isMobile } = useMediaQuery()
  return (
    <div className="relative w-full h-[500px]">
      <Image priority fill src="/images/mush-room.png" alt="highlight" />
      <div className="flex items-center justify-center absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-call-to-action">
        <div className="flex flex-col mobile:justify-center mobile:ml-10 mobile:mt-10  w-full h-full tablet:flex-row tablet:items-end tablet:justify-center pb-10 gap-10">
          <div className="flex flex-col items-start gap-[50px]">
            <div className="bg-black-secondary py-2 px-4 rounded-full">
              <Avatar name="Shroomie" />
            </div>
            <UIText text="Magic Mashroom" customStyle="text-h3" />
            {!isMobile && renderButtonAction()}
          </div>
          <div className="relative w-[300px] h-[150px]">
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50 bg-black-secondary rounded-xl"></div>
            <div className="absolute top-5 left-5 right-0 bottom-0">
              <UIText
                text="Auction ends in"
                customStyle="font-spaceMono text-small"
              />
              <Countdown />
            </div>
          </div>
          {isMobile && renderButtonAction()}
        </div>
      </div>
    </div>
  )
}

export default UIHighlight
