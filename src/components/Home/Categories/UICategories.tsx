import WrapperCards from '@/components/WrapperCards'
import React from 'react'
import UICategory from './UICategory'

const UICategories = (): JSX.Element => {
  return (
    <WrapperCards>
      {Array.from({ length: 8 }, (_, idx: number) => (
        <UICategory key={idx} />
      ))}
    </WrapperCards>
  )
}

export default UICategories
