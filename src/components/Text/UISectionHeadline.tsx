import React from 'react'
import { UIText } from './UIText'

const UISectionHeadline = ({
  title,
  description,
}: {
  title: string
  description: string
}): JSX.Element => {
  return (
    <>
      <UIText
        text={title}
        customStyle="font-semibold text-h4 tablet:text-h3 mb-3"
      />
      <UIText text={description} customStyle="text-base tablet:text-h5" />
    </>
  )
}

export default UISectionHeadline
