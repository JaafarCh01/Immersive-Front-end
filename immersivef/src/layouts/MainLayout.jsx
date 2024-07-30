
import { Outlet } from "react-router-dom";
import ChipTabs from "../components/ChipTabs";
import Footer from "../components/Footer";


const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
    <ChipTabs />
    
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;