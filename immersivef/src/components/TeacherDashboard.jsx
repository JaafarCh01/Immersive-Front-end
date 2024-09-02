import React, { useState, useEffect } from 'react';
import { fetchCourses, createCourse, updateCourse, deleteCourse } from '../services/courseService';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import Modal from './Modal';
import DashboardLayout from '../layouts/DashboardLayout';

const TeacherDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const fetchedCourses = await fetchCourses();
      setCourses(Array.isArray(fetchedCourses) ? fetchedCourses : []);
      setLoading(false);
    } catch (err) {
      console.error('Error loading courses:', err);
      setError('Failed to load courses. Please try again.');
      setCourses([]);
      setLoading(false);
    }
  };

  const handleCreateCourse = async (courseData) => {
    try {
      console.log('Sending course data:', courseData);
      const response = await createCourse(courseData);
      console.log('Course creation response:', response);
      loadCourses();
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error creating course:', err);
      setError('Failed to create course. Please try again.');
    }
  };

  const handleUpdateCourse = async (courseData) => {
    try {
      await updateCourse(currentCourse.id, courseData);
      loadCourses();
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error updating course:', err);
      setError('Failed to update course. Please try again.');
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourse(courseId);
      loadCourses();
    } catch (err) {
      console.error('Error deleting course:', err);
      setError('Failed to delete course. Please try again.');
    }
  };

  const openModal = (course = null) => {
    setCurrentCourse(course);
    setIsModalOpen(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <button
        onClick={() => openModal()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Create New Course
      </button>
      {courses.length > 0 ? (
        <CourseList
          courses={courses}
          onEdit={openModal}
          onDelete={handleDeleteCourse}
        />
      ) : (
        <p>No courses available.</p>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CourseForm
          course={currentCourse}
          onSubmit={currentCourse ? handleUpdateCourse : handleCreateCourse}
        />
      </Modal>
    </DashboardLayout>
  );
};

export default TeacherDashboard;