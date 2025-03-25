import React from 'react';

const Accommodations = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Accommodations</h1>
      
      <div className="flex justify-center mb-4">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <img 
            src="https://storage.googleapis.com/a1aa/image/gQfLpEQYG2psdXkCtUy5sUsS9ruN3_1IpMS0MOz-P94.jpg"
            alt="A cozy hotel room with a large bed, modern decor, and a city view"
            className="rounded shadow"
          />
        </div>
      </div>

      <p className="text-center text-lg mb-4">
        Finding the right accommodation is crucial for a comfortable stay abroad. Here are some options and tips to help you choose the best place to stay.
      </p>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Types of Accommodations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <img 
              src="https://storage.googleapis.com/a1aa/image/OJwikqys7RTp8-rw3I821iyskEl4dacNTtWD_D11uYI.jpg"
              alt="A modern apartment building with balconies"
              className="rounded mb-2"
            />
            <h3 className="text-lg font-semibold mb-1">Apartments</h3>
            <p>Renting an apartment can provide more privacy and independence. Look for furnished apartments to avoid the hassle of buying furniture.</p>
          </div>

          <div className="bg-gray-100 p-4 rounded shadow">
            <img 
              src="https://storage.googleapis.com/a1aa/image/3U_km7nXhtc3VPrVMSt5dFv4739zQPrmIIQufDoaK0I.jpg"
              alt="A dormitory room with two beds, desks, and chairs"
              className="rounded mb-2"
            />
            <h3 className="text-lg font-semibold mb-1">Dormitories</h3>
            <p>Dormitories are often provided by universities and offer a great way to meet other students. They are usually more affordable and located on or near campus.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Tips for Finding Accommodations</h2>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Research:</strong> Start your search early and research different neighborhoods.</li>
          <li><strong>Budget:</strong> Determine your budget including utilities and additional fees.</li>
          <li><strong>Location:</strong> Choose a location convenient for your daily activities.</li>
          <li><strong>Safety:</strong> Ensure the area is safe and secure.</li>
          <li><strong>Visit in Person:</strong> If possible, visit the accommodation before making a decision.</li>
        </ul>
      </div>
    </div>
  );
};

export default Accommodations;