import React from "react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const arr = [
    { id: 1, name: "Jobfinder" },
    { id: 2, name: "Workaman" },
    { id: 3, name: "CLS" },
    { id: 4, name: "Quickserv" },
    { id: 5, name: "aduane" },
    { id: 6, name: "AudioMe" },
  ];
  const navigate = useNavigate();

  const openDetail = (id: number, item: any) => {
    navigate(`/detail/${id}`, { state: { item } });
  };
  return (
    <section className="skilldiv" id={"Portfolio"}>
      <div className="ResumelDiv">
        <h2 className="headingAbout">Portfolio</h2>
        <p className="dummyAbout">
          Visual representation of my work and projects.
        </p>
        <div className="rowPortfolio">
          {arr.map((item) => (
            <span
              onClick={() => openDetail(item.id, item)}
              className="oneProject"
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
