import React from 'react'
import { UIText } from './UIText'

const UISectionHeadline = ({
  title,
  description,
}: {
  title: string
  description?: string
}): JSX.Element => {
  return (
    <div>
      <UIText
        text={title}
        customStyle="font-semibold text-h4 tablet:text-h3 mb-3"
      />
      {description && (
        <UIText
          text={description}
          customStyle="text-base tablet:text-h5 w-[315px] tablet:w-[450px] desktop:w-full"
        />
      )}
    </div>
  )
}

export default UISectionHeadline
