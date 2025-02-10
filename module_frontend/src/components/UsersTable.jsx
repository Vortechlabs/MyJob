import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ListPlaceholder from './placeholder/ListPlaceholder';
import Swal from 'sweetalert2';

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetch("http://127.0.0.1:8000/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    
    handleDelete = (id) => {
        console.log('Attempting to delete user with ID:', id); 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://127.0.0.1:8000/api/v1/users/${id}`)
                    .then(response => {
                        console.log('User  deleted:', response.data);
                        this.setState(prevState => ({
                            users: prevState.users.filter(user => user.id !== id)
                        }));
                        Swal.fire(
                            'Deleted!',
                            'Your user has been deleted.',
                            'success'
                        );
                    })
                    .catch(error => {
                        console.error('There was an error deleting the user!', error);
                        if (error.response) {
                            console.error('Server responded with:', error.response.data);
                            console.error('Status code:', error.response.status);
                            console.error('Headers:', error.response.headers);
                        } else if (error.request) {
                            console.error('No response received:', error.request);
                        } else {
                            console.error('Error', error.message);
                        }
                        this.setState({ error: 'Failed to delete user. Please try again.' });
                        Swal.fire(
                            'Error!',
                            'There was an error deleting the user.',
                            'error'
                        );
                    });
            }
        });
    }
    render() {
        const { error, isLoaded, users } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div><ListPlaceholder /></div>;
        } else {
            return (
                <div>
                    <Table striped>
                        <TableHead>
                            <TableHeadCell>Name</TableHeadCell>
                            <TableHeadCell>Email</TableHeadCell>
                            <TableHeadCell>Join at</TableHeadCell>
                            <TableHeadCell>Updated at</TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Action</span>
                            </TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y">
                            {users.map(items => (
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={items.id}>
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {items.name}
                                    </TableCell>
                                    <TableCell>{items.email}</TableCell>
                                    <TableCell>{items.created_at}</TableCell>
                                    <TableCell>{items.updated_at}</TableCell>
                                    <TableCell>
                                        <Link to={`/UpdateUser/${items.id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            Edit
                                        </Link>
                                        <button 
                                            onClick={() => this.handleDelete(items.id)} 
                                            className="font-medium text-red-600 hover:underline dark:text-red-500 ml-2"
                                        >
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            );
        }
    }
}