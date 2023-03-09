import React from 'react'
export const UIText = ({
  text,
  customStyle = undefined,
}: {
  text: string
  customStyle?: React.ComponentProps<'p'>['className']
}): JSX.Element => {
  const style =
    customStyle !== undefined ? customStyle : 'text-default desktop:text-h5'
  return <p className={style}>{text}</p>
}
