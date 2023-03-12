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
      <UIText text={name} onlySize="h5" />
      <div className="flex items-center gap-3">
        <UIText text="Total sales:" color="gray" onlySize="default" />
        <UIText text={totalSales} font="space-mono" onlySize="default" />
      </div>
    </div>
  )
}

export default UICreatorInfo
