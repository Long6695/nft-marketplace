import { UIText } from '@/components/Text/UIText'
import React from 'react'

const UICreatorInfo = ({
  name,
  totalSales,
}: {
  name: string
  totalSales: string
}): JSX.Element => {
  return (
    <div className="flex flex-col flex-start desktop:text-center">
      <UIText text={name} customStyle="font-semibold text-h5" />
      <div className="flex items-center gap-3">
        <UIText text="Total sales:" customStyle="text-base text-gray" />
        <UIText text={totalSales} customStyle="font-spaceMono text-base" />
      </div>
    </div>
  )
}

export default UICreatorInfo
