import React, { useEffect, useState } from 'react';
import ProfessionalCard from './ProfessionalCard'; // Make sure the path is correct.

function SearchProfessionals() {
    const [name, setName] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [professionals, setProfessionals] = useState([]);
  
    useEffect(() => {
      // Fetch data logic...
    }, []);
  
    const handleSearch = () => {
        // Constructing the query parameters
        let queryParams = new URLSearchParams();
      
        if (name) queryParams.append('firstname', name);
        if (speciality) queryParams.append('specialitytype', speciality);
        if (gender) queryParams.append('gender', gender);
        if (location) queryParams.append('location', location);
      
        // Call the backend API with the constructed query parameters
        fetch(`http://localhost:3001/auth/search-fitness-professional?${queryParams.toString()}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setProfessionals(data.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };
      
    
    return (
        <div className="h-screen flex flex-col bg-gradient-to-tr from-blue-800 to-purple-700">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Name"
                className="p-2 border rounded-l"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button onClick={handleSearch} className="bg-white px-2 rounded-r">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path fill="currentColor" d="M10 2a8 8 0 016.917 11.18l4.186 4.186a1 1 0 01-1.414 1.414l-4.185-4.186A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z"/>
              </svg>
            </button>
            </div>
            
            <div className="flex">
              <select 
                className="p-2 border rounded-l"
                value={speciality} 
                onChange={(e) => setSpeciality(e.target.value)}
              >
                <option value="">Speciality</option>
                <option value="yoga">Yoga</option>
                <option value="zumba">Zumba</option>
                <option value="weight training">Weight Training</option>
              </select>
              <button onClick={handleSearch} className="bg-white px-2 rounded-r">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path fill="currentColor" d="M10 2a8 8 0 016.917 11.18l4.186 4.186a1 1 0 01-1.414 1.414l-4.185-4.186A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z"/>
              </svg>
            </button>
  
            </div>
  
            <div className="flex">
              <select 
                className="p-2 border rounded-l"
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <button onClick={handleSearch} className="bg-white px-2 rounded-r">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path fill="currentColor" d="M10 2a8 8 0 016.917 11.18l4.186 4.186a1 1 0 01-1.414 1.414l-4.185-4.186A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z"/>
              </svg>
            </button>
            </div>
  
            <div className="flex">
              <input 
                type="text" 
                placeholder="Location" 
                className="p-2 border rounded-l"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button onClick={handleSearch} className="bg-white px-2 rounded-r">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path fill="currentColor" d="M10 2a8 8 0 016.917 11.18l4.186 4.186a1 1 0 01-1.414 1.414l-4.185-4.186A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z"/>
              </svg>
            </button>
            </div>
          </div>
        </div>
  
        <div className="flex-grow flex flex-wrap justify-center items-start">
          {professionals.map(professional => (
            <ProfessionalCard key={professional._id} professional={professional} />
          ))}
        </div>
    </div>
  
    );
  }
  
  export default SearchProfessionals;