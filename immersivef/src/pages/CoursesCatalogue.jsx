import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import { fetchCourses } from '../services/courseService';

export const CoursesCatalogue = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const fetchedCourses = await fetchCourses();
        setCourses(fetchedCourses);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses');
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <SearchBar />
      <CardList cards={courses} />
    </>
  );
};

export default CoursesCatalogue;
