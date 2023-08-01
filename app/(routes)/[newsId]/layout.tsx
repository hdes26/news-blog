import { News } from '@/types'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link'
import React from 'react'

const fetchingNewsGet = async (newsId: string) => {
  return fetch(`http://localhost:7777/news/${newsId}`, { cache: 'no-store' })
    .then(res => res.json())
}

export default async function NewsLayout ({ children, params }: Params) {
  const { newsId } = params
  const news: News = await fetchingNewsGet(newsId)
  return (
    <main className='flex w-full h-max flex-col m-5 text-white'>
      <article className='grid grid-cols-3 h-max gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20'>
        <div className='col-span-4 bg-[#00000077] p-5 rounded-3xl overflow-hidden transition duration-300 ease-in-out shadow-sm shadow-indigo-400'>
          <h1 className='py-2 text-3xl'> {news.title} </h1>
          <p className='py-6'> {news.content} </p>
        </div>
        <Link href={`/${newsId}/comments`} className='w-max mt-5'>Ver comentarios</Link>
      </article>
      <article className='grid grid-cols-3 h-max gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20'>
        {children}
      </article>

    </main>
  )
}
