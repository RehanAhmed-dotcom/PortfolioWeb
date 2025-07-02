import { useLocation } from "react-router-dom";

import SideBar from "../../Component/SideBar";

const Detail = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <div className="homeMain">
      <SideBar />
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
