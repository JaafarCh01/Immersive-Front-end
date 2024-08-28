import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const CourseFilters = ({ onFilterChange }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = async (e) => {
    const { name, value } = e.target;
    setIsLoading(true);
    await onFilterChange({ [name]: name === 'rating' ? parseFloat(value) : value });
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-6 rounded-lg shadow-lg mb-8 relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center rounded-lg">
          <LoadingSpinner />
        </div>
      )}
      <h2 className="text-2xl font-bold text-white mb-4">Filter Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <select
            name="category"
            onChange={handleFilterChange}
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Automotive">Automotive</option>
            <option value="Biology">Biology</option>
            <option value="Astronomy">Astronomy</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
        <div className="relative">
          <select
            name="difficulty"
            onChange={handleFilterChange}
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
        <div className="relative">
          <select
            name="rating"
            onChange={handleFilterChange}
            className="w-full p-3 bg-white bg-opacity-20 text-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="0">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;
