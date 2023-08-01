export const Comment: React.FC = () => {
  return (
    <div className='flex gap-x-10 items-center'>
      <h1 className='font-bold'>Hernan</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae tempora aperiam dolores quidem blanditiis quibusdam impedit. Expedita ut nulla, molestias sed, quas, voluptas magni sunt facere provident nam architecto doloremque?</p>
      <div className='relative w-full h-full'>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='absolute hover:scale-[200%] transition duration-300 right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa] cursor-pointer' viewBox='0 0 16 16'> <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' /> <path fillRule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z' /> </svg>
      </div>
    </div>
  )
}
