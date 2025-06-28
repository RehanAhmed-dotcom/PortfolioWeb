import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import SideBar from "../Component/SideBar";

const Root = () => {
  return (
    <div className="homeMain">
      <SideBar />
      <div className="mainbody">
        <Home />
        <About />
      </div>
    </div>
  );
};

export default Root;
