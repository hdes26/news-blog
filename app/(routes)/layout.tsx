import { Navbar } from '@/components/ui/Navbar'
import { Suspense } from 'react'
export default function HomeLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (

    <div className='flex flex-col w-full h-screen p-14' suppressHydrationWarning>

      <Suspense>
        <Navbar />
      </Suspense>
      {children}
    </div>
  )
}
