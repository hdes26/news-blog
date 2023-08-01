import Image from 'next/image'

export default function AuthLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex w-screen h-screen'>
      <div className='hidden sm:block'>
        <Image
          src='/img/auth.jpg'
          className='w-full h-full object-cover'
          priority
          alt='authimg'
          width={0} height={0}
          sizes='100'
          placeholder='blur'
          blurDataURL='/img/auth.jpg'
        />
      </div>

      <div className='bg-gray-800 flex flex-col justify-center w-9/12'>

        {children}

      </div>
    </div>
  )
}
