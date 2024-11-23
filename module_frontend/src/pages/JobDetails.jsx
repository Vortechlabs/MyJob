import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import work1 from '../assets/images/work1.jpg';
import ImagePlaceholder from '../components/placeholder/ImagePlaceholder';

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
            <section>
                {loading ? ( 
                 <ImagePlaceholder />
                ) : (
                    job ? (
                        <div className='mx-auto px-5 sm:px-10 md:px-12 lg:px-10  max-w-7xl'>
                        <div className=" flex flex-col md:flex-row gap-16 py-10 rounded-2xl bg-transparent">
                            <div className="flex md:flex-1">
                                <img src={work1} alt="working on housing" width={1300} className="w-full md:h-full object-cover rounded-lg" />
                            </div>
    
                            <div className="md:w-1/2 space-y-2 text-gray-700 dark:text-gray-300">
                                <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                                    {job.title}
                                </h1>

                                
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
                                </div>
                                <div className='flex items-center'>
                                    <p>Posted at {job.created_at}</p>
                                </div>
                            </div>
                            </div>

                            <div className='grid grid-cols-2 gap-5'>
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
                        <p className="text-center text-gray-700 dark:text-gray-300">No job vacancies available.</p>
                    )
                )}
            </section>
        </div>

  )
}

export default JobDetails