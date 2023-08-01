'use client'
import axios, { AxiosError } from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function CreateNewsForm ({ token }:{token:string}) {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      label: '',
      category: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      content: Yup.string().required(),
      label: Yup.string().required(),
      category: Yup.string().required()
    }),
    onSubmit: async (formData) => {
      try {
        const createAccount = await axios.post('http://localhost:7777/news', {
          title: formData.title,
          content: formData.content,
          labelId: +formData.label,
          categoryId: +formData.category
        }, { headers: { Authorization: 'Bearer ' + token } })
        if (createAccount.status === 201) {
          console.log('ok')
        }
      } catch (error) {
        console.log(error)
        if (error instanceof AxiosError) {
          console.log('error')
        }
      }
    }
  })

  return (
    <form className='col-span-4 bg-[#00000077] p-5 rounded-3xl overflow-hidden transition duration-300 ease-in-out shadow-sm shadow-indigo-400' onSubmit={formik.handleSubmit}>
      <div className='flex flex-col'>
        <label>Title</label>
        <input
          className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='text'
          name='title'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {
        (Boolean(formik.errors.title)) && <p className='text-red-600 text-sm'>{formik.errors.title}</p>
      }
        <label>Content</label>
        <input
          className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='text'
          name='content'
          onChange={formik.handleChange}
          value={formik.values.content}
        />
        {
        (Boolean(formik.errors.content)) && <p className='text-red-600 text-sm'>{formik.errors.content}</p>
      }
        <label>Label</label>
        <input
          className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='number'
          name='label'
          onChange={formik.handleChange}
          value={formik.values.label}
        />
        {
        (Boolean(formik.errors.label)) && <p className='text-red-600 text-sm'>{formik.errors.label}</p>
      }
        <label>Category</label>
        <input
          className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='number'
          name='category'
          onChange={formik.handleChange}
          value={formik.values.category}
        />
        {
        (Boolean(formik.errors.category)) && <p className='text-red-600 text-sm'>{formik.errors.category}</p>
      }

      </div>
      <button
        type='submit'
        className='w-full my-10 py-2 bg-dark-purple shadow-lg shadow-cyan-900 hover:shadow-cyan-800 text-white font-semibold rounded-lg'
      >
        CREATE
      </button>

    </form>

  )
}
