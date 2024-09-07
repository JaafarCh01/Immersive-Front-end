import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../utils/api';
import { useAuth } from "../context/AuthContext";
import { enrollInCourse } from '../services/courseService';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrollmentStatus, setEnrollmentStatus] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    console.log('Course ID:', id);
    const fetchCourseDetails = async () => {
      try {
        const response = await api.get(`/courses/${id}`);
        console.log('API Response:', response.data);  // Log the entire course object
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching course details:', err);
        if (err.response && err.response.status === 404) {
          setError('Course not found. It may have been deleted or doesn\'t exist.');
        } else {
          setError(`Failed to fetch course details. Please try again later.`);
        }
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  useEffect(() => {
    console.log('User:', user);
  }, [user]);

  const handleEnroll = async () => {
    try {
      const result = await enrollInCourse(id);
      console.log('Enrollment result:', result);
      setEnrollmentStatus('Enrolled successfully');
    } catch (error) {
      console.error('Enrollment error:', error);
      setEnrollmentStatus('Failed to enroll: ' + error.message);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  if (!course) return <div className="flex justify-center items-center h-screen">Course not found</div>;

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
        <img src={course.image || course.imageUrl || 'https://via.placeholder.com/800x400'} alt={course.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <p className="text-lg mb-6">{course.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Course Details</h2>
            <p><strong>Duration:</strong> {course.duration} hours</p>
            <p><strong>Difficulty:</strong> {course.difficulty}</p>
            <p><strong>Category:</strong> {course.category}</p>
            <p><strong>Rating:</strong> {course.rating}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Instructor</h2>
            <p>{course.instructor}</p>
          </div>
        </div>
        {user && user.role.toLowerCase() === 'student' && (
          <div className="mt-6">
            <button
              onClick={handleEnroll}
              className="px-6 py-3 font-medium bg-green-500 text-white rounded-lg transition-all hover:bg-green-600"
            >
              Enroll Now
            </button>
            {enrollmentStatus && <p className="mt-2 text-green-600">{enrollmentStatus}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;