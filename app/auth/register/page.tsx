'use client'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import axios, { AxiosError } from 'axios'
export default function RegisterPage () {
  const { push } = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      repeatPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required().email(),
      name: Yup.string().required(),
      password: Yup.string()
        .min(5)
        .required()
        .oneOf([Yup.ref('repeatPassword')], 'Passwords do not match'),
      repeatPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
    }),
    onSubmit: async (formData) => {
      try {
        const createAccount = await axios.post('http://localhost:7777/author', {
          email: formData.email,
          name: formData.name,
          password: formData.password
        })
        if (createAccount.status === 201) {
          push('/auth/login')
        }
      } catch (error) {
        console.log(error)
        if (error instanceof AxiosError) {
          if (error.response?.data.message === 'Email already exist') {
            formik.setFieldError('email', error.response?.data.message)
          }
        }
      }
    }
  })
  return (
    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' onSubmit={formik.handleSubmit}>

      <h2 className='text-4xl text-white font-bold text-center'>REGISTER</h2>
      <div className='flex flex-col text-gray-400 py-2'>
        <label>Email</label>
        <input
          className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='text'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {
          (Boolean(formik.errors.email)) && <p className='text-red-600 text-sm'>{formik.errors.email}</p>
        }
      </div>
      <div className='flex flex-col text-gray-400 py-2'>
        <label>name</label>
        <input
          className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='text'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {
          (Boolean(formik.errors.name)) && <p className='text-red-600 text-sm'>{formik.errors.name}</p>
        }
      </div>

      <div className='flex flex-col text-gray-400 py-2'>
        <label>Password</label>
        <input
          className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {
          (Boolean(formik.errors.password)) && <p className='text-red-600 text-sm'>{formik.errors.password}</p>
        }
      </div>

      <div className='flex flex-col text-gray-400 py-2'>
        <label>Repeat Password</label>
        <input
          className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='password'
          name='repeatPassword'
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
        />
        {
          (Boolean(formik.errors.repeatPassword)) && <p className='text-red-600 text-sm'>{formik.errors.repeatPassword}</p>
        }
      </div>

      <button
        type='submit'
        className='w-full my-5 py-2 bg-dark-purple shadow-lg shadow-cyan-900 hover:shadow-cyan-800 text-white font-semibold rounded-lg'
      >
        REGISTER
      </button>

    </form>
  )
}
