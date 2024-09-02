import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Adjust this if your backend is running on a different port or URL

export const fetchCourses = async (filters = {}) => {
  const { category, difficulty, rating, search, page = 1 } = filters;
  const queryParams = new URLSearchParams({
    category: category || '',
    difficulty: difficulty || '',
    rating: rating || '',
    search: search || '',
    page: page.toString(),
  });

  console.log('Fetching courses with params:', queryParams.toString());
  try {
    const response = await fetch(`${API_URL}/courses?${queryParams}`);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server error:', errorData);
      throw new Error(`Failed to fetch courses: ${errorData.message}\n${errorData.error}\n${errorData.stack}`);
    }
    const data = await response.json();
    console.log('API response:', data);
    return data;
  } catch (error) {
    console.error('Error in fetchCourses:', error);
    throw error;
  }
};

export const createCourse = async (courseData) => {
  const response = await fetch(`${API_URL}/courses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...courseData,
      image: courseData.image || '',
      category: courseData.category || '',
      difficulty: courseData.difficulty || '',
      duration: parseFloat(courseData.duration) || 0,
      rating: parseFloat(courseData.rating) || 0
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create course');
  }
  return response.json();
};

export const updateCourse = async (courseId, courseData) => {
  const response = await fetch(`${API_URL}/courses/${courseId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  });
  if (!response.ok) {
    throw new Error('Failed to update course');
  }
  return response.json();
};

export const deleteCourse = async (courseId) => {
  const response = await fetch(`${API_URL}/courses/${courseId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete course');
  }
};
