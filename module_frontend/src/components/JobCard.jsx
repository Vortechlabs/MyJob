import React, { useEffect, useState } from 'react';
import work1 from '../assets/images/work1.jpg';
import { Link } from 'react-router-dom';
import CardPlaceholder from './placeholder/CardPlaceholder';

function JobCard() {
    const [jobVacancies, setJobVacancies] = useState([]);
    const [loading, setLoading] = useState(true);

    const truncateString = (str, num) => {
        if (!str) return 'no'; 
        return str.length > num ? str.slice(0, num) + '...' : str;
    };

    useEffect(() => {
        const fetchJobVacancies = async () => {
            try {
                const response = await fetch('http://localhost:8000/Jobs');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data); 
                if (data && Array.isArray(data.data)) {
                    setJobVacancies(data.data);
                } else {
                    setJobVacancies([]); 
                }
            } catch (error) {
                console.error("Error fetching job vacancies:", error);
                setJobVacancies([]); 
            } finally {
                setLoading(false); // Set loading to false after fetch completes
            }
        };
    
        fetchJobVacancies();
    }, []);

    return (
        loading ? (
            <div className='grid lg:grid-cols-4 gap-5'>
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
                <CardPlaceholder />
            </div>
        ) : (
            <div className='grid lg:grid-cols-4 gap-5'>
                {jobVacancies.map(job => (
                    <div key={job.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg min-h-80 max-h-80 min-w-full max-w-full object-cover" src={`http://localhost:8000/fotocompany/${job.foto}`} alt='' />
                        </a>
                        <div className="p-5 text-sm">
                            <a href="#">
                                {job.available_positions.map(position => (
                                    <h5 key={position.id} className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white"> {truncateString(position.position, 20)} </h5>
                                ))}
                            </a>
                            <p className='mb-2'>{job.company}</p>

                            <p className='flex items-center gap-1 pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(job.salary)} per month
                            </p>
                            <p className='flex items-center gap-1 pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                {truncateString(job.category ? job.category.job_category : 'no', 25)}
                            </p>
                            <p className='flex items-center gap-1 pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                {job.address}
                            </p>
                            
                            
    
                            <Link to={`/JobDetails/${job.id}`} className="inline-flex mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                                See details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        )
    );
}

export default JobCard;