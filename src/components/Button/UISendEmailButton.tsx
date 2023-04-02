'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import UIButton from './UIButton'

const UISendEmailButton = (): JSX.Element => {
  const { isMobile, isTablet } = useMediaQuery()
  if (isMobile || isTablet) {
    return (
      <div className="flex flex-col text-black gap-5 mt-5">
        <input
          placeholder="Enter your email here"
          className="text-default px-4 rounded-full h-[46px] focus:outline-none"
        />
        <UIButton variant="filled" height="sm" fullWidth>
          Subscribe
        </UIButton>
      </div>
    )
  }
  return (
    <div className="flex bg-white text-black rounded-full overflow-hidden">
      <input
        placeholder="Enter your email here"
        className="px-4 focus:outline-none"
      />
      <UIButton variant="filled" height="lg" fullWidth>
        Subscribe
      </UIButton>
    </div>
  )
}

export default UISendEmailButton
