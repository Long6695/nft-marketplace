import React from 'react'
import Image from 'next/image'
import { H_NAV_LOGO } from '@/constants/home'

const UILogo = (): JSX.Element => {
  return (
    <div className="flex items-center">
      <Image src="/images/logo.png" width={32} height={32} alt="logo" />
      <h4 className="text-default font-spaceMono ml-2 desktop:text-h5">
        {H_NAV_LOGO}
      </h4>
    </div>
  )
}

export default UILogo
