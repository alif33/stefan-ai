import React from 'react';

interface DrawerProps {
  isRightDrawer: boolean; 
}

const RightDrawer: React.FC<DrawerProps> = ({ isRightDrawer }) => {
  return (
    <div
      className={`${
        isRightDrawer ? 'translate-x-0' : 'translate-x-full' // Change the direction for right drawer
      } fixed top-0 right-0 w-9/12 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
    >
      {/* Drawer Header */}
      <div className="bg-gray-100 p-4">
        <h2 className="text-lg font-semibold">Mobile Drawer</h2>
      </div>

      {/* Drawer Links/Content */}
      <nav className="p-4">
        <ul>
          <li>
            <a href="/">Link 1</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
          {/* Add more links or content as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default RightDrawer;
