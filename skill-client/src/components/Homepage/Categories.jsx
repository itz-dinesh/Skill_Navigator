import React from 'react';

const categories = [
    { name: 'Design & Development', icon: 'src/assets/explore1.png' },
    { name: 'Marketing & Communication', icon: 'src/assets/explore2.png' },
    { name: 'Digital Marketing', icon: 'src/assets/explore3.png' },
    { name: 'Programming Courses', icon: 'src/assets/explore4.png' },
    { name: 'Business & Consulting', icon: 'src/assets/explore5.png' },
    { name: 'Finance Management', icon: 'src/assets/explore6.png' },
];

const Categories = () => {
  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-8">Explore courses by category</h2>
      <div className="grid grid-cols-3 gap-6 px-16">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`flex items-center bg-white p-6 rounded-lg shadow-md ${['Design & Development', 'Finance Management', 'Business & Consulting', 'Programming Courses', 'Marketing & Communication', 'Digital Marketing'].includes(category.name) ? 'flex-row' : 'flex-col'}`}
          >
            <img 
              src={category.icon} 
              alt={category.name} 
              className="w-16 h-16" 
              style={{ marginRight: ['Design & Development', 'Finance Management', 'Business & Consulting', 'Programming Courses', 'Marketing & Communication', 'Digital Marketing'].includes(category.name) ? 'calc(20px + 6px)' : '20px' }} // Apply right margin
            />
            <div className={`flex flex-col ${['Design & Development', 'Finance Management', 'Business & Consulting', 'Programming Courses', 'Marketing & Communication', 'Digital Marketing'].includes(category.name) ? 'text-3xl font-semibold' : 'text-base'}`}>
              {['Design & Development', 'Finance Management', 'Business & Consulting', 'Programming Courses', 'Marketing & Communication', 'Digital Marketing'].includes(category.name) ? (
                <>
                  <div className="mb-1">{category.name.split(' & ')[0]}</div>
                  <div>{category.name.split(' & ')[1]}</div>
                </>
              ) : (
                <div>{category.name}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
