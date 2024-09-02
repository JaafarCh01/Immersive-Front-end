import React from 'react';

const CourseList = ({ courses, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src={course.imageUrl || 'https://via.placeholder.com/300x200'} 
            alt={course.title} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{course.duration}</span>
              <span className="text-sm font-medium text-indigo-600">{course.difficulty}</span>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => onEdit(course)}
                className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(course.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;