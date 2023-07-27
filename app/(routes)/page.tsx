import { NewsCard } from '@/components/ui/NewsCards'
import { News } from '@/types'

export default function HomePage () {
  const newsData: News = {
    id: '1',
    title: 'Example',
    content: 'This is an example news article.',
    date: '2023-07-27',
    author: {
      id: 'author1',
      name: 'John Doe',
      email: 'john@example.com'
    },
    category: {
      id: 'category1',
      name: 'Technology',
      description: 'News related to technology'
    },
    label: {
      id: 'label1',
      name: 'regular',
      description: 'Important news'
    }
  }

  return (
    <main className='flex w-full h-max flex-col m-5'>
      <div className='grid grid-cols-3 h-max gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20'>
        <NewsCard data={newsData} />
      </div>
    </main>
  )
}
