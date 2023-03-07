import s from './Button.module.css'
import React from 'react'
import cn from 'classnames'

type ButtonVariant = 'filled' | 'outlined'
type ButtonType = 'primary' | 'secondary' | 'tertiary'
type ButtonHeight = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  loading?: boolean
  variant?: ButtonVariant
  type?: ButtonType
  height?: ButtonHeight
} & Omit<React.ComponentProps<'button'>, 'className'>

const Button = ({
  children,
  color = 'primary',
  variant = 'filled',
  fullWidth,
  loading,
  disabled,
  height = 'md',
  ...props
}: ButtonProps): JSX.Element => {
  const classes = cn(s.root, s[variant], s[color], s[height], {
    [s.fullWidth]: fullWidth,
    'min-w-20 px-4': !fullWidth,
  })

  return (
    <button className={classes} disabled={disabled ?? loading} {...props}>
      {children}
      {/* {loading && (
        <span className="ml-1.5">
          <Spinner className={s.spinner} />
        </span>
      )} */}
    </button>
  )
}

export default Button
