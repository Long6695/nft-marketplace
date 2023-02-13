import React from 'react'
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
}: Props): JSX.Element => {
  return (
    <button className={`${mapStyle[variant]}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default UIButton
