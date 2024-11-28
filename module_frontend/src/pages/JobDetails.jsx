import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import work1 from '../assets/images/work1.jpg';
import ImagePlaceholder from '../components/placeholder/ImagePlaceholder';

function JobDetails() {
    const { id } = useParams();
    const [job, setJob] = useState(null); // Change to store a single job
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchJobVacancy = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/Jobs/${id}`); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJob(data); 
            } catch (error) {
                console.error("Error fetching job vacancy:", error);
                setJob(null); 
            } finally {
                setLoading(false); 
            }
        };

        fetchJobVacancy();
    }, [id]); 

    return (
        <div>
            <section>
                {loading ? ( 
                    <ImagePlaceholder />
                ) : (
                    job ? (
                        <div className='mx-auto px-5 sm:px-10 md:px-12 lg:px-10 max-w-7xl'>
                            <div className="flex flex-col md:flex-row gap-16 py-10 rounded-2xl bg-transparent">
                                <div className="flex md:flex-1">
                                    <img src={`http://localhost:8000/fotocompany/${job.foto}`} alt='' width={1300} className="w-full min-h-96 max-h-96 object-cover rounded-lg" />
                                </div>

                                <div className="md:w-1/2 space-y-2 text-gray-700 dark:text-gray-300">
                                    {job.available_positions.map(position => (
                                    <h5 key={position.id} className=" text-3xl font-bold tracking-tight text-gray-900 dark:text-white"> {position.position} </h5>
                                ))}

                                    <ul>
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

                                    <div>
                                        <p className='font-bold'>Salary Details</p>
                                        <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(job.salary)} per month</p>
                                    </div>
                                    
                                    <div>
                                        <p className='font-bold'>Category</p>
                                        <p>{job.category ? job.category.job_category : 'No category available'}</p>
                                    </div>
                                    
                                    <div className='flex justify-between'>
                                        <button className="flex px-5 h-11 items-center bg-indigo-600 dark:bg-indigo-600 rounded-lg">
                                            <a href="#" className="text-white">
                                                Apply Now!
                                            </a>
                                        </button>
                                    </div>
                                    <div className='flex items-center'>
                                        <p>Posted at {job.created_at}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='grid lg:grid-cols-2 gap-5'>
                                <div>
                                    <p className='font-bold'>Description</p>
                                    <ol style={{ paddingLeft: '20px', listStyleType: 'decimal' }}>
                                        {job.description.split('\n').map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </ol>
                                </div>

                                <div>
                                    <p className='font-bold'>Description</p>
                                    <ol style={{ paddingLeft: '20px', listStyleType: 'decimal' }}>
                                        {job.description.split('\n').map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-700 dark:text-gray-300">No job vacancy found.</p>
                    )
                )}
            </section>
        </div>
    );
}

export default JobDetails;