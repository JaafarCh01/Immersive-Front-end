
import { Outlet } from "react-router-dom";
import ChipTabs from "../components/ChipTabs";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
    <ChipTabs />
      <Outlet />
    </div>
  );
}

export default MainLayout;