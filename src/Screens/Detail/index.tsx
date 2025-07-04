import { useLocation } from "react-router-dom";

import SideBar from "../../Component/SideBar";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const Detail = () => {
  const location = useLocation();
  const { item } = location.state;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <div className="homeMain">
      <button className="mobileMenuBtn" onClick={toggleSidebar}>
        <IoMenu size={20} color="black" />
      </button>
      <SideBar isOpen={sidebarOpen} isClose={closeSidebar} />
      <div className="mainbody">
        <div className="imgContainer">
          <img src={item.image} />
        </div>
        <div className="dataContainer">
          <h3>{item.name}</h3>
          <h4>{item.projectType}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
