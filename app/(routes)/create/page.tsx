'use client'
import CreateNewsForm from '@/components/ui/createNews'
import { useEffect, useState } from 'react'

export default function CreatePage () {
  const [token, setToken] = useState('')
  useEffect(() => {
    const currenToken:string = localStorage.getItem('token') as string
    if (currenToken) {
      setToken(currenToken)
    }
  }, [])

  return (
    <main className='flex w-full h-max flex-col m-5 text-white'>
      <article className='grid grid-cols-3 h-max gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20'>
        <CreateNewsForm token={token} />
      </article>
    </main>
  )
}
