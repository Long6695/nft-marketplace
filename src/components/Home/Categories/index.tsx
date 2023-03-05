import WrapperCards from '@/components/WrapperCards'
import React from 'react'
import WrapperHeaderSection from '../HeroSection/WrapperHeaderSection'
import UICategory from './UICategory'

const UICategories = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <WrapperHeaderSection title="Browse Categories" />
      <div className="flex justify-center">
        <WrapperCards>
          {Array.from({ length: 8 }, (_, idx: number) => (
            <UICategory key={idx} />
          ))}
        </WrapperCards>
      </div>
    </div>
  )
}

export default UICategories
