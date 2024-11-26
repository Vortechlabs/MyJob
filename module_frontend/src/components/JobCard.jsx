import React, { useEffect, useState } from 'react';
import work1 from '../assets/images/work1.jpg';
import { Link } from 'react-router-dom';
import CardPlaceholder from './placeholder/CardPlaceholder';

function JobCard() {
    const [jobVacancies, setJobVacancies] = useState([]);
    const [loading, setLoading] = useState(true);

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
                            <img className="rounded-t-lg min-h-80 max-h-80 min-w-full max-w-full object-cover"  src={`http://localhost:8000/fotocompany/${job.foto}`} alt={job.title} />
                        </a>
                        <div className="p-5 text-sm">
                            <a href="#">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {job.title}
                                </h5>
                            </a>
                            <p>Company: {job.company}</p>
                            <p>Address: {job.address}</p>
                            <p>Salary : {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(job.salary)} /month</p>
                            
                            <div className='flex gap-2 text-sm'>
                                <div><p>Category:</p></div>
                                <p>{job.category ? job.category.job_category : 'no'}</p>
                            </div>
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