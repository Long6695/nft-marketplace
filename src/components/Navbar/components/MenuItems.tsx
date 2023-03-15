import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import cn from 'classnames'
import { MENU_ITEMS } from '@/constants/navbar'

const MenuItems = (): JSX.Element => {
  const router = useRouter()
  return (
    <>
      {MENU_ITEMS.map((item) => (
        <Link key={item.label} href={item.href}>
          <h5
            className={cn('text-default', {
              'text-call-to-action': router.pathname === item.href,
            })}
          >
            {item.label}
          </h5>
        </Link>
      ))}
    </>
  )
}

export default MenuItems
