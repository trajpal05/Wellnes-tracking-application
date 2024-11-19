import React, { useState } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';


export default function ResetPassword(props) {

  const {token} = useParams('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      setSuccessMessage('');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/reset-password', { token, password });
      if(response.status == 200) {
        setSuccessMessage('Password updated successfully');
        setErrorMessage('')
      }
    } catch (error) {
      console.log(error)
      setSuccessMessage('');
      setErrorMessage('Error resetting password.')
    }
  };

  return (
    <div className="h-screen flex">
      <div className="flex w-full justify-center items-center bg-gradient-to-tr from-blue-800 to-purple-700">
        <form className="bg-white flex-col rounded-sm mb-10 p-10" onSubmit={handleSubmit}>
        {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
        {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Reset Password</h1>
          
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input 
              className="pl-2 outline-none border-none w-full"
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="New Password" 
            />
          </div>
          
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input 
              className="pl-2 outline-none border-none w-full"
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="Confirm New Password" 
            />
          </div>
          
          <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Reset Password</button>
        </form>
      </div>
    </div>
  );
}
