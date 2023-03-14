import React from 'react'

const WrapperCards = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <div
      className={`flex flex-wrap justify-center gap-[20px] mt-10 tablet:flex-row tablet:mt-20 w-[315px] tablet:w-[690px] desktop:w-full`}
    >
      {children}
    </div>
  )
}

export default WrapperCards
