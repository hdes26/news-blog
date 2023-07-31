import { ListOfNews } from './listOfNews'

export default function HomePage () {
  return (
    <main className='flex w-full h-max flex-col m-5'>
      <section className='grid grid-cols-3 h-max gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20'>
        <ListOfNews />
      </section>
    </main>
  )
}
