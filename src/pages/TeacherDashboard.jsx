import React, { useState, useEffect } from 'react';

const TeacherDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Mathematics', progress: '75%', grades: 'A' },
    { id: 2, title: 'Science', progress: '85%', grades: 'B' },
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', submitted: true },
    { id: 2, name: 'Jane Smith', submitted: false },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  // Function to calculate grades based on submission status
  const calculateGrades = () => {
    return students.map((student) => ({
      ...student,
      grade: student.submitted ? 'A' : '0', // Assign 'A' if submitted, otherwise '0'
    }));
  };

  useEffect(() => {
    setStudents((prevStudents) => calculateGrades(prevStudents));
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Update state with selected file
  };

  const handleUploadAssignment = () => {
    if (selectedFile) {
      // Logic to upload an assignment goes here
      setUploadMessage(`Assignment "${selectedFile.name}" uploaded successfully!`);
      setSelectedFile(null); // Reset selected file after upload
    } else {
      setUploadMessage('Please select a file to upload.');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Teacher Dashboard</h2>

      {/* Assigned Courses Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Assigned Courses</h3>
        <div className="bg-white rounded-lg shadow p-4">
          {courses.map((course) => (
            <div key={course.id} className="border-b py-2">
              <h4 className="text-xl font-medium">{course.title}</h4>
              <p className="text-gray-600">Progress: {course.progress}</p>
              <p className="text-gray-600">Grade: {course.grades}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Students Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Student Grades</h3>
        <div className="bg-white rounded-lg shadow p-4">
          {students.map((student) => (
            <div key={student.id} className="border-b py-2 flex justify-between">
              <span className="text-xl font-medium">{student.name}</span>
              <span className="text-gray-600">Grade: {student.grade}</span>
              <span className={`text-${student.submitted ? 'green' : 'red'}-600`}>
                {student.submitted ? 'Submitted' : 'Not Submitted'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Manage Course Content Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Manage Course Content</h3>
        <div className="mb-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-2 border rounded p-2 text-gray-800"
          />
          <button
            onClick={handleUploadAssignment}
            className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
          >
            Upload Assignment
          </button>
        </div>
        {uploadMessage && <p className="text-green-600">{uploadMessage}</p>}
      </div>
    </div>
  );
};

export default TeacherDashboard;
