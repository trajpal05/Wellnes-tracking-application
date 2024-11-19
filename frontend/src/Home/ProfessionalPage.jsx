import React, { useState } from 'react';
import { professionalsData } from './ProfessionalData';
import SearchBar from '../components/SearchBar';
import ProfessionalCard from '../components/ProfessionalCard';
import FilterDropdown from '../components/FilterDropdown';

const ProfessionalPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [specialtyFilter, setSpecialtyFilter] = useState('');
    const [experienceFilter, setExperienceFilter] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProfessionals = professionalsData.filter((professional) => {
            return (
                (genderFilter ? professional.gender === genderFilter : true) &&
                (locationFilter ? professional.location === locationFilter : true) &&
                (specialtyFilter ? professional.specialty === specialtyFilter : true) &&
                (experienceFilter ? professional.experience === experienceFilter : true) &&
                (searchTerm ? professional.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || professional.lastName.toLowerCase().includes(searchTerm.toLowerCase()) : true)
            );
        });;
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap items-center justify-start gap-4 mb-4">
                {/* Filters */}
                <FilterDropdown
                    label="Gender:"
                    options={['Male', 'Female', 'Non-Binary']}
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                />
                <FilterDropdown
                    label="Specialty:"
                    options={["Yoga", "Weight Training", "Cardio", "Pilates", "Crossfit", "Dance", "Martial Arts"]}
                    value={specialtyFilter}
                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                />
                <FilterDropdown
                    label="Experience:"
                    options={["1 year", "2 years", "5 years", "10 years", "3 years", "4 years", "6 years", "7 years", "8 years", "9 years"]}
                    value={experienceFilter}
                    onChange={(e) => setExperienceFilter(e.target.value)}
                />
                <FilterDropdown
                    label="Location:"
                    options={["New York", "California", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio"]}
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                />


                {/* Search Bar */}
                <div className="flex-grow ml-4">
                    <SearchBar placeholder="Search..." onChange={handleSearchChange} />
                </div>
            </div>

            <h2 className="text-xl font-bold mt-6 mb-4">Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProfessionals.map((professional) => (
                    <ProfessionalCard key={professional.id} professional={professional} />
                ))}
            </div>

        </div>
    );
};

export default ProfessionalPage;
