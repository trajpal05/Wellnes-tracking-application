import React, { useState } from 'react';
import axios from 'axios';
import RegisterForm from '../register/register';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LoginForm() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Added error state

  

  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = async(e) =>{
    try {
      e.preventDefault();
      let response = await axios.post('http://localhost:3001/auth/login', { email, password });
      if(response.status === 200){
        console.log(response)
        const userDeets = {
          firstname: response.data.userDetails.firstname,
          lastname: response.data.userDetails.lastname,
          email: response.data.userDetails.email,
          type: response.data.userDetails.type
      };
      
      localStorage.setItem('userDetails', JSON.stringify(userDeets));
        // setMessage('Logged in Succesfully');
        navigate(`/verifyotp/${email}`);
      } else {
      }
      }
     catch (err) {
      setErrorMessage('Invalid credentials');
      console.log(err)
      
    }
  }

  return (
    <>
<div class="h-screen flex">
<div class="flex w-full justify-center items-center ">
{!showRegister ? (

    <form class="bg-white flex-col rounded-sm mb-10 p-10" onSubmit={handleSubmit}>
      {errorMessage && <div className="text-red-500 mt-2 mb-2">{errorMessage}</div>}
      <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello User!</h1>
      <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back!!!</p>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>      
        <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address"  onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        <input className="pl-2 outline-none border-none" type="password" name="" id="" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
      </div>
      <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
      <Link to={`/forgotpassword`} className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
    Forgot Password?
</Link>
      <div onClick={() => setShowRegister(true)} className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            New User? Register
          </div>
    </form>
):(<RegisterForm />)}
      
  </div>
</div>
  </>
  )
}
