import React from 'react';

const ManageTeacherAssignments = () => {
  // Dummy data for teacher assignments
  const assignments = [
    { teacher: 'Mr. Smith', task: 'Math Assignment' },
    { teacher: 'Ms. Johnson', task: 'Science Project' },
  ];

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-2">Teacher Assignments</h3>
      <ul className="list-disc list-inside text-gray-600">
        {assignments.map((assignment, index) => (
          <li key={index} className="mb-1">
            {assignment.teacher}: {assignment.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageTeacherAssignments;
