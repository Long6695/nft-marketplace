import React, { useState } from 'react'
import cn from 'classnames'
import { UIText } from '../Text/UIText'

const TABS = [
  {
    label: 'Created',
    value: 'created',
    quantity: 302,
  },
  {
    label: 'Owned',
    value: 'owned',
    quantity: 67,
  },
  {
    label: 'Collection',
    value: 'collection',
    quantity: 4,
  },
]

const ArtistTabs = (): JSX.Element => {
  const [active, setActive] = useState('created')

  const renderQuantities = (tab: {
    value: string
    quantity: number
  }): JSX.Element => {
    return (
      <div
        className={cn('min-w-[40px] text-white rounded-full ml-2', {
          'px-1': tab.quantity < 100,
          'px-2': tab.quantity > 100,
          'bg-black-secondary': active !== tab.value,
          'bg-gray': active === tab.value,
        })}
      >
        <UIText
          text={tab.quantity.toString()}
          font="space-mono"
          onlySize="default"
        />
      </div>
    )
  }

  return (
    <div className="container text-center">
      <ul className="flex justify-between">
        {TABS.map((tab) => (
          <li
            key={tab.value}
            onClick={() => {
              setActive(tab.value)
            }}
            className={cn(
              'w-full cursor-pointer flex justify-center items-center py-4',
              {
                'border-b-2 border-gray text-white': tab.value === active,
                'text-gray': tab.value !== active,
              },
            )}
          >
            <UIText
              text={tab.label}
              sizeDesktop="h5"
              sizeMobile="default"
              sizeTablet="default"
            />
            {renderQuantities(tab)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArtistTabs
