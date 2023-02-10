import { Menu } from '@headlessui/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const fetchUser = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/todos/1')
}
export default function Home(): JSX.Element {
  const { isLoading, data } = useQuery({queryKey: ['users'], queryFn: fetchUser})
  if(isLoading) {
    return <h1>Loading....</h1>
  }
  return (
    <div className="w-full h-full bg-gradient#1">
      <Menu>
        <Menu.Button>More</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            <Link href="/post">Hello</Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}
