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
  iconSize?: number
  iconPos?: string
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
  iconSize = 35,
  iconPos = 'left-8',
}: Props): JSX.Element => {
  if (imgSrc !== undefined && imgAlt !== undefined) {
    return (
      <div className="relative">
        <div className={`absolute top-1/2 ${iconPos} -translate-y-1/2`}>
          <Image src={imgSrc} alt={imgAlt} width={iconSize} height={iconSize} />
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
