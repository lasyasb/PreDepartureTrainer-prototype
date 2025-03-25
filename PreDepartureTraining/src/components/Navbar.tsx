import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, UserCircle, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://storage.googleapis.com/a1aa/image/LnnGf6vOBK-keLcl2Iv-d5hDUFnWqqtC880g9KkC0lM.jpg"
          alt="App Logo"
          className="h-8 mr-4"
        />
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/language" className="hover:underline">Language</Link></li>
          <li><Link to="/culture" className="hover:underline">Culture</Link></li>
          <li><Link to="/laws" className="hover:underline">Laws</Link></li>
          <li><Link to="/medical" className="hover:underline">Medical</Link></li>
          <li><Link to="/accommodations" className="hover:underline">Accommodations</Link></li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <input
          className="p-2 rounded bg-gray-800 text-white"
          placeholder="Search"
          type="text"
        />
        <Bell className="cursor-pointer" />
        <UserCircle className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;