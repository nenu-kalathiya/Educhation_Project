import React, { useState } from 'react';
import StudentsList from './StudentsList'; // Importing the StudentsList component
import ManageTeacherAssignments from './ManageTeacherAssignments'; // Importing new component
import ManageCourses from './ManageCourses'; // Importing new component
import MonitorProgress from './MonitorProgress'; // Importing new component

const AdminDashboard = () => {
  const [showStudents, setShowStudents] = useState(false);
  const [showTeacherAssignments, setShowTeacherAssignments] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const handleShowStudents = () => {
    setShowStudents(true); // Show students list
    setShowTeacherAssignments(false); // Hide other sections
    setShowCourses(false);
    setShowProgress(false);
  };

  const handleShowTeacherAssignments = () => {
    setShowTeacherAssignments(true); // Show teacher assignments
    setShowStudents(false); // Hide other sections
    setShowCourses(false);
    setShowProgress(false);
  };

  const handleShowCourses = () => {
    setShowCourses(true); // Show courses
    setShowStudents(false); // Hide other sections
    setShowTeacherAssignments(false);
    setShowProgress(false);
  };

  const handleShowProgress = () => {
    setShowProgress(true); // Show progress
    setShowStudents(false); // Hide other sections
    setShowTeacherAssignments(false);
    setShowCourses(false);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Admin Dashboard</h2>
      <div className="flex justify-between space-x-2">
        <button 
          className="flex-1 bg-indigo-600 text-white py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300 transform hover:scale-105" 
          onClick={handleShowStudents}
        >
          View all enrolled students
        </button>
        <button 
          className="flex-1 bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700 transition duration-300 transform hover:scale-105"
          onClick={handleShowTeacherAssignments}
        >
          Manage teacher assignments
        </button>
        <button 
          className="flex-1 bg-yellow-600 text-white py-3 rounded-lg shadow hover:bg-yellow-700 transition duration-300 transform hover:scale-105"
          onClick={handleShowCourses}
        >
          Add, edit, or delete courses
        </button>
        <button 
          className="flex-1 bg-red-600 text-white py-3 rounded-lg shadow hover:bg-red-700 transition duration-300 transform hover:scale-105"
          onClick={handleShowProgress}
        >
          Monitor student progress and performance
        </button>
      </div>

      {/* Conditionally render the components */}
      {showStudents && <StudentsList />}
      {showTeacherAssignments && <ManageTeacherAssignments />}
      {showCourses && <ManageCourses />}
      {showProgress && <MonitorProgress />}
    </div>
  );
};

export default AdminDashboard;
