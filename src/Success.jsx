import React from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600">Login Successful!</h1>
        <p className="mt-4 text-lg">Welcome to Netflix!</p>
        <button 
          onClick={handleLogout} 
          className="mt-6 bg-red-600 hover:bg-red-700 transition-colors duration-150 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Success;