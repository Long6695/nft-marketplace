import React from 'react'

const WrapperCards = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <div
      className={`flex flex-wrap justify-center gap-[30px] mt-10 tablet:flex-row tablet:mt-20`}
    >
      {children}
    </div>
  )
}

export default WrapperCards
