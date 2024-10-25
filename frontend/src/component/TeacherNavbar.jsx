import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Tailwind's Heroicons for the hamburger icon

import { DarkModeToggle, LogoutButton } from './Button';

import { Link, NavLink } from 'react-router-dom';

const TeacherNavbar = () => {
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0">
                  <h1 className="text-white text-xl font-bold">Logo</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 pt-2">
                  {/* Regular Menu Items */}
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive ? 'bg-gray-700 text-white underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to='/sakshi/workspace'
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive ? 'bg-gray-700 text-white underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`
                    }
                  >
                    Add a Student
                  </NavLink>
                  <NavLink
                    to='/update-student'
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive ? 'bg-gray-700 text-white underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`
                    }
                  >
                    Update a student info
                  </NavLink>
                  <div className=''>
                    
            <LogoutButton />
                  </div>
                  <div>
                    <DarkModeToggle />
                  </div>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center sm:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden flex justify-center">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Menu Items */}
              <Disclosure.Button
                as={NavLink}
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-gray-700 text-white underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as= {NavLink}
                to='/sakshi/workspace'
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-gray-700 text-white underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                Add Student
              </Disclosure.Button>
              <Disclosure.Button
                as={NavLink}
                to="/update-student"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-gray-700 text-white underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                Update student 
              </Disclosure.Button>
            <Disclosure>
              <LogoutButton />
            </Disclosure>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>


    </>
  );
};

export default TeacherNavbar;
