import React from 'react';

const MonitorProgress = () => {
  // Dummy data for student performance
  const students = [
    { name: 'Alice', progress: 'High' },
    { name: 'Bob', progress: 'Low' },
  ];

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-2">Student Progress</h3>
      <ul className="list-disc list-inside text-gray-600">
        {students.map((student, index) => (
          <li key={index} className="mb-1">
            {student.name}: {student.progress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonitorProgress;
