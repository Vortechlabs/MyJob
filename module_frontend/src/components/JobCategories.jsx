import React, { useEffect, useState } from 'react'
import services from '../assets/images/services.jpeg'
import CardPlaceholder from './placeholder/CardPlaceholder';

function JobCategories() {
    const [jobCategory, setJobCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    const truncateString = (str, num) => {
        if (!str) return 'no';
        return str.length > num ? str.slice(0, num) + '...' : str;
        }

    useEffect(() => {
        const fetchJobCategory = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/JobCategories');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data); 
                if (data && Array.isArray(data.data)) {
                    setJobCategory(data.data);
                } else {
                    setJobCategory([]); 
                }
            } catch (error) {
                console.error("Error fetching job category:", error);
                setJobCategory([]); 
            } finally {
                setLoading(false); // Set loading to false after fetch completes
            }
        };
    
        fetchJobCategory();
    }, []);
  return (
    loading ? (
        <CardPlaceholder />
    ) : (
        <div>
                    <div>
                      <h1 className='text-center text-3xl font-medium'>Browse by category</h1>
                      <p className='text-center'>Find the job that's perfect for you. about 500+ ne jobs everyday.</p>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-5 pt-5'>
            
                    {jobCategory.map(job => (
                      <div key={job.id}>
                        <div className="flex items-center gap-4 bg-white  text-black rounded-lg">
                          
                          <img src={services} alt="avatar" className='rounded-s-lg ring-gray-400 h-24 w-24 object-cover'/>
                          <div >
                            <h6 >{truncateString(job.job_category, 20)}</h6>
                            <p className="font-normal text-xs ">
                              33+ available
                            </p>
                          </div>
                        </div>
                        </div>
                    ))}
    
                    </div>
        </div>
    )
  )
}

export default JobCategories