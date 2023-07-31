import { News, Styles } from '@/types'
import Link from 'next/link'

export const NewsCard: React.FC<{ data: News }> = ({ data }) => {
  const styles: Styles = {
    important: 'col-span-3',
    warning: 'col-span-2',
    regular: 'col-span-1'
  }

  const colSpan = styles[data.label.name]
  return (
    <Link href='[newsId]' as={` ${data.id} `} className={`${colSpan} rounded-3xl overflow-hidden cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out shadow-sm shadow-indigo-400`}>
      <div className='relative w-full h-full p-4 md:p-8 bg-[#00000077]'>
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' className='absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0z' /><path d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z' /></svg>
        <div className='w-full h-full flex flex-col justify-between'>
          <svg stroke='currentColor' fill='currentColor' strokeWidth='0' role='img' viewBox='0 0 24 24' color='white' className='text-xs md:text-5xl hidden md:flex ' style={{ color: 'white' }} height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><title /><path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' /></svg>
          <div>
            <h2 className='text-white text-sm md:text-xl lg:text-3xl font-bold'>{data.title}</h2>
            <p className='text-white text-sm md:text-md lg:text-base'>{data.content}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
