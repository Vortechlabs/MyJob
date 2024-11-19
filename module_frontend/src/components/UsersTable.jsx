import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

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
        )
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
                  <span className="sr-only">Edit</span>
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
                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Edit
                    </a>
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