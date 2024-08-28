import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faChalkboardTeacher, faBook, faChartLine } from "@fortawesome/free-solid-svg-icons";
import api from '../utils/api';

const AdminDash = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState({ totalStudents: 0, assignedCourses: 0, completedTests: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [studentsResponse, coursesResponse, statsResponse] = await Promise.all([
          api.get('/admin/users'),
          api.get('/admin/courses'),
          api.get('/admin/stats')
        ]);
        
        setStudents(studentsResponse.data);
        setCourses(coursesResponse.data);
        setStats(statsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const assignCourse = async (userId, courseId) => {
    try {
      await api.post('/admin/assign-course', { userId, courseId });
      // Refresh student data or update state
    } catch (error) {
      console.error('Error assigning course:', error);
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Tableau de bord - Enseignant</h1>

      {/* Section statistique rapide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FontAwesomeIcon icon={faUserGraduate} className="text-4xl text-blue-500 mr-5" />
          <div>
            <p className="text-gray-500">Total des étudiants</p>
            <h2 className="text-2xl font-bold">{stats.totalStudents}</h2>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="text-4xl text-green-500 mr-5" />
          <div>
            <p className="text-gray-500">Cours assignés</p>
            <h2 className="text-2xl font-bold">{stats.assignedCourses}</h2>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center">
          <FontAwesomeIcon icon={faBook} className="text-4xl text-yellow-500 mr-5" />
          <div>
            <p className="text-gray-500">Tests effectués</p>
            <h2 className="text-2xl font-bold">{stats.completedTests}</h2>
          </div>
        </div>
      </div>

      {/* Section progression des étudiants */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-5">
  <h2 className="text-xl font-bold mb-4">Progression des étudiants</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Nom de l'étudiant</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Cours en cours</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Progression</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Résultat du dernier test</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {students.map(student => (
          <tr key={student.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.currentCourse}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.progress}%</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.lastTestResult}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      {/* Section affectation des cours */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-xl font-bold mb-4">Affecter des cours aux étudiants</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Sélectionner un étudiant</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                {students.map(student => (
                  <option key={student.id} value={student.id}>{student.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Sélectionner un cours</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                {courses.map(course => (
                  <option key={course.id} value={course.id}>{course.name}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Assigner le cours
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDash;
