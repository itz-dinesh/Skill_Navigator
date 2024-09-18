import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white shadow-md h-screen">
      <div className="flex flex-col items-center py-10">
        <div className="bg-blue-200 w-24 h-24 rounded-full flex items-center justify-center">
          <span className="text-4xl text-blue-500">👤</span>
        </div>
        <div className="mt-4 text-lg font-medium">YOUR INFO</div>
      </div>
      <div className="flex flex-col mt-10">
        <button className="px-6 py-4 hover:bg-blue-100 w-full text-left">Courses</button>
      </div>
    </div>
  );
};

export default Sidebar;