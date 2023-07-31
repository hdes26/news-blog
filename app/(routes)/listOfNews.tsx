import { NewsCard } from '@/components/ui/NewsCards'
import { News } from '@/types'

const fetchNews = () => {
  return fetch('http://localhost:7777/news', { cache: 'no-store' })
    .then(res => res.json())
}
export async function ListOfNews () {
  const news:News[] = await fetchNews()
  return (
    <>
      {news.map((newsItem:News) => (
        <NewsCard key={newsItem.id} data={newsItem} />
      ))}
    </>
  )
}
