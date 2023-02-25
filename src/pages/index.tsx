import UIHeroSection from '@/components/Home/UIHeroSection'
import UITrendingCollection from '@/components/Home/UITrendingCollection'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home(): JSX.Element {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/asdastodos/1',
      )
      setData(response.data)
    }
    fetchData().catch((err) => {
      console.log(err)
    })
  }, [])
  console.log(data)
  return (
    <div className="flex flex-col gap-[160px]">
      <UIHeroSection />
      <UITrendingCollection />
    </div>
  )
}
