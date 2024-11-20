import React, { useEffect, useState } from 'react';
import work1 from '../assets/images/work1.jpg';

function JobCard() {
    const [jobVacancies, setJobVacancies] = useState([]);

    useEffect(() => {
        const fetchJobVacancies = async () => {
            try {
                const response = await fetch('http://localhost:8000/job');
                const data = await response.json();
                setJobVacancies(data);
            } catch (error) {
                console.error("Error fetching job vacancies:", error);
            }
        };

        fetchJobVacancies();
    }, []);

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    };


    return (
        <div className='grid lg:grid-cols-4 gap-5'>
            {jobVacancies.map(job => (
                <div key={job.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={job.imageUrl || work1} alt={job.title} />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{job.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {truncateDescription(job.description, 20)}
                        </p>
                        <div className='flex gap-2'>
                            <div><p>Company:</p></div>
                            <p>{job.company}</p>
                        </div>
                        <div className='flex gap-2'>
                            <div><p>Address:</p></div>
                            <p>{job.address}</p>
                        </div>
                        <div className='flex gap-2'>
                            <div><p>Salary:</p></div>
                            <p>Rp. {job.salary}</p>
                        </div>
                        <a href="#" className="inline-flex mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default JobCard;