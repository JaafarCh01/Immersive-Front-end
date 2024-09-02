import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Course Dashboard</h1>
        </div>
        <nav className="mt-8">
          <Link to="/dashboard" className="block py-2 px-4 hover:bg-indigo-700">Dashboard</Link>
          <Link to="/courses" className="block py-2 px-4 hover:bg-indigo-700">Courses</Link>
          <Link to="/students" className="block py-2 px-4 hover:bg-indigo-700">Students</Link>
          <Link to="/settings" className="block py-2 px-4 hover:bg-indigo-700">Settings</Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Logout
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
