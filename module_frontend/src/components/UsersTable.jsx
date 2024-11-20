import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        if (window.confirm("Are you sure you want to delete this user?")) {
            axios.delete(`http://127.0.0.1:8000/api/users/${id}`)
                .then(response => {
                  console.log('User deleted:', response.data);
                    this.setState(prevState => ({
                        users: prevState.users.filter(user => user.id !== id)
                    }));
                })
                .catch(error => {
                    console.error('There was an error deleting the user!', error);
                    this.setState({ error: 'Failed to delete user. Please try again.' });
                });
        }
    }

    render() {
        const { error, isLoaded, users } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
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