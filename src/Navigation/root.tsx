import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import SideBar from "../Component/SideBar";
import Skills from "../Screens/Skills";
import Resume from "../Screens/Resume";
import Portfolio from "../Screens/Portfolio";
import { Route, Routes, useLocation } from "react-router-dom";
import Detail from "../Screens/Detail";
const Layout = () => {
  const location = useLocation();

  const isDetailPage = location.pathname.startsWith("/detail");

  if (isDetailPage) {
    return <Detail />;
  }

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
const Root = () => {
  return (
    // <div className="homeMain">
    //   <SideBar />
    //   <div className="mainbody">
    //     <Home />
    //     <About />
    //     <Skills />
    //     <Resume />
    //     <Portfolio />
    //   </div>
    // </div>
    <Routes>
      <Route path="/detail/:id" element={<Layout />} />
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
};

export default Root;
