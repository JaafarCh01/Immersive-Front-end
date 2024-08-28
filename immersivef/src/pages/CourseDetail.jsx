// src/pages/CourseDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../utils/api';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await api.get(`/courses/${id}`);
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch course details');
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
        <p className="mb-4">{course.description}</p>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Détails du cours</h2>
          <p><strong>Durée :</strong> {course.duration}</p>
          <p><strong>Instructeur :</strong> {course.instructor}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Visualiser le contenu</h2>
          {course.arUrl && (
            <a
              href={course.arUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visualiser en AR
            </a>
          )}
          {course.vrUrl && (
            <a
              href={course.vrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visualiser en VR
            </a>
          )}
        </div>
        <div className="mt-4">
          <a
            href={course.enrollmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 font-medium bg-green-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;