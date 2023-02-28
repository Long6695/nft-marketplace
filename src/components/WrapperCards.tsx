import React from 'react'

const WrapperCards = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[30px] mt-10 tablet:mt-20">
      {children}
    </div>
  )
}

export default WrapperCards
