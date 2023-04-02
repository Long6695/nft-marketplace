'use client'
import UISectionHeadline from '@/components/Text/UISectionHeadline'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'

const WrapperHeaderSection = ({
  title,
  description,
  customAction,
}: {
  title: string
  description?: string
  customAction?: () => React.ReactNode
}): JSX.Element => {
  const { isTablet, isDesktop } = useMediaQuery()
  return (
    <div className="flex items-start justify-between">
      <UISectionHeadline title={title} description={description} />
      <div>
        {(isDesktop || isTablet) && customAction && (
          <div className="flex flex-1 desktop:flex-none justify-end">
            <div className="tablet:w-[240px]">{customAction()}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WrapperHeaderSection
