'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import { UINavbarDesktop } from './UINavbarDesktop'
import { UINavbarMobile } from './UINavbarMobile'

const UINavbar = (): JSX.Element => {
  const { isDesktop } = useMediaQuery()
  return <>{isDesktop ? <UINavbarDesktop /> : <UINavbarMobile />}</>
}

export default UINavbar
