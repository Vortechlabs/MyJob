import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../index.css';
import Spinner from '../components/Spinner';

function Reqruiters() {
  const [formData, setFormData] = useState({
    foto: "",
    salary: "",
    company: "",
    address: "",
    job_category_id: "",
    description: "",
    position: "",
    capacity: "",
  });

  const [jobCategories, setJobCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchJobCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/JobCategories");
        console.log(response.data);

        if (response.data && response.data.success) {
          setJobCategories(response.data.data);
        } else {
          console.error("Failed to fetch job categories:", response.data.message || "No success property found");
        }
      } catch (error) {
        console.error("Error fetching job categories:", error.response ? error.response.data : error.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'foto' && files.length > 0) {
      const file = files[0];
      setFormData({ ...formData, [name]: file });

      // Create a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.salary || !formData.company || !formData.address || !formData.job_category_id || !formData.description || !formData.position || !formData.capacity) {
      Swal.fire("Add Failed", "Please fill in all required fields.", "error");
      return;
    }
    const data = new FormData();
    data.append('foto', formData.foto);
    data.append('salary', formData.salary);
    data.append('company', formData.company);
    data.append('address', formData.address);
    data.append('job_category_id', formData.job_category_id);
    data.append('description', formData.description);
    data.append('position', formData.position);
    data.append('capacity', formData.capacity);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/createjob", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.success) {
        console.log(response.data);
        Swal.fire("Add Successful", "You Can see your job now", "success");
        window.location.reload();
      } else {
        Swal.fire("Add Failed", response.data.message, "error");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          const errors = error.response.data.data;
          if (errors && typeof errors === 'object') {
            Swal.fire("Add Failed", Object.values(errors).flat().join(", "), "error");
          } else {
            Swal.fire("Add Failed", "An unexpected error occurred.", "error");
          }
        } else {
          Swal.fire("Add Failed", error.response.data.message || "An unexpected error occurred", "error");
        }
      } else {
        Swal.fire("Add failed", "An unexpected error occurred", "error");
      }
    }
  };

  return (
    <main>
    {loading ? (
      <div className='py-64'>
        <Spinner/>
      </div> 
    ) : (
      <div className='px-5'>
        <h1>Job Information</h1>

        <form onSubmit={handleSubmit} className='grid lg:grid-cols-2 gap-2 mt-5'>
          <div>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
              Image
            </label>
            <div className='relative'>
              <label
                htmlFor='foto'
                className='flex min-h-64 w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-primary p-6'
              >
                <div>
                <input type='file' name='foto' id='foto' className='sr-only' onChange={handleChange} accept="image/*" />
                  <span className='mx-auto mb-3 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M2.5013 11.666C2.96154 11.666 3.33464 12.0391 3.33464 12.4993V15.8327C3.33464 16.0537 3.42243 16.2657 3.57871 16.4219C3.73499 16.5782 3.94695 16.666 4.16797 16.666H15.8346C16.0556 16.666 16.2676 16.5782 16.4239 16.4219C16.5802 16.2657 16.668 16.0537 16.668 15.8327V12.4993C16.668 12.0391 17.0411 11.666 17.5013 11.666C17.9615 11.666 18.3346 12.0391 18.3346 12.4993V15.8327C18.3346 16.4957 18.0712 17.1316 17.6024 17.6004C17.1336 18.0693 16.4977 18.3327 15.8346 18.3327H4.16797C3.50493 18.3327 2.86904 18.0693 2.4002 17.6004C1.93136 17.1316 1.66797 16.4957 1.66797 15.8327V12.4993C1.66797 12.0391 2.04106 11.666 2.5013 11.666Z'
                        fill='#3056D3'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.41074 1.91009C9.73618 1.58466 10.2638 1.58466 10.5893 1.91009L14.7559 6.07676C15.0814 6.4022 15.0814 6.92984 14.7559 7.25527C14.4305 7.58071 13.9028 7.58071 13.5774 7.25527L10 3.67786L6.42259 7.25527C6.09715 7.58071 5.56951 7.58071 5.24408 7.25527C4.91864 6.92984 4.91864 6.4022 5.24408 6.07676L9.41074 1.91009Z'
                        fill='#3056D3'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M10.0013 1.66602C10.4615 1.66602 10.8346 2.03911 10.8346 2.49935V12.4994C10.8346 12.9596 10.4615 13.3327 10.0013 13.3327C9.54106 13.3327 9.16797 12.9596 9.16797 12.4994V2.49935C9.16797 2.03911 9.54106 1.66602 10.0013 1.66602Z'
                        fill='#3056D3'
                      ></path>
                    </svg>
                  </span>
                  <span className='text-base text-body-color dark:text-dark-6'>
                  Drag &amp; drop or
                    <span className='text-primary underline'> browse </span>
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
              Preview
            </label>
            <div className='relative'>
              {imagePreview ? (
                <div >
                  <img src={imagePreview} alt="Image Preview" className="w-full max-h-64 object-cover h-auto rounded-md border border-gray-300" />
                </div>
              ) : (
                <div className=" flex items-center justify-center min-h-64 w-full border border-dashed border-gray-400 rounded-md">
                  <span className="text-gray-500">No Preview Available</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="position">Position</label> <br />
            <input type="text" name='position' onChange={handleChange} placeholder='ex: Event Planner Manager (Mandarin Speaker)' className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600' />
          </div>
          <div>
            <label htmlFor="capacity">Capacity</label> <br />
            <input type="number" name='capacity' placeholder='ex: 25' onChange={handleChange} className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600' />
          </div>
          <div>
            <label htmlFor="salary">Salary</label> <br />
            <input type="number" name='salary' onChange={handleChange} placeholder='ex: 6000000' className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600' />
          </div>
          <div>
            <label htmlFor="company">Company</label> <br />
            <input type="text" name='company' onChange={handleChange}  placeholder='CV. Berkah Abadi' className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600' />
          </div>
          <div>
            <label htmlFor="address">Address</label> <br />
            <input type="text" name='address' placeholder='ex: Purbalingga, Jawa Tengah' onChange={handleChange} className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600' />
          </div>
          <div>
            <label htmlFor="job_category_id">Category</label> <br />
            <select name='job_category_id' onChange={handleChange} className='rounded-lg text-sm w-full text-gray-900 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600'>
              <option value="">Select a category</option>
              {jobCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.job_category}
                </option>
              ))}
            </select>
          </div>
          <div className='col-span-2'>
            <label htmlFor="description">Description</label> <br />
            <textarea type="text" rows="4" onChange={handleChange} name='description' className='p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600' placeholder="Write your job description here..." />
          </div>
          <div className='col-span-2'>
            <button type="submit" className='bg-indigo-600 w-full hover:ring-2 hover:ring-indigo-500 text-white'>Send job</button>
          </div>
        </form>
      </div>
      )}
    </main>
  );
}

export default Reqruiters;