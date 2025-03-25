import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto mt-10">
      <div className="text-center mb-6">
        <h1 className="text-4xl text-gray-800 mb-2">Predeparture Training</h1>
        <p className="text-gray-500">Prepare for your journey</p>
      </div>
      <p className="text-center text-teal-500 mb-6">
        Get ready for your new adventure abroad with our comprehensive training program.
      </p>
      <div className="flex flex-col items-center">
        <Link
          to="/country-selector"
          className="bg-teal-500 text-white py-2 px-4 rounded-full w-full text-center mb-4"
        >
          Get Started
        </Link>
        <p className="text-gray-500 mb-4">Already have an account?</p>
        <Link
          to="/personal-info"
          className="border border-teal-500 text-teal-500 py-2 px-4 rounded-full w-full text-center"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Home;