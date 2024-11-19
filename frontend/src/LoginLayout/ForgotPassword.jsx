import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); 


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/auth/forget-password', { email });
            
            if (response.status === 200) {
                setSuccessMessage('Password reset link has been sent to your email address.');
                setErrorMessage('')
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage('Error sending password reset link.');
            setSuccessMessage('')
        }
    }

    return (
        <div className="h-screen flex">
            <div className="flex w-full justify-center items-center bg-gradient-to-tr from-blue-800 to-purple-700 i ">
                {/* {!isSubmitted ? ( */}

                    <form className="bg-white flex-col rounded-sm mb-10 p-10" onSubmit={handleSubmit}>
                        {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}
                        {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Forgot Password</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">Please enter your email to receive a password reset link.</p>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input 
                                className="pl-2 outline-none border-none" 
                                type="email" 
                                placeholder="Email Address" 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email}
                                required
                            />
                        </div>

                        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Send Reset Link</button>
                        
                        {/* {message && <div className="mt-4 text-red-500">{message}</div>} */}
                    </form>
                ) 
               
            </div>
        </div>
    );
}

export default ForgotPassword;
