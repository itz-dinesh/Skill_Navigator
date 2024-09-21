import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar'; // Adjust path based on your folder structure
import Footer from '../Footer'; // Adjust path based on your folder structure

const Dataengcoursepage = () => {
  // State to manage visibility for the transition
  const [isVisible, setVisible] = useState(false);

  // Scroll to top and set visibility on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className={`max-w-4xl mx-auto p-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header Section */}
        <div className="text-center">
          <img
            src="/src/assets/dataengineer.png" // Replace with your actual image
            alt="Data Engineering"
            className="mx-auto mb-6 w-full max-w-full h-auto object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold mb-4">Data Engineering</h1>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full">
              Not Enrolled
            </div>
            <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
              Price: FREE
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Login to Enroll
            </button>
          </div>
          <p className="text-gray-600 mb-8">
            You are not yet enrolled in this course.
          </p>
        </div>

        {/* Course Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Course Description</h2>
          <p className="text-gray-700 mb-4">
            Explore the fundamentals of data engineering with our course, designed
            to equip you with the skills to build and manage data pipelines,
            perform ETL (Extract, Transform, Load) operations, and leverage
            cloud-based data platforms. Gain hands-on experience with tools like
            Apache Hadoop, Spark, and SQL, and learn how to process and analyze
            large datasets to drive informed business decisions.
          </p>
          <h3 className="font-bold mb-2">Key concepts covered include:</h3>
          <ul className="list-disc list-inside mb-8">
            <li>Data Pipelines</li>
            <li>ETL Processes</li>
            <li>Big Data Technologies</li>
            <li>Data Warehousing</li>
            <li>Cloud Data Platforms</li>
          </ul>
        </div>

        {/* Course Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Course Content</h2>
          <div className="space-y-4">
            {/* Course Content Section */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Python Fundamentals</h3>
                  <p className="text-gray-500">3 Topics</p>
                </div>
                <button className="text-blue-500 font-semibold">Expand</button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Data Pipelines</h3>
                  <p className="text-gray-500">3 Topics</p>
                </div>
                <button className="text-blue-500 font-semibold">Expand</button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">ETL Processes</h3>
                  <p className="text-gray-500">3 Topics</p>
                </div>
                <button className="text-blue-500 font-semibold">Expand</button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz/Start Button */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600">
            Start
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dataengcoursepage;
