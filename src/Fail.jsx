import React from 'react';
import { useNavigate } from 'react-router-dom';

function Fail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Login Failed!</h1>
        <p className="mt-4 text-lg">Invalid email or password. Please try again.</p>
        <button 
          onClick={() => navigate('/login')} 
          className="mt-6 bg-red-600 hover:bg-red-700 transition-colors duration-150 text-white py-2 px-4 rounded"
        >
          Go Back to Login
        </button>
      </div>
    </div>
  );
}

export default Fail;