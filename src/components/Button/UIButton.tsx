import React from 'react'
import Image from 'next/image'

type Variant =
  | 'tertiary'
  | 'primary'
  | 'secondary'
  | 'outlinedTertiary'
  | 'outlinedPrimary'
  | 'outlinedSecondary'

interface Props {
  variant?: Variant
  onClick?: any
  title: string
  imgSrc?: string
  imgAlt?: string
}

const mapStyle: Record<Variant, string> = {
  tertiary: 'btn-tertiary',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outlinedTertiary: 'btn-outlined-tertiary',
  outlinedPrimary: 'btn-outlined-primary',
  outlinedSecondary: 'btn-outlined-secondary',
}

const UIButton = ({
  variant = 'tertiary',
  onClick,
  title,
  imgSrc = undefined,
  imgAlt = undefined,
}: Props): JSX.Element => {
  if (imgSrc !== undefined && imgAlt !== undefined) {
    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-8 flex items-center mt-4">
          <Image src={imgSrc} alt={imgAlt} width={35} height={35} />
        </div>
        <button className={`${mapStyle[variant]}`} onClick={onClick}>
          {title}
        </button>
      </div>
    )
  }
  return (
    <button className={`${mapStyle[variant]}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default UIButton
