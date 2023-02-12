import React from 'react'
export const UIText = ({ text }: { text: string }): JSX.Element => {
  return (
    <h5 className="w-[315px] text-base tablet:w-[325px] desktop:text-h5 desktop:w-[460px]">
      {text}
    </h5>
  )
}
