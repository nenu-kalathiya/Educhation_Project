import React from 'react';
// import { useEMSContext } from '../context/EMSContext';

const Courses = () => {
  // const { courses, deleteCourse } = useEMSContext();

  return (
    <div>
      <h2 className="text-2xl">Courses</h2>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Start Date</th>
              <th className="border border-gray-300 p-2">End Date</th>
              <th className="border border-gray-300 p-2">Assigned Teacher</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="border border-gray-300 p-2">{course.title}</td>
                <td className="border border-gray-300 p-2">{course.description}</td>
                <td className="border border-gray-300 p-2">{course.startDate}</td>
                <td className="border border-gray-300 p-2">{course.endDate}</td>
                <td className="border border-gray-300 p-2">{course.assignedTeacher}</td>
                <td className="border border-gray-300 p-2">
                  <button onClick={() => deleteCourse(course.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Courses;
