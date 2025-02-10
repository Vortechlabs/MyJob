import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from 'react-router-dom';
import ListPlaceholder from './placeholder/ListPlaceholder';
import Swal from 'sweetalert2';

function JobCard() {
    const [jobVacancies, setJobVacancies] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const truncateText= (text, maxChars) => {
        return text.length > maxChars ? text.slice(0, maxChars) + '...' : text;
    };

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
        };
        return date.toLocaleString('id-ID', options); 
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

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:8000/api/v1/Jobs/${id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Failed to delete the job');
                }

                setJobVacancies(jobVacancies.filter(job => job.id !== id));
                Swal.fire('Deleted!', 'Your job has been deleted.', 'success');
            } catch (error) {
                console.error('Error deleting job:', error);
                Swal.fire('Error!', 'There was an error deleting the job.', 'error');
            }
        }
    };


    return (
        loading ? (
            <div className='grid gap-5'>
            <ListPlaceholder />
            <ListPlaceholder />
            <ListPlaceholder />
            <ListPlaceholder />
            <ListPlaceholder />
            <ListPlaceholder />
            <ListPlaceholder />
            <ListPlaceholder />
            </div>
        ) : (
            <div>
                    <Table striped>
                        <TableHead>
                            <TableHeadCell>Image</TableHeadCell>
                            <TableHeadCell>Title</TableHeadCell>
                            <TableHeadCell>Company</TableHeadCell>
                            <TableHeadCell>description</TableHeadCell>
                            <TableHeadCell>Category</TableHeadCell>
                            <TableHeadCell>Salary</TableHeadCell>
                            <TableHeadCell>Address</TableHeadCell>
                            <TableHeadCell>Created at</TableHeadCell>
                            <TableHeadCell>Action</TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y">
                            {jobVacancies.map(items => (
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={items.id}>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <img className="rounded-lg min-h-20 max-h-20 min-w-20 max-w-20 object-cover" src={`http://localhost:8000/fotocompany/${items.foto}`} alt={items.title} />
                                    </TableCell>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {truncateText(items.title || '', 10)}
                                    </TableCell>
                                    <TableCell>{truncateText(items.company || '', 10)}</TableCell>
                                    <TableCell>{truncateText(items.description || '', 20)}</TableCell>
                                    <TableCell>{truncateText(items.category?.job_category || '', 10)}</TableCell>
                                    <TableCell>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(items.salary)}</TableCell>
                                    <TableCell>{truncateText(items.address || '', 10)}</TableCell>
                                    <TableCell>{formatDateTime(items.created_at)}</TableCell>
                                    <TableCell>
                                        <Link to={`/UpdateJob/${items.id}`} className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">
                                            Edit
                                        </Link>
                                        <button 
                                            onClick={() => handleDelete(items.id)} 
                                            className="font-medium text-red-600 hover:underline dark:text-white ml-2 dark:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
        )
    );
}

export default JobCard;



