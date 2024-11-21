import React from 'react'
import '../index.css'

function Reqruiters() {
  return (
    <div>
      <h1>Job Information</h1>

      <form action="" className='grid grid-cols-2 gap-2 mt-5'>
        <div>
          <label htmlFor="title">Title</label> <br />
          <input type="text" name='title' className='rounded-lg text-sm text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div>
          <label htmlFor="salary">Salary</label> <br />
          <input type="number" name='salary' className='rounded-lg text-sm text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div>
          <label htmlFor="company">Company</label> <br />
          <input type="text" name='company' className='rounded-lg text-sm text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div>
          <label htmlFor="address">Address</label> <br />
          <input type="text" name='address' className='rounded-lg text-sm text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div className='col-span-2'>
          <label htmlFor="category">Category</label> <br />
          <input type="text" name='category' className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div className='col-span-2'>
          <label htmlFor="description">Description</label> <br />
          <textarea type="text" rows="4"  name='description' className='  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600" placeholder="Write your thoughts here..."'/>
        </div>
        <div className=' col-span-2'>
          <button type="submit"  className='bg-indigo-600 w-full hover:ring-2 hover:ring-indigo-500 text-white'>Send job</button>
        </div>
      </form>
    </div>
  )
}

export default Reqruiters