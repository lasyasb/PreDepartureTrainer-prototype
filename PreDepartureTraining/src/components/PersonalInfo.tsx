import React from 'react';

const PersonalInfo = () => {
  return (
    <div className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Personal Information</h2>
      <form className="max-w-xl mx-auto mt-10">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
            Country of Residence
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            name="country"
            type="text"
            placeholder="Your Country"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nationality">
            Nationality
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nationality"
            name="nationality"
            type="text"
            placeholder="Your Nationality"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occupation">
            Occupation
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="occupation"
            name="occupation"
            type="text"
            placeholder="Your Occupation"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;