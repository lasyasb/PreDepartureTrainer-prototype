import React from 'react';

const Medical = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Medical Information</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Emergency Services */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Emergency Services</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="font-bold mr-2">Emergency Number:</span> 
              <span>Call 112 or local emergency number</span>
            </li>
            <li className="flex items-center">
              <span className="font-bold mr-2">Ambulance:</span>
              <span>Available 24/7</span>
            </li>
          </ul>
        </div>

        {/* Healthcare Facilities */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Healthcare Facilities</h2>
          <ul className="space-y-2">
            <li>Public Hospitals</li>
            <li>Private Clinics</li>
            <li>Specialized Medical Centers</li>
            <li>Pharmacies</li>
          </ul>
        </div>

        {/* Insurance Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-green-600">Insurance Information</h2>
          <ul className="space-y-2">
            <li>Travel Insurance Requirements</li>
            <li>Local Health Insurance Options</li>
            <li>Coverage Details</li>
            <li>Claim Procedures</li>
          </ul>
        </div>

        {/* Vaccinations */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">Required Vaccinations</h2>
          <ul className="space-y-2">
            <li>Routine Vaccinations</li>
            <li>Country-Specific Requirements</li>
            <li>Recommended Immunizations</li>
            <li>Vaccination Schedule</li>
          </ul>
        </div>

        {/* Health Precautions */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-yellow-600">Health Precautions</h2>
          <ul className="space-y-2">
            <li>Food and Water Safety</li>
            <li>Climate Adaptation</li>
            <li>Common Health Risks</li>
            <li>Preventive Measures</li>
          </ul>
        </div>

        {/* Medical Documentation */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-indigo-600">Required Documentation</h2>
          <ul className="space-y-2">
            <li>Medical History Records</li>
            <li>Prescription Information</li>
            <li>Insurance Documents</li>
            <li>Emergency Contacts</li>
          </ul>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Local Medical Contacts</h3>
            <ul className="space-y-1">
              <li>Local Doctors Directory</li>
              <li>24/7 Medical Helpline</li>
              <li>Medical Translation Services</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Health Apps & Services</h3>
            <ul className="space-y-1">
              <li>Telemedicine Services</li>
              <li>Medical Translation Apps</li>
              <li>Emergency Service Locators</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;