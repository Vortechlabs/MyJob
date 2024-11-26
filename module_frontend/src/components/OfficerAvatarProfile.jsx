import React from "react";
import { Avatar, Dropdown } from "flowbite-react";
import { useAuth } from "./AuthContext";
import jobnav from "../assets/images/jobnav.jpeg";
import { Link } from "react-router-dom"; 

export function UserAvatarProfile() {
  const { userData, logout } = useAuth(); 

  const handleLogout = () => {
    console.log("Logout button clicked"); 
    logout(); 
  };

  return (
    <Dropdown
      label={
        <Avatar rounded img={jobnav}/>
      }
      arrowIcon={false}
      style={{ backgroundColor: 'transparent', padding: '0' }}
    >
      <Dropdown.Header>
        <span className="block text-sm">{userData.name}</span>
        <span className="block truncate text-sm font-medium">
          {userData.validators.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item style={{ backgroundColor: 'transparent'}}>
      <Link to="/AdminPanel">Dashboard</Link>
      </Dropdown.Item>
      <Dropdown.Item style={{ backgroundColor: 'transparent'}}>
        <Link to="/UserProfile">Settings</Link>
      </Dropdown.Item>
      <Dropdown.Item style={{ backgroundColor: 'transparent'}}>My Job Apply</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item style={{ backgroundColor: 'transparent'}} onClick={handleLogout}> Sign out</Dropdown.Item>
    </Dropdown>
  );
}