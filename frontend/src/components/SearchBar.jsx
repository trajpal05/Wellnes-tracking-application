import React from 'react';

const SearchBar = ({ placeholder, onChange }) => (
    <form onSubmit={(e) => e.preventDefault()} className="mb-6">
        <div class="block mb-6"></div>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19a8 8 0 100-16 8 8 0 000 16zm4-4l5 5" />
                </svg>
            </div>
            <input
                type="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                onChange={onChange}
                required
            />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
            </button>
        </div>
    </form>
);

export default SearchBar;
