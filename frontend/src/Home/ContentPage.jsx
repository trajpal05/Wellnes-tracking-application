import React, { useState, useEffect } from 'react';
import ContentCard from './ContentCard';
import FilterDropdown from '../components/FilterDropdown';
import SearchBar from '../components/SearchBar';
import contentData from './ContentData'; // Adjust the path according to your file structure

const ContentPage = () => {
    const [filteredContent, setFilteredContent] = useState(contentData);
    const [searchTerm, setSearchTerm] = useState('');
    const [modeFilter, setModeFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [ageFilter, setAgeFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('desc'); // 'asc' for ascending, 'desc' for descending

    const fetchContentData = async () => {
        try {
            const queryParams = new URLSearchParams({
                search: searchTerm,
                mode: modeFilter,
                type: typeFilter,
                age: ageFilter,
                sort: sortOrder // Sorting order
            }).toString();

            const response = await fetch(`http://localhost:3001/auth/contents?${queryParams}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setFilteredContent(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };


    useEffect(() => {
        fetchContentData();
    }, [searchTerm, modeFilter, typeFilter, ageFilter, sortOrder]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Content Library</h1>
            {/* Filters and Search Bar */}
            <div className="flex flex-wrap items-center justify-start gap-4 mb-4">
                <FilterDropdown
                    label="Mode:"
                    options={['Video', 'Plan', 'Article', 'Live Session']}
                    value={modeFilter}
                    onChange={(e) => setModeFilter(e.target.value)}
                />
                <FilterDropdown
                    label="Type:"
                    options={['Home', 'Gym', 'Fitness Center', 'Outdoor']}
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                />
                <FilterDropdown
                    label="Age:"
                    options={['1 week', '1 month', '6 months', '1 year', 'Older']}
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                />
                <div className="flex-grow ml-4">
                    <SearchBar placeholder="Search..." onChange={handleSearchChange} />
                </div>            </div>
            {/* Sort Button */}
            <div className="text-right mb-4">
                <button onClick={toggleSortOrder} className="bg-blue-500 text-white px-4 py-2 rounded shadow">
                    Sort by Date: {sortOrder === 'asc' ? 'Oldest First' : 'Newest First'}
                </button>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredContent.map(content => (
                    <ContentCard key={content.id} content={content} />
                ))}
            </div>
        </div>
    );
};

export default ContentPage;
