import React, { useState }  from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
const [navbarOpen, setNavbarOpen] = useState(false);
    const [role, setRole] = useState('user');
//     const [showLogin, setLogin] = useState(false)
// <<<<<<< HEAD
//     const [resetKey, setResetKey] = useState(0);

//     const handleReset = () => {
//       setResetKey(prevKey => prevKey + 1);  // Changing the key prop will remount the ChildComponent
//     };
// =======
// >>>>>>> 25588e6702688fb3f957f51d9ccd4d3213a93110

    return (
      <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-tr from-blue-800 to-purple-700 i">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Wellness Tracking System
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-2" onClick={() => {setRole('admin');window.location.href = `/login/:${role}`;}}>Admin Login</div>
              </li>
              <li className="nav-item">
              <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-2" onClick={() => {setRole('user');window.location.href = `/login/:${role}`}}>User Login</div>
              </li>
              <li className="nav-item">
              <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-2" onClick={() => {setRole('coach');window.location.href =`/login/:${role}`}}>Fitness Professional Login</div>
            </li>
            </ul>
          </div>
          </div>
      </nav>
      {/* {showLogin &&<LoginForm role={role}/> } */}
      
    </>
    )
  }
  