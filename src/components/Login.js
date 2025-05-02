import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="max-w-md w-full bg-white bg-opacity-80 p-10 rounded-3xl shadow-xl backdrop-blur-sm">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-900 font-sans tracking-wide">
          Login to ParkWise
        </h2>
        {error && <p className="text-red-600 mb-6 text-center font-semibold">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 font-semibold text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border-2 border-pink-400 hover:border-pink-600"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-900">
          Don't have an account?{' '}
          <Link to="/register" className="text-pink-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
