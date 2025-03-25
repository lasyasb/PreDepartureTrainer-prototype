import React from 'react';

const Culture = () => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Culture</h2>
      
      <div className="flex justify-center mb-4">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Cultural Awareness Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
      <p>
        Understanding the culture of the country you're going to is crucial for adapting successfully and making the most out of your experience.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Food Culture</h3>
          <p>
            Each country has its own unique food culture. Learn about traditional dishes, dining etiquette, and common eating habits.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Learn more about food culture</a>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Social Etiquette</h3>
          <p>
            Social norms, such as how to greet people, dress codes, or gift-giving customs, can vary widely between cultures.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Explore social etiquette</a>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Traditions & Celebrations</h3>
          <p>
            Many countries celebrate unique holidays and traditions. Learn about religious festivals, national holidays, and family celebrations.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Discover traditions and celebrations</a>
        </div>
      </div>
    </div>
  );
};

export default Culture;