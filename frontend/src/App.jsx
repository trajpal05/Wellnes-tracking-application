import './App.css'

import React from "react";
import {Routes, Route,Link} from "react-router-dom"

import NavBar from './Navbar/Navbar';
import Home from './Home/index';
import RegisterForm from './register/register';
import LoginForm from './loginLayout/Loginform';
import ForgotPassword from './LoginLayout/ForgotPassword';
import VerifyOTP from './LoginLayout/VerifyOtp';
import Dashboard from './Home/Dashboard';
import ResetPassword from './LoginLayout/ResetPassword';
import SearchProfessionals from './Home/SearchProffesionals';
import WorkoutPlan from './Home/WorkoutPlan';
import AdminDashboard from './Home/AdminDashboard';
import FitnessProfessionalLogin from './Home/FitnessProfessionalLogin';
import FitnessProfessionalDashboard from './Home/FitnessProfessionalDashboard';

export default function App() {
  const [showHome, setShowHome] = React.useState(true);
  return (
    <>
    
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<LoginForm/>} exact/>
          <Route path="/login/fitnessprofessional" element={<FitnessProfessionalLogin/>} exact/>
          <Route path='/forgotpassword/' element={<ForgotPassword/>} exact/>
          <Route path='/verifyotp/:email' element={<VerifyOTP/>} exact/>
          <Route path='/reset-password/:token' element={<ResetPassword />} exact/>
          <Route path='/dashboard/*' element={<Dashboard/>} exact/>
          <Route Route path="/dashboard/SearchProfessionals" element={<SearchProfessionals />} exact />
          <Route path="/dashboard/workoutplan" element={<WorkoutPlan />} exact />
          <Route path="/dashboard/admin" element={<AdminDashboard/>} exact/>
          <Route path ="/dashboard/fitnessprofessional" element={<FitnessProfessionalDashboard/>} exact/>
      </Routes>
    </>
  );
}
