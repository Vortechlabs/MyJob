import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/login", formData);
          console.log(response.data);
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
      }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleChange} />
            <input type="password" name="password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;