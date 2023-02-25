import classnames from 'classnames'

import React from 'react'
export const UITitle = ({
  title,
  variant,
}: {
  title: string
  variant: 'h1' | 'h2'
}): JSX.Element => {
  return (
    <h2
      className={classnames(
        {
          'font-semibold text-h4 tablet:text-h3 desktop:text-h1':
            variant === 'h1',
        },
        { 'text-h3 desktop:text-h2': variant === 'h2' },
      )}
    >
      {title}
    </h2>
  )
}
