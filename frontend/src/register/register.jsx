import React, { useState } from 'react';
import LoginForm from '../loginLayout/Loginform';
import axios from 'axios';
import { useHref, useNavigate } from 'react-router-dom'; // <-- Add useHistory



export default function RegisterForm() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 



  const navigateTo = useNavigate();

const onSubmit = async(e) => {
  try {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/auth/register', { email, firstname, lastname, password});
    
    if (response.status === 200) {
      setSuccessMessage('Registered successfully');
      setErrorMessage('');
      // Redirect to the login page after 3 seconds
      setTimeout(() => {
        navigateTo(`/login`)

      }, 3000);
    }
    
  } catch (err) {
    console.log(err);
      setErrorMessage("User with this email already exists");
      setSuccessMessage('');
  }   
}


 
  return (
    <>


<div className="h-screen flex">
  <div className="flex w-full justify-center items-center i ">
    <form className="bg-white flex-col rounded-sm mb-10 p-10" onSubmit={onSubmit}>
      {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
      {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Sign Up</h1>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input className="pl-2 outline-none border-none" type="email" name="" id="email" placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <input className="pl-2 outline-none border-none" type="text" name="" id="firstname" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}} value={firstname}/>
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <input className="pl-2 outline-none border-none" type="text" name="" id="lastname" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}} value={lastname}/>
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        <input className="pl-2 outline-none border-none" type="password" name="" id="password" placeholder="Enter New Password"  onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" onChange={(e)=>{setRetypePassword(e.target.value)}} value={retypePassword}/>
        </svg>
        <input className="pl-2 outline-none border-none" type="password" name="" id="password" placeholder="Re-Enter Password" />
      </div>

      <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" >Sign Up</button>
      <div onClick={() => window.location.href = '/' } className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Already a User? Login
          </div>
    </form>

  </div>
</div>
  </>
  )
}