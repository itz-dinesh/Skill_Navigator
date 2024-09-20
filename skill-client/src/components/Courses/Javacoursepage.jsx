import React from 'react';

const Javacoursepage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Course Image Section */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="path_to_your_image" // replace with your image path
          alt="Java Programming"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-2">Java Programming</h1>
          <p className="text-lg font-medium">Best Java Courses</p>
        </div>
      </div>

      {/* Status, Price, and Enrollment Section */}
      <div className="flex justify-around items-center mt-6 py-4 bg-gray-100 rounded-lg shadow-md">
        <div className="text-center">
          <span className="block text-gray-700 font-semibold">Current Status</span>
          <span className="block text-red-600 text-lg font-bold">Not Enrolled</span>
        </div>
        <div className="text-center">
          <span className="block text-gray-700 font-semibold">Price</span>
          <span className="block text-lg font-bold">Free</span>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Login to Enroll
          </button>
        </div>
      </div>

      {/* Course Duration */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Course Duration: 3hrs</h2>
      </div>

      {/* Course Description */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Course Description</h3>
        <p className="text-gray-700">
          Unlock the power of Java with our comprehensive course, designed to teach you core programming concepts, object-oriented principles, and advanced techniques. Gain hands-on experience with real-world projects to build robust, scalable applications and enhance your software development skills.
        </p>
      </div>

      {/* Key Concepts */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Key concepts covered include:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Object-Oriented Programming (OOP)</li>
          <li>Exception Handling</li>
          <li>Data Structures and Algorithms</li>
          <li>Java Collections Framework</li>
          <li>Concurrency</li>
        </ul>
      </div>

      {/* Course Content */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Course Content</h3>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">Fundamentals</h4>
            <button className="text-blue-500">Expand</button>
          </div>
          <p className="text-gray-500">3 Topics</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">Basic OOPs</h4>
            <button className="text-blue-500">Expand</button>
          </div>
          <p className="text-gray-500">2 Topics</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">OOPs Implementation</h4>
            <button className="text-blue-500">Expand</button>
          </div>
          <p className="text-gray-500">1 Topic</p>
        </div>
      </div>
    </div>
  );
};

export default Javacoursepage;
