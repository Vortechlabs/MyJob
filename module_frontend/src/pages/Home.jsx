import React from 'react'
import Foxy_Amadeus from '../assets/images/Foxy_Amadeus.png'
import huawei from '../assets/images/logo/huawei.png'
import Microsoft from '../assets/images/logo/Microsoft.png'
import google from '../assets/images/logo/google.png'
import alphabeth from '../assets/images/logo/alphabeth.png'
import services from '../assets/images/services.jpeg'

function Home() {
  return (
    <div className='block justify-center px-6'>
      <section className='lg:flex '>
        <div className=' max-w-2xl justify-center content-center items-center'>
        <p className='lg:text-6xl text-5xl'>Find Your Future Career in MyJob</p>
        <p className='text-lg pt-2'>Aliquip enim quis dolore est amet deserunt reprehenderit aliqua consectetur exercitation quis elit enim.</p>
        <div className='flex gap-5 pt-2'>
          <button className='ring-2 ring-indigo-600'>Lamar Pekerjaan</button>
          <button className='bg-indigo-600 text-white hover:ring-2'>Buat pekerjaan</button>
        </div>
        
        <div className='max-h-24 grid grid-cols-2 lg:grid-cols-5 mb-10 gap-5 pt-8'>
          <img src={Microsoft} alt=""  className='max-h-8 grayscale hover:grayscale-0 delay-200'/>
          <img src={huawei} alt=""  className='brightness-200 max-h-8 grayscale hover:grayscale-0 delay-200'/>
          <img src={google} alt=""  className='max-h-8 grayscale hover:grayscale-0 delay-200'/>
          <img src={alphabeth} alt=""  className='max-h-8 grayscale hover:grayscale-0 delay-200'/>
        </div>
        </div>
        <div > 
          <img src={Foxy_Amadeus} alt="hero-image" className='max-h-[30rem]' />
        </div>
      </section>

      <section className='mt-10'>
        <div>
          <h1 className='text-center text-3xl font-medium'>Browse by category</h1>
          <p className='text-center'>Find the job that's perfect for you. about 500+ ne jobs everyday.</p>
        </div>

        <div className='grid grid-cols-4 gap-y-5 gap-x-5 pt-5'>

            <div className="flex items-center gap-4 bg-indigo-600  text-white rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs dark:text-gray-200">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-indigo-600  text-white rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs dark:text-gray-200">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-indigo-600  text-white rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs dark:text-gray-200">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-indigo-600  text-white rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs dark:text-gray-200">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-indigo-600  text-white rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs dark:text-gray-200">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-indigo-600  text-white rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs dark:text-gray-200">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-indigo-600  text-white rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs dark:text-gray-200">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-indigo-600  text-white rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs dark:text-gray-200">
                  33+ available
                </p>
              </div>
            </div>

        </div>
      </section>
      
    </div>

  )
}

export default Home