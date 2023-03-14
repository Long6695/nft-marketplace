import s from './Button.module.css'
import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

type ButtonVariant = 'filled' | 'outlined' | 'filled-white'
type ButtonHeight = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  loading?: boolean
  variant?: ButtonVariant
  height?: ButtonHeight
  icon?: string
  size?: number
  width?: string
} & Omit<React.ComponentProps<'button'>, 'className'>

const UIButton = ({
  children,
  variant = 'filled',
  fullWidth,
  loading,
  disabled,
  height = 'md',
  icon,
  size = 20,
  width,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = cn(s.root, s[variant], s[height], {
    [s.fullWidth]: fullWidth,
    'min-w-20 px-4': !fullWidth,
    [width as string]: !!width,
  })

  return (
    <button className={classes} {...props}>
      <div className="mr-2">
        {icon && <Image src={icon} alt={icon} width={size} height={size} />}
      </div>
      {children}
    </button>
  )
}

export default UIButton
