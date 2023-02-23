import React from 'react'
import { UIText } from './Text/UIText'
import Image from 'next/image'

const Avatar = ({
  title,
  name,
}: {
  title?: string
  name: string
}): JSX.Element => {
  return (
    <>
      {title === undefined ? null : (
        <UIText text={title} customStyle="font-semibold text-h5 mb-2" />
      )}
      <div className="flex items-center gap-2">
        <Image src="/images/avatar.png" width={24} height={24} alt="avatar" />
        <UIText text={name} customStyle="text-base" />
      </div>
    </>
  )
}

export default Avatar
