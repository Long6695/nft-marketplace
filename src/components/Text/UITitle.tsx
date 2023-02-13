import React from 'react'
export const UITitle = ({ title }: { title: string }): JSX.Element => {
  return (
    <h2 className="text-h4 mobile:text-h3 tablet:text-h3 desktop:text-h2">
      {title}
    </h2>
  )
}
