import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ContentCard from './ContentCard';
import FilterDropdown from '../components/FilterDropdown';
import SearchBar from '../components/SearchBar';
import Modal from '../components/Modal';


const FitnessProfessionalDashboard = () => {
    const [filteredContent, setFilteredContent] = useState([]);
    const [username, setUsername] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [modeFilter, setModeFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [ageFilter, setAgeFilter] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [contentType, setContentType] = useState('Home');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [contentMode, setContentMode] = useState('Video');
    const [fileUploadError, setFileUploadError] = useState('');

    const navigate = useNavigate();


    const handleUploadClick = () => {
        setShowModal(true);
    };

    const closeUploadModal = () => {
        setShowModal(false);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUploadSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData object to aggregate the form data
        let formData = new FormData();
        formData.append('type', contentType);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('instructor', username);
        formData.append('file', selectedFile);
        formData.append('mode', contentMode);


        try {
            const response = await fetch('http://localhost:3001/auth/content?', {
                method: 'POST',
                body: formData, // Send the FormData object
                // Don't set 'Content-Type' header when sending FormData
                // Fetch will automatically set the correct multipart header
            });

            if (response.ok) {
                console.log('Upload successful');
                closeUploadModal();
                fetchContentData();

                // Additional actions upon successful upload (e.g., clear form, display message)
            } else {
                console.error('Upload failed');
                setFileUploadError('Error Occurred while uploading..');
                // Handle errors (e.g., display error message)
            }
        } catch (error) {
            console.error('There was an error uploading the content', error);
            // Handle errors (e.g., display error message)
        }
    };


    useEffect(() => {
        const username = Cookies.get('user');
        if (!username) {
            navigate('/login/fitnessprofessional');// Redirect to login if not authenticated
            return;
        }
        setUsername(username)

    }, [])

    const fetchContentData = async () => {
        try {
            if (username) {
                const queryParams = new URLSearchParams({
                    search: searchTerm,
                    mode: modeFilter,
                    type: typeFilter,
                    age: ageFilter,
                    // sort: sortOrder, // Sorting order
                    instructor: username
                }).toString();

                const response = await fetch(`http://localhost:3001/auth/contents?${queryParams}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFilteredContent(data);
            }

        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {

        // Filter content based on the logged-in user and other filters
        // const userContent = contentData.filter(item => {
        //     return item.instructor === username &&
        //         (modeFilter ? item.mode === modeFilter : true) &&
        //         (typeFilter ? item.type === typeFilter : true) &&
        //         (ageFilter ? item.date.includes(ageFilter) : true) &&
        //         (searchTerm ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) : true);
        // });
        fetchContentData()

        // setFilteredContent(userContent);
    }, [username, searchTerm, modeFilter, typeFilter, ageFilter]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };





    return (
        <div className="container mx-auto p-4">
            <nav className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Content Library</h1>
                <button
                    onClick={handleUploadClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Upload
                </button>
                <Modal show={showModal} onClose={closeUploadModal}>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Upload Content</h3>

                    <form onSubmit={handleUploadSubmit}>
                        <div className="mb-4">
                            {fileUploadError && (
                                <div className="mb-4 text-sm text-red-600">
                                    {fileUploadError}
                                </div>
                            )}
                            <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 text-left">Content Mode</label>
                            <select
                                id="contentMode"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={contentMode}
                                onChange={e => setContentMode(e.target.value)}
                            >
                                <option value="Video">Video</option>
                                <option value="Article">Article</option>
                                <option value="Plan">Plan</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 text-left">Content Type</label>
                            <select
                                id="contentMode"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={contentType}
                                onChange={e => setContentType(e.target.value)}
                            >
                                <option value="Home">Home</option>
                                <option value="Gym">Gym</option>
                                <option value="Fitness Center">Fitness Center</option>
                                <option value="Outdoor">Outdoor</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 text-left">Title</label>
                            <input
                                type="text"
                                id="title"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 text-left">Description</label>
                            <textarea
                                id="description"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                required
                            />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">Upload File</label>
                            <input
                                type="file"
                                id="fileUpload"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                                onChange={handleFileChange}
                                accept="video/*,application/pdf,image/*"
                                required

                            />
                        </div>


                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Upload
                            </button>
                        </div>
                    </form>

                </Modal>
            </nav>
            <div className="mb-4">
                <SearchBar placeholder="Search Content..." onSearchChange={handleSearchChange} />
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
                <FilterDropdown
                    label="Mode:"
                    options={['All', 'Video', 'Plan', 'Article', 'Live Session']}
                    value={modeFilter}
                    onChange={(e) => setModeFilter(e.target.value)}
                />
                <FilterDropdown
                    label="Type:"
                    options={['All', 'Home', 'Gym', 'Fitness Center', 'Outdoor']}
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                />
                <FilterDropdown
                    label="Age:"
                    options={['All', '1 week', '1 month', '6 months', '1 year', 'Older']}
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredContent.map(content => (
                    <ContentCard key={content.id} content={content} />
                ))}
            </div>
        </div>
    );
};

export default FitnessProfessionalDashboard;
