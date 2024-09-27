import React, { useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa'; // Importing icons from react-icons
import { FaUserLarge } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";

const Header = ({ userRole }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleCloseDropdown = () => {
    setDropdownOpen(false); // Close dropdown when an item is clicked
  };

  // Close dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownOpen && !event.target.closest('.dropdown')) {
      setDropdownOpen(false);
    }
  };

  // Add event listener to handle click outside
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="bg-gradient-to-r from-teal-400 to-purple-500 text-purple-300 flex items-center justify-between p-4">
      <h1 className="text-3xl text-black font-bold">Knowledge_Hub</h1>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md text-gray-800"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <FaSearch className="text-gray-500" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative flex items-center justify-center">
          <MdNotificationsActive className="text-white text-2xl" />
        </button>

        {/* Separator Line */}
        <div className="h-6 border-2 border-white mx-2"></div>

        {/* User Icon with Role-based Dropdown */}
        <div className="relative dropdown">
          <button onClick={toggleDropdown} className="flex items-center justify-center">
            <FaUserLarge className="text-white text-2xl" />
          </button>
          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              <ul className="py-2">
                {/* Conditional Rendering based on userRole */}
                {userRole === 'admin' && (
                  <>
                    <li onClick={handleCloseDropdown} className="px-4 py-2 hover:bg-teal-200 cursor-pointer">Manage Teachers</li>
                    <li onClick={handleCloseDropdown} className="px-4 py-2 hover:bg-teal-200 cursor-pointer">Manage Students</li>
                  </>
                )}
                {userRole === 'teacher' && (
                  <>
                    <li onClick={handleCloseDropdown} className="px-4 py-2 hover:bg-teal-200 cursor-pointer">View Students</li>
                    <li onClick={handleCloseDropdown} className="px-4 py-2 hover:bg-teal-200 cursor-pointer">Grade Assignments</li>
                  </>
                )}
                {userRole === 'student' && (
                  <>
                    <li onClick={handleCloseDropdown} className="px-4 py-2 hover:bg-teal-200 cursor-pointer">View Courses</li>
                    <li onClick={handleCloseDropdown} className="px-4 py-2 hover:bg-teal-200 cursor-pointer">Submit Assignments</li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
