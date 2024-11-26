import React from 'react'
import Foxy_Amadeus from '../assets/images/Foxy_Amadeus.png'
import huawei from '../assets/images/logo/huawei.png'
import Microsoft from '../assets/images/logo/Microsoft.png'
import google from '../assets/images/logo/google.png'
import alphabeth from '../assets/images/logo/alphabeth.png'
import services from '../assets/images/services.jpeg'
import { Link } from 'react-router-dom'
import JobCard from '../components/JobCard'

function Home() {
  return (
    <main>
    <div className='block max-w-7xl justify-center px-10'>
      <section className='lg:flex lg:justify-between'>
        <div className=' max-w-2xl justify-center content-center items-center'>
        <p className='lg:text-6xl text-6xl'>Find Your Future Career in MyJob</p>
        <p className='text-2xl pt-2'>Aliquip enim quis dolore est amet deserunt reprehenderit aliqua consectetur exercitation quis elit enim.</p>
        <div className='flex gap-5 pt-2'>
          <Link to={'/Jobs'}><button className='ring-2 ring-indigo-600'>Lamar Pekerjaan</button></Link>
          <Link to={'/Reqruiters'}><button className='bg-indigo-600 text-white hover:ring-2'>Buat pekerjaan</button></Link>
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

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-5 pt-5'>


            <div className="flex items-center gap-4 bg-white  text-black rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs ">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white  text-black rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs ">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white  text-black rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs ">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white  text-black rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs ">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white  text-black rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs ">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white  text-black rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs ">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white  text-black rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs ">
                  33+ available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white  text-black rounded-lg">
              
              <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
              <div>
                <h6 >Services</h6>
                <p className="font-normal text-xs ">
                  33+ available
                </p>
              </div>
            </div>
        </div>

        <div className='mt-20 mb-8'>
          <h1 className='text-center text-3xl font-medium'>Jobs of the day</h1>
          <p className='text-center'>Find the job that's perfect for you. about 500+ ne jobs everyday.</p>
        </div>
        <div>
          <JobCard />
        </div>
      </section>
      
    </div>
    </main>

  )
}

export default Home