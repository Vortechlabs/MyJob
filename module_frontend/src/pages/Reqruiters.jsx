import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../index.css'

function Reqruiters() {
  const [formData, setFormData] = useState({
    title: "",
    salary: "",
    company: "",
    address: "",
    job_category_id: "",
    description: "",    
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value}); 
};

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      /*if (!formData.title || !formData.salary || !formData.company || !formData.address || !formData.job_category_id || !formData.description) {
        Swal.fire("Add Failed", "Please fill in all required fields.", "error");
        return;
    }*/
      try{
          const response = await axios.post("http://127.0.0.1:8000/api/createjob", formData);

          if(response.data.success){
              console.log(response.data);
              Swal.fire("Add Successful", "You Can see your job now", "success");
          }else{
              Swal.fire("Add Failed", response.data.message, "error");
          }
      }catch(error){
          if (error.response){
              if (error.response.status === 422) {

                  const errors = error.response.data.data;
                  if (errors && typeof errors === 'object') {
                    Swal.fire("Add Failed", Object.values(errors).flat().join(", "), "error");
                } else {
                    Swal.fire("Add Failed", "An unexpected error occurred.", "error");
                }
              }else{
                  Swal.fire("Add Failed", error.response.data.message || "an unexpected error occurrated", "error");
              }
          }else{
              Swal.fire("Add failed", "An unexpected error occurred", "error");
          }
      }
  };

  return (
    <div>
      
      <h1>Job Information</h1>

      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-2 mt-5'>
        <div>
          <label htmlFor="title">Title</label> <br />
          <input type="text" name='title'  onChange={handleChange} className='rounded-lg text-sm text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div>
          <label htmlFor="salary">Salary</label> <br />
          <input type="number" name='salary' onChange={handleChange} className='rounded-lg text-sm text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div>
          <label htmlFor="company">Company</label> <br />
          <input type="text" name='company'  onChange={handleChange} className='rounded-lg text-sm text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div>
          <label htmlFor="address">Address</label> <br />
          <input type="text" name='address'  onChange={handleChange} className='rounded-lg text-sm text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div className='col-span-2'>
          <label htmlFor="job_category_id">Category</label> <br />
          <input type="text" name='job_category_id'  onChange={handleChange} className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600"'/>
        </div>
        <div className='col-span-2'>
          <label htmlFor="description">Description</label> <br />
          <textarea type="text" rows="4"  onChange={handleChange} name='description' className='  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600" placeholder="Write your thoughts here..."'/>
        </div>
        <div className=' col-span-2'>
          <button type="submit"  className='bg-indigo-600 w-full hover:ring-2 hover:ring-indigo-500 text-white'>Send job</button>
        </div>
      </form>
    </div>
  )
}

export default Reqruiters