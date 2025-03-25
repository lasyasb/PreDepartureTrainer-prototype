import React, { useState } from 'react';

const Laws = () => {
  const [selectedCountry, setSelectedCountry] = useState('none');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Laws and Regulations</h1>
      
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Select a Country</h2>
        <select 
          id="country-select" 
          className="p-2 rounded border"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="none">Select a country</option>
          <option value="usa">USA</option>
          <option value="japan">Japan</option>
          <option value="germany">Germany</option>
        </select>
      </div>

      {selectedCountry === 'usa' && (
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-semibold mb-2">Laws to Be Aware of When in the USA</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Alcohol Consumption:</strong> The legal drinking age is 21. Public consumption of alcohol is often restricted.</li>
            <li><strong>Drug Use:</strong> Marijuana is legal in some states but illegal federally. Other drugs are strictly prohibited.</li>
            <li><strong>Smoking:</strong> Smoking is banned in most public places and buildings.</li>
            <li><strong>Cultural Customs:</strong> Tipping is customary in restaurants and for services.</li>
            <li><strong>Public Behavior:</strong> Public nudity and indecent exposure are illegal.</li>
          </ul>
        </div>
      )}

      {selectedCountry === 'japan' && (
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-semibold mb-2">Laws to Be Aware of When in Japan</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Alcohol Consumption:</strong> The legal drinking age is 20. Drinking in public is generally accepted.</li>
            <li><strong>Drug Use:</strong> Drug laws are very strict, and penalties for possession are severe.</li>
            <li><strong>Smoking:</strong> Smoking is restricted in many public places and requires designated smoking areas.</li>
            <li><strong>Cultural Customs:</strong> Bowing is a common greeting, and shoes should be removed when entering homes.</li>
            <li><strong>Public Behavior:</strong> Public displays of affection are uncommon and may be frowned upon.</li>
          </ul>
        </div>
      )}

      {selectedCountry === 'germany' && (
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-semibold mb-2">Laws to Be Aware of When in Germany</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Alcohol Consumption:</strong> The legal drinking age is 16 for beer and wine, and 18 for spirits.</li>
            <li><strong>Drug Use:</strong> Drug laws are strict, and penalties for possession are severe.</li>
            <li><strong>Smoking:</strong> Smoking is banned in most public places and buildings.</li>
            <li><strong>Cultural Customs:</strong> Punctuality is highly valued, and being late is considered rude.</li>
            <li><strong>Public Behavior:</strong> Public nudity is allowed in designated areas, such as saunas and some parks.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Laws;