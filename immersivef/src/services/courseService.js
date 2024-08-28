import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; 

export const fetchCourses = async (filters) => {
  const { category, difficulty, rating, search, page = 1 } = filters;
  const queryParams = new URLSearchParams({
    category: category || '',
    difficulty: difficulty || '',
    rating: rating || '',
    search: search || '',
    page: page.toString(),
  });

  console.log('Fetching courses with params:', queryParams.toString());
  const response = await fetch(`${API_URL}/courses?${queryParams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  const data = await response.json();
  console.log('API response:', data);
  return data.courses || data; // Return courses array if it exists, otherwise return the whole data
};
