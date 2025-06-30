import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import SideBar from "../Component/SideBar";
import Skills from "../Screens/Skills";
import Resume from "../Screens/Resume";
import Portfolio from "../Screens/Portfolio";

const Root = () => {
  return (
    <div className="homeMain">
      <SideBar />
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

export default Root;
