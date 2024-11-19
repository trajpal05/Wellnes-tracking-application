import React, { useState } from 'react';
import { professionalsData } from './ProfessionalData'; // Adjust the path according to your file structure
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const professional = professionalsData.find(prof => prof.username === username && prof.password === password);

        if (professional) {
            Cookies.set('user', professional.firstName + ' ' + professional.lastName, { expires: 1 }); // Expires in 1 day
            console.log('Login successful:', professional);
            navigate('/dashboard/fitnessprofessional'); // Redirect to content page

            // Redirect or set user session
        } else {
            setLoginError('Invalid credentials');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full bg-white rounded p-6 shadow-2xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Professional Login</h2>

                {loginError && <p className="text-red-500 text-center mb-4">{loginError}</p>} {/* Error message */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Username</label>
                        <input
                            type="username"
                            id="username"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
