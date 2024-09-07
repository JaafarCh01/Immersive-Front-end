import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../utils/api';
import axios from 'axios'; // Assuming axios is used for the login request

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/api/v1/auth/profile')
        .then(response => {
          setIsLoggedIn(true);
          setUser(response.data);
          fetchUserAvatar();
        })
        .catch(() => {
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          setUser(null);
        });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', { email, password });
      const { user, token } = response.data;
      setUser(user);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      fetchUserAvatar();
      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (email, password, role) => {
    try {
      const response = await api.post('/auth/register', { email, password, role });
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      setUser(response.data.user);
      return true;
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
  };

  const fetchUserAvatar = async () => {
    if (user && user.id) {
      try {
        const response = await api.get(`/api/v1/users/${user.id}/avatar`);
        setUser(prevUser => ({ ...prevUser, avatar: response.data.image_path }));
      } catch (error) {
        console.error('Error fetching user avatar:', error);
      }
    }
  };

  const updateProfile = async (userData) => {
    try {
      const response = await api.put('/api/v1/users/profile', userData);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error('Profile update error:', error);
      throw error;
    }
  };

  const enrollInCourse = async (courseId) => {
    try {
      await api.post('/api/v1/student/enroll', { courseId });
      // Optionally, you can update the user's enrolled courses here
      // or fetch the updated user data
    } catch (error) {
      console.error('Course enrollment error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      user, 
      login, 
      register, 
      logout, 
      updateProfile, 
      enrollInCourse,
      fetchUserAvatar 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
