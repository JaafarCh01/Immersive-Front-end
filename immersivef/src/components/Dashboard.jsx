import React from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>Hello, {user?.email}!</p>
      {/* Add more dashboard content here */}
    </div>
  );
}

export default Dashboard;
