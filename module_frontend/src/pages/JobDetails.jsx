import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import work1 from '../assets/images/work1.jpg';

function JobDetails() {
    const { id } = useParams();
    const [jobVacancies, setJobVacancies] = useState([]);
    const [loading, setLoading] = useState(true); 


    useEffect(() => {
        const fetchJobVacancies = async () => {
            try {
                const response = await fetch(`http://localhost:8000/job`);
                const data = await response.json();
                setJobVacancies(data);
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching job vacancies:", error);
                setLoading(false);
            }
        };

        
    
        fetchJobVacancies();
    }, []);

    
    const job = jobVacancies.find(job => job.id === parseInt(id));
  return (
    <div>
            <section className="py-24">
                {loading ? ( 
                    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                        <div className="flex items-center justify-center w-full h-80 bg-gray-300 rounded sm:w-[50rem] dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                        </div>
                        <div className="w-full">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 min-w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[480px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[440px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[460px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[360px]"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    job ? (
                        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-16 py-10 rounded-2xl bg-gray-100 dark:bg-gray-900">
                            <div className="flex md:flex-1">
                                <img src={work1} alt="working on housing" width={1300} className="w-full md:h-full object-cover rounded-lg" />
                            </div>
    
                            <div className="md:w-1/2 space-y-2 text-gray-700 dark:text-gray-300">
                                <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                                    {job.title}
                                </h1>

                                <div>
                                    <p className='font-bold'>Description</p>
                                    <ol style={{ paddingLeft: '20px', listStyleType: 'decimal' }}>
                                        {job.description.split('\n').map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </ol>
                                </div>

                                <ul >
                                <p className='font-bold'>Company</p>
                                    <li className="flex items-center gap-x-2">
                                        <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-indigo-700 dark:bg-indigo-600 text-white">✓</span>
                                        {job.company} 
                                    </li>
                                </ul>

                                <div>
                                    <p className='font-bold'>Address</p>
                                    <p>
                                        {job.address}
                                    </p>
                                </div>
                                
                                <div className='flex justify-between'>
                                <button className="flex px-5 h-11  items-center bg-indigo-600 dark:bg-indigo-600 rounded-lg">
                                    <a href="#" className="text-white">
                                        Apply Now!
                                    </a>
                                </button>
                                <div className='flex items-center'>
                                    <p>Posted at {job.created_at}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-700 dark:text-gray-300">No job vacancies available.</p>
                    )
                )}
            </section>
        </div>

  )
}

export default JobDetails