import React from 'react';

// Sample data for enrolled students (this would normally come from an API)
const studentsData = [
  { id: 1, name: 'John Doe', course: 'Math 101' },
  { id: 2, name: 'Jane Smith', course: 'Science 101' },
  { id: 3, name: 'Alice Johnson', course: 'History 101' },
  { id: 4, name: 'Michael Brown', course: 'English 101' },
];

const StudentsList = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Enrolled Students</h3>
      <ul className="list-disc list-inside text-gray-600">
        {studentsData.map((student) => (
          <li key={student.id} className="mb-2">
            <span className="font-semibold">{student.name}</span> - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
