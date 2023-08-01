import { Comment } from '@/components/Comment'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

const fetchComments = async (newsId: string) => {
  return fetch(`http://localhost:7777/news/${newsId}/comments`, { cache: 'no-store' })
    .then(res => res.json())
}

export default async function Comments ({ params }: Params) {
  await fetchComments(params)
  return (
    <div className='col-span-4 flex flex-col p-5 gap-y-16 border-l-2 border-indigo-400 shadow-md'>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}
