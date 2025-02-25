import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Welcome to the Test Website</h1>
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
              <a href="#">Contact</a>
            </li>
            <li className="hover:text-gray-200 transition duration-300 cursor-pointer">
              <a href="#">Services</a>
            </li>
          </ul>
          <hr />
        </nav>
      </div>
    </header>
  );
};

export default Header;
