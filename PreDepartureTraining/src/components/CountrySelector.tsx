import React from 'react';

const CountrySelector = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Select Your Country</h1>
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
            <option>Germany</option>
            <option>France</option>
            <option>India</option>
            <option>China</option>
            <option>Japan</option>
            <option>Brazil</option>
            <option>South Africa</option>
            <option>Russia</option>
            <option>Mexico</option>
            <option>Italy</option>
            <option>Spain</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CountrySelector;