import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ButtonVariant =
  | 'tertiary'
  | 'primary'
  | 'secondary'
  | 'outlinedTertiary'
  | 'outlinedPrimary'
  | 'outlinedSecondary'
  | 'outlinedHeadline'

interface UIButtonProps {
  variant?: ButtonVariant
  onClick?: () => void
  title: string
  href?: string
  imgSrc?: string
  imgAlt?: string
  iconSize?: number
  iconPos?: string
}

const BUTTON_STYLE_MAP: Record<ButtonVariant, string> = {
  tertiary: 'btn-tertiary',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outlinedTertiary: 'btn-outlined-tertiary',
  outlinedPrimary: 'btn-outlined-primary',
  outlinedSecondary: 'btn-outlined-secondary',
  outlinedHeadline: 'btn-outlined-headline',
}

const UIButton: React.FC<UIButtonProps> = ({
  variant = 'tertiary',
  onClick,
  title,
  imgSrc,
  imgAlt,
  iconSize = 35,
  iconPos = 'left-8',
  href,
}) => {
  const renderButton = (): JSX.Element => (
    <button
      className={`${imgSrc && imgAlt ? 'relative' : ''} ${
        BUTTON_STYLE_MAP[variant]
      }`}
      onClick={onClick}
    >
      {imgSrc && imgAlt && (
        <div className={`absolute top-1/2 ${iconPos} -translate-y-1/2`}>
          <Image src={imgSrc} alt={imgAlt} width={iconSize} height={iconSize} />
        </div>
      )}
      {title}
    </button>
  )
  if (!href) return renderButton()
  return <Link href={href}>{renderButton()}</Link>
}

export default UIButton
