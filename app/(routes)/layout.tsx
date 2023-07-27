import { Suspense } from 'react'
export default function HomeLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (

    <div className='flex w-full h-screen' suppressHydrationWarning>

      <Suspense>
        <h1>Layout</h1>
      </Suspense>
      {children}
    </div>
  )
}
