import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../loginLayout/Loginform";

export default function Home({ fixed }) {
    return (
        <>
            <div className="h-screen bg-gradient-to-tr from-blue-800 to-purple-700 flex flex-col justify-center items-center">
                
                <h1 className="text-white font-bold text-4xl font-sans mb-10">Wellness Tracking System</h1>
                    <LoginForm />
            </div>
        </>
    );
}
