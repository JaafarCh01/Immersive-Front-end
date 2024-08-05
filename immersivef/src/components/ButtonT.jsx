import { Link } from "react-router-dom";

const ButtonT = ({text,link}) => {
  return (
    <Link to={link} className="flex items-center justify-center">
      <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        {text}
      </button>
    </Link>
  );
};

export default ButtonT;
