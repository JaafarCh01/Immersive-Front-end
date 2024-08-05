import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSettingsClick=()=>{
    navigate("/Settings");
  }


  return (
    <div className="relative">
      <img
        id="avatarButton"
        type="button"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src="https://as1.ftcdn.net/v2/jpg/02/98/47/38/1000_F_298473896_Vsz21xTwMtroEeeGgU8pL2vwt3N65pfR.jpg"
        alt="User dropdown"
      />

      {isDropdownOpen && (
        <div
          id="userDropdown"
          className="absolute left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          style={{ transform: 'translateX(-100%)' }} // This moves the dropdown to the left
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Jaafar Cherkaoui</div>
            <div className="font-medium truncate">jaafar@gmail.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                My Courses
              </a>
            </li>
            <li>
              <a
              onClick={handleSettingsClick}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
