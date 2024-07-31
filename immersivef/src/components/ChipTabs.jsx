import { motion } from "framer-motion";
import { useState } from "react";
import SignB from "./SignB";
import { useNavigate } from "react-router-dom";

const tabs = ["Home", "Search", "Courses", "About", "FAQ"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const navigate = useNavigate();

  let handleNavigation = (tab) => {
    setSelected(tab);
    tab === "Home" ? navigate("/") :navigate(`/${tab.toLowerCase()}`);
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
        <SignB />
      </div>
    </div>
  );
};

const Chip = ({
  text,
  selected,
  handleNavigation,
}) => {
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
