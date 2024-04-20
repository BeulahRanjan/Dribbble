import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";


const SimpleCard = () => {
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardSelect = (index) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter((item) => item !== index));
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };
  
  const load = () =>{
    navigate("/SimpleEmail");
  }
  return (
    <div className="lg:flex lg:flex-row">
<div className="hidden lg:text-left lg:block">
        <img src="https://cdn.dribbble.com/users/1555712/screenshots/5359537/untitled-1_teaser.gif" alt="Profile"/>
          </div>

    <div className="lg:bg-white lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen ">
      <h2 className="text-center text-3xl lg:text-5xl font-bold ">What brings you to Dribbble?</h2>
      <p className="text-center text-xl mt-5 pt-5 lg:pb-5 lg:text-sm text-gray-500 lg:mb-10">Select the options that best describe you. Don't worry, you can explore other options later.</p>

      <div className='lg:flex gap-10 lg:mb-10'>
        <Card className={`border rounded-md text-center mt-6 w-96
         ${selectedCards.includes(0) ? 'border-pink-500' : ''}`}>
          <CardBody>
            <img className="m-5" src="/Images/pic1.png" alt="Pic 1"/>
            <Typography variant="h5" color="blue-gray" className="lg:font-bold lg:mb-1">
              I'm a designer looking to share my work
            </Typography>
            <input
              type="checkbox"
              checked={selectedCards.includes(0)}
              onChange={() => handleCardSelect(0)}
              className="lg:mb-4"
            />
          </CardBody>
        </Card>
        <Card className={`border rounded-md text-center mt-6 w-96 ${selectedCards.includes(1) ? ' border-pink-500' : ''}`}>
          <CardBody>
            <img className='m-3' src="/Images/pic2.png" alt="Pic 2"/>
            <Typography variant="h5" color="blue-gray" className="lg:pt-3 lg:pl-3 lg:pr-3 lg:font-bold lg:mb-1">
              I'm looking to hire a designer
            </Typography>
            <input
              type="checkbox"
              checked={selectedCards.includes(1)}
              onChange={() => handleCardSelect(1)}
              className="lg:mb-4"
            />
          </CardBody>
        </Card>
        <Card className={`border rounded-md text-center mt-6 w-96 ${selectedCards.includes(2) ? 'border-pink-500' : ''}`}>
          <CardBody>
            <img className='m-3' src="/Images/pic3.png" alt="Pic 3"/>
            <Typography variant="h5" color="blue-gray" className="lg:font-bold lg:mb-1 lg:pt-3 lg:pl-3 lg:pr-3">
              I'm looking for design inspiration
            </Typography>
            <input
              type="checkbox"
              checked={selectedCards.includes(2)}
              onChange={() => handleCardSelect(2)}
              className="lg:mb-4"
            />
          </CardBody>
        </Card>
      </div>

      {/* Additional Text */}
      {selectedCards.length > 0 && (
        <p className="text-xl font-bold text-black-500 mb-2">Anything else? You can select multiple</p>
      )}

      {/* Finish Button */}
      <div className="text-center lg:text-left">
      <button onClick={load} className="w-40 mt-5 bg-pink-500 text-white px-6 py-3 rounded-md">Finish</button></div>

      {selectedCards.length > 0 && (
        <div className="text-gray-500 mt-3 ">or Press RETURN</div>
      )}

   
    </div>
    </div>
  );
};

export default SimpleCard;