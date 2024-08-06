import React from 'react';
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { CoursesCatalogue } from './pages/CoursesCatalogue';
import { About } from './pages/About';
import Contact from './pages/Contact';
import UserSettings from './pages/UserSettings';
import AdminDash from './pages/AdminDash';
import CourseDetail from './pages/CourseDetail';
import Login from './components/Login';
import Register from './components/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="courses" element={<CoursesCatalogue />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="settings" element={<UserSettings />} />
      <Route path="admin" element={<AdminDash />} />
      <Route path="courses/:id" element={<CourseDetail />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
