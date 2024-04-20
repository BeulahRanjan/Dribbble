import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from './UserContext';

function Sample() {
  const {setUserData} = useContext(UserContext);
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox status

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value)
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }


  const handleonSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const { name, username, email, password } = user;
      if (name && username && email && password && isChecked) {
        const response = await axios.post('http://localhost:9002/signup', user);
        if (response.status === 201) {
          // Assuming the server sends back a message like { message: 'User registered successfully.' }
          console.log(response.data.user); // Log the response data
          setUserData(response.data.user);
          alert('Registration Successful');
          navigate("/ProfilePage"); // Navigate to the next page
        } else {
          console.log('Unexpected response status:', response.status);
          alert('Registration Failed: Unexpected response status');
        }
      } else {
        alert('Invalid details');
      }
    } catch (error) {
      if (error.response) {
        console.log('Error registering user:', error.response.data.error);
        alert('Registration Failed: ' + error.response.data.error);
      } else {
        console.log('Error:', error.message);
        alert('Registration Failed: ' + error.message);
      }
    }
  };
  return (
    
    <div className='p-2 lg:flex lg:flex-row '>
      <div className="lg:w-1/2 lg:m-0 lg:p-0">
        <img src="/Images/img.jpg" alt="Logo" className="hidden lg:h-screen lg:block " />
      </div>

    <div className="lg:w-1/2 lg:flex  lg:mr-0 lg:pt-0 ">
      <div>
      <p className="text-right m-2">Already a member?<span className="text-blue-400">Sign in</span> </p>
        <h2 className="text-2xl lg:text-4xl font-bold mt-10 pl-5 mb-10 w-full">Sign up to Dribbble</h2>
        <div className="lg:flex lg:flex-row">
        <div className="mr-5 mb-4">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input required type="text" id="name" name="name" value={user.name} onChange={handleChange} 
          className="w-full px-10 bg-gray-300 py-2 border rounded-md" />
        </div> 
        <div className="mr-5 lg:ml-2 mb-4">
          <label htmlFor="username" className="block mb-1">Username</label>
          <input required type="text" id="username" name="username" value={user.username} onChange={handleChange} 
           className="w-full px-10 bg-gray-300 py-2 border rounded-md" />
        </div>
        </div>
        <div className="mr-5 mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input required type="email" id="email" name="email" value={user.email} onChange={handleChange}
          className="w-full lg:w-3/4 px-10 bg-gray-300 py-2 border rounded-md" />
        </div>
        <div className="mr-5 mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input required type="password" id="password" name="password" value={user.password} onChange={handleChange}
          className="w-full lg:w-3/4 bg-gray-300 px-10 py-2 border rounded-md" />
        </div>
        <br/>
        <div className="mb-4 lg:flex">
          <input required type="checkbox" checked={isChecked} onChange={handleCheckboxChange} id="agree" className="mr-2" />
          <label htmlFor="terms" className='mt-4 lg:w-3/4'>Creating an account means you're okay with our
           <span className='text-blue-400'>Terms of Service </span><span className='text-blue-400'>Privacy Policy </span> and our default 
           <span className='text-blue-400'> Notifications Settings</span></label>
        </div>
        <div>
        <button type="submit" onClick={handleonSubmit}  className="bg-pink-500 text-white px-6 py-3 rounded-md mb-4">Create Account</button></div>
        
        <p className="mt-2 text-sm lg:w-3/4">This site is protected by reCAPTCHA and the Google and <span className='text-blue-400'>Privacy Policy</span>
         and <span className='text-blue-400'>Terms of Services</span> only.</p>
      </div>
    </div>
    </div>

  );
}

export default Sample;