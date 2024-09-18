import React from 'react';

const SidebarAndProfile = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md h-screen">
        <div className="flex flex-col items-center py-10">
          <div className="bg-blue-200 w-24 h-24 rounded-full flex items-center justify-center">
            <span className="text-4xl text-blue-500">👤</span>
          </div>
          <div className="mt-4 text-lg font-medium">YOUR INFO</div>
        </div>
        <div className="flex flex-col mt-10">
          <a 
            href="/courses" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-4 hover:bg-blue-100 w-full text-left block text-blue-600"
          >
            Courses
          </a>
          <a 
            href="/profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-4 hover:bg-blue-100 w-full text-left block text-blue-600"
          >
            Profile
          </a>
          <a 
            href="/signup" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-4 hover:bg-blue-100 w-full text-left block text-blue-600"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Profile Form */}
      <div className="flex-1 bg-blue-50 p-8 rounded-lg">
        <div className="bg-white p-8 rounded-md shadow-md">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
                <input type="text" placeholder="First Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" placeholder="Last Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email ID</label>
              <input type="email" placeholder="Enter your E-mail ID" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Degree</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Degree</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Specialization</label>
              <input type="text" placeholder="Enter Specialization" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>

            <div className="flex items-center">
              <label className="block mb-2 text-sm font-medium text-gray-700 w-full">Phone Number</label>
              <div className="w-full flex">
                <span className="inline-flex items-center px-3 border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">+91</span>
                <input type="text" placeholder="Enter your mobile number" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Certifications</label>
              <button className="w-full px-3 py-2 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                +
              </button>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">LinkedIn Profile Link</label>
              <input type="text" placeholder="LinkedIn Profile Link" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">GitHub Profile Link</label>
              <input type="text" placeholder="GitHub Profile Link" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Programming Languages Known</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Programming Languages</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SidebarAndProfile;
