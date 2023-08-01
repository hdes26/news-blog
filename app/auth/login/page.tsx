'use client'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import axios, { AxiosError } from 'axios'
export default function LoginPage () {
  const { push } = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(5).required()
    }),
    onSubmit: async (formData) => {
      try {
        const createAccount = await axios.post('http://localhost:7777/auth/login', {
          email: formData.email,
          password: formData.password
        })
        if (createAccount.status === 201) {
          localStorage.setItem('token', createAccount.data.accessToken)
          push('/')
        }
      } catch (error) {
        console.log(error)
        if (error instanceof AxiosError) {
          if (error.response?.data.message === 'e-mail or password invalid') {
            formik.setFieldError('email', error.response?.data.message)
          }
        }
      }
    }
  })
  return (
    <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' onSubmit={formik.handleSubmit}>
      <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
      <div className='flex flex-col text-gray-400 py-2'>
        <label>email</label>
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
      <div className='flex justify-between text-gray-400 py-2'>
        <p className='flex items-center'><input className='mr-2' type='checkbox' /> Remember Me</p>
        <p>Forgot Password</p>
      </div>

      <button
        type='submit'
        className='w-full my-5 py-2 bg-dark-purple shadow-lg shadow-cyan-900 hover:shadow-cyan-800 text-white font-semibold rounded-lg'
      >
        LOGIN
      </button>

    </form>
  )
}
