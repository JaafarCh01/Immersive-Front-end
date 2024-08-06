// src/components/ChipTabs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the AuthContext
import UserDropdown from './UserDrop';
import ButtonT from './ButtonT'; // Import the ButtonT component

const tabs = ["Home", "Courses", "About", "Contact"];

const ChipTabs = () => {
  const { isLoggedIn } = useAuth(); // Access authentication status correctly
  const [selected, setSelected] = useState(tabs[0]);
  const navigate = useNavigate();

  const handleNavigation = (tab) => {
    setSelected(tab);
    tab === "Home" ? navigate("/") : navigate(`/${tab.toLowerCase()}`);
  };

  return (
    <div className="px-4 py-3 bg-slate-900 flex items-center flex-wrap gap-2">
      <div className="flex flex-grow justify-center gap-2" style={{ marginLeft: '7rem' }}>
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            handleNavigation={handleNavigation}
            key={tab}
          />
        ))}
      </div>

      <div className="ml-auto text-sm px-3 py-1">
        {isLoggedIn ? <UserDropdown /> : <ButtonT text="Sign In" link="/login" />}
      </div>
    </div>
  );
};

const Chip = ({ text, selected, handleNavigation }) => {
  return (
    <button
      onClick={() => handleNavigation(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
