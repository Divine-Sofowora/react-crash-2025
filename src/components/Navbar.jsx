import logo from '../assets/images/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

// Navbar component
const Navbar = () => {

  // Dynamically sets the class based on whether the link is active or not
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 rounded-md px-3 py-2';

  return (
    <div>
      {/* Main navigation bar */}
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Left section: logo + site title */}
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </NavLink>

              {/* Right section: navigation links */}
              <div className="md:ml-auto">
                <div className="flex space-x-2">

                  {/* NavLinks automatically get active styling when route matches */}
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>

                  <NavLink to="/jobs" className={linkClass}>
                    Jobs
                  </NavLink>

                  <NavLink to="/add-job" className={linkClass}>
                    Add Job
                  </NavLink>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
