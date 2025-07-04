import Home from "../Screens/Home";
import About from "../Screens/About";
import SideBar from "../Component/SideBar";
import Skills from "../Screens/Skills";
import Resume from "../Screens/Resume";
import Portfolio from "../Screens/Portfolio";
import { Route, Routes, useLocation } from "react-router-dom";
import Detail from "../Screens/Detail";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const Layout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const isDetailPage = location.pathname.startsWith("/detail");

  if (isDetailPage) {
    return <Detail />;
  }

  return (
    <div className="homeMain">
      <button className="mobileMenuBtn" onClick={toggleSidebar}>
        <IoMenu size={20} color="black" />
      </button>
      <SideBar isOpen={sidebarOpen} isClose={closeSidebar} />
      <div className="mainbody">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
      </div>
    </div>
  );
};
const Root = () => {
  return (
    <Routes>
      <Route path="/detail/:id" element={<Layout />} />
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default Root;
