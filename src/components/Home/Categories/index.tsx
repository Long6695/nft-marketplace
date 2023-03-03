import UISectionHeadline from '@/components/Text/UISectionHeadline'
import WrapperCards from '@/components/WrapperCards'
import React from 'react'
import UICategory from './UICategory'

const UICategories = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <UISectionHeadline title="Browse Categories" description="" />
      <WrapperCards>
        {Array.from({ length: 8 }, (_, idx: number) => (
          <UICategory key={idx} />
        ))}
      </WrapperCards>
    </div>
  )
}

export default UICategories
