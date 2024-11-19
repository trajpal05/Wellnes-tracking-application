import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function VerifyOTP() {
  const {email} = useParams('')
  const [otp, setOtp] = useState(''); // To store the OTP input by user
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();


  const handleSubmit = async(e) =>{
    try {
      e.preventDefault();
      let response = await axios.post('http://localhost:3001/auth/verify-code', { email, code: otp });
      if(response.status === 200){
        setSuccessMessage('Logging in...')
        setErrorMessage('');
        setTimeout(() => {
          // Fetch user type from local storage
          const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  
          if(userDetails.type === 'admin') {
            navigate('/dashboard/admin');
          }
          else if(userDetails.type === 'fitnesspro'){
            navigate('/dashboard/admin');
          }
          else {
            navigate('/dashboard');
          }
  
        }, 1500); // Wait 1.5 seconds to navigate so the user can read the message.
      }
      }
     catch (err) {
      setErrorMessage('Failed to verify OTP. Please try again.');
      setSuccessMessage('')
      console.log(err);
      
    }
  }


  return (
    <div className="h-screen flex">
      <div className="flex w-full justify-center items-center bg-gradient-to-tr from-blue-800 to-purple-700 i">
        <form className="bg-white flex-col rounded-sm mb-10 p-10" onSubmit={handleSubmit}>
          {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
          {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}

          <h1 className="text-gray-800 font-bold text-2xl mb-1">Verify OTP</h1>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input 
              className="pl-2 outline-none border-none" 
              type="text" 
              placeholder="Enter OTP" 
              onChange={(e) => setOtp(e.target.value)} 
              value={otp}
            />
          </div>
          <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Verify</button>
        </form>
      </div>
    </div>
  )
}
