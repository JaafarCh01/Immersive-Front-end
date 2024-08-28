import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import CourseFilters from '../components/CourseFilters';
import { fetchCourses } from '../services/courseService';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '../components/Pagination';

export const CoursesCatalogue = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    difficulty: '',
    rating: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const result = await fetchCourses({ 
          ...filters, 
          search: searchTerm,
          rating: filters.rating > 0 ? filters.rating : undefined,
          page: currentPage
        });
        console.log('Fetched courses:', result);
        if (Array.isArray(result)) {
          console.log('Setting courses:', result);
          setCourses(result);
          setTotalPages(Math.ceil(result.length / 6)); // Assuming 6 courses per page
        } else if (result && result.courses) {
          console.log('Setting courses:', result.courses);
          setCourses(result.courses);
          setTotalPages(result.totalPages || 1);
        } else {
          console.log('No courses found in the result');
          setCourses([]);
          setTotalPages(1);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to fetch courses: ' + err.message);
        setLoading(false);
        setCourses([]);
      }
    };

    loadCourses();
  }, [filters, searchTerm, currentPage]);

  const handleFilterChange = async (newFilters) => {
    console.log('New filters:', newFilters);
    setLoading(true);
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    setCurrentPage(1);
    setLoading(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600 text-xl mt-8">{error}</div>;

  return (
    <div className="flex-grow bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Course Catalogue</h1>
          <button
            onClick={() => {
              setFilters({ category: '', difficulty: '', rating: 0 });
              setSearchTerm('');
              setCurrentPage(1);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
        <SearchBar onSearch={handleSearch} />
        <CourseFilters onFilterChange={handleFilterChange} />
        {courses && courses.length > 0 ? (
          <>
            <CardList cards={courses} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </>
        ) : (
          <div className="text-center text-gray-600 text-xl mt-8">No courses found</div>
        )}
      </div>
    </div>
  );
};

export default CoursesCatalogue;
