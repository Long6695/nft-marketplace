import s from './Text.module.css'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import cn from 'classnames'

type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'default' | 'small'

type Font = 'work-sans' | 'space-mono'

type Color = 'white' | 'gray' | 'green'
interface Props {
  text: string
  sizeDesktop?: Size
  sizeTablet?: Size
  sizeMobile?: Size
  font?: Font
  onlySize?: Size
  color?: Color
  spacing?: string
}
export const UIText = ({
  text,
  font = 'work-sans',
  sizeDesktop = 'h4',
  sizeTablet = 'h5',
  sizeMobile = 'default',
  onlySize,
  color = 'white',
  ...props
}: Props): JSX.Element => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery()
  const isSameSize = sizeTablet === sizeMobile
  const classes = cn(s[font], s[color], {
    [s[sizeDesktop]]: isDesktop && !onlySize,
    [s[sizeTablet]]: isTablet && !onlySize && !isSameSize,
    [s[sizeMobile]]: isMobile && !onlySize && !isSameSize,
    [s[sizeTablet]]: isSameSize && !isDesktop,
    [s[onlySize as string]]: onlySize,
  })

  return (
    <p className={classes} {...props}>
      {text}
    </p>
  )
}
