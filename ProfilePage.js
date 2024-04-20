import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

        const ProfilePage = () => {

          const navigate = useNavigate();
          const [image, setImage] = useState(null);
          const [location, setLocation] = useState('');
        
          // Function to handle file input change
          const handleFileChange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
           
            reader.onloadend = () => {
              setImage(reader.result);
            };
        
            if (file) {
              reader.readAsDataURL(file);
            }
          };
        
          const handleSubmit = async (e) => {
            e.preventDefault(); // Prevent default form submission
        
            try {
              console.log(image);
              // Send image and location data to the backend
              const formData = new FormData();
              formData.append('image', image); // Append the image data to the form data
              formData.append('location', location); // Append the location to the form data
        
              // Send the form data to the backend using Axios
              const response = await axios.post('http://localhost:9002/profile', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data', // Set the content type for FormData
                },
              });
        
              console.log(response.data); // Log the response from the backend
              alert('Profile data saved successfully');
             
              navigate('/SimpleCard'); // Navigate to the next page
            } catch (error) {
              console.error('Error saving profile:', error);
              alert('Error saving profile data');
            }
          };
            return (

            <div className="lg:flex lg:flex-row ">
              <div className="hidden lg:pr-10 lg:mr-10 lg:block">
                <img src="https://cdn.dribbble.com/users/1555712/screenshots/5359537/untitled-1_teaser.gif" alt="Profile"
                 className="" />
              </div>

              <div className="text-center">
                <p className="text-2xl mt-5 pt-5 lg:ml-10 lg:pl-10 lg:pt-10 lg:mt-10 lg:pl-10 lg:text-5xl font-bold mb-4">
                    Welcome! Let's create your profile</p>

                <p className="text-xl text-gray-600 mb-4">
                    Let others get to know you better! You can do this later.</p>

                <p className="text-xl lg:text-3xl lg:pl-10 lg:ml-10 lg:pt-5 lg:mt-5 lg:text-left font-bold mb-4" >
                    Add an Avatar</p>

                   
                <div className="lg:flex lg:flex-row lg:text-right lg:pt-0 lg:mt-0 lg:mb-4 lg:ml-10 lg:pl-10">
                  <div className="lg:w-40 lg:h-40 lg:mt-0 lg:pt-0 lg:border-2 lg:border-dashed lg:border-gray-400 
                  lg:rounded-full lg:flex lg:items-center lg:justify-center">
                   
                    {image ? (<img src={image} className="lg:w-full lg:h-full lg:rounded-full lg:object-cover" alt="Avatar" />):(
                         <div className="lg:text-gray-400">
                         <p><FontAwesomeIcon icon={faCamera} fontSize='30px'/></p>
                         </div>
                    )}
                  </div>
                 
                 <div className="lg:flex flex-col">
                  <input onChange={handleFileChange} 
                  type="file" id="avatar" className="mt-5 ml-10 lg:mt-2 lg:pt-2 lg:ml-10 lg:pl-10 lg:mb-0" />
                  <p className="mt-5 lg:text-gray-500  lg:mr-10 lg:pr-10 lg:mt-4 lg:cursor-pointer lg:mb-4" >&gt; Or choose one of our defaults</p>
                  </div>
                </div>
                <div className="mt-5 lg:flex lg:flex-col">
                <p className="lg:text-2xl lg:pl-10 lg:ml-10 lg:mt-8 lg:text-left text-black font-bold mb-4">Add your location</p>

        
                 <div className="lg:text-center lg:mr-10 lg:pr-2" >
                <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)}
                className="text-center lg:text-left lg:pr-10 lg:mr-10 lg:mb-7 lg:border-b lg:border-gray-300 lg:w-3/4 lg:py-2"
                placeholder="Enter a location" />
                </div>
                </div>
                <div className="mt-2 lg:text-left lg:pl-10 lg:ml-10">
                <button onClick={handleSubmit}  className="bg-pink-500 text-white px-6 py-2 rounded-md">Next</button> 
                </div>
              </div>
              
            </div>
          );
        };
        
        export default ProfilePage;
        