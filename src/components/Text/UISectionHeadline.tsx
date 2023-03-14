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
      <UIText text={title} sizeMobile="h4" sizeTablet="h4" sizeDesktop="h3" />
      {description && (
        <UIText
          text={description}
          sizeMobile="default"
          sizeTablet="default"
          sizeDesktop="h5"
        />
      )}
    </div>
  )
}

export default UISectionHeadline
