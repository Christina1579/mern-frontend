import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Books
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span />
            </div>
            <Link to="/addBook">
              <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                Addbook
              </button>
            </Link>
          </div>
          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"></ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
