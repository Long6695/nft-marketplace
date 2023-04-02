'use client'
import React, { useState } from 'react'
import cn from 'classnames'
import { UIText } from '../Text/UIText'

const TABS = [
  {
    label: 'Today',
    value: 'today',
  },
  {
    label: 'This Week',
    value: 'this-week',
  },
  {
    label: 'This Month',
    value: 'this-month',
  },
  {
    label: 'All Time',
    value: 'all-time',
  },
]

const RankingTabs = (): JSX.Element => {
  const [active, setActive] = useState('today')

  return (
    <div className="container text-center my-10">
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
                'border-b-2 border-gray': tab.value === active,
              },
            )}
          >
            <UIText
              color={tab.value !== active ? 'gray' : 'white'}
              text={tab.label}
              sizeDesktop="h5"
              sizeMobile="default"
              sizeTablet="default"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RankingTabs
