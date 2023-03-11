import s from './Text.module.css'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import cn from 'classnames'

type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'default' | 'small'

type Font = 'work-sans' | 'space-mono'
interface Props {
  text: string
  sizeDesktop?: Size
  sizeTablet?: Size
  sizeMobile?: Size
  font?: Font
  onlySize?: Size
}

export const Text = ({
  text,
  font = 'work-sans',
  sizeDesktop = 'h5',
  sizeTablet = 'default',
  sizeMobile = 'default',
  onlySize,
  ...props
}: Props): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery()
  const classes = cn(s.font, {
    [s[sizeDesktop]]: isDesktop,
    [s[sizeTablet]]: isTablet,
    [s[sizeMobile]]: isMobile,
    // [s[onlySize]]: onlySize,
  })

  return (
    <p className={classes} {...props}>
      {text}
    </p>
  )
}
