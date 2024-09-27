import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserShield, FaChalkboardTeacher, FaUserGraduate, FaBook } from 'react-icons/fa'; // Importing icons from react-icons

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen p-4">
      <h1 className="text-2xl font-bold mb-10">Knowledge_Hub</h1> {/* Header */}
      <nav>
        <ul>
          <li>
            <NavLink to="/admin" className="flex items-center text-xl p-2 hover:bg-gray-700">
              <FaUserShield className="mr-2" /> {/* Admin Icon */}
              Admin Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/teacher" className="flex items-center text-xl p-2 hover:bg-gray-700">
              <FaChalkboardTeacher className="mr-2" /> {/* Teacher Icon */}
              Teacher Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/student" className="flex items-center text-xl p-2 hover:bg-gray-700">
              <FaUserGraduate className="mr-2" /> {/* Student Icon */}
              Student Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="flex items-center text-xl p-2 hover:bg-gray-700">
              <FaBook className="mr-2" /> {/* Courses Icon */}
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar
